package top.getidea.config.common.entity.product;

import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;
import top.getidea.config.common.valid.AddGroup;
import top.getidea.config.common.valid.UpdateGroup;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Date;

/**
 * 产品实体类
 *
 * @author Fange
 * @date 2020-11/19
 */
@Data
@TableName("config_product")
public class Product {

    /**
     * 主键：产品id
     */
    @TableId(value = "product_id",type = IdType.AUTO)
    @NotNull(message = "必须提供主键值", groups = {UpdateGroup.class})
    private Integer productId;

    /**
     * 产品经理id
     */
    @NotEmpty(message = "产品经理不能为空", groups = {AddGroup.class, UpdateGroup.class})
    private Integer managerId;

    /**
     * 产品版本
     */
    @TableField("product_version")
    @NotEmpty(message = "产品版本不能为空", groups = {AddGroup.class, UpdateGroup.class})
    private String prodVersion;

    /**
     * 存放地址
     */
    @TableField("product_address")
    private String productAddress;

    /**
     * 版本说明
     */
    @TableField("description")
    private String message;

    /**
     * 最后修改时间
     */
    @TableField("modify_time")
    private Date modifyTime;

    /**
     * 是否删除
     */
    @TableLogic(value = "false",delval = "true")
    private Boolean is_deprecated;
}
