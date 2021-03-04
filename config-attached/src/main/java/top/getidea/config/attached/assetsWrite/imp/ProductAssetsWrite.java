package top.getidea.config.attached.assetsWrite.imp;

import org.springframework.stereotype.Component;
import top.getidea.config.attached.assetsWrite.AssetsWrite;
import top.getidea.config.attached.mapper.AttachedMapper;
import top.getidea.config.common.entity.assets.Assets;

import javax.annotation.Resource;

/**
 * 产品附件的写入方法（主要是打的jar包）
 * @author getidea
 */
@Component("productAssetsWrite")
public class ProductAssetsWrite implements AssetsWrite {
    @Resource(name = "attachedMapper")
    private AttachedMapper attachedMapper;

    /**
     * 返回插入数据的主键
     * @param assets
     * @return
     */
    @Override
    public Integer write(Assets assets) {
        attachedMapper.insert(assets);
        return assets.getId();
    }
}
