package top.getidea.config.userManager;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.ComponentScan;

/**
 * @author getidea
 */
@SpringBootApplication
@EnableDiscoveryClient
@EnableFeignClients(basePackages = {"top.getidea.config.common.feign.*"})
@ComponentScan(basePackages = "top.getidea.config")
public class ConfigUserManagerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ConfigUserManagerApplication.class, args);
	}

}
