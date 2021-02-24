package top.getidea.config.auth.controller;

import io.swagger.annotations.*;
import org.springframework.web.bind.annotation.*;
import top.getidea.config.auth.service.AuthenticationService;
import top.getidea.config.common.util.Result;

import javax.annotation.Resource;

/**
 * authentication 身份验证
 * @author getidea
 */
@RestController
@RequestMapping("/api/auth")
@Api("权限验证系统")
public class AuthenticationController {

    @Resource(name = "authenticationService")
    private AuthenticationService authenticationService;

    @ApiOperation(value = "校验密码",notes = "用于登陆使用")
    @ApiImplicitParams({
            @ApiImplicitParam(name="username",value="用户名"),
            @ApiImplicitParam(name="password",value="密码")
    })
    @ApiResponses({
            @ApiResponse(code = 10200, message = "成功"),
            @ApiResponse(code = 10003, message = "密码或账号不正确")
    })
    @GetMapping("/password")
    public Result validatePassword(@RequestParam(value = "username",required = true) String username, @RequestParam(value = "password",required = true) String password) {
        return authenticationService.validatePassword(username,password);
    }

    @ApiOperation(value = "校验token",notes = "用于一般http请求验证身份")
    @ApiImplicitParams({
            @ApiImplicitParam(name="username",value="用户名"),
            @ApiImplicitParam(name="token",value="token")
    })
    @ApiResponses({
            @ApiResponse(code = 10200, message = "成功"),
            @ApiResponse(code = 10004, message = "TOKEN校验错误")
    })
    @GetMapping("/token")
    public Result validateToken(@RequestParam(value = "username",required = true) String username, @RequestParam(value = "token",required = true) String token) {
        return authenticationService.validateToken(username,token);
    }
}
