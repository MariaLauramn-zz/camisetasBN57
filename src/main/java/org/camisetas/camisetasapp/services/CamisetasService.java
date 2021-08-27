package org.camisetas.camisetasapp.services;


import org.camisetas.camisetasapp.models.CamisetaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CamisetaService {

    private final CamisetaRepository camisetaRepository;

    @Autowired
    public CamisetaService(CamisetaRepository camisetaRepository) {
        this.camisetaRepository = camisetaRepository;
    }

    public List<Camiseta> allCamisetas() {
        List<Camiseta> allCamisetas = (List<Camiseta>) camisetaRepository.findAll();
        return allCamisetas;
    }

    public void save(Camiseta camiseta) {
        camisetaRepository.save(camiseta);
    }

    public Camiseta findById(Long id) {
        return camisetaRepository.findById(id).orElse(null);
    }

    public void delete(Long id) {
        camisetaRepository.deleteById(id);
    }

}

