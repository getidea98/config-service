package top.getidea.config.common.feign.deploy;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import top.getidea.config.common.util.Result;

@FeignClient(name = "config-deployment")
@Component("deploymentFeign")
public interface DeploymentFeign {

    @PutMapping("/api/deployment/add")
    Result add(@RequestParam("projectId") Integer projectId, @RequestParam("deployerId") Integer deployerId);
}