package com.employee.rms.business.domain;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity 
@Table(name="EMPLOYEE_DATA")
public class EmployeeProfile {
	
	public EmployeeProfile(int id, String firstName, String lastName,
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
	
	protected EmployeeProfile() {
	}
	 

}
