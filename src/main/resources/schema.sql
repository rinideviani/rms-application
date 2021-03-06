CREATE TABLE EMPLOYEE_DATA(
  EMP_ID BIGINT AUTO_INCREMENT PRIMARY KEY, 
  FIRST_NAME VARCHAR(16) NOT NULL,
  LAST_NAME VARCHAR(16) NOT NULL,
  GENDER VARCHAR(6) ,
  DOB VARCHAR(10)  ,
  NATIONALITY VARCHAR(50)  ,
  MARITAL_STATUS VARCHAR(10)  ,
  PHONE VARCHAR(15)  ,
  SUBDIVISION VARCHAR(8) ,
  STATUS VARCHAR(10)  ,
  SUSPEND_DATE VARCHAR(10),
  HIRED_DATE VARCHAR(10)  ,
  GRADE VARCHAR(10) ,
  DIVISION VARCHAR(10)  ,
  EMAIL VARCHAR(30)  ,
  LOCATION VARCHAR(10)  ,
  AVATAR BLOB 
);

--DROP TABLE IF EXISTS `GRADE_HISTORY`;

CREATE TABLE GRADE_HISTORY(
GRADE_ID BIGINT AUTO_INCREMENT PRIMARY KEY,
EMPLOYEE_ID BIGINT,
DS VARCHAR(5),
CURRENT_GRADE VARCHAR(5),
START_DATE VARCHAR(10),
END_DATE VARCHAR(10) 
);

ALTER TABLE GRADE_HISTORY ADD FOREIGN KEY (EMPLOYEE_ID) REFERENCES EMPLOYEE_DATA(EMP_ID);






