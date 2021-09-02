package org.camisetas.camisetasapp.models;

import javax.persistence.*;

@Entity
@Table(name = "shirts")
public class Shirt {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String size;
    private String color;
    private boolean price;


    public Shirt(Long id, String name, String size, String color, boolean price) {
        this.name= name;
        this.size = size;
        this.color = color;
        this.price = price;
    }

    public Shirt() {

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public boolean isPrice() {
        return price;
    }

    public void setPrice(boolean price) {
        this.price = price;
    }
}
