package top.getidea.config.administer.controller;

import org.springframework.web.bind.annotation.*;
import top.getidea.config.administer.service.AdminService;
import top.getidea.config.common.dto.ProjectJarDTO;
import top.getidea.config.common.util.Result;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

/**
 * @author getidea
 */
@RestController
@RequestMapping("/api/administer")
public class AdminController {

    @Resource(name = "adminService")
    private AdminService adminService;
    @GetMapping("/getList")
    public Result<List<Map<String, Object>>> getList(@RequestParam Integer pageNum, @RequestParam Integer pageSize, @RequestParam(required = false) String key){
        return adminService.getList(pageNum,pageSize,key);
    }

    @PutMapping("/edit")
    public Result edit(@RequestBody ProjectJarDTO projectJarDTO){
        return adminService.edit(projectJarDTO);
    }

    @GetMapping("/getProjectPackage")
    public Result<List<Integer>> getProjectPackage(@RequestParam("projectId") Integer projectId){
        return adminService.getProjectPackage(projectId);
    }

    @GetMapping("/SessionNumber")
    public Result sessionNumber(@RequestHeader("username") String username){
        return adminService.sessionNumber(username);
    }
}
