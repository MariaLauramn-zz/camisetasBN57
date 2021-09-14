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
               new Shirt("Nubes amarilla", "Vintage", "Vintage", "Blanco", 10)

        ));
    }
}
