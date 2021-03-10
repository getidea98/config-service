package top.getidea.config.deployment.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import top.getidea.config.common.ResultEnum.EnumResult;
import top.getidea.config.common.entity.project.ConfigProjectOperateLog;
import top.getidea.config.common.entity.project.Project;
import top.getidea.config.common.feign.project.ProjectFeign;
import top.getidea.config.common.feign.usermanager.UserFeign;
import top.getidea.config.common.util.Result;
import top.getidea.config.deployment.mapper.DeploymentMapper;
import top.getidea.config.deployment.service.DeploymentService;

import java.util.*;

@Service("deploymentService")
public class DeploymentServiceImpl implements DeploymentService {

    @Autowired
    private DeploymentMapper deploymentMapper;
    @Autowired
    private UserFeign userFeign;
    @Autowired
    private ProjectFeign projectFeign;
    @Override
    public Result getList(Integer pageNum, Integer pageSize, String key) {
        Integer offSet = pageNum == 0 ? 0 : (pageNum - 1) * pageSize;
        Integer rows = pageSize;
        List<Project> projectList = deploymentMapper.getList(offSet, rows, key);
        List<Map<String, Object>> result = new ArrayList<>();
        for (Project project : projectList) {
            Map<String, Object> projectMap = new HashMap();
            projectMap.put("createTime",project.getCreateTime());
            projectMap.put("projectName",project.getProjectName());
            projectMap.put("manager",userFeign.getUserByKey(project.getManagerId()).getData().getRealname());
            projectMap.put("projectId",project.getProjectId());
            projectMap.put("amount",project.getAmount());
            projectMap.put("contractNumber",project.getProjectNumber());
            projectMap.put("customerName",project.getProjectCustomName());
            projectMap.put("progress",project.getProgress());
            LambdaQueryWrapper<ConfigProjectOperateLog> configProjectOperateLogLambdaQueryWrapper = new LambdaQueryWrapper<>();
            configProjectOperateLogLambdaQueryWrapper
                    .eq(ConfigProjectOperateLog::getProjectId,project.getProjectId());
            List<ConfigProjectOperateLog> configProjectOperateLogList = projectFeign.getProjectOperateLog(project.getProjectId()).getData();
            List<Map> configProjectOperateLogMap = new ArrayList<>();
            for (ConfigProjectOperateLog configProjectOperateLog : configProjectOperateLogList) {
                Map ConfigProjectOperateLog = new HashMap();
                ConfigProjectOperateLog.put("opTime",configProjectOperateLog.getCreateTime());
                ConfigProjectOperateLog.put("progress",configProjectOperateLog.getProgress());
                ConfigProjectOperateLog.put("oper",userFeign.getUserByKey(configProjectOperateLog.getOperater()).getData());
                configProjectOperateLogMap.add(ConfigProjectOperateLog);
            }
            projectMap.put("ops",configProjectOperateLogMap);
            result.add(projectMap);
        }
        return new Result(EnumResult.SUCCESS).setData(result);
    }

    @Override
    public Result edit(Integer projectId) {
        Project project = new Project();
        project.setProjectId(projectId);
        project.setProgress(5);
        project.setModifyTime(new Date());
        projectFeign.editProject(project);
        ConfigProjectOperateLog configProjectOperateLog = new ConfigProjectOperateLog();
        configProjectOperateLog.setProjectId(projectId);
        configProjectOperateLog.setProgress(5);
        configProjectOperateLog.setCreateTime(new Date());
        configProjectOperateLog.setOperater(50000);
        projectFeign.writeProjectOperateLog(configProjectOperateLog);
        return new Result(EnumResult.SUCCESS);
    }
}
