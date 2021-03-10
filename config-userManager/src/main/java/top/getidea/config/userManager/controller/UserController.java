package top.getidea.config.userManager.controller;

import org.springframework.web.bind.annotation.*;
import top.getidea.config.common.entity.userManager.User;
import top.getidea.config.common.util.Result;
import top.getidea.config.userManager.service.UserService;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * @author getidea
 */
@RestController
@RequestMapping("/api/userManager")
public class UserController {

    @Resource(name = "userService")
    private UserService userService;

    @GetMapping("/getUserByKey")
    public Result<User> getUserByKey(@RequestParam("key") Integer key) {
        return userService.getUserByKey(key);
    }

    @GetMapping("/getUserByRole")
    public Result<List<Map>> getUserByRole(@RequestParam("role") Integer role) {
        return userService.getUserByRole(role);
    }

    @GetMapping("/getUserByUsername")
    public Result<User> getUserByUsername(@RequestParam(value = "username",required = false) String username, @RequestHeader("username") String usernameOfHeader) {
        return userService.getUserByUsername(username,usernameOfHeader);
    }

    @GetMapping("/getAllUser")
    public Result<List<User>> getAllUser(@RequestParam("role") Integer role) {
        return userService.getAllUser(role);
    }
}
