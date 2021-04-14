package top.getidea.config.project.controller;

import org.springframework.web.bind.annotation.*;
import top.getidea.config.common.entity.deploy.DeployInfo;
import top.getidea.config.common.entity.project.ConfigProjectOperateLog;
import top.getidea.config.common.entity.project.Project;
import top.getidea.config.common.util.Result;
import top.getidea.config.project.service.ProjectService;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author getidea
 */
@RestController
@RequestMapping("/api/project")
public class ProjectController {


    @Resource
    private ProjectService projectService;

    @GetMapping("/getList")
    public Result getList(@RequestParam("pageNum") Integer pageNum, @RequestParam("pageSize") Integer pageSize, @RequestParam("scope") String scope, @RequestParam(value = "key", required = false) String key, @RequestHeader(name = "username") String username) {
        return projectService.getList(pageNum, pageSize, scope, key, username);
    }

    @PostMapping("/addProject")
    public Result addProject(@RequestBody Project project) {
        return projectService.addProject(project);
    }

    @PutMapping("/apply")
    public Result apply(@RequestBody Integer projectId) {
        return projectService.apply(projectId);
    }

    @PutMapping("/deploy")
    public Result deploy(@RequestBody DeployInfo deployInfo, @RequestHeader("username") String username) {
        return projectService.deploy(deployInfo.getProjectId(),deployInfo.getDeployerId(),username);
    }

    @PutMapping("/editProject")
    public Result editProject(@RequestBody Project project) {
        return projectService.editProject(project);
    }

    @GetMapping("/getProjectDetail")
    public Result getProjectDetail(@RequestParam Integer projectId) {
        return projectService.getProjectDetail(projectId);
    }

    @GetMapping("/getProjectOperateLog")
    public Result<List<ConfigProjectOperateLog>> getProjectOperateLog(@RequestParam("projectId") Integer projectId) {
        return projectService.getProjectOperateLog(projectId);
    }

    @PutMapping("/writeProjectOperateLog")
    public Result writeProjectOperateLog(@RequestBody ConfigProjectOperateLog projectOperateLog) {
        return projectService.writeProjectOperateLog(projectOperateLog);
    }

    @GetMapping("/getSessionNumber")
    public Result getSessionNumber(@RequestHeader("username") String username){
        return projectService.getSessionNumber(username);
    }
}
