package com.albertodumonttdev.devspecai.controller;

import com.albertodumonttdev.devspecai.dto.SpecRequestDTO;
import com.albertodumonttdev.devspecai.dto.SpecResponseDTO;
import com.albertodumonttdev.devspecai.service.SpecGeneratorService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/spec")
@CrossOrigin(origins = {
        "http://localhost:5173",
        "https://devspecai.onrender.com",
        "http://devspecai.onrender.com"
})
public class SpecGeneratorController {

    @Autowired
    private SpecGeneratorService service;

    @PostMapping
    public ResponseEntity<SpecResponseDTO> generateSpec(@Valid @RequestBody  SpecRequestDTO request) {
        SpecResponseDTO response = service.generateSpecification(request);
        return ResponseEntity.ok(response);
    }
}
