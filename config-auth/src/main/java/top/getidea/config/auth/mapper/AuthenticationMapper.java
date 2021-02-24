package top.getidea.config.auth.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

/**
 * @author getidea
 */
@Mapper
public interface AuthenticationMapper {

    Integer validatePassword(@Param("username") String username, @Param("password") String password);
}
