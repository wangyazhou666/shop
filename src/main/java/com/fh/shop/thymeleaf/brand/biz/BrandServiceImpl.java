package com.fh.shop.thymeleaf.brand.biz;


import com.fh.shop.thymeleaf.brand.po.Brand;
import com.fh.shop.thymeleaf.brand.repository.IBrandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service("brandService")
public class BrandServiceImpl implements IBrandService {
    @Autowired
    private IBrandRepository brandRepository;

    @Override
    public List<Brand> findBrandList() {
        List<Brand> all = brandRepository.findAll();
        return all;
    }

    @Override
    public void addBrand(Brand brand) {
        brandRepository.save(brand);
    }

    @Override
    public void deleteBrand(Integer id) {
        brandRepository.deleteBrand(id);
    }

    @Override
    public Brand toBrand(Integer id) {
        Brand brand = brandRepository.findOne(id);
        return brand;
    }

    @Override
    public void updateBrand(Brand brand) {
        brandRepository.updateBrand(brand);
    }




}
