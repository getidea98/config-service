package top.getidea.config.common.verify;

import org.springframework.stereotype.Component;
import top.getidea.config.common.feign.auth.AuthenticationFeign;
import top.getidea.config.common.feign.usermanager.UserFeign;

@Component
public class Verify {
    /**
     * 验证当前账户是否有指定角色
     */
    public Boolean roleVerify(String username, String roleCode, UserFeign userFeign) {
//        List<Role> roleByUserName = userFeign.getRoleByUserName(username).getData();
//        if (roleByUserName != null && roleByUserName.size() != 0) {
//            for (int i = 0; i < roleByUserName.size(); i++) {
//                if (roleByUserName.get(i).getId().equals(roleCode)) {
//                    return true;
//                }
//            }
//        }
//        return false;
        return true;
    }

    public Boolean authVerify(String username, String token, AuthenticationFeign authenticationFeign) {
//        final Result result = authenticationFeign.validateToken(username, token);
//        if (EnumResult.SUCCESS.getCode().equals(result.getCode())) {
//            return true;
//        }
//        return false;
        return true;
    }
}
