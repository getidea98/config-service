package top.getidea.config.userManager.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import top.getidea.config.common.entity.userManager.Role;

/**
 * @Entity top.getidea.config.userManager.bean.Role
 */
@Mapper
public interface RoleMapper extends BaseMapper<Role> {
    /**
     * @mbg.generated
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * @mbg.generated
     */
    int insertSelective(Role record);

    /**
     * @mbg.generated
     */
    Role selectByPrimaryKey(Integer id);

    /**
     * @mbg.generated
     */
    int updateByPrimaryKeySelective(Role record);

    /**
     * @mbg.generated
     */
    int updateByPrimaryKey(Role record);
}