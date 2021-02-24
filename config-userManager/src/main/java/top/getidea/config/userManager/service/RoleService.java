package top.getidea.config.userManager.service;

import top.getidea.config.common.entity.userManager.Role;
import top.getidea.config.common.util.Result;

import java.util.List;

/**
 *
 */
public interface RoleService {

    /**
     *
     * @param roleId
     * @return
     */
    Result<Role> getRoleByKey(Integer roleId);

    /**
     *
     * @param userId
     * @return
     */
    Result<List<Role>> getRoleByUserId(Integer userId);

}
