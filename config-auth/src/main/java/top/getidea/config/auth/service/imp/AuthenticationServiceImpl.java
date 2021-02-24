package top.getidea.config.auth.service.imp;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Service;
import top.getidea.config.auth.mapper.AuthenticationMapper;
import top.getidea.config.auth.service.AuthenticationService;
import top.getidea.config.common.ResultEnum.EnumResult;
import top.getidea.config.common.util.Result;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

/**
 * @author getidea
 */
@Service("authenticationService")
@Slf4j
public class AuthenticationServiceImpl implements AuthenticationService {

    @Autowired
    private AuthenticationMapper authenticationMapper;
    @Autowired
    private RedisTemplate<String, String> redisTemplate;

    @Value("${preUsernameToken}")
    private String preUsernameToken;

    /**
     * 检验密码是否正确
     *
     * @param username
     * @param password
     * @return
     */
    @Override
    public Result<Map> validatePassword(String username, String password) {
        Integer count = authenticationMapper.validatePassword(username, password);
        log.info(String.format("当前登陆的用户是：%s,密码：%s",username,password));
        if (count != null && count == 1) {
            String key = String.format(preUsernameToken, username);
            ValueOperations<String, String> stringStringValueOperations = redisTemplate.opsForValue();
            String token = UUID.randomUUID().toString();
            stringStringValueOperations.set(key, token);
            Map<String, String> result = new HashMap<>(16);
            result.put("token", token);
            log.info(String.format("用户：%s密码验证成功。返回token：%s",username,token));
            return new Result(EnumResult.SUCCESS).setData(result);
        }
        log.info(String.format("用户：%s密码验证失败",username));
        return new Result(EnumResult.ERROR_PASSWORD);
    }

    /**
     * 检验username 与 token 是否一致
     *
     * @param username
     * @param token
     * @return
     */
    @Override
    public Result validateToken(String username, String token) {
        //  validate:username:admin
        log.info(String.format("当前验证的用户是：%s；token：%s",username,token));
        String redisKey = String.format(preUsernameToken, username);
        String s = redisTemplate.opsForValue().get(redisKey);
        if (s != null && s.equals(token)) {
            log.info(String.format("用户：%s,token验证成功",username));
            return new Result(EnumResult.SUCCESS);
        }
        log.info(String.format("用户：%s,token验证失败",username));
        return new Result(EnumResult.ERROR_TOKEN);
    }
}
