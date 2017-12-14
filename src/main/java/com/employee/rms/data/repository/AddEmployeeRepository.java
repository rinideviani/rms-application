package com.employee.rms.data.repository;

import org.springframework.data.repository.CrudRepository;

import com.employee.rms.business.domain.EmployeeProfile; 

public interface AddEmployeeRepository extends CrudRepository<EmployeeProfile, Integer> {
	 EmployeeProfile findOne(int id); 
}
