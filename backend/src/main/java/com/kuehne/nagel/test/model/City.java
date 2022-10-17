package com.kuehne.nagel.test.model;

import java.util.UUID;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class City {
	
	

	    @NotNull
	    public long id;

	    @NotBlank
	    public String cityName;
	    
	    @NotBlank
	    public String photo;

}
