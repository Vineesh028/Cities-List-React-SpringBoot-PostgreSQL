package com.kuehne.nagel.test.service;


import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kuehne.nagel.test.entity.CityEntity;
import com.kuehne.nagel.test.model.City;
import com.kuehne.nagel.test.repository.CitiesRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@Service
@RequiredArgsConstructor
@Slf4j
public class CityListService {
	
	@Autowired
	private CitiesRepository citiesRepository;
	
    @Autowired
    private ModelMapper modelMapper;

	public City createCity(City city) {
		// TODO Auto-generated method stub
		return null;
	}

	public List<City> getAllCities() {
		
		return citiesRepository.findAll().stream().map(e ->modelMapper.map(e,City.class )).collect(Collectors.toList()) ;
	}

	
	public City getCity(long id) {
		
		return modelMapper.map(citiesRepository.findById(id), City.class);
		
	}

	public List<City> getCities(String cityName) {
		return citiesRepository.findByCityName(cityName).stream().map(e ->modelMapper.map(e,City.class )).collect(Collectors.toList()) ;
		
		
		
	}

	public City changeCity(City city, long id) {
		CityEntity cityEntity = citiesRepository.findById(id);
		System.err.println("City : "+city);
		System.err.println("city entity : "+cityEntity);
		cityEntity.setCityName(city.getCityName());
		cityEntity.setPhoto(city.getPhoto());
		citiesRepository.save(cityEntity);
		return modelMapper.map(cityEntity, City.class);
	}


}
