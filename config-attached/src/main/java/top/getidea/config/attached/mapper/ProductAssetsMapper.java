package top.getidea.config.attached.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import top.getidea.config.common.entity.assets.ProductAssets;

/**
 * @author getidea
 */
@Mapper
@Repository("productAssetsMapper")
public interface ProductAssetsMapper extends BaseMapper<ProductAssets> {
}
