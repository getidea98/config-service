package top.getidea.config.product.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;
import top.getidea.config.common.entity.product.Product;

import java.util.List;


/**
 * @author Fange
 * @date 2020/11/20
 */
@Mapper
@Repository
public interface ProductMapper extends BaseMapper<Product> {

    /**
     * 新增产品
     * @param product 产品实体
     * @return Integer 创建的产品实体
     */
    Integer addProduct(Product product);

    /**
     * 删除产品记录
     * @param id 产品id
     */
    void deleteSinProduct(Integer id);

    /**
     * 修改产品
     * @param product 产品实体
     * @return Product 创建的产品实体
     */
    Integer updateProduct(Product product);

    /**
     * 发布产品
     * @param id 产品id
     */
    void publishProduct(Integer id);

    /**
     * 根据status查询待发布/已发布产品
     * @param status 1：未发布，2：已发布
     * @return 产品列表
     */
    List<Product> getListOfStatus(String status);

    /**
     * findById
     * @param id 产品id
     * @return Product
     * @description 作为申请发包的外键product_id，通过产品id绑定产品表的部分字段并返回查询出的记录
     */
    @Select("select product_id,product_name,product_version from act_config_product where id=#{id}")
    Product findById(int id);

    /**
     * Product
     * @param id 产品id
     * @description 作为发包的外键product_id，通过产品id绑定产品表的部分字段并返回查询出的记录
     */
//    @Select("select product_id,product_name,product_version from act_config_product where product_id=#{id}")
//    Product findById2(int id);

    /**
     * 查询所有产品
     * @return 产品列表
     */
    List<Product> getList(@Param("offset") Integer offset, @Param("rows") Integer rows, @Param("key") String key);

    /**
     * 根据id查找产品
     * @param id 产品id
     * @return 产品
     */
    Product getProductById(Integer id);

    /**
     * 根据name查找产品
     * @param id 产品id
     * @return 产品
     */
    List<Product> getProductByName(Integer id);

    /**
     * 模糊搜索产品
     * @param name 部分/全部名称
     * @return 符合名称的产品列表
     */
    List<Product> searchProduct(String name);

    /**
     * 模糊搜索产品
     * @param name 部分/全部名称
     * @return 符合名称的产品列表
     */
    List<Product> searchProductByStatus(String name, String status);

    /**
     * 根据ProductId 获取 Product
     * @param projectId 项目id
     * @return 产品实体
     */
    Product getProductByProjectId(Integer projectId);

    /**
     * 搜索产品
     * @param offset 起始偏移量
     * @param rows 偏移量
     * @param key 查询关键字
     * @return
     */
    List<Product> searchProds(@Param("offset") Integer offset, @Param("rows") Integer rows, @Param("key") String key);

    /**
     *
     * @param key
     * @param status
     * @return
     */
    Integer searchCountOfProds(String key, String[] status);
}
