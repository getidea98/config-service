package top.getidea.config.common.entity.product;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableLogic;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.util.Date;

/**
 * @author getidea
 */
@Data
@TableName("config_product_meta")
public class ProductMeta {

    @TableField
    private Integer id;
    private String productName;
    private Date createTime;
    @TableLogic(value = "false", delval= "true")
    private Boolean isDelete;
    private String message;
}
