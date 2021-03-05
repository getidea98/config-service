package top.getidea.config.project.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import top.getidea.config.common.entity.project.ProjectProduct;

/**
 * @author getidea
 */
@Mapper
@Repository
public interface ProjectProductMapper extends BaseMapper<ProjectProduct> {
}
