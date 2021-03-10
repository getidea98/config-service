package top.getidea.config.common.entity.project;

import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;
import top.getidea.config.common.entity.assets.Assets;
import top.getidea.config.common.entity.product.Product;

import java.util.Date;
import java.util.List;

/**
 * @author getidea
 */
@Data
@TableName("config_project")
public class Project {

    @TableId(value = "project_id", type = IdType.AUTO)
    private Integer projectId;
    @TableField("project_name")
    private String projectName;
    @TableField("amount")
    private Integer amount;
    @TableField("manager_id")
    private Integer managerId;
    @TableField("project_address")
    private String projectAddress;
    @TableField("project_custom_name")
    private String projectCustomName;
    @TableField("project_number")
    private Integer projectNumber;
    @TableField("progress")
    private Integer progress;
    @TableField("create_time")
    private Date createTime;
    @TableField("modify_time")
    private Date modifyTime;
    /**
     * project_assets
     */
    @TableField(exist = false)
    private List<Assets> assetsList;
    /**
     * project_product:创建项目的时候关联的产品
     */
    @TableField(exist = false)
    private List<Product> productList;

    /**
     * project_product:编辑项目的时候关联的产品
     */
    @TableField(exist = false)
    private List<Product> appendProductList;

    /**
     * project_product:编辑项目的时候被删除的产品
     */
    @TableField(exist = false)
    private List<Product> deletedProductList;
}
