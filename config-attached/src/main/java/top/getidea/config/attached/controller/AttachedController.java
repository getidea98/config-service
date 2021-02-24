package top.getidea.config.attached.controller;


import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * @author getidea
 */
@RestController
@RequestMapping("/api/attached")
public class AttachedController {

    @PostMapping("/save")
    public void saveAttacheds(List<MultipartFile> attachedList, Integer id) {

    }
}
