package org.camisetas.camisetasapp.controllers;

import org.camisetas.camisetasapp.models.Shirt;
import org.camisetas.camisetasapp.models.ShirtRepository;
import org.camisetas.camisetasapp.services.ShirtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.camisetas.camisetasapp.services.ShirtService;
import java.io.IOException;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
public class ShirtController {

    private ShirtRepository shirtRepository;
    private ShirtService shirtService;

    @Autowired
    public ShirtController(ShirtRepository shirtRepository) {
        this.shirtRepository = shirtRepository;
    }

    @GetMapping("/shirts")
    public List<Shirt> allShirts() {
        return (List<Shirt>) shirtRepository.findAll();
    }

    @PostMapping("shirts/")
    public ResponseEntity<String> addShirt(@RequestBody Shirt shirt) {
        shirtRepository.save(shirt);
        return new ResponseEntity<>("Created", HttpStatus.OK);
    }
    @DeleteMapping("/shirts/{id}")
    public ResponseEntity<String> deleteShirt(@PathVariable Long id) {
        shirtRepository.deleteById(id);
        return ResponseEntity.of(Optional.of("eliminada shirt"));
    }

}
