package com.employee.rms.data.webservice;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.ResponseStatus;
 
import org.springframework.http.*;

import com.employee.rms.business.domain.EmployeeProfile;
import com.employee.rms.data.entity.Employee;
import com.employee.rms.data.repository.AddEmployeeRepository;
import com.employee.rms.data.repository.EmployeeRepository;


@RestController
public class EmployeeController {
	@Autowired
	private EmployeeRepository repository;
	private AddEmployeeRepository addRepository;
	
	@Autowired
    public EmployeeController(AddEmployeeRepository addRepository ) {
        this.addRepository =  addRepository; 
    } 
	
	@RequestMapping(value="/employees", method= RequestMethod.GET)
	public List<Employee> findAll(@RequestParam(required=false) Integer id){
	       List<Employee> emps = new ArrayList<>();
	        if(null==id){
	            Iterable<Employee> results = this.repository.findAll();
	            results.forEach(emp-> {emps.add(emp);});
	        }else{
	        	Employee emp = this.repository.findById(id);
	            if(null!=emp) {
	                emps.add(emp);
	            }
	        }
	        return emps;
	    }
	
	
	 

	@RequestMapping(value="/employees", method= RequestMethod.POST ,produces = { "application/json" }) 
    @ResponseStatus(HttpStatus.CREATED)
    public void createEmployeeProfile(
    		//int id, 
    	@RequestBody @Validated EmployeeProfileDto employeeProfileDto) {
 		// EmployeeProfile employee = verifyEmployee(id);
         addRepository.save(new EmployeeProfile  ( 
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
		 EmployeeProfile emp = addRepository.findOne(id);
	        if (emp == null) {
	            throw new NoSuchElementException("Employee doesnot exist yet" + id);
	        }
	        return emp;
	    }
 	
	
	 @RequestMapping(method = RequestMethod.DELETE,value="/employees/{id}" )
	    public void delete(@PathVariable(value = "id") int id) {
		 EmployeeProfile employeeProfile = verifyDeleteEmployee(id);
		  addRepository.delete(employeeProfile);
	    }
	 
	 
	 private EmployeeProfile verifyDeleteEmployee(int id ) throws NoSuchElementException {
		 EmployeeProfile employeeProfile = addRepository.findOne(id);
	        if (employeeProfile == null) {
	            throw new NoSuchElementException( id + "Not Found");
	        }
	        return employeeProfile;
	    }

	 
	 private EmployeeProfileDto toDto(EmployeeProfile employee) {
	        return new EmployeeProfileDto( 
	        		employee.getId(),
	        		employee.getFirstName(),
	        		employee.getLastName(),
	        		employee.getGender(),
	        		employee.getDob(), 
	        		employee.getNationality(), 
	        		employee.getMaritalStatus(), 
	        		employee.getPhone(),
	        		employee.getSubdivision(),
	        		employee.getStatus(),
	        		employee.getSuspendDate(), 
	        		employee.getHiredDate(), 
	        		employee.getGrade(),
	        		employee.getDivision(),
	        		employee.getEmail(),
	        		employee.getLocation(),
	        		employee.getAvatar() 
	        	);
	    }
	 
	 
	   @RequestMapping(method = RequestMethod.PUT,value="/employees")
	    public EmployeeProfileDto updateWithPut(
	       @RequestBody @Validated EmployeeProfileDto employeeProfileDto) {
		   EmployeeProfile employee = verifyDeleteEmployee(employeeProfileDto.getId());
		   
		   employee.setId(employeeProfileDto.getId());
		   employee.setFirstName(employeeProfileDto.getFirstName());
		   employee.setLastName(employeeProfileDto.getLastName());
		   
		   employee.setGender(employeeProfileDto.getGender());
		   employee.setDob(employeeProfileDto.getDob());
		   employee.setNationality(employeeProfileDto.getNationality());
		   employee.setMaritalStatus(employeeProfileDto.getMaritalStatus());
		   			 
		   employee.setPhone(employeeProfileDto.getPhone());
		   employee.setSubdivision(employeeProfileDto.getSubdivision());
		   employee.setStatus(employeeProfileDto.getStatus());
		   employee.setSuspendDate(employeeProfileDto.getSuspendDate());
		   
		   employee.setHiredDate(employeeProfileDto.getHiredDate());
		   employee.setGrade(employeeProfileDto.getGrade());
		   employee.setDivision(employeeProfileDto.getDivision());
		   employee.setEmail(employeeProfileDto.getEmail());
		   
		   employee.setLocation(employeeProfileDto.getLocation());  
		   employee.setAvatar(employeeProfileDto.getAvatar());
		    
		   return toDto(addRepository.save(employee));
	    }

}
