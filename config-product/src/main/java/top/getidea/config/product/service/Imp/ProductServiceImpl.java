package top.getidea.config.product.service.Imp;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import top.getidea.config.common.ResultEnum.EnumResult;
import top.getidea.config.common.entity.assets.Assets;
import top.getidea.config.common.entity.assets.ProductAssets;
import top.getidea.config.common.entity.product.Product;
import top.getidea.config.common.entity.product.ProductMeta;
import top.getidea.config.common.entity.userManager.User;
import top.getidea.config.common.feign.attached.AttachedFeign;
import top.getidea.config.common.feign.auth.AuthenticationFeign;
import top.getidea.config.common.feign.usermanager.UserFeign;
import top.getidea.config.common.finalValue.ProductMagicValue;
import top.getidea.config.common.util.Result;
import top.getidea.config.common.verify.Verify;
import top.getidea.config.product.authAnnotation.NonAuth;
import top.getidea.config.product.authAnnotation.OwnAuth;
import top.getidea.config.product.authAnnotation.RoleAuth;
import top.getidea.config.product.mapper.ProductAssetsMapper;
import top.getidea.config.product.mapper.ProductMapper;
import top.getidea.config.product.mapper.ProductMetaMapper;
import top.getidea.config.product.service.ProductService;

import java.util.*;
import java.util.stream.Collectors;

/**
 * @author Fange
 */
