package com.kuehne.nagel.test.exception;

import java.util.UUID;




public class NoSuchElementException extends RuntimeException {
    public NoSuchElementException(String message) {
        super(message);
    }

    public static NoSuchElementException recordNotFound(UUID id) {
        return new NoSuchElementException("RECORD_NOT_FOUND WITH ID :"+ id);
    }


}
