package top.getidea.config.product.controller;


import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.WebDataBinder;
import org.springframework.web.bind.annotation.*;
import top.getidea.config.common.dto.ProductMetaDTO;
import top.getidea.config.common.util.Result;
import top.getidea.config.product.service.ProductService;

import javax.annotation.Resource;
import java.util.Map;

/**
 * @author Fange
 * date 2020/11/19
 */
@RestController
@RequestMapping("/api/product")
@Slf4j
@CrossOrigin
public class ProductController {

    @Resource(name = "productService")
    private ProductService productService;

    @InitBinder("productMeta")
    public void initBinderProductMeta(WebDataBinder binder){
        binder.setFieldDefaultPrefix("productMeta.");
    }

    @InitBinder("product")
    public void initBinderProduct(WebDataBinder binder){
        binder.setFieldDefaultPrefix("product.");
    }

    /**
     * 编辑产品
     * @param productMetaDTO 产品编辑后的信息
     * @return
     */
    @PutMapping("/updateProduct")
    public Result updateProduct(@RequestBody ProductMetaDTO productMetaDTO,@RequestHeader String username, @RequestHeader String token) {
        return productService.updateProduct(productMetaDTO.getProductMeta(), productMetaDTO.getProduct());
    }

    @GetMapping("/getList")
    public Result getList(@RequestParam Integer pageNum, @RequestParam Integer pageSize, @RequestParam(required = false) String key) {
        return productService.getList(pageNum, pageSize, key);
    }

    @GetMapping("/getProductsDetails")
    public Result<Map<String, Object>> getProductsDetails(@RequestParam Integer id) {
        return productService.getProducts(id);
    }

    @GetMapping("/getProductDetails")
    public Result<Map<String,Object>> getProductDetails(@RequestParam Integer id, @RequestParam String productVersion) {
        return productService.getProductDetails(id,productVersion);
    }


    /**
     * 创建项目，不是追加更新
     *
     * @param productMetaDTO 产品元信息
     * @return
     */
    @PostMapping("/addProduct")
    public Result addProduct(@RequestBody ProductMetaDTO productMetaDTO) {
        return productService.addProduct(productMetaDTO.getProductMeta(), productMetaDTO.getProduct());
    }

    @PutMapping("/appendProduct")
    public Result appendProduct(@RequestBody ProductMetaDTO productMetaDTO) {
        return productService.appendProduct(productMetaDTO.getProductMeta(), productMetaDTO.getProduct());
    }

    public Result deleteProduct(@RequestParam("id") Integer[] ids) {
        return productService.deleteProduct(ids);
    }

    /**
     * 根据请求头参数 【username】，查询用户管理的产品的数量
     *
     * @param username
     * @return
     */
    @GetMapping("/numberOfPossessions")
    public Result numberOfPossessions(@RequestHeader("username") String username) {
        return productService.numberOfPossessions(username);
    }

    /**
     * 计算产品的数量
     *
     * @return
     */
    @GetMapping("/productOfNumber")
    public Result productOfNumber() {
        return productService.productOfNumber();
    }

    @GetMapping("/getAllProductVersion")
    public Result getAllProductVersion(){
        return productService.getAllProductVersion();
    }
}