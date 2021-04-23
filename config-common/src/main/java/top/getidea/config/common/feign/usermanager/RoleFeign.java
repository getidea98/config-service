package top.getidea.config.common.feign.usermanager;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import top.getidea.config.common.entity.userManager.Role;
import top.getidea.config.common.util.Result;

import java.util.List;

/**
 * @author getidea
 */
//@FeignClient(
//        name = "config-userManager"
//)
@Component("roleFeign")
public interface RoleFeign {
    @GetMapping("/getRoleByKey")
    Result<Role> getRoleByKey(@RequestParam("roleId") Integer roleId);

    @GetMapping("/getRoleByUserId")
    Result<List<Role>> getRoleByUserId(@RequestParam("userId") Integer userId);

    @GetMapping("/getRoleByUserName")
    Result<List<Role>> getRoleByUserName(@RequestParam("username") String username);
}
