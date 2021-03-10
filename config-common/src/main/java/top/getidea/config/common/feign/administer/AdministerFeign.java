package top.getidea.config.common.feign.administer;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import top.getidea.config.common.util.Result;

import java.util.List;

/**
 * @author getidea
 */
@FeignClient(name = "config-administer")
@Component("administerFeign")
public interface AdministerFeign {

    @GetMapping("/api/administer/getProjectPackage")
    Result<List<Integer>> getProjectPackage(@RequestParam("projectId") Integer projectId);
}
