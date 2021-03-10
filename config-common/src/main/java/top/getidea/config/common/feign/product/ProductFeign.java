package top.getidea.config.common.feign.product;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import top.getidea.config.common.util.Result;

import java.util.Map;

/**
 * @author getidea
 */
@FeignClient(name = "config-product")
@Component("productFeign")
public interface ProductFeign {
    @GetMapping("/api/product/getProductDetails")
    Result<Map> getProductDetails(@RequestParam("id") Integer id, @RequestParam("productVersion") String productVersion);
}
