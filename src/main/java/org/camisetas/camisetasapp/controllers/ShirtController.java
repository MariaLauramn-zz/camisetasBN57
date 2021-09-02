package org.camisetas.camisetasapp.controllers;

import org.camisetas.camisetasapp.models.Shirt;
import org.camisetas.camisetasapp.models.ShirtRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class ShirtController {

    private ShirtRepository shirtRepository;

    @Autowired
    public ShirtController(ShirtRepository shirtRepository) {
        this.shirtRepository = shirtRepository;
    }


    @GetMapping("/shirts")
    public List<Shirt> allShirts() {
        return (List<Shirt>) shirtRepository.findAll();
    }

    @PostMapping("/shirts")
    public ResponseEntity<String> addShirt(@RequestBody Shirt shirt) {
        shirtRepository.save(shirt);
        return new ResponseEntity<>("Created", HttpStatus.OK);
    }
}