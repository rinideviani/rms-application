package com.employee.rms.data.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.employee.rms.business.domain.EmployeeProfile;
import com.employee.rms.data.entity.Employee;

@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Integer> {
	Employee findById(int id );
	//EmployeeProfile findOne(int id);
 
	
}
