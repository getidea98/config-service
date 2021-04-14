package top.getidea.config.project.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import top.getidea.config.common.entity.project.Project;

import java.util.List;

/**
 * @author getidea
 */
@Mapper
@Repository
public interface ProjectMapper extends BaseMapper<Project> {
    List<Project> getList(@Param("offset") Integer pageNum, @Param("rows") Integer pageSize, @Param("projectManager") Integer projectManager, @Param("key") String key);
}
