package org.camisetas.camisetasapp.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


    @RestController
    @CrossOrigin
    public class ShirtTypeController {

        @GetMapping("/shirts/types")
        public List<String> shirtTypes() {
            return List.of("vintage", "viajes");
        }
    }

