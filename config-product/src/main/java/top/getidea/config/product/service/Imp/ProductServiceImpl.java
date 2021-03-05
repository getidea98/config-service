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
import top.getidea.config.common.feign.usermanager.UserFeign;
import top.getidea.config.common.finalValue.ProductMagicValue;
import top.getidea.config.common.util.Result;
import top.getidea.config.product.mapper.ProductAssetsMapper;
import top.getidea.config.product.mapper.ProductMapper;
import top.getidea.config.product.mapper.ProductMetaMapper;
import top.getidea.config.product.service.ProductService;

import java.util.*;
import java.util.stream.Collectors;

/**
 * @author Fange
 * @date 2020/11/20
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
    private AttachedFeign attachedFeign;

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Result addProduct(ProductMeta productMeta, Product product) {
        productMeta.setCreateTime(new Date());
        productMeta.setModifyTime(new Date());
        productMetaMapper.insert(productMeta);
        product.setProductId(productMeta.getId());
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
    }

    /**
     * 删除产品(伪删除)
     *
     * @param ids 产品的主键集合
     * @return Result
     */
    @Override
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
     * @param productId
     * @return
     */
    @Override
    public Result getProducts(Integer productId) {
        ProductMeta productMeta = productMetaMapper.selectById(productId);
        LambdaUpdateWrapper<Product> lambdaUpdateWrapper = new LambdaUpdateWrapper();
        lambdaUpdateWrapper.eq(Product::getProductId, productId);
        List<Product> products = productMapper.selectList(lambdaUpdateWrapper);
        Map result = productToMap(productMeta, products);
        //TODO 获取本产品历史所有版本
        return new Result(EnumResult.SUCCESS).setData(result);
    }

    @Override
    public Result<Integer> numberOfPossessions(String username) {
        Result<User> user = userFeign.getUserByUsername(username, null);
        LambdaQueryWrapper<Product> lambdaQueryWrapper = new LambdaQueryWrapper<>();
        lambdaQueryWrapper.eq(Product::getManagerId, user.getData().getId());
        Integer count = productMapper.selectCount(lambdaQueryWrapper);
        return new Result(EnumResult.SUCCESS).setData(count);
    }

    @Override
    public Result productOfNumber() {
        Integer integer = productMetaMapper.selectCount(null);
        return new Result(EnumResult.SUCCESS).setData(integer);
    }

    /**
     * 根据 id 与 版本号 查询 具体某一产品。
     * @param id
     * @param productVersion
     * @return
     */
    @Override
    public Result<Map> getProductDetails(Integer id, String productVersion) {
        LambdaQueryWrapper<Product> productLambdaQueryWrapper = new LambdaQueryWrapper<>();
        productLambdaQueryWrapper
                .eq(Product::getProductId,id)
                .eq(Product::getProdVersion,productVersion);
        Product product = productMapper.selectOne(productLambdaQueryWrapper);
        ProductMeta productMeta = productMetaMapper.selectById(id);
        Map<String,Object> result = new HashMap<>();
        result.put("productName",productMeta.getProductName());
        result.put("prodVersion",product.getProdVersion());
        result.put("manager",userFeign.getUserByKey(product.getManagerId()).getData());
        result.put("prodAddress",product.getProductAddress());
        result.put("codeVersion","1.0.4");
        result.put("tester",userFeign.getUserByKey(60000).getData());
        result.put("message", productMeta.getDescription());
        return new Result<Map>(EnumResult.SUCCESS).setData(result);
    }

    @Override
    public Result updateProduct(ProductMeta productMeta, Product product) {
        productMeta.setModifyTime(new Date());
        product.setModifyTime(new Date());
        product.setProductId(productMeta.getId());
        // 更新产品元信息
        LambdaUpdateWrapper<ProductMeta> productMetaLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
        productMetaLambdaUpdateWrapper
                .eq(ProductMeta::getId, productMeta.getId());
        productMetaMapper.update(productMeta,productMetaLambdaUpdateWrapper);
        // 更新产品本身
        LambdaUpdateWrapper<Product> productLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
        productLambdaUpdateWrapper
                .eq(Product::getProductId,product.getProductId())
                .eq(Product::getProdVersion,product.getProdVersion());
        productMapper.update(product,productLambdaUpdateWrapper);
        // 更新产品附件
        // 1. 删除原来附件
        attachedFeign.deleteAllAssetsOfProduct(productMeta.getId(),product.getProdVersion());
        // 2. 添加新附件
        product.getAssetsList().parallelStream().peek(item -> {
            ProductAssets productAssets = new ProductAssets();
            productAssets.setProductId(product.getProductId());
            productAssets.setAssetsId(item.getId());
            productAssets.setProductVersion(product.getProdVersion());
            productAssetsMapper.insert(productAssets);
        }).count();
        return new Result(EnumResult.SUCCESS);
    }

    @Override
    public Result appendProduct(ProductMeta productMeta, Product product) {
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
    }

    @Override
    public Result getAllProductVersion() {
        List result = new ArrayList();
        List<ProductMeta> productMetaList = productMetaMapper.selectList(null);
        productMetaList.parallelStream().peek(item -> {
            Map product = new HashMap();
            product.put("productId",item.getId());
            product.put("productName",item.getProductName());
            LambdaQueryWrapper<Product> productLambdaQueryWrapper = new LambdaQueryWrapper<>();
            productLambdaQueryWrapper
                    .select(Product::getProdVersion)
                    .eq(Product::getIsDeprecated,false)
                    .eq(Product::getProductId, item.getId());
            List<Product> products = productMapper.selectList(productLambdaQueryWrapper);
            List<Map> collect = products.parallelStream().map(item2 -> {
                HashMap hashMap = new HashMap();
                hashMap.put("productName",item2.getProdVersion());
                hashMap.put("isLeaf",true);
                return hashMap;
            }).collect(Collectors.toList());
            product.put("children",collect);
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
                    .eq(Product::getProductId,productMeta.getId())
                    .eq(Product::getProdVersion,productMeta.getLatestRelease())
                    .select(Product::getManagerId,Product::getModifyTime,Product::getProdVersion);
            Product latestRelease = productMapper.selectOne(productLambdaQueryWrapper);
            Result<User> manager = userFeign.getUserByKey(latestRelease.getManagerId());
            Map<String,Object> item = new HashMap<>();
            Result<Assets> attachedById = attachedFeign.getAttachedById(productMeta.getAvatar());
            String avatarSrc = attachedById.getData().getAddress();
            item.put("productName",productMeta.getProductName());
            item.put("productVersion",latestRelease.getProdVersion());
            item.put("avatarSrc",avatarSrc);
            item.put("message",productMeta.getDescription());
            item.put("productId",productMeta.getId());
            item.put("manager",manager.getData());
            item.put("modifyTime",productMeta.getModifyTime());
            item.put("percent",Math.ceil(Math.random() * 50) + 50);
            result.add(item);
        }
        return new Result<List>(EnumResult.SUCCESS).setData(result);
    }

    private Map<String, Object> productToMapForGetList(Product product) {
        Map beanMap = new HashMap(16);
//        beanMap.put("productId",product.getProductId());
//        beanMap.put("productName",product.getProductName());
//        beanMap.put("message",product.getMessage());
//        beanMap.put("modifyTime",product.getModifyTime());
//        // 随机生成 50～100的数据
//        beanMap.put("percent",Math.ceil(Math.random() * 50) + 50);
//        Integer key = product.getManagerId();
//        if (key != null) {
//            beanMap.put("manager",userFeign.getUserByKey(key).getData());
//        }
        return beanMap;
    }

    private Map<String, Object> productToMap(ProductMeta productMeta, List<Product> productList) {
        Map beanMap = new HashMap(16);
        beanMap.put("productName", productMeta.getProductName());
        beanMap.put("createTime", productMeta.getCreateTime());
        beanMap.put("message", productMeta.getDescription());

        ArrayList<Map> mapList = new ArrayList<>();
        for (Product product : productList) {
            Map<String,Object> productMap = new HashMap(16);
            productMap.put("prodVersion", product.getProdVersion());
            User manager = userFeign.getUserByKey(product.getManagerId()).getData();
            log.error(manager.toString());
            Map<String,Object> managerMap = new HashMap<>();
            managerMap.put("realName",manager.getRealname());
            managerMap.put("avatar",attachedFeign.getAttachedById(manager.getAvatar()).getData().getAddress());
            productMap.put("manager", managerMap);
            productMap.put("modifyTime", product.getModifyTime());
            productMap.put("description", attachedFeign.getAttachedById(product.getMessage()).getData().getAddress());
            productMap.put("deprecated", product.getIsDeprecated());
            LambdaQueryWrapper<ProductAssets> productAssetsLambdaQueryWrapper = new LambdaQueryWrapper<>();
            productAssetsLambdaQueryWrapper
                    .eq(ProductAssets::getProductId,product.getProductId())
                    .eq(ProductAssets::getProductVersion,product.getProdVersion())
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
        beanMap.put("productList",mapList);
        return beanMap;
    }
}