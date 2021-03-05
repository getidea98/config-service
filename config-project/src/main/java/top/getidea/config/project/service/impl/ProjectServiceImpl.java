package top.getidea.config.project.service.impl;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import top.getidea.config.common.ResultEnum.EnumResult;
import top.getidea.config.common.entity.assets.Assets;
import top.getidea.config.common.entity.assets.ProjectAssets;
import top.getidea.config.common.entity.product.Product;
import top.getidea.config.common.entity.project.ConfigProjectOperateLog;
import top.getidea.config.common.entity.project.Project;
import top.getidea.config.common.entity.project.ProjectProduct;
import top.getidea.config.common.feign.attached.AttachedFeign;
import top.getidea.config.common.feign.product.ProductFeign;
import top.getidea.config.common.feign.usermanager.UserFeign;
import top.getidea.config.common.util.Result;
import top.getidea.config.project.mapper.ConfigProjectOperateLogMapper;
import top.getidea.config.project.mapper.ProjectAssetsMapper;
import top.getidea.config.project.mapper.ProjectMapper;
import top.getidea.config.project.mapper.ProjectProductMapper;
import top.getidea.config.project.service.ProjectService;

import java.util.*;
import java.util.stream.Collectors;

/**
 * @author getidea
 */
@Service("projectService")
public class ProjectServiceImpl implements ProjectService {
    @Autowired
    private ProjectMapper projectMapper;
    @Autowired
    private ConfigProjectOperateLogMapper configProjectOperateLogMapper;
    @Autowired
    private ProjectAssetsMapper projectAssetsMapper;
    @Autowired
    private ProjectProductMapper projectProductMapper;
    @Autowired
    private UserFeign userFeign;
    @Autowired
    private ProductFeign productFeign;
    @Autowired
    private AttachedFeign attachedFeign;
    @Override
    public Result getList(Integer pageNum, Integer pageSize, String key) {
        Integer offSet = pageNum == 0 ? 0 : (pageNum - 1) * pageSize;
        Integer rows = pageSize;
        List<Project> projectList = projectMapper.getList(offSet, rows, key);
        List<Map> result = new ArrayList<>();
        for (Project project : projectList) {
            Map projectMap = new HashMap();
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
            List<ConfigProjectOperateLog> configProjectOperateLogList = configProjectOperateLogMapper.selectList(configProjectOperateLogLambdaQueryWrapper);
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
    public Result addProject(Project project) {
        project.setCreateTime(new Date());
        project.setModifyTime(new Date());
        projectMapper.insert(project);
        {
            /**
             * 添加操作日志(添加项目)
             */
            ConfigProjectOperateLog configProjectOperateLog = new ConfigProjectOperateLog();
            configProjectOperateLog.setProjectId(project.getProjectId());
            configProjectOperateLog.setCreateTime(new Date());
            configProjectOperateLog.setOperater(project.getManagerId());
            configProjectOperateLog.setProgress(1);
            configProjectOperateLogMapper.insert(configProjectOperateLog);
        }
        {
            /**
             * 添加 附件记录
             */
            List<Assets> assetsList = project.getAssetsList();
            assetsList.parallelStream().peek(item -> {
                ProjectAssets productAssets = new ProjectAssets();
                productAssets.setProjectId(project.getProjectId());
                productAssets.setAssetsId(item.getId());
                projectAssetsMapper.insert(productAssets);
            }).count();
        }
        {
            /**
             * 添加 产品记录
             */
            List<Product> productList = project.getProductList();
            productList.parallelStream().peek(item -> {
                ProjectProduct projectProduct = new ProjectProduct();
                projectProduct.setProductId(item.getProductId());
                projectProduct.setProjectId(project.getProjectId());
                projectProduct.setProductVersion(item.getProdVersion());
                projectProductMapper.insert(projectProduct);
            }).count();
        }
        return new Result(EnumResult.SUCCESS);
    }

    @Override
    public Result apply(Integer projectId) {
        {
            /**
             * 向 config_project_operate_log 表添加记录
             */
            LambdaQueryWrapper<ProjectProduct> projectProductLambdaQueryWrapper = new LambdaQueryWrapper<>();
            projectProductLambdaQueryWrapper
                    .eq(ProjectProduct::getProjectId, projectId);
            List<ProjectProduct> projectProduct = projectProductMapper.selectList(projectProductLambdaQueryWrapper);
            if (projectProduct != null && projectProduct.size() != 0) {
                Result<Map> productDetails = productFeign.getProductDetails(projectProduct.get(0).getProductId(), projectProduct.get(0).getProductVersion());
                Map data = productDetails.getData();
                ConfigProjectOperateLog configProjectOperateLog = new ConfigProjectOperateLog();
                configProjectOperateLog.setProjectId(projectId);
                configProjectOperateLog.setCreateTime(new Date());
                configProjectOperateLog.setProgress(2);
                LinkedHashMap manager = (LinkedHashMap) data.get("manager");
                configProjectOperateLog.setOperater((Integer) manager.get("id"));
                configProjectOperateLogMapper.insert(configProjectOperateLog);
            } else {
                return new Result(EnumResult.UNKNOW_EXCEPTION);
            }
        }
        {
            /**
             * 将 config_project 中记录的 progress 修改为 2
             */
            Project project = new Project();
            project.setProjectId(projectId);
            project.setProgress(2);
            projectMapper.updateById(project);
        }
        return new Result(EnumResult.SUCCESS);
    }

    @Override
    public Result editProject(Project project) {
        // 更新项目基本信息
        projectMapper.updateById(project);
        {
            /**
             * 删除 不再需要的产品
             */
            for (Product product : project.getDeletedProductList()) {
                LambdaQueryWrapper<ProjectProduct> projectProductLambdaQueryWrapper = new LambdaQueryWrapper<>();
                projectProductLambdaQueryWrapper
                        .eq(ProjectProduct::getProjectId, project.getProjectId())
                        .eq(ProjectProduct::getProductId, product.getProductId())
                        .eq(ProjectProduct::getProductVersion, product.getProdVersion());
                projectProductMapper.delete(projectProductLambdaQueryWrapper);
            }
        }
        {
            /**
             * 添加需要的产品
             */
            for (Product product : project.getAppendProductList()) {
                ProjectProduct projectProduct = new ProjectProduct();
                projectProduct.setProjectId(project.getProjectId());
                projectProduct.setProductVersion(product.getProdVersion());
                projectProduct.setProductId(product.getProductId());
                projectProductMapper.insert(projectProduct);
            }
        }
        {
            /**
             * 更新项目附件（删除原来附件）。添加后续更新附件
             */
            LambdaQueryWrapper<ProjectAssets> projectAssetsLambdaQueryWrapper = new LambdaQueryWrapper<>();
            projectAssetsLambdaQueryWrapper
                    .eq(ProjectAssets::getProjectId,project.getProjectId());
            projectAssetsMapper.delete(projectAssetsLambdaQueryWrapper);
            for (Assets assets : project.getAssetsList()) {
                ProjectAssets projectAssets = new ProjectAssets();
                projectAssets.setProjectId(project.getProjectId());
                projectAssets.setAssetsId(assets.getId());
                projectAssetsMapper.insert(projectAssets);
            }
        }
        return new Result(EnumResult.SUCCESS);
    }

    @Override
    public Result getProjectDetail(Integer projectId) {
        Project project = projectMapper.selectById(projectId);
        LambdaQueryWrapper<ProjectProduct> projectProductLambdaQueryWrapper = new LambdaQueryWrapper<>();
        projectProductLambdaQueryWrapper
                .eq(ProjectProduct::getProjectId,projectId);
        List<ProjectProduct> projectProducts = projectProductMapper.selectList(projectProductLambdaQueryWrapper);
        List<Map> productList = new ArrayList();
        for (ProjectProduct projectProduct : projectProducts) {
            Result<Map> productDetails = productFeign.getProductDetails(projectProduct.getProductId(), projectProduct.getProductVersion());
            Map data = productDetails.getData();
            Map product = new HashMap();
            product.put("productId",projectProduct.getProductId());
            product.put("productName",data.get("productName"));
            product.put("prodVersion",data.get("prodVersion"));
            productList.add(product);
        }
        Map result = new HashMap();
        result.put("projectName",project.getProjectName());
        result.put("contractAmount",project.getAmount());
        result.put("projectAddress",project.getProjectAddress());
        result.put("customerName",project.getProjectCustomName());
        result.put("contractNumber",project.getProjectNumber());
        result.put("beforeSelectedProduct",productList);
        result.put("projectManager",userFeign.getUserByKey(project.getManagerId()).getData().getRealname());
        result.put("progress",project.getProgress());
        LambdaQueryWrapper<ProjectAssets> lambdaQueryWrapper = new LambdaQueryWrapper<>();
        lambdaQueryWrapper
                .eq(ProjectAssets::getProjectId,project.getProjectId());
        List<ProjectAssets> projectAssets = projectAssetsMapper.selectList(lambdaQueryWrapper);
        List<Assets> assetsList = projectAssets.parallelStream().map(item -> attachedFeign.getAttachedById(item.getAssetsId()).getData()).collect(Collectors.toList());
        result.put("assetsList",assetsList);
        LambdaQueryWrapper<ConfigProjectOperateLog> configProjectOperateLogLambdaQueryWrapper = new LambdaQueryWrapper<>();
        configProjectOperateLogLambdaQueryWrapper
                .eq(ConfigProjectOperateLog::getProjectId,project.getProjectId());
        List<ConfigProjectOperateLog> configProjectOperateLogList = configProjectOperateLogMapper.selectList(configProjectOperateLogLambdaQueryWrapper);
        List<Map> configProjectOperateLogMap = new ArrayList<>();
        for (ConfigProjectOperateLog configProjectOperateLog : configProjectOperateLogList) {
            Map ConfigProjectOperateLog = new HashMap();
            ConfigProjectOperateLog.put("opTime",configProjectOperateLog.getCreateTime());
            ConfigProjectOperateLog.put("progress",configProjectOperateLog.getProgress());
            ConfigProjectOperateLog.put("oper",userFeign.getUserByKey(configProjectOperateLog.getOperater()).getData());
            configProjectOperateLogMap.add(ConfigProjectOperateLog);
        }
        result.put("ops",configProjectOperateLogMap);
        return new Result(EnumResult.SUCCESS).setData(result);
    }
}