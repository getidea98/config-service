package top.getidea.config.deployment.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import top.getidea.config.common.entity.deploy.DeployInfo;

@Mapper
@Repository
public interface DeployInfoMapper extends BaseMapper<DeployInfo> {
}
