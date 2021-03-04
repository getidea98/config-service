package top.getidea.config.common.feign.attached;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import top.getidea.config.common.entity.assets.Assets;
import top.getidea.config.common.util.Result;

/**
 * @author getidea
 */
@FeignClient(
        name = "config-attached"
)
@Component
public interface AttachedFeign {
    @GetMapping("/api/attached/getAttachedById")
    Result<Assets> getAttachedById(@RequestParam("id") Integer id);

    @DeleteMapping("/api/attached/deleteAllAssetsOfProduct")
    Result deleteAllAssetsOfProduct(@RequestParam("id") Integer id, @RequestParam("productVersion") String productVersion);
}
