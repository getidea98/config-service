package top.getidea.config.administer.service;


import top.getidea.config.common.dto.ProjectJarDTO;
import top.getidea.config.common.util.Result;

import java.util.List;
import java.util.Map;

/**
 * @author getidea
 */
public interface AdminService {
    Result<List<Map<String, Object>>> getList(Integer pageNum, Integer pageSize, String key);

    Result edit(ProjectJarDTO projectJarDTO);

    Result<List<Integer>> getProjectPackage(Integer projectId);

    Result sessionNumber(String username);
}
