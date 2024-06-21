package org.mysite.shopbackend.repository;

import org.mysite.shopbackend.Entity.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
