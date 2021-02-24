package top.getidea.config.userManager.service.imp;

import com.alibaba.fastjson.JSON;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.beans.BeanMap;
import org.springframework.stereotype.Service;
import top.getidea.config.common.ResultEnum.EnumResult;
import top.getidea.config.common.entity.userManager.Role;
import top.getidea.config.common.entity.userManager.RoleUser;
import top.getidea.config.common.util.Result;
import top.getidea.config.userManager.mapper.RoleMapper;
import top.getidea.config.userManager.mapper.RoleUserMapper;
import top.getidea.config.userManager.service.RoleService;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service("roleService")
public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleMapper roleMapper;
    @Autowired
    private RoleUserMapper roleUserMapper;
    @Override
    public Result<Role> getRoleByKey(Integer roleId) {
        Role role = roleMapper.selectByPrimaryKey(roleId);
        return new Result<Role>(EnumResult.SUCCESS).setData(role);
    }

    @Override
    public Result<List<Role>> getRoleByUserId(Integer userId) {
        LambdaQueryWrapper<RoleUser> roleUserQueryWrapper = new LambdaQueryWrapper();
        LambdaQueryWrapper<Role> roleQueryWrapper = new LambdaQueryWrapper();
        roleUserQueryWrapper.eq(RoleUser::getUserId,userId);
        List<RoleUser> roleUsers = roleUserMapper.selectList(roleUserQueryWrapper);
        List<Integer> RoleIdList = roleUsers.parallelStream().map((roleUser) -> roleUser.getRoleId()).collect(Collectors.toList());
        roleQueryWrapper.in(Role::getId,RoleIdList);
        List<Role> roles = roleMapper.selectList(roleQueryWrapper);
        return new Result<List<Role>>(EnumResult.SUCCESS).setData(roles);
    }

    private Map roleToMap(Role role) {

        return null;
    }
}
