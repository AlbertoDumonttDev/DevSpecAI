package com.albertodumonttdev.devspecai.service;

import com.albertodumonttdev.devspecai.dto.SpecRequestDTO;
import com.albertodumonttdev.devspecai.dto.SpecResponseDTO;
import com.albertodumonttdev.devspecai.exception.RequestException;
import com.albertodumonttdev.devspecai.utils.PromptUtil;
import com.albertodumonttdev.devspecai.utils.ResponseFormatter;
import org.springframework.stereotype.Service;
import com.cohere.api.Cohere;
import com.cohere.api.requests.ChatRequest;
import com.cohere.api.types.NonStreamedChatResponse;
import org.springframework.beans.factory.annotation.Value;

@Service
public class SpecGeneratorService {

    @Value("${cohere.api.key}")
    private String apiKey;

    public SpecResponseDTO generateSpecification(SpecRequestDTO request) {
        String prompt = PromptUtil.buildPrompt(request);

        Cohere cohere = Cohere.builder()
                .token(apiKey)
                .clientName("snippet")
                .build();

        try {
            NonStreamedChatResponse response = cohere.chat(
                    ChatRequest.builder()
                            .message(prompt)
                            .build()
            );

            return new SpecResponseDTO(ResponseFormatter.formatTextWithNewlines(response.getText()));

        } catch (Exception ex) {
            throw new RequestException("Error while calling Cohere API: " + ex.getMessage(), "ExternalApiError");
        }
    }
}
