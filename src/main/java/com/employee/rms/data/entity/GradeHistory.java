package com.employee.rms.data.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


@Entity
@Table(name="GRADE_HISTORY")
public class GradeHistory {
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	 
	public String getDs() {
		return ds;
	}
	public void setDs(String ds) {
		this.ds = ds;
	} 
	
	public String getCurrentGrade() {
		return currentGrade;
	}
	public void setCurrentGrade(String currentGrade) {
		this.currentGrade = currentGrade;
	}
	public String getStartDate() {
		return startDate;
	}
	public void setStartDate(String startDate) {
		this.startDate = startDate;
	}
	public String getEndDate() {
		return endDate;
	}
	public void setEndDate(String endDate) {
		this.endDate = endDate;
	}

	@Id
	@Column(name="GRADE_ID")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id; 
	 
	@Column(name="DS")
	private String ds;
	
	@Column(name="CURRENT_GRADE")
	private String currentGrade;
	
	@Column(name="START_DATE")
	private String startDate;
	
	@Column(name="END_DATE")
	private String endDate;
	
	/*public GradeHistory() { 
	} 

	private Employee employee; 
	@ManyToOne
	@JoinColumn(name="EMPLOYEE_ID")   
	public Employee getEmployee() {
		return employee;
	}  
	public void setEmployee(Employee employee) {
		this.employee = employee;
	}
	 */
 

}
