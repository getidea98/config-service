package top.getidea.config.common.feign.project;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import top.getidea.config.common.entity.project.ConfigProjectOperateLog;
import top.getidea.config.common.entity.project.Project;
import top.getidea.config.common.util.Result;

import java.util.List;

/**
 * @author getidea
 */
@FeignClient(name = "config-project")
@Component("projectFeign")
public interface ProjectFeign {

    @GetMapping("/api/project/getProjectOperateLog")
    Result<List<ConfigProjectOperateLog>> getProjectOperateLog(@RequestParam("projectId") Integer projectId);
    @GetMapping("/api/project/getProjectDetail")
    Result getProjectDetail(@RequestParam("projectId") Integer projectId);
    @PutMapping("/api/project/editProject")
    Result editProject(@RequestBody Project project);
    @PutMapping("/api/project/writeProjectOperateLog")
    Result writeProjectOperateLog(@RequestBody ConfigProjectOperateLog projectOperateLog);
}
