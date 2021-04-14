package top.getidea.config.userManager.service;


import top.getidea.config.common.entity.userManager.User;
import top.getidea.config.common.util.Result;

import java.util.List;
import java.util.Map;

/**
 * @author getidea
 */
public interface UserService {

    Result<User> getUserByKey(Integer key);

    Result<List<Map>> getUserByRole(Integer roleId);

    Result<User> getUserByUsername(String username,String usernameOfHeader);

    Result<List<User>> getAllUser(Integer role);

    Result<List<User>> login(Integer username, String password);
}
