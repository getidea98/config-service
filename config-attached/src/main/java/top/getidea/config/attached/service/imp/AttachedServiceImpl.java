package top.getidea.config.attached.service.imp;

import com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper;
import org.springframework.stereotype.Service;
import top.getidea.config.attached.assetsWrite.AssetsWrite;
import top.getidea.config.attached.mapper.AttachedMapper;
import top.getidea.config.attached.mapper.ProductAssetsMapper;
import top.getidea.config.attached.service.AttachedService;
import top.getidea.config.common.ResultEnum.EnumResult;
import top.getidea.config.common.entity.assets.Assets;
import top.getidea.config.common.entity.assets.ProductAssets;
import top.getidea.config.common.util.Result;

import javax.annotation.Resource;

/**
 * @author getidea
 */
@Service("attachedService")
public class AttachedServiceImpl  implements AttachedService{
    @Resource(name = "attachedMapper")
    private AttachedMapper attachedMapper;
    @Resource(name = "productAssetsMapper")
    private ProductAssetsMapper productAssetsMapper;
    @Resource(name = "productAssetsWrite")
    protected AssetsWrite productAssetsWrite;
    @Resource(name = "productDetailWrite")
    private AssetsWrite productDetailWrite;
    @Resource(name = "projectAssetsWrite")
    private AssetsWrite projectAssetsWrite;
    @Resource(name = "projectPackageWrite")
    private AssetsWrite projectPackageWrite;
    @Override
    public Result<Assets> getAttachedById(Integer id) {
        Assets assets = attachedMapper.selectById(id);
        return new Result<Assets>(EnumResult.SUCCESS).setData(assets);
    }

    @Override
    public Result<Integer> assetsWrite(String assetsType, Assets assets) {
        Integer key = null;
        if ("productAssets".equals(assetsType)){
            key = productAssetsWrite.write(assets);
        } else if ("productDetail".equals(assetsType)){
            key = productDetailWrite.write(assets);
        } else if ("projectAssets".equals(assetsType)) {
            key = projectAssetsWrite.write(assets);
        } else if ("projectPackage".equals(assetsType)) {
            key = projectPackageWrite.write(assets);
        }
        if (key != null ){
            return new Result<Integer>(EnumResult.SUCCESS).setData(key);
        } else {
            return new Result<Integer>(EnumResult.UNKNOW_EXCEPTION).setData(key);
        }
    }

    @Override
    public Result deleteAllAssetsOfProduct(Integer id, String productVersion) {
        LambdaUpdateWrapper<ProductAssets> assetsLambdaUpdateWrapper = new LambdaUpdateWrapper<>();
        assetsLambdaUpdateWrapper
                .eq(ProductAssets::getProductId,id)
                .eq(ProductAssets::getProductVersion,productVersion);
        productAssetsMapper.delete(assetsLambdaUpdateWrapper);
        return new Result<Integer>(EnumResult.SUCCESS);
    }
}