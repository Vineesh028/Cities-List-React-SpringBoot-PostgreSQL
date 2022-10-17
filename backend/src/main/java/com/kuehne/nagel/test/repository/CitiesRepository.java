package com.kuehne.nagel.test.repository;

import java.util.List;
import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.kuehne.nagel.test.entity.CityEntity;

@Repository
public interface CitiesRepository extends JpaRepository<CityEntity, Long> {
	
	CityEntity findById(long id);
	List<CityEntity> findByCityName(String cityName);
	
}
