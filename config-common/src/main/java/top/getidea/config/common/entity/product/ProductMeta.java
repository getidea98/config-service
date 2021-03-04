package top.getidea.config.common.entity.product;

import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;

import java.util.Date;

/**
 * @author getidea
 */
@Data
@TableName("config_product_meta")
public class ProductMeta {

    @TableId(value = "id",type = IdType.AUTO)
    private Integer id;
    @TableField("product_name")
    private String productName;
    @TableField("create_time")
    private Date createTime;
    @TableField("modify_time")
    private Date modifyTime;
    @TableField("is_delete")
    @TableLogic(value = "false", delval= "true")
    private Boolean isDelete;
    @TableField("description")
    private String description;
    @TableField("latest_release")
    private String latestRelease;
    @TableField("avatar")
    private Integer avatar;
}