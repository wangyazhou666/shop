package com.fh.shop.thymeleaf.brand.po;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "t_brand")
public class Brand implements Serializable {

    private static final long serialVersionUID = -916579258897514676L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "brandName")
    private String brandName;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getBrandName() {
        return brandName;
    }

    public void setBrandName(String brandName) {
        this.brandName = brandName;
    }
}
