package com.fh.shop.thymeleaf.brand.biz;


import com.fh.shop.thymeleaf.brand.po.Brand;
import com.fh.shop.thymeleaf.common.ServerResponse;

import java.util.List;

public interface IBrandService {

    List<Brand> findBrandList();

    void addBrand(Brand brand);

    void deleteBrand(Integer id);

    Brand toBrand(Integer id);

    void updateBrand(Brand brand);

}
