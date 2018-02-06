package com.employee.rms.data.entity;

import java.io.Serializable;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id; 
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name="EMPLOYEE_DATA")
public class Employee implements Serializable {
	
	@Id
	@Column(name="EMP_ID")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id; 
	
	@Column(name="FIRST_NAME")
	private String firstName;
	
	@Column(name="LAST_NAME")
	private String lastName;
	
	@Column(name="GENDER")
	private String gender;
	
	@Column(name="DOB")
	private String dob;
	
	@Column(name="NATIONALITY")
	private String nationality;
	
	@Column(name="MARITAL_STATUS")
	private String maritalStatus;
	
	@Column(name="PHONE")
	private String phone;
	
	@Column(name="SUBDIVISION")
	private String subdivision;
	
	@Column(name="STATUS")
	private String status;
	
	@Column(name="SUSPEND_DATE")
	private String suspendDate;
	
	@Column(name="HIRED_DATE")
	private String hiredDate;
	
	@Column(name="GRADE")
	private String grade;
	
	@Column(name="DIVISION")
	private String division;
	
	@Column(name="EMAIL")
	private String email;
	
	@Column(name="LOCATION")
	private String location; 
	
	@Column(name="AVATAR")
	private byte[] avatar; 
	 

	public byte[] getAvatar() {
		return avatar;
	}
  

	public void setAvatar(byte[] avatar) {
		this.avatar = avatar;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getNationality() {
		return nationality;
	}

	public void setNationality(String nationality) {
		this.nationality = nationality;
	}

	public String getMaritalStatus() {
		return maritalStatus;
	}

	public void setMaritalStatus(String maritalStatus) {
		this.maritalStatus = maritalStatus;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getSubdivision() {
		return subdivision;
	}

	public void setSubdivision(String subdivision) {
		this.subdivision = subdivision;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getSuspendDate() {
		return suspendDate;
	}

	public void setSuspendDate(String suspendDate) {
		this.suspendDate = suspendDate;
	}

	public String getHiredDate() {
		return hiredDate;
	}

	public void setHiredDate(String hiredDate) {
		this.hiredDate = hiredDate;
	}

	public String getGrade() {
		return grade;
	}

	public void setGrade(String grade) {
		this.grade = grade;
	}

	public String getDivision() {
		return division;
	}

	public void setDivision(String division) {
		this.division = division;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public long getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
 

	
	 @ManyToOne 
	 private GradeHistory gradeHistory;
	

	public GradeHistory getGradeHistory() {
		return gradeHistory;
	}


	public void setGradeHistory(GradeHistory gradeHistory) {
		this.gradeHistory = gradeHistory;
	} 

}
