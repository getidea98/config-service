package top.getidea.config.common.entity.deploy;

import com.baomidou.mybatisplus.annotation.*;
import lombok.Data;
import top.getidea.config.common.entity.assets.Assets;
import top.getidea.config.common.valid.AddGroup;
import top.getidea.config.common.valid.UpdateGroup;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableId;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.List;

/**
 * 产品实体类
 *
 * @author Fange
 * @date 2020-11/19
 */
@Data
@TableName("config_deploy_info")
public class DeployInfo {

    /**
     * 主键：产品id
     */
    @TableId(value = "id", type = IdType.AUTO)
    private Integer id;

    /**
     * 产品经理id
     */
    @TableField("project_id")
    private Integer projectId;

    /**
     * 产品版本
     */
    @TableField("deployer_id")
    private Integer deployerId;

    @TableField("progress")
    private Integer progress;
}
