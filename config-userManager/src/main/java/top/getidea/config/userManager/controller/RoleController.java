package top.getidea.config.userManager.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import top.getidea.config.common.entity.userManager.Role;
import top.getidea.config.common.util.Result;
import top.getidea.config.userManager.service.RoleService;

import javax.annotation.Resource;
import java.util.List;

@RestController
@RequestMapping("/api/userManager")
public class RoleController {

    @Resource(name = "roleService")
    private RoleService roleService;

    @GetMapping("/getRoleByKey")
    public Result<Role> getRoleByKey(@RequestParam("roleId") Integer roleId){
        return roleService.getRoleByKey(roleId);
    }

    @GetMapping("/getRoleByUserId")
    public Result<List<Role>> getRoleByUserId(@RequestParam("userId") Integer userId){
        return roleService.getRoleByUserId(userId);
    }

    @GetMapping("/getRoleByUserName")
    public Result<List<Role>> getRoleByUserName(@RequestParam("username") String username){
        return roleService.getRoleByUserName(username);
    }
}
