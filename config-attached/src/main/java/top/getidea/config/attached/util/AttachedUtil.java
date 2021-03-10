package top.getidea.config.attached.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.AutoConfigurationPackage;
import org.springframework.web.multipart.MultipartFile;
import top.getidea.config.attached.bean.Attached;
import top.getidea.config.attached.mapper.AttachedMapper;

import java.io.File;
import java.io.FileOutputStream;
import java.util.LinkedList;
import java.util.List;
import java.util.Queue;
import java.util.UUID;

/**
 * @author getidea
 */
public class AttachedUtil {
    /**
     * defaultValue: `attachedFolder/`
     */
    @Value("${attachedPath}")
    private String attachedPath;

    @Autowired
    AttachedMapper attachedMapper;

    private Queue<Attached> attachedPaths = new LinkedList();

    /**
     * 将文件记录到数据库中（单文件）
     *
     * @param attached
     * @return
     */
    public Integer save(MultipartFile attached, Integer ProdId) {
        return 0;
    }
}
