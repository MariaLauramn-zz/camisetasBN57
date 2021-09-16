package org.camisetas.camisetasapp.controllers;

import org.camisetas.camisetasapp.models.Shirt;
import org.camisetas.camisetasapp.models.ShirtRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;
import java.util.Optional;


@RestController
@CrossOrigin
public class ShirtController {

    private ShirtRepository shirtRepository;


    @Autowired
    public ShirtController(ShirtRepository shirtRepository) {
        this.shirtRepository = shirtRepository;
    }

    @GetMapping("/shirts")
    public List<Shirt> allShirts() {
        return shirtRepository.findAll();
    }

    @PostMapping("/shirts")
    public Shirt saveShirt(@RequestBody Shirt shirt) {
        return shirtRepository.save(shirt);
    }

    @DeleteMapping("/shirts/{id}")
    public ResponseEntity<String> deleteShirt(@PathVariable Long id) {
        shirtRepository.deleteById(id);
        return ResponseEntity.of(Optional.of("eliminada shirt"));
    }

}
