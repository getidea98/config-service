package top.getidea.config.attached.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import top.getidea.config.attached.bean.Attached;

import java.util.List;

/**
 * @author getidea
 */
@Mapper
@Repository
public interface AttachedMapper extends BaseMapper<Attached> {

}
