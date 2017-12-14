package com.employee.rms.web.application;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*; 

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders; 
import org.springframework.web.context.WebApplicationContext; 



import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.*; 
import static org.mockito.BDDMockito.*;

import com.employee.rms.data.entity.Employee;
import com.employee.rms.data.repository.AddEmployeeRepository;
import com.employee.rms.data.repository.EmployeeRepository;
import com.employee.rms.data.webservice.EmployeeController;
import com.jayway.jsonpath.*;
 
@RunWith(SpringJUnit4ClassRunner.class)
@WebMvcTest(EmployeeController.class) 
public class EmployeeControllerTest {
	
    @MockBean
    private EmployeeRepository userService;
    private AddEmployeeRepository addUserService;
 
	@Autowired
	private MockMvc mockMvc;
	@Autowired
    private WebApplicationContext wac;
    
    @Before
    public void setup() {
        this.mockMvc = MockMvcBuilders.webAppContextSetup(this.wac).build();
    } 
    
	@Test
	public void getEmployee() throws Exception{  
		 
		List<Employee> mockEmployeeList=new ArrayList<>();
		Employee mockEmployee= new Employee(); 
		
		mockEmployee.setId(1);
		mockEmployee.setFirstName("Jorge"); 
		  
		mockEmployeeList.add(mockEmployee);
		
		given(userService.findAll()).willReturn(mockEmployeeList);
		 
		this.mockMvc.perform(get("/employees").accept(MediaType.parseMediaType("application/json;charset=UTF-8")))
        .andExpect(status().isOk())
        .andExpect(content().contentType("application/json;charset=UTF-8"))   
        .andExpect(jsonPath("$", hasSize(1))) 
        .andExpect(jsonPath("$[0].firstName", is("Jorge")))
        .andDo(MockMvcResultHandlers.print()); 
		 
	}
 
}
