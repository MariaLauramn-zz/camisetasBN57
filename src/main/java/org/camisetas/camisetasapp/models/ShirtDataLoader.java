package org.camisetas.camisetasapp.models;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import javax.annotation.PostConstruct;
import java.util.List;


@Component
public class ShirtDataLoader {
    private ShirtRepository shirtRepository;

    @Autowired
    public ShirtDataLoader(ShirtRepository shirtRepository) {
        this.shirtRepository = shirtRepository;
    }

    @PostConstruct
    public void loadCamisetasShirts() {
        shirtRepository.deleteAll();
        shirtRepository.saveAll(List.of(
                new Shirt("Nubes amarillas", "Vintage", "S", "Blanco", 10, "100% algodón", "unisex", "foto"),
                new Shirt("Cielo Azul", "Vintage", "XL", "Negra", 25, "100% algodón", "unisex", "foto"),
                new Shirt("Nubes amarillas", "Vintage", "S", "Blanco", 10, "100% algodón", "unisex", "foto"),
                new Shirt("Cielo Azul", "Vintage", "XL", "Negra", 25, "100% algodón", "unisex", "foto"),
                new Shirt("Nubes amarillas", "Vintage", "S", "Blanco", 10, "100% algodón", "unisex", "foto"),
                new Shirt("Cielo Azul", "Vintage", "XL", "Negra", 25, "100% algodón", "unisex", "foto"),
                new Shirt("Nubes amarillas", "Vintage", "S", "Blanco", 10, "100% algodón", "unisex", "foto"),
                new Shirt("Cielo Azul", "Vintage", "XL", "Negra", 25, "100% algodón", "unisex", "foto")
        ));
    }
}
