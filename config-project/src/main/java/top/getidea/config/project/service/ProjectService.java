package top.getidea.config.project.service;

import top.getidea.config.common.entity.project.ConfigProjectOperateLog;
import top.getidea.config.common.entity.project.Project;
import top.getidea.config.common.util.Result;

import java.util.List;

/**
 * @author getidea
 */
public interface ProjectService {
    Result getList(Integer pageNum, Integer pageSize, String scope, String key, String name);

    Result addProject(Project project);

    Result apply(Integer projectId);

    Result editProject(Project project);

    Result getProjectDetail(Integer projectId);

    Result<List<ConfigProjectOperateLog>> getProjectOperateLog(Integer projectId);

    Result writeProjectOperateLog(ConfigProjectOperateLog projectOperateLog);

    Result deploy(Integer projectId, Integer deployerId, String username);

    Result getSessionNumber(String username);
}
