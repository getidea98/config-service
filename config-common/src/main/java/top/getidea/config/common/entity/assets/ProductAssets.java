package top.getidea.config.common.entity.assets;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableLogic;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**
 * @author getidea
 */
@Data
@TableName("config_product_assets")
public class ProductAssets {
    @TableField("assets_id")
    private Integer assetsId;
    @TableField("product_id")
    private Integer productId;
    @TableField("product_version")
    private String productVersion;
    @TableField("is_delete")
    @TableLogic(value = "false",delval = "true")
    private Boolean isDelete;
}
