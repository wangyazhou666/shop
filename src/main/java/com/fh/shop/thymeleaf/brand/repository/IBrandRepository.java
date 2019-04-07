package com.fh.shop.thymeleaf.brand.repository;


import com.fh.shop.thymeleaf.brand.po.Brand;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface IBrandRepository extends JpaRepository<Brand, Integer> {


    @Modifying
    @Query("delete from Brand where id =:id")
    @Transactional
    void deleteBrand(@Param("id") Integer id);

    @Modifying
    @Query("update Brand set brandName =:#{#brand.brandName} where id=:#{#brand.id}")
    @Transactional
    void updateBrand(@Param("brand") Brand brand);

}
