package org.camisetas.camisetasapp.models;

import javax.persistence.*;

import java.io.Serializable;

import static javax.persistence.GenerationType.IDENTITY;
import static javax.persistence.GenerationType.SEQUENCE;

@Entity
@Table(name = "camiseta")
public class Camisetas implements Serializable {
    @Id
    @GeneratedValue(strategy = IDENTITY)
    private Long id;
    private String name;
    //private String price;
    //private String color;
    //private String gender;
    //private String size;
    //private String description;


    @Override
    public String toString() {
        return "Camiseta{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
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
}

