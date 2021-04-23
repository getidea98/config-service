package top.getidea.config.auth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.ComponentScan;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * @author getidea
 */
@SpringBootApplication
@EnableSwagger2
@EnableFeignClients(basePackages = {"top.getidea.config.common.feign.*"})
@ComponentScan(basePackages = "top.getidea.config")
public class ConfigAuthApplication {

    public static void main(String[] args) {
        SpringApplication.run(ConfigAuthApplication.class, args);
    }

}