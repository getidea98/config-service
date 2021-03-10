package top.getidea.config.attached.controller;


import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import top.getidea.config.attached.bean.Attached;
import top.getidea.config.attached.service.AttachedService;
import top.getidea.config.common.util.Result;

import javax.annotation.Resource;
import java.util.List;

/**
 * @author getidea
 */
@RestController
@RequestMapping("/api/attached")
public class AttachedController {

    @Resource(name = "attachedService")
    private AttachedService attachedService;

    @PostMapping("/save")
    public void saveAttacheds(List<MultipartFile> attachedList, Integer id) {

    }

    @GetMapping("/getAttachedById")
    public Result<Attached> getAttachedById(@RequestParam("id") Integer id) {
        return attachedService.getAttachedById(id);
    }

    @DeleteMapping("/deleteAllAssetsOfProduct")
    public Result deleteAllAssetsOfProduct(@RequestParam Integer id, @RequestParam String productVersion){
        return attachedService.deleteAllAssetsOfProduct(id,productVersion);
    }
}
