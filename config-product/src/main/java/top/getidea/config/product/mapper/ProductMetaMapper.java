package top.getidea.config.product.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import top.getidea.config.common.entity.product.Product;
import top.getidea.config.common.entity.product.ProductMeta;

@Mapper
public interface ProductMetaMapper extends BaseMapper<ProductMeta> {
}
