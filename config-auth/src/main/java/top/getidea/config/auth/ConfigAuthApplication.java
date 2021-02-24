package top.getidea.config.auth;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

/**
 * @author getidea
 */
@SpringBootApplication
@EnableSwagger2
public class ConfigAuthApplication {

    public static void main(String[] args) {
        SpringApplication.run(ConfigAuthApplication.class, args);
    }

}
