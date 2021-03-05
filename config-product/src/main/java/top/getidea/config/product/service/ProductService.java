package top.getidea.config.product.service;

import org.springframework.web.multipart.MultipartFile;
import top.getidea.config.common.entity.product.Product;
import top.getidea.config.common.entity.product.ProductMeta;
import top.getidea.config.common.util.Result;

import java.util.Map;

/**
 * @author getidea
 */
public interface ProductService {

    /**
     * 添加产品
     *
     * @param attachedList 产品文档
     * @param product      产品主体
     * @return
     */
    Result addProduct(ProductMeta attachedList, Product product);

    /**
     * 删除产品
     *
     * @param ids 产品的主键集合
     * @return Result
     */
    Result deleteProduct(Integer[] ids);

    /**
     * 查询产品记录，根据产品状态的不同，进行产品展示。
     *
     * @param pageNum  分页页码
     * @param pageSize 分页大小
     * @return Result<PageInfo < Product>>
     */
    Result getList(Integer pageNum, Integer pageSize, String key);

    Result getProducts(Integer productId);

    /**
     * 根据请求头参数 【username】，查询用户管理的产品的数量
     *
     * @param username
     * @return
     */
    Result numberOfPossessions(String username);

    /**
     * 产品的数量
     *
     * @return
     */
    Result productOfNumber();

    Result<Map> getProductDetails(Integer id, String productVersion);

    /**
     * 更新产品
     *
     * @param productMeta
     * @param product
     * @return
     */
    Result updateProduct(ProductMeta productMeta, Product product);

    Result appendProduct(ProductMeta productMeta, Product product);

    Result getAllProductVersion();
}
