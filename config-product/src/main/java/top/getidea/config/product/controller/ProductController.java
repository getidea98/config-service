package top.getidea.config.product.controller;


import lombok.extern.slf4j.Slf4j;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import top.getidea.config.common.entity.product.Product;
import top.getidea.config.common.util.Result;
import top.getidea.config.common.valid.UpdateGroup;
import top.getidea.config.product.service.ProductService;

import javax.annotation.Resource;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

/**
 * @author Fange
 * date 2020/11/19
 */
@RestController
@RequestMapping("/api/product")
@Slf4j
public class ProductController {

    @Resource(name = "productService")
    private ProductService productService;

    @PutMapping("/updateProduct")
    public Result updateProduct(@RequestPart("docs") MultipartFile[] attacheds, @Validated(UpdateGroup.class) @RequestPart("product") Product product, @RequestPart("deletedAttachedId") Integer[] deletedAttachedId, @RequestHeader("username") String language) {
        return productService.updateProduct(attacheds, product, deletedAttachedId, language);
    }


    @GetMapping("/getList")
    public Result getList(@RequestParam Integer pageNum, @RequestParam Integer pageSize, @RequestParam(required = false) String key) {
        return productService.getList(pageNum, pageSize, key);
    }

    @GetMapping("/getProductDetails")
    public Result getProducts(@RequestParam Integer id) {
        return productService.getProducts(id);
    }


    @PostMapping("/addProduct")
    public Result addProduct(@RequestPart("docs") MultipartFile[] attached, @RequestPart("newProduct") Product newProduct) {
        List<MultipartFile> docList = Arrays.stream(attached).collect(Collectors.toList());
        return productService.addProduct(docList, newProduct);
    }

    @DeleteMapping("/delete")
    public Result deleteProduct(@RequestParam("id") Integer[] ids) {
        return productService.deleteProduct(ids);
    }

}