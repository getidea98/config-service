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
@TableName("config_project_operate_log")
public class ConfigProjectOperateLog {

    @TableField("project_id")
    private Integer projectId;
    @TableField("operater")
    private Integer operater;
    @TableField("progress")
    private Integer progress;
    @TableField("create_time")
    private Date createTime;
}
