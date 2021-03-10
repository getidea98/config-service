package top.getidea.config.deployment;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EnableFeignClients(basePackages = {"top.getidea.config.common.feign.*"})
@ComponentScan(basePackages = {"top.getidea.config.*"})
public class ConfigDeploymentApplication {

	public static void main(String[] args) {
		SpringApplication.run(ConfigDeploymentApplication.class, args);
	}

}
