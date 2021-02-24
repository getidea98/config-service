package top.getidea.config.product.service.Imp;

import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import top.getidea.config.common.ResultEnum.EnumResult;
import top.getidea.config.common.entity.product.Product;
import top.getidea.config.common.entity.product.ProductMeta;
import top.getidea.config.common.entity.userManager.User;
import top.getidea.config.common.feign.usermanager.UserFeign;
import top.getidea.config.common.finalValue.ProductMagicValue;
import top.getidea.config.common.util.Result;
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
    private UserFeign userFeign;

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Result addProduct(List<MultipartFile> attachedList, Product product) {
        productMapper.insert(product);
        //TODO 保存文件
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

    @Override
    @Transactional(rollbackFor = Exception.class)
    public Result updateProduct(MultipartFile[] attacheds, Product product, Integer[] deletedAttachedId, String username) {
        Result<User> userByUsername = userFeign.getUserByUsername(username, null);
        LambdaUpdateWrapper<Product> lambdaUpdateWrapper = new LambdaUpdateWrapper();
        lambdaUpdateWrapper.eq(Product::getManagerId,userByUsername.getData().getId());
        productMapper.update(product,lambdaUpdateWrapper);
        productMapper.updateById(product);
        //TODO 保存文件,删除文件
        return new Result(EnumResult.SUCCESS);
    }

    @Override
    public Result getProducts(Integer productId) {
        ProductMeta productMeta = productMetaMapper.selectById(productId);
        LambdaUpdateWrapper<Product> lambdaUpdateWrapper = new LambdaUpdateWrapper();
        lambdaUpdateWrapper.eq(Product::getProductId,productId);
        List<Product> products = productMapper.selectList(lambdaUpdateWrapper);
        log.error(productMeta.toString());
        log.error(products.toString());
        productToMap(productMeta, products);
        //TODO 获取本产品历史所有版本
        return new Result(EnumResult.SUCCESS);
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
        List<Product> products = productMapper.getList(offSet, rows, key);
        List result = products.parallelStream().map(prod -> productToMapForGetList(prod)).collect(Collectors.toList());
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
        beanMap.put("productName",productMeta.getProductName());
        beanMap.put("createTime",productMeta.getCreateTime());
        beanMap.put("message",productMeta.getMessage());

        List<Map> mapList = new LinkedList<>();
        for (Product product : productList) {
            Map productMap = new HashMap(16);
            beanMap.put("prodVersion",product.getProdVersion());
            beanMap.put("modifyTime",product.getModifyTime());
            beanMap.put("description",product.getMessage());
            beanMap.put("deprecated",product.getIs_deprecated());
            beanMap.put("deprecated",product.getIs_deprecated());
        }
//        productList.add()
//        if (key != null) {
//            beanMap.put("manager",userFeign.getUserByKey(key).getData());
//        }
//        key = product.getTesterId();
//        if (key != null) {
//            beanMap.put("tester",userFeign.getUserByKey(key).getData());
//        }
        return beanMap;
    }
}