package top.getidea.config.gateway;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.cloud.openfeign.EnableFeignClients;

/**
 * @author getidea
 */
@EnableDiscoveryClient
@SpringBootApplication
@EnableFeignClients(basePackages = {"top.getidea.config.common.feign.*"})
public class ConfigGatewayApplication {

	public static void main(String[] args) {
		SpringApplication.run(ConfigGatewayApplication.class, args);
	}

}
