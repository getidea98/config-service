package top.getidea.config.common.util;

import lombok.Data;
import lombok.Getter;
import top.getidea.config.common.ResultEnum.EnumResult;

/**
 * @author getidea
 */
@Data
public class Result<T> {
    private Integer code;
    private String message;
    private T data;

    public Result(EnumResult enumResult) {
        this.code = enumResult.getCode();
        this.message = enumResult.getMsg();
    }
    public Result() {

    }

    public Result<T> setData(T data) {
        this.data = data;
        return this;
    }
}
