package com.kuehne.nagel.test.exception;



import com.fasterxml.jackson.databind.exc.InvalidFormatException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;


@Slf4j
@ControllerAdvice
public class CitiesExceptionController {

    @ExceptionHandler(value = InvalidRequestException.class)
    public ResponseEntity<Object> exception(InvalidRequestException exception) {
        return new ResponseEntity<>(exception.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(value = NoSuchElementException.class)
    public ResponseEntity<Object> exception(NoSuchElementException exception) {
        return new ResponseEntity<>(exception.getMessage(), HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(value = NumberFormatException.class)
    public ResponseEntity<Object> exception(NumberFormatException exception) {
        return new ResponseEntity<>(exception.getMessage(), HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler(value = InvalidFormatException.class)
    public ResponseEntity<Object> exception(InvalidFormatException exception) {
        return new ResponseEntity<>(exception.getOriginalMessage(), HttpStatus.BAD_REQUEST);
    }


//    @ExceptionHandler(value = Exception.class)
//    public ResponseEntity<Object> exception(Exception exception) {
//        log.info(exception.getMessage());
//        return new ResponseEntity<>(exception.getLocalizedMessage(), HttpStatus.BAD_REQUEST);
//    }

}
