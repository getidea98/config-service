package top.getidea.config.auth.service;

import top.getidea.config.common.util.Result;

/**
 * @author getidea
 */
public interface AuthenticationService {

    Result validatePassword(String username, String password);

    Result validateToken(String username, String token);
}
