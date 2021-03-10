package top.getidea.config.attached.service;

import top.getidea.config.common.entity.assets.Assets;
import top.getidea.config.common.util.Result;

public interface AttachedService {
    Result getAttachedById(Integer id);

    Result<Integer> assetsWrite(String assetsType, Assets assets);

    Result deleteAllAssetsOfProduct(Integer id, String productVersion);
}
