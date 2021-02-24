package top.getidea.config.attached.bean;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableLogic;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Builder;
import lombok.Data;

/**
 * @author getidea
 */
@Data
@Builder
@TableName("config_attached")
public class Attached {

    @TableId(value = "id",type = IdType.AUTO)
    private Integer id;
    private String url;
    private Integer proId;
    @TableLogic(value = "0", delval = "1")
    private Boolean isDelete;
}
