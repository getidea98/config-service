package top.getidea.config.administer.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import top.getidea.config.administer.mapper.ProjectPackageMapper;
import top.getidea.config.administer.service.AdminService;
import top.getidea.config.administer.mapper.AdminMapper;
import top.getidea.config.common.ResultEnum.EnumResult;
import top.getidea.config.common.dto.ProjectJarDTO;
import top.getidea.config.common.entity.project.ConfigProjectOperateLog;
import top.getidea.config.common.entity.project.Project;
import top.getidea.config.common.entity.project.ProjectPackage;
import top.getidea.config.common.entity.userManager.User;
import top.getidea.config.common.feign.project.ProjectFeign;
import top.getidea.config.common.feign.usermanager.UserFeign;
import top.getidea.config.common.util.Result;

import javax.annotation.Resource;
import java.util.*;
import java.util.stream.Collectors;

/**
 * @author getidea
 */
@Service("adminService")
public class AdminServiceImpl implements AdminService {

    @Resource(name = "adminMapper")
    private AdminMapper adminMapper;
    @Resource(name = "projectPackageMapper")
    private ProjectPackageMapper projectPackageMapper;
    @Autowired
    private UserFeign userFeign;
    @Autowired
    private ProjectFeign projectFeign;
    @Override
    public Result<List<Map<String, Object>>> getList(Integer pageNum, Integer pageSize, String key) {
        Integer offSet = pageNum == 0 ? 0 : (pageNum - 1) * pageSize;
        Integer rows = pageSize;
        List<Project> projectList = adminMapper.getList(offSet, rows, key);
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

    /**
     * 处理发包请求
     * @param projectJarDTO
     * @return
     */
    @Override
    public Result edit(ProjectJarDTO projectJarDTO) {
        Project project = new Project();
        project.setProjectId(projectJarDTO.getProjectId());
        project.setProgress(3);
        project.setModifyTime(new Date());
        projectFeign.editProject(project);
        projectJarDTO.getIds().parallelStream().peek(item ->{
            ProjectPackage projectPackage = new ProjectPackage();
            projectPackage.setProjectId(projectJarDTO.getProjectId());
            projectPackage.setAssetsId(item);
            projectPackageMapper.insert(projectPackage);
        }).count();
        ConfigProjectOperateLog configProjectOperateLog = new ConfigProjectOperateLog();
        configProjectOperateLog.setProjectId(projectJarDTO.getProjectId());
        configProjectOperateLog.setProgress(4);
        configProjectOperateLog.setOperater(40000);
        configProjectOperateLog.setCreateTime(new Date());
        projectFeign.writeProjectOperateLog(configProjectOperateLog);
        return new Result(EnumResult.SUCCESS);
    }

    @Override
    public Result<List<Integer>> getProjectPackage(Integer projectId) {
        LambdaQueryWrapper<ProjectPackage> projectPackageLambdaQueryWrapper = new LambdaQueryWrapper<>();
        projectPackageLambdaQueryWrapper
                .eq(ProjectPackage::getProjectId,projectId);
        List<ProjectPackage> projectPackages = projectPackageMapper.selectList(projectPackageLambdaQueryWrapper);
        List<Integer> collect = projectPackages.parallelStream().map(item -> item.getAssetsId()).collect(Collectors.toList());
        return new Result<List<Integer>>(EnumResult.SUCCESS).setData(collect);
    }

    @Override
    public Result sessionNumber(String username) {
        User user= userFeign.getUserByUsernameParam(username).getData();
        if (user == null) {
            return new Result(EnumResult.NOT_FOUND);
        }

        return null;
    }
}
