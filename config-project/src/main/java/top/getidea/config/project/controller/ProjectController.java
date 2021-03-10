package top.getidea.config.project.controller;

import org.springframework.web.bind.annotation.*;
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
    public Result getList(@RequestParam("pageNum") Integer pageNum, @RequestParam("pageSize") Integer pageSize, @RequestParam(value = "key",required = false) String key){
        return projectService.getList(pageNum,pageSize,key);
    }

    @PostMapping("/addProject")
    public Result addProject(@RequestBody Project project){
        return projectService.addProject(project);
    }

    @PutMapping("/apply")
    public Result apply(@RequestBody Integer projectId){
        return projectService.apply(projectId);
    }

    @PutMapping("/editProject")
    public Result editProject(@RequestBody Project project){
        return projectService.editProject(project);
    }

    @GetMapping("/getProjectDetail")
    public Result getProjectDetail(@RequestParam Integer projectId){
        return projectService.getProjectDetail(projectId);
    }

    @GetMapping("/getProjectOperateLog")
    public Result<List<ConfigProjectOperateLog>> getProjectOperateLog(@RequestParam("projectId") Integer projectId){
        return projectService.getProjectOperateLog(projectId);
    }

    @PutMapping("/writeProjectOperateLog")
    public Result writeProjectOperateLog(@RequestBody ConfigProjectOperateLog projectOperateLog){
        return projectService.writeProjectOperateLog(projectOperateLog);
    }
}
