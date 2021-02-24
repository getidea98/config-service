package top.getidea.config.userManager.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;
import top.getidea.config.common.entity.userManager.RoleUser;

import java.util.List;

/**
 * @Entity top.getidea.config.userManager.bean.RoleUser
 */
@Mapper
@Repository
public interface RoleUserMapper extends BaseMapper<RoleUser> {
    /**
     * @mbg.generated
     */
    int insert(RoleUser record);

    /**
     * @mbg.generated
     */
    int insertSelective(RoleUser record);

    /**
     *
     * @param roleId
     * @return
     */
    List<Integer> selectUserByRole(@Param("roleId") Integer roleId);
}