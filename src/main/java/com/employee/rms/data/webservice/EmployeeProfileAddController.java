package com.employee.rms.data.webservice;

import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.employee.rms.business.domain.EmployeeProfile;
import com.employee.rms.data.entity.Employee;
import com.employee.rms.data.repository.AddEmployeeRepository;
import com.employee.rms.data.repository.EmployeeRepository;

@RestController 
@RequestMapping(path = "/employees/{id}/add")
public class EmployeeProfileAddController {
	AddEmployeeRepository employeeRepository ;
	
		@Autowired
	    public EmployeeProfileAddController(AddEmployeeRepository employeeRepository ) {
	        this.employeeRepository = employeeRepository; 
	    } 
		
	 protected EmployeeProfileAddController() { 
	    }
	 @RequestMapping(value="/employees", method= RequestMethod.POST)
	 	//@RequestMapping(method = RequestMethod.POST)
	    //@ResponseStatus(HttpStatus.CREATED)
	    public void createEmployeeProfile(@PathVariable(value = "id") int id, 
	    	@RequestBody @Validated EmployeeProfileDto employeeProfileDto) {
	 		EmployeeProfile employee = verifyEmployee(id);
	         employeeRepository.save(new EmployeeProfile ( 
	        		employeeProfileDto.getId(),
	        		employeeProfileDto.getFirstName(),
	        		employeeProfileDto.getLastName(),
	        		employeeProfileDto.getGender(),
	        		employeeProfileDto.getDob(), 
	        		employeeProfileDto.getNationality(), 
	        		employeeProfileDto.getMaritalStatus(), 
	        		employeeProfileDto.getPhone(),
	        		employeeProfileDto.getSubdivision(),
	        		employeeProfileDto.getStatus(),
	        		employeeProfileDto.getSuspendDate(), 
	        		employeeProfileDto.getHiredDate(), 
	        		employeeProfileDto.getGrade(),
	        		employeeProfileDto.getDivision(),
	        		employeeProfileDto.getEmail(),
	        		employeeProfileDto.getLocation(), 
	        		employeeProfileDto.getAvatar()
	        		
	        		)); 
	    }
	 	
	 	
	 	private EmployeeProfile verifyEmployee(int id) throws NoSuchElementException {
	 		EmployeeProfile emp = employeeRepository.findOne(id);
	        if (emp == null) {
	            throw new NoSuchElementException("Empployee does not exist " + id);
	        }
	        return emp;
	    }

}
