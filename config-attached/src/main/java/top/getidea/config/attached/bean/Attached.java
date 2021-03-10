package top.getidea.config.attached.bean;

import com.baomidou.mybatisplus.annotation.*;
import lombok.Builder;
import lombok.Data;

/**
 * @author getidea
 */
@Data
@Builder
@TableName("config_assets")
public class Attached {

    @TableId(value = "id",type = IdType.AUTO)
    private Integer id;
    @TableField("address")
    private String address;
    @TableField("assets_name")
    private String assetsName;
}
