package top.getidea.config.deployment.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import top.getidea.config.common.entity.project.Project;

import java.util.List;

@Mapper
@Repository
public interface DeploymentMapper {

    List<Project> getList(@Param("offset") Integer pageNum, @Param("rows")Integer pageSize, @Param("key") String key);
}
