package top.getidea.config.common.dto;

import lombok.Data;
import top.getidea.config.common.entity.product.Product;
import top.getidea.config.common.entity.product.ProductMeta;

@Data
public class ProductMetaDTO {
    private ProductMeta productMeta;
    private Product product;
}
