package top.getidea.config.common.feign.usermanager;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import top.getidea.config.common.entity.userManager.Role;
import top.getidea.config.common.entity.userManager.User;
import top.getidea.config.common.util.Result;

import java.util.List;
import java.util.Map;

/**
 * @author getidea
 */
@FeignClient(
        name = "config-userManager"
)
@Component("userFeign")
public interface UserFeign {
    /**
     * 根据主键获取用户数据
     * @param key 用户表的主键
     * @return
     */
    @GetMapping({"/api/userManager/getUserByKey"})
    Result<User> getUserByKey(@RequestParam("key") Integer key);

    @GetMapping("/api/userManager/getUserByKey/getUserByRole")
    Result<List<Map>> getUserByRole(@RequestParam("role") Integer role);

    @GetMapping("/api/userManager/getUserByKey/getUserByUsername")
    Result<User> getUserByUsername(@RequestParam(value = "username",required = false) String username, @RequestHeader("username") String usernameOfHeader);

    @GetMapping("/api/userManager/getUserByUsernameParam")
    Result<User> getUserByUsernameParam(@RequestParam(value = "username") String username);
    @GetMapping("/api/userManager/getRoleByKey")
    Result<Role> getRoleByKey(@RequestParam("roleId") Integer roleId);

    @GetMapping("/api/userManager/getRoleByUserId")
    Result<List<Role>> getRoleByUserId(@RequestParam("userId") Integer userId);

    @GetMapping("/api/userManager/getRoleByUserName")
    Result<List<Role>> getRoleByUserName(@RequestParam("username") String username);
}
