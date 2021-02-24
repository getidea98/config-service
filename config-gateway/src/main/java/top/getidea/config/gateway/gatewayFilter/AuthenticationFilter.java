package top.getidea.config.gateway.gatewayFilter;

import cn.hutool.core.util.StrUtil;
import com.alibaba.fastjson.JSON;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.core.io.buffer.DataBuffer;
import org.springframework.http.HttpHeaders;
import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.http.server.reactive.ServerHttpResponse;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ServerWebExchange;
import reactor.core.publisher.Mono;
import top.getidea.config.common.ResultEnum.EnumResult;
import top.getidea.config.common.feign.auth.AuthenticationFeign;
import top.getidea.config.common.util.Result;

/**
 * 身份认证过滤器
 *
 * @author getidea
 */
@Component
@Slf4j
public class AuthenticationFilter extends AbstractGatewayFilterFactory<AuthenticationFilter.Config> {

    @Autowired
    private AuthenticationFeign authenticationFeign;
    public AuthenticationFilter() {
        super(Config.class);
    }

    @Override
    public GatewayFilter apply(Config config) {
        return (exchange, chain) -> {
            ServerHttpRequest serverHttpRequest = exchange.getRequest();
            String username = serverHttpRequest.getHeaders().getFirst("username");
            String token = serverHttpRequest.getHeaders().getFirst("token");
            if (StrUtil.isBlank(username) || StrUtil.isBlank(token)) {
                log.error(String.format("用户：%s,token校验失败",username));
                return wrapResponse(exchange);
            }
            Result result = authenticationFeign.validateToken(username, token);
            Integer code = result.getCode();
            if (EnumResult.ERROR_TOKEN.getCode().equals(code)) {
                log.error(String.format("用户：%s,token校验失败",username));
                return wrapResponse(exchange);
            }
            log.error(String.format("用户：%s,token校验成功",username));
            ServerWebExchange build;
            ServerHttpRequest request = exchange.getRequest().mutate().build();
            build = exchange.mutate().request(request).build();
            return chain.filter(build);
        };
    }

    private Mono<Void> wrapResponse(ServerWebExchange exchange){
        ServerHttpResponse response = exchange.getResponse();
        //设置headers
        HttpHeaders httpHeaders = response.getHeaders();
        httpHeaders.add("Content-Type", "application/json; charset=UTF-8");
        String ERROR_TOKEN = JSON.toJSONString(new Result<>(EnumResult.ERROR_TOKEN));
        DataBuffer bodyDataBuffer = response.bufferFactory().wrap(ERROR_TOKEN.getBytes());
        return response.writeWith(Mono.just(bodyDataBuffer));
    }

    public static class Config {

    }
}
