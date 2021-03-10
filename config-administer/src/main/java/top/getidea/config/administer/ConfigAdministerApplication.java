package top.getidea.config.administer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.ComponentScan;

/**
 * @author getidea
 */
@SpringBootApplication
@EnableFeignClients(basePackages = {"top.getidea.config.common.feign.*"})
@ComponentScan(basePackages = {"top.getidea.config.*", "top.getidea.config.common.feign"})
public class ConfigAdministerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ConfigAdministerApplication.class, args);
	}

}
