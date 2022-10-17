package com.kuehne.nagel.test.entity;

import java.io.Serializable;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "cities")
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CityEntity  implements Serializable {
	
	  	
	 	@Id
	  	@NotNull
	    private long id;

	    @NotBlank
	    private String cityName;

	    @NotBlank
	    public String photo;


}
