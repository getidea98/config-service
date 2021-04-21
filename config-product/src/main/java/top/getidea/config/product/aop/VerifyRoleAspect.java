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

    @Pointcut("execution(* top.getidea.config.product.service.Imp.ProductServiceImpl.*(..))")
    public void webLog(){
        log.info("call VerifyRoleAspect.webLog");
        System.out.println(1232);
    }

    @Before("webLog()")
    public void doBefore(JoinPoint joinPoint) throws Throwable {
        log.info("call VerifyRoleAspect.doBefore");
    }
}
