package com.albertodumonttdev.devspecai.exception;

import lombok.Getter;

@Getter
public class RequestException extends RuntimeException {

    private final String errorCode;

    public RequestException(String message, String errorCode) {
        super(message);
        this.errorCode = errorCode;
    }
}