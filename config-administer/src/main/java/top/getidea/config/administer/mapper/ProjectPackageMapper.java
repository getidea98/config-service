package top.getidea.config.administer.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import top.getidea.config.common.entity.project.ProjectPackage;

@Mapper
@Repository("projectPackageMapper")
public interface ProjectPackageMapper extends BaseMapper<ProjectPackage> {
}
