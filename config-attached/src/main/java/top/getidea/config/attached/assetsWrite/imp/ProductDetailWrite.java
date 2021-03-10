package top.getidea.config.attached.assetsWrite.imp;

import org.springframework.stereotype.Component;
import top.getidea.config.attached.assetsWrite.AssetsWrite;
import top.getidea.config.attached.mapper.AttachedMapper;
import top.getidea.config.common.entity.assets.Assets;

import javax.annotation.Resource;

/**
 * @author getidea
 */
@Component("productDetailWrite")
public class ProductDetailWrite implements AssetsWrite {
    @Resource(name = "attachedMapper")
    private AttachedMapper attachedMapper;
    @Override
    public Integer write(Assets assets) {
        attachedMapper.insert(assets);
        return assets.getId();
    }
}
