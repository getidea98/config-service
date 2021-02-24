package top.getidea.config.common.feign.auth;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import top.getidea.config.common.util.Result;

/**
 * @author getidea
 */
@FeignClient(name = "config-auth")
@Component
public interface AuthenticationFeign {

    /**
     * validatePassword
     * @param username
     * @param password
     * @return
     */
    @GetMapping("/api/auth/password")
    Result validatePassword(@RequestHeader(value = "username",required = true) String username, @RequestHeader(value = "password",required = true) String password);

    /**
     * validateToken
     * @param username
     * @param token
     * @return
     */
    @GetMapping("/api/auth/token")
    Result validateToken(@RequestParam(value = "username",required = true) String username, @RequestParam(value = "token",required = true) String token);

}
