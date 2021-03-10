package top.getidea.config.deployment.controller;

import org.springframework.web.bind.annotation.*;
import top.getidea.config.common.util.Result;
import top.getidea.config.deployment.service.DeploymentService;

import javax.annotation.Resource;

@RestController
@RequestMapping("/api/deployment")
public class DeploymentController {

    @Resource(name = "deploymentService")
    private DeploymentService deploymentService;
    @GetMapping("/getList")
    public Result getList(Integer pageNum, Integer pageSize, String key){
        return deploymentService.getList(pageNum,pageSize,key);
    }

    /**
     * 更改 projectId 产品。将其状态更改为5
     * @return
     */
    @PutMapping("/edit")
    public Result edit(@RequestParam("projectId") Integer projectId){
        return deploymentService.edit(projectId);
    }
}
