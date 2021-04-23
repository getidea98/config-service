package top.getidea.config.product;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.ComponentScan;

/**
 * @author getidea
 */
@SpringBootApplication
@EnableFeignClients(basePackages = {"top.getidea.config.common.feign.*"})
@ComponentScan(basePackages = {"top.getidea.config.common.feign.*", "top.getidea.config.*"})
public class ConfigProductApplication {

	public static void main(String[] args) {
		SpringApplication.run(ConfigProductApplication.class, args);
	}

}
