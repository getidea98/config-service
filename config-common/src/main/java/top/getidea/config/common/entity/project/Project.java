package top.getidea.config.common.entity.project;

import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

import java.util.Date;

/**
 * @author getidea
 */
@Data
@TableName("config_assets")
public class Project {

    @TableId("project_id")
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

}
