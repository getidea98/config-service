package top.getidea.config.userManager.service.imp;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import top.getidea.config.common.ResultEnum.EnumResult;
import top.getidea.config.common.entity.userManager.RoleUser;
import top.getidea.config.common.entity.userManager.User;
import top.getidea.config.common.util.Result;
import top.getidea.config.userManager.mapper.RoleUserMapper;
import top.getidea.config.userManager.mapper.UserMapper;
import top.getidea.config.userManager.service.UserService;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

/**
 * @author getidea
 */
@Service("userService")
@Slf4j
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;
    @Autowired
    private RoleUserMapper roleUserMapper;

    @Override
    public Result<User> getUserByKey(Integer key) {
        LambdaQueryWrapper<User> wrapper = new LambdaQueryWrapper();
        wrapper.eq(User::getId, key)
                .select(User::getId, User::getRealname, User::getUsername, User::getAvatar);
        Map resultMap = objectToMap(userMapper.selectOne(wrapper));
        return new Result(EnumResult.SUCCESS).setData(resultMap);
    }

    @Override
    public Result<List<Map>> getUserByRole(Integer roleId) {
        List<Integer> UserIdList = roleUserMapper.selectUserByRole(roleId);
        LambdaQueryWrapper<User> queryWrapper = new LambdaQueryWrapper();
        queryWrapper.in(User::getId, UserIdList)
                .select(User::getId, User::getUsername, User::getRealname);
        List<User> users = userMapper.selectList(queryWrapper);
        List<Map> result = new LinkedList<>();
        users.parallelStream().peek(user -> result.add(objectToMap(user))).count();
        return new Result<List<Map>>(EnumResult.SUCCESS).setData(result);
    }

    @Override
    public Result<User> getUserByUsername(String username, String usernameOfHeader) {
        String un = username == null || username.length() == 0 ? usernameOfHeader : username;
        LambdaQueryWrapper<User> lambdaQueryWrapper = new LambdaQueryWrapper<>();
        lambdaQueryWrapper.eq(User::getUsername, un);
        User user = userMapper.selectOne(lambdaQueryWrapper);
        return new Result<User>(EnumResult.SUCCESS).setData(user);
    }

    @Override
    public Result<List<User>> getAllUser(final Integer role) {
        LambdaQueryWrapper<User> lambdaQueryWrapper = new LambdaQueryWrapper<>();
        lambdaQueryWrapper.select(User::getId, User::getRealname);
        List<User> users = userMapper.selectList(lambdaQueryWrapper);
        users = users.parallelStream().filter(user -> isProductManager(user.getId(), role)).collect(Collectors.toList());
        return new Result<List<User>>(EnumResult.SUCCESS).setData(users);
    }

    /**
     * 查询 userId 是否是产品经理
     *
     * @param userId
     * @return
     */
    private Boolean isProductManager(Integer userId, final Integer role) {
        LambdaQueryWrapper<RoleUser> lambdaQueryWrapper = new LambdaQueryWrapper<>();
        lambdaQueryWrapper
                .eq(RoleUser::getRoleId, role)
                .eq(RoleUser::getUserId, userId);
        return roleUserMapper.selectCount(lambdaQueryWrapper) > 0 ? true : false;
    }

    /**
     * source object transform Map<field,value>
     *
     * @param user source object
     * @return
     */
    private Map objectToMap(User user) {
        Map beanMap = new HashMap(16);
        beanMap.put("id", user.getId());
        beanMap.put("username", user.getUsername());
        beanMap.put("realname", user.getRealname());
        beanMap.put("avatar", user.getAvatar());
        return beanMap;
    }
}