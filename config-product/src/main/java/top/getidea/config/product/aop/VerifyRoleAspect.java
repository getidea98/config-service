package top.getidea.config.product.aop;

import lombok.extern.slf4j.Slf4j;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

@Component
@Aspect
@Slf4j
public class VerifyRoleAspect {

    // 切入点是需要当前角色拥有产品经理的
    @Pointcut("@annotation(top.getidea.config.product.authAnnotation.RoleAuth)")
    public void roleAuth(){}

    @Before("roleAuth()")
    public void doBefore(JoinPoint joinPoint) {
        Object[] args = joinPoint.getArgs();
        System.out.println(args);
    }
}
