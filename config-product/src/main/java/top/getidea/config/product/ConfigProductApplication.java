package top.getidea.config.product;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.ComponentScan;

/**
 * @author getidea
 */
@SpringBootApplication
@EnableFeignClients(basePackages = {"top.getidea.config.common.feign.usermanager"})
@ComponentScan(basePackages = {"top.getidea.config.common.feign.*", "top.getidea.config.product.*"})
public class ConfigProductApplication {

	public static void main(String[] args) {
		SpringApplication.run(ConfigProductApplication.class, args);
	}

}
