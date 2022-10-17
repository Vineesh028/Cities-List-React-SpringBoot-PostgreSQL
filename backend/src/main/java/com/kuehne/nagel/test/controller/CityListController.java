package com.kuehne.nagel.test.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.kuehne.nagel.test.model.City;
import com.kuehne.nagel.test.service.CityListService;

import lombok.RequiredArgsConstructor;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

import java.util.List;

import javax.validation.Valid;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/v1/cities")
@RequiredArgsConstructor
public class CityListController {
	
	 @Autowired
	 private CityListService cityListService;
	 
	 @PostMapping("/city")
	 @ResponseStatus(CREATED)
	 public ResponseEntity<City> createCity(@RequestBody City city) {

		 City newCity = cityListService.createCity(city);

	     return ResponseEntity.status(CREATED).body(newCity);
	 }

	 @Validated
	 @GetMapping("/")
	 @ResponseStatus(OK)
	 public ResponseEntity<List<City>> getAllCities() {

		List<City> cities = cityListService.getAllCities();

	     return ResponseEntity.status(OK).body(cities);
	 }
	 
	 
	 
	 @Validated
	 @GetMapping("/{id}")
	 @ResponseStatus(OK)
	 public ResponseEntity<City> getCity(@Valid @PathVariable("id") long id) {

		 City city = cityListService.getCity(id);

	     return ResponseEntity.status(OK).body(city);
	 }
	 
	 @Validated
	 @GetMapping("/city/{name}")
	 @ResponseStatus(OK)
	 public ResponseEntity<List<City>> getCities(@Valid @PathVariable("name") String cityName) {

		 List<City> cities = cityListService.getCities(cityName);

	     return ResponseEntity.status(OK).body(cities);
	 }
	 
	 @PutMapping("/{id}")
	 public ResponseEntity<City> replaceCity(@RequestBody City city, @PathVariable int id) {

		 City newCity = cityListService.changeCity(city, id);
		 return ResponseEntity.status(OK).body(newCity);
	  }


}
