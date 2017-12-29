import React from 'react'; 
import EmployeeProfileDisplay from './EmployeeProfileDisplay';   

export default class EmployeeProfileContainer extends React.Component{
  
  render(){
   // console.log('empId',this.props.empId) 
   const  employeeById  = this.props.employeeById;
   
    if (!employeeById)
    {
      return (<div></div>) 
    } 
     
      return (
        <EmployeeProfileDisplay 
          key={employeeById.id}
          id={employeeById.id}
          firstName={employeeById.firstName}
          lastName={employeeById.lastName}
          gender={employeeById.gender} 
          dob={employeeById.dob}
          nationality={employeeById.nationality}
          maritalStatus={employeeById.maritalStatus}
          phone={employeeById.phone}
          subdivision={employeeById.subdivision}
          status={employeeById.status}
          suspendDate={employeeById.suspendDate}
          hiredDate={employeeById.hiredDate}
          grade={employeeById.grade}
          division={employeeById.division}
          email={employeeById.email}
          avatar={employeeById.avatar}
          location={employeeById.location}
          > 
        </EmployeeProfileDisplay> 
      ) 
  }
}
 
 