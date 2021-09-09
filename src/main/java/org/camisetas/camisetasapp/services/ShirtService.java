package org.camisetas.camisetasapp.services;

import org.camisetas.camisetasapp.models.Shirt;
import org.camisetas.camisetasapp.models.ShirtRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShirtService {
    private final ShirtRepository shirtRepository;

    @Autowired
    public ShirtService(ShirtRepository shirtRepository) {
        this.shirtRepository = shirtRepository;
    }

    public List<Shirt> allShirt() {
        List<Shirt> allShirt = (List<Shirt>) shirtRepository.findAll();
        return allShirt;
    }

    public void save(Shirt shirt) {
        shirtRepository.save(shirt);
    }

    public Shirt findById(Long id) {
        return shirtRepository.findById(id).orElse(null);
    }

    public void delete(Long id) {
        shirtRepository.deleteById(id);
    }

}
