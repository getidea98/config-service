package top.getidea.config.common.entity.assets;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**
 * @author getidea
 */
@TableName("config_assets")
@Data
public class Assets {

    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;
    @TableField("address")
    private String address;
    @TableField("assets_name")
    private String assetsName;
}