@Service("productService")
@Slf4j
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductMapper productMapper;
    @Autowired
    private ProductMetaMapper productMetaMapper;
    @Autowired
    private ProductAssetsMapper productAssetsMapper;
    @Autowired
    private UserFeign userFeign;
    @Autowired
    private AuthenticationFeign authenticationFeign;
    @Autowired
    private AttachedFeign attachedFeign;
    @Autowired
    private Verify verify;
    private static String roleCode = "20000";

    /**
     * 添加产品
     * Auth 操作账户需要拥有产品经理权限
     *
     * @param productMeta
     * @param product     产品主体
     * @return
     */
    @Override
    @Transactional(rollbackFor = Exception.class)
    @RoleAuth
    public Result addProduct(ProductMeta productMeta, Product product, String username) {
        Boolean roleVerify = verify.roleVerify(username, roleCode, userFeign);
        if (roleVerify) {
            productMeta.setCreateTime(new Date());
            productMeta.setModifyTime(new Date());
            productMetaMapper.insert(productMeta);
            product.setProductId(productMeta.getId());
            product.setCreateTime(new Date());
            product.setModifyTime(new Date());
            productMapper.insert(product);
            long count = product.getAssetsList().parallelStream().peek(item -> {
                ProductAssets productAssets = new ProductAssets();
                productAssets.setProductId(product.getProductId());
                productAssets.setAssetsId(item.getId());
                productAssets.setProductVersion(product.getProdVersion());
                productAssetsMapper.insert(productAssets);
            }).count();
        } else {
            return new Result(EnumResult.ILLEGAL_AUTHORITY);
        }
        return new Result(EnumResult.SUCCESS);
    }

    /**
     * 删除产品(伪删除)
     * 需要是这个产品的拥有者
     *
     * @param ids 产品的主键集合
     * @return Result
     */
    @Override
    @Deprecated
    public Result deleteProduct(Integer[] ids) {
        if (ids.length < ProductMagicValue.deleteParamMin) {
            return new Result(EnumResult.PARAM_SHORTER);
        } else if (ids.length > ProductMagicValue.deleteParamMax) {
            return new Result(EnumResult.PARAM_LONGER);
        }
        productMapper.deleteBatchIds(Arrays.asList(ids));
        return new Result(EnumResult.SUCCESS);
    }

    /**
     * 根据 产品id 查询所有版本的产品
     * 权限 任何人
     *
     * @param productId
     * @return
     */
    @Override
    @NonAuth
    public Result<Map<String, Object>> getProducts(Integer productId) {
        ProductMeta productMeta = productMetaMapper.selectById(productId);
        LambdaUpdateWrapper<Product> lambdaUpdateWrapper = new LambdaUpdateWrapper();
        lambdaUpdateWrapper.eq(Product::getProductId, productId);
        List<Product> products = productMapper.selectList(lambdaUpdateWrapper);
        Map<String, Object> result = productToMap(productMeta, products);
        //TODO 获取本产品历史所有版本
        return new Result<Map<String, Object>>(EnumResult.SUCCESS).setData(result);
    }

    /**
     * 权限 只查询自己的任务
     *
     * @param username
     * @return
     */
    @Override
    public Result<Integer> numberOfPossessions(String username) {
        Result<User> user = userFeign.getUserByUsername(username, null);
        LambdaQueryWrapper<Product> lambdaQueryWrapper = new LambdaQueryWrapper<>();
        lambdaQueryWrapper
                .eq(Product::getManagerId, user.getData().getId());
        Integer count = productMapper.selectCount(lambdaQueryWrapper);
        return new Result<Integer>(EnumResult.SUCCESS).setData(count);
    }

    /**
     * 查询所有的任务，无论是否是自己的
     *
     * @return
     */
    @Override
    public Result<Integer> productOfNumber() {
        Integer integer = productMetaMapper.selectCount(null);
        return new Result<Integer>(EnumResult.SUCCESS).setData(integer);
    }

    /**
     * 根据 id 与 版本号 查询 具体某一产品。
     * <p>
     * 不需要任何权限
     *
     * @param id
     * @param productVersion
     * @return
     */
    @Override
    @NonAuth
    public Result<Map<String, Object>> getProductDetails(Integer id, String productVersion) {
        LambdaQueryWrapper<Product> productLambdaQueryWrapper = new LambdaQueryWrapper<>();
        productLambdaQueryWrapper
                .eq(Product::getProductId, id)
                .eq(Product::getProdVersion, productVersion);
        Product product = productMapper.selectOne(productLambdaQueryWrapper);
        ProductMeta productMeta = productMetaMapper.selectById(id);
        Map<String, Object> result = new HashMap<>();
        result.put("productName", productMeta.getProductName());
        result.put("prodVersion", product.getProdVersion());
        result.put("manager", userFeign.getUserByKey(product.getManagerId()).getData());
        result.put("prodAddress", product.getProductAddress());
        result.put("codeVersion", "1.0.4");
        result.put("tester", userFeign.getUserByKey(60000).getData());
        result.put("message", productMeta.getDescription());
        return new Result<Map<String, Object>>(EnumResult.SUCCESS).setData(result);
    }

    /**
     * 需要是产品的拥有者
     *
     * @param productMeta
     * @param product
     * @param username
     * @param token
     * @return
     */
    @Override
    @OwnAuth
    public Result updateProduct(ProductMeta productMeta, Product product, String username, String token) {
        Boolean roleVerify = verify.roleVerify(username, roleCode, userFeign);
        Boolean authVerify = verify.authVerify(username, token, authenticationFeign);
        if (authVerify && roleVerify) {
            productMeta.setModifyTime(new Date());
            product.setModifyTime(new Date());
            product.setProductId(productMeta.getId());
            // 更新产品元信息
            LambdaUpdateWrapper<ProductMeta> productMetaLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
            productMetaLambdaUpdateWrapper
                    .eq(ProductMeta::getId, productMeta.getId());
            productMetaMapper.update(productMeta, productMetaLambdaUpdateWrapper);
            // 更新产品本身
            LambdaUpdateWrapper<Product> productLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
            productLambdaUpdateWrapper
                    .eq(Product::getProductId, product.getProductId())
                    .eq(Product::getProdVersion, product.getProdVersion());
            productMapper.update(product, productLambdaUpdateWrapper);
            // 更新产品附件
            // 1. 删除原来附件
            attachedFeign.deleteAllAssetsOfProduct(productMeta.getId(), product.getProdVersion());
            // 2. 添加新附件
            product.getAssetsList().parallelStream().peek(item -> {
                ProductAssets productAssets = new ProductAssets();
                productAssets.setProductId(product.getProductId());
                productAssets.setAssetsId(item.getId());
                productAssets.setProductVersion(product.getProdVersion());
                productAssetsMapper.insert(productAssets);
            }).count();
        } else {
            return new Result(EnumResult.ILLEGAL_AUTHORITY);
        }
        return new Result(EnumResult.SUCCESS);
    }

    /**
     * 权限 拥有项目经理权限
     *
     * @param productMeta
     * @param product
     * @param username
     * @param token
     * @return
     */
    @Override
    @RoleAuth
    public Result appendProduct(ProductMeta productMeta, Product product, String username, String token) {
        Boolean roleVerify = verify.roleVerify(username, roleCode, userFeign);
        Boolean authVerify = verify.authVerify(username, token, authenticationFeign);
        if (roleVerify && authVerify) {
            productMeta.setModifyTime(new Date());
            productMeta.setId(product.getProductId());
            productMetaMapper.updateById(productMeta);
            product.setCreateTime(new Date());
            product.setModifyTime(new Date());
            productMapper.insert(product);
            product.getAssetsList().parallelStream().peek(item -> {
                ProductAssets productAssets = new ProductAssets();
                productAssets.setProductId(product.getProductId());
                productAssets.setAssetsId(item.getId());
                productAssets.setProductVersion(product.getProdVersion());
                productAssetsMapper.insert(productAssets);
            }).count();
            return new Result(EnumResult.SUCCESS);
        } else {
            return new Result(EnumResult.ILLEGAL_AUTHORITY);
        }

    }

    @Override
    public Result getAllProductVersion() {
        List result = new ArrayList();
        List<ProductMeta> productMetaList = productMetaMapper.selectList(null);
        productMetaList.parallelStream().peek(item -> {
            Map product = new HashMap();
            product.put("productId", item.getId());
            product.put("productName", item.getProductName());
            LambdaQueryWrapper<Product> productLambdaQueryWrapper = new LambdaQueryWrapper<>();
            productLambdaQueryWrapper
                    .select(Product::getProdVersion)
                    .eq(Product::getIsDeprecated, false)
                    .eq(Product::getProductId, item.getId());
            List<Product> products = productMapper.selectList(productLambdaQueryWrapper);
            List<Map> collect = products.parallelStream().map(item2 -> {
                HashMap hashMap = new HashMap();
                hashMap.put("productName", item2.getProdVersion());
                hashMap.put("isLeaf", true);
                return hashMap;
            }).collect(Collectors.toList());
            product.put("children", collect);
            result.add(product);
        }).count();
        return new Result(EnumResult.SUCCESS).setData(result);
    }

    /**
     * 用户在前端列表展示信息（简略）
     *
     * @param pageNum  分页页码
     * @param pageSize 分页大小
     * @return Result<PageInfo < Product>>
     */
    @Override
    public Result<List> getList(Integer pageNum, Integer pageSize, String key) {
        Integer offSet = pageNum == 0 ? 0 : (pageNum - 1) * pageSize;
        Integer rows = pageSize;
        List<ProductMeta> productMetaList = productMetaMapper.getList(offSet, rows, key);
        List<Map> result = new ArrayList<>();
        for (ProductMeta productMeta : productMetaList) {
            LambdaQueryWrapper<Product> productLambdaQueryWrapper = new LambdaQueryWrapper<>();
            productLambdaQueryWrapper
                    .eq(Product::getProductId, productMeta.getId())
                    .eq(Product::getProdVersion, productMeta.getLatestRelease())
                    .select(Product::getManagerId, Product::getModifyTime, Product::getProdVersion);
            Product latestRelease = productMapper.selectOne(productLambdaQueryWrapper);
            Result<User> manager = userFeign.getUserByKey(latestRelease.getManagerId());
            Map<String, Object> item = new HashMap<>();
            Result<Assets> attachedById = attachedFeign.getAttachedById(productMeta.getAvatar());
            String avatarSrc = attachedById.getData().getAddress();
            item.put("productName", productMeta.getProductName());
            item.put("productVersion", latestRelease.getProdVersion());
            item.put("avatarSrc", avatarSrc);
            item.put("message", productMeta.getDescription());
            item.put("productId", productMeta.getId());
            item.put("manager", manager.getData());
            item.put("modifyTime", productMeta.getModifyTime());
            item.put("percent", Math.ceil(Math.random() * 50) + 50);
            result.add(item);
        }
        return new Result<List>(EnumResult.SUCCESS).setData(result);
    }

    private Map<String, Object> productToMap(ProductMeta productMeta, List<Product> productList) {
        Map beanMap = new HashMap(16);
        beanMap.put("productName", productMeta.getProductName());
        beanMap.put("createTime", productMeta.getCreateTime());
        beanMap.put("message", productMeta.getDescription());

        ArrayList<Map> mapList = new ArrayList<>();
        for (Product product : productList) {
            Map<String, Object> productMap = new HashMap(16);
            productMap.put("prodVersion", product.getProdVersion());
            User manager = userFeign.getUserByKey(product.getManagerId()).getData();
            log.error(manager.toString());
            Map<String, Object> managerMap = new HashMap<>();
            managerMap.put("realName", manager.getRealname());
            managerMap.put("avatar", attachedFeign.getAttachedById(manager.getAvatar()).getData().getAddress());
            productMap.put("manager", managerMap);
            productMap.put("modifyTime", product.getModifyTime());
            productMap.put("description", attachedFeign.getAttachedById(product.getMessage()).getData().getAddress());
            productMap.put("deprecated", product.getIsDeprecated());
            LambdaQueryWrapper<ProductAssets> productAssetsLambdaQueryWrapper = new LambdaQueryWrapper<>();
            productAssetsLambdaQueryWrapper
                    .eq(ProductAssets::getProductId, product.getProductId())
                    .eq(ProductAssets::getProductVersion, product.getProdVersion())
                    .select(ProductAssets::getAssetsId);
            List<ProductAssets> productAssets = productAssetsMapper.selectList(productAssetsLambdaQueryWrapper);
            List<Assets> collect = productAssets.parallelStream().map(item -> attachedFeign.getAttachedById(item.getAssetsId()).getData()).collect(Collectors.toList());
            productMap.put("assets", collect);
            mapList.add(productMap);
        }
        mapList.sort((Map o1, Map o2) -> {
            String prodVersion1 = (String) o1.get("prodVersion");
            String prodVersion2 = (String) o2.get("prodVersion");
            return prodVersion2.compareTo(prodVersion1);
        });
        beanMap.put("productList", mapList);
        return beanMap;
    }
}