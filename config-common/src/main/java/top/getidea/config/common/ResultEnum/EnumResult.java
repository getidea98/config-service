package top.getidea.config.common.ResultEnum;

/**
 * @author getidea
 */

public enum EnumResult {
    UNKNOW_EXCEPTION(10000,"系统未知异常"),
    VAILD_EXCEPTION(10001,"参数格式校验失败"),
    ERROR_PASSWORD(10003,"密码或账号不正确"),
    ERROR_TOKEN(10004,"TOKEN校验错误"),
    SUCCESS(10200,"成功"),
    PARAM_SHORTER(200001,"参数长度不合法"),
    PARAM_LONGER(200001,"参数长度不合法");


    private Integer code;
    private String msg;

    EnumResult(Integer code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    public Integer getCode() {
        return code;
    }

    public String getMsg() {
        return msg;
    }
}
