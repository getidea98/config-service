package top.getidea.config.deployment.service;


import top.getidea.config.common.util.Result;

public interface DeploymentService {
    Result getList(Integer pageNum, Integer pageSize, String key);

    Result edit(Integer projectId);

    Result add(Integer projectId, Integer deployerId);

    Result getSessionNumber(String username);
}
