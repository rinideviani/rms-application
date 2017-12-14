package com.employee.rms.data.webservice;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class EmployeeProfileDto {
	
	@NotNull
	private int id;  
	
	@Size(max=255)
	private String firstName; 
	private String lastName; 
	private String gender; 
	private String dob; 
	private String nationality; 
	private String maritalStatus; 
	private String phone;  
	private String subdivision; 
	private String status; 
	private String suspendDate; 
	private String hiredDate; 
	private String grade; 
	private String division; 
	private String email; 
	private String location;  
	private byte[] avatar;
	
	 public EmployeeProfileDto(int id, String firstName, String lastName,
			String gender, String dob, String nationality,
			String maritalStatus, String phone, String subdivision,
			String status, String suspendDate, String hiredDate, String grade,
			String division, String email, String location, byte[] avatar) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.dob = dob;
		this.nationality = nationality;
		this.maritalStatus = maritalStatus;
		this.phone = phone;
		this.subdivision = subdivision;
		this.status = status;
		this.suspendDate = suspendDate;
		this.hiredDate = hiredDate;
		this.grade = grade;
		this.division = division;
		this.email = email;
		this.location = location;
		this.avatar = avatar;
	}
	protected EmployeeProfileDto() {}
	public int getId() {
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
	public byte[] getAvatar() {
		return avatar;
	}
	public void setAvatar(byte[] avatar) {
		this.avatar = avatar;
	}

}
