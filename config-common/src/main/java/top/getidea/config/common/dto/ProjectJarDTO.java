package top.getidea.config.common.dto;

import lombok.Data;

import java.util.List;

/**
 * @author getidea
 */
@Data
public class ProjectJarDTO {

    private Integer projectId;
    private List<Integer> ids;
}
