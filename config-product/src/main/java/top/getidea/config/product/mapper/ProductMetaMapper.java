package top.getidea.config.product.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import top.getidea.config.common.entity.product.Product;
import top.getidea.config.common.entity.product.ProductMeta;

import java.util.List;

@Mapper
public interface ProductMetaMapper extends BaseMapper<ProductMeta> {
    List<ProductMeta> getList(@Param("offset") Integer offset, @Param("rows") Integer rows, @Param("key") String key);
}
