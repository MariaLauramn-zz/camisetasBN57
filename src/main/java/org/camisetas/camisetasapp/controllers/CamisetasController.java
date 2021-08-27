package org.camisetas.camisetasapp.controllers;


import org.camisetas.camisetasapp.models.Camiseta;
import org.factoriaf5.libritos.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController

@RequestMapping("/camisetas")
public class CamisetasController {

    private CamisetasService camisetaService;

    @Autowired
    public CamisetasController(CamisetasService camisetaService) {
        this.camisetaService = camisetaService;
    }

    @GetMapping("")
    String listCamisetas(Model model) {
        List<Camiseta> camisetas = camisetaService.allCamisetas();
        model.addAttribute("title", "Camiseta list");
        model.addAttribute("camisetas", camisetas);
        return "camisetas/all";
    }

    @GetMapping("/new")
    String getForm(Model model){
        Camisetas camiseta = new Camisetas();
        model.addAttribute("camiseta", camiseta);
        model.addAttribute("title", "Create new camiseta");
        return "camisetas/new";
    }

    @PostMapping("/new")
    String addCamiseta(@ModelAttribute Camisetas camiseta) {
        camisetaService.save(camiseta);
        return "redirect:/camisetas";
    }

    @GetMapping("/edit/{id}")
    String editCamiseta(Model model, @PathVariable Long id){
        Camiseta camiseta = camisetaService.findById(id);
        model.addAttribute("camiseta", camiseta);
        model.addAttribute("title", "Edit camiseta");
        return "camisetas/new";
    }

    @GetMapping("/delete/{id}")
    String removeCamiseta(@PathVariable Long id){
        camisetasService.delete(id);
        return "redirect:/camisetas";
    }
}

