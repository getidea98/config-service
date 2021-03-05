package top.getidea.config.product.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import top.getidea.config.common.entity.assets.ProductAssets;

@Mapper
@Repository
public interface ProductAssetsMapper extends BaseMapper<ProductAssets> {
}
