package top.getidea.config.common.entity.project;


import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableName;
import lombok.Data;

/**
 * @author getidea
 */
@Data
@TableName("config_project_package")
public class ProjectPackage {
    @TableField("assets_id")
    private Integer assetsId;
    @TableField("project_id")
    private Integer projectId;
}
