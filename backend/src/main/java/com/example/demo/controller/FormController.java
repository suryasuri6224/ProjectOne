package com.example.demo.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.FormData;
import com.example.demo.service.FormService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*") // allow frontend
public class FormController {

    private final FormService service;

    public FormController(FormService service) {
        this.service = service;
    }

    @PostMapping("/submit")
    public String submitForm(@RequestBody FormData data) {
        return service.processForm(data);
    }

    @GetMapping("/test")
    public String test() {
        return "Backend is working!";
    }
}
