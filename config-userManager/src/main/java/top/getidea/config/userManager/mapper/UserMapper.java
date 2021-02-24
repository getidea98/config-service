package top.getidea.config.userManager.mapper;


import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;
import top.getidea.config.common.entity.userManager.User;

/**
 * @author getidea
 * @Entity generate.SysUser
 */
@Mapper
@Repository
public interface UserMapper extends BaseMapper<User> {
    /**
     * @mbg.generated
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * @mbg.generated
     */
    int insert(User record);

    /**
     * @mbg.generated
     */
    int insertSelective(User record);

    /**
     * @mbg.generated
     */
    User selectByPrimaryKey(Integer id);

    /**
     * @mbg.generated
     */
    int updateByPrimaryKeySelective(User record);

    /**
     * @mbg.generated
     */
    int updateByPrimaryKey(User record);
}