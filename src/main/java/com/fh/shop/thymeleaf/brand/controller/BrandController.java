package com.fh.shop.thymeleaf.brand.controller;



import com.fh.shop.thymeleaf.brand.biz.IBrandService;
import com.fh.shop.thymeleaf.brand.po.Brand;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

@Controller
public class BrandController {

    @Resource(name = "brandService")
    private IBrandService brandService;

    @RequestMapping("findBrandList")
    public String findBrandList(Model model) {
        List<Brand> brandList = brandService.findBrandList();
        model.addAttribute("brandList",brandList);
        return "brand";
    }

    @RequestMapping("toAdd")
    public String toAdd() {
        return "add";
    }
    @RequestMapping("addBrand")
    public String addBrand(Brand brand) {
        brandService.addBrand(brand);
        return "redirect:/findBrandList";
    }

    @RequestMapping("deleteBrand")
    public String deleteBrand(Integer id) {
        brandService.deleteBrand(id);
        return "redirect:/findBrandList";
    }


    @RequestMapping("toBrand")
    public String toBrand(Integer id,Model model) {
        Brand brand = brandService.toBrand(id);
        model.addAttribute("brand",brand);
        return "update";
    }

    @RequestMapping("updateBrand")
    public String updateBrand(Brand brand) {
        brandService.updateBrand(brand);
        return "redirect:/findBrandList";
    }


}
