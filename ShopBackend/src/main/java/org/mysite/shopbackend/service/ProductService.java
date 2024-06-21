package org.mysite.shopbackend.service;

import org.mysite.shopbackend.Entity.Product;

import java.util.List;

public interface ProductService {
    Product saveProduct(Product product);
    void deleteProduct(Long id);
    List<Product> findAllProducts();
}
