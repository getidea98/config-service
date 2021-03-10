package top.getidea.config.attached.controller;

import cn.hutool.json.JSONObject;
import com.aliyun.oss.OSS;
import com.aliyun.oss.common.utils.BinaryUtil;
import com.aliyun.oss.model.MatchMode;
import com.aliyun.oss.model.PolicyConditions;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;
import top.getidea.config.attached.service.AttachedService;
import top.getidea.config.common.ResultEnum.EnumResult;
import top.getidea.config.common.entity.assets.Assets;
import top.getidea.config.common.util.Result;

import javax.annotation.Resource;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/attached/OSS")
@Slf4j
public class OSSController {

    @Autowired
    private OSS ossClient;
    @Resource(name = "attachedService")
    private AttachedService attachedService;

    @Value("${spring.cloud.alicloud.access-key}")
    private String accessId;

    @Value("${spring.cloud.alicloud.oss.endpoint}")
    private String endpoint;

    @Value("${spring.cloud.alicloud.oss.bucket}")
    private String bucket;

    @GetMapping("/getPolicy")
    public Result<Map<String, String>> getPolicy(@RequestParam("type") String type){
        String host = "https://" + bucket + "." + endpoint;
        String dir = new SimpleDateFormat("yyyy-MM-dd").format(new Date()) + "/";
        Map<String, String> respMap = null;
        try {
            long expireTime = 180;
            long expireEndTime = System.currentTimeMillis() + expireTime * 1000;
            Date expiration = new Date(expireEndTime);
            PolicyConditions policyConds = new PolicyConditions();
            policyConds.addConditionItem(PolicyConditions.COND_CONTENT_LENGTH_RANGE, 0, 1048576000);
            policyConds.addConditionItem(MatchMode.StartWith, PolicyConditions.COND_KEY, dir);

            String postPolicy = ossClient.generatePostPolicy(expiration, policyConds);
            byte[] binaryData = postPolicy.getBytes("utf-8");
            String encodedPolicy = BinaryUtil.toBase64String(binaryData);
            String postSignature = ossClient.calculatePostSignature(postPolicy);

            respMap = new LinkedHashMap<>();
            respMap.put("accessid", accessId);
            respMap.put("policy", encodedPolicy);
            respMap.put("signature", postSignature);
            respMap.put("dir", dir);
            respMap.put("host", host);
            respMap.put("expire", String.valueOf(expireEndTime / 1000));

            JSONObject jasonCallback = new JSONObject();
            jasonCallback.set("callbackUrl", "http://tx.getidea.top:8888/api/attached/OSS/AliOSS/callback");
            jasonCallback.set("callbackBody", "filename=${object}&assetsType=" + type + "&address=" + host + "/" + dir);
            jasonCallback.set("callbackBodyType", "application/x-www-form-urlencoded");
            String base64CallbackBody = BinaryUtil.toBase64String(jasonCallback.toString().getBytes());
            respMap.put("callback", base64CallbackBody);
        } catch (Exception e) {
            System.out.println(e.getMessage());
        } finally {
            ossClient.shutdown();
        }
        return new Result<Map<String, String>>(EnumResult.SUCCESS).setData(respMap);
    }

    @PostMapping("/AliOSS/callback")
    public Result<Integer> OSSCallback(@RequestParam("filename") String filename, @RequestParam("assetsType") String assetsType, @RequestParam("address") String address){
        filename = filename.split("/")[1];
        Assets assets = new Assets();
        assets.setAddress(address + filename);
        assets.setAssetsName(filename);
        return attachedService.assetsWrite(assetsType, assets);
    }
}
