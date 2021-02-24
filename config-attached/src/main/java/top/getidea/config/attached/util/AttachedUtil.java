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
     * 向磁盘写入文件（多文件）
     *
     * @param attachedList
     * @return
     */
    public Long write(List<MultipartFile> attachedList, final Integer proId) {
        final String url = attachedPath + UUID.randomUUID();
        new File(url).mkdirs();
        Long count;
        count = attachedList.parallelStream()
                .map(attachedFile -> {
                    final String path = url + "/" + attachedFile.getOriginalFilename();
                    try (FileOutputStream out = new FileOutputStream(path)) {
                        out.write(attachedFile.getBytes());
                        Attached attached = Attached.builder().proId(proId).url(path).build();
                        attachedPaths.add(attached);
                        return true;
                    } catch (Exception e) {
                        return false;
                    }
                })
                .count();
        return count;
    }

    /**
     * 向磁盘写入文件（单个文件）
     *
     * @param attached
     * @return
     */
    public Integer write(MultipartFile attached) {
        return 0;
    }

    /**
     * 将文件记录到数据库中（多文件）
     *
     * @param attachedList
     * @return
     */
    public Long save(List<MultipartFile> attachedList, Integer ProdId) {
        Long writeCount = 0L;
        if (attachedList != null && attachedList.size() > 0) {
            writeCount = write(attachedList, ProdId);
            while(attachedPaths.size() > 0) {
                attachedMapper.insert(attachedPaths.poll());
            }
        }
        return writeCount;
    }

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
