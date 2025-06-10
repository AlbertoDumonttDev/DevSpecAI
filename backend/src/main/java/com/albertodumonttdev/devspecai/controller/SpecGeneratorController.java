package com.albertodumonttdev.devspecai.controller;

import com.albertodumonttdev.devspecai.dto.SpecRequestDTO;
import com.albertodumonttdev.devspecai.dto.SpecResponseDTO;
import com.albertodumonttdev.devspecai.service.SpecGeneratorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/spec")
public class SpecGeneratorController {

    @Autowired
    private SpecGeneratorService service;

    @PostMapping
    public ResponseEntity<SpecResponseDTO> generateSpec(@RequestBody @Valid SpecRequestDTO request) {
        SpecResponseDTO response = service.generateSpecification(request);
        return ResponseEntity.ok(response);
    }
}
