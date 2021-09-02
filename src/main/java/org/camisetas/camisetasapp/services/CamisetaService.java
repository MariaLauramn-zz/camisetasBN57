package org.camisetas.camisetasapp.services;


import org.camisetas.camisetasapp.models.Shirt;
import org.camisetas.camisetasapp.models.ShirtRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CamisetaService {

    private final ShirtRepository shirtRepository;

    @Autowired
    public CamisetaService (ShirtRepository shirtRepository) {
        this.shirtRepository = shirtRepository;
    }

    public List<Camiseta> allCamisetas() {
        List<Camiseta> allCamisetas = (List<Camiseta>) shirtRepository.findAll();
        return allCamisetas;
    }

    public void save(Camiseta camiseta) {
        shirtRepository.save(camiseta);
    }

    public Camiseta findById(Long id) {
        return shirtRepository.findById(id).orElse(null);
    }

    public void delete(Long id) {
        shirtRepository.deleteById(id);
    }

}
