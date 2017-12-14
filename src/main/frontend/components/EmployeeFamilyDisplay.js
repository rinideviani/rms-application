import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui'; 

import Checkbox from 'material-ui/Checkbox';
import DatePicker from 'material-ui/DatePicker';  


export default class EmployeeFamilyDisplay extends React.Component{


 state = {
    fixedHeader: true,
    fixedFooter: true,
    stripedRows: true,
    showRowHover: false,
    selectable: true,
    multiSelectable: false,
    enableSelectAll: false,
    deselectOnClickaway: true,
    showCheckboxes: false,
    adjustCheckboxes: false,
    height: '300px' 
  };


	render(){
    const tableStyle ={
      background: "none" ,
      height:"20px",
      width:"1000px"
    };

    const styles = {
      block: {
        maxWidth: 250 
      },
      checkbox: {
        marginBottom: 16 ,
        underline: ''
      } 
    }; 


 
    const  employee  = this.props.employeeById;
     
    if ( !employee )
        {
            return (<div></div>) 
        } 
 
      
    return (
      <Table style={tableStyle} >     

          <TableHeader 
            displaySelectAll={this.state.showCheckboxes}
            adjustForCheckbox={this.state.showCheckboxes}
            enableSelectAll={this.state.enableSelectAll}
          >
              <TableRow   >
                <TableHeaderColumn> Name </TableHeaderColumn >
                <TableHeaderColumn> Gender </TableHeaderColumn >
                <TableHeaderColumn> DOB </TableHeaderColumn >
                <TableHeaderColumn> Type </TableHeaderColumn >
                <TableHeaderColumn> Active </TableHeaderColumn >
              </TableRow>
 
          </TableHeader>
               <TableBody style={tableStyle}
                displayRowCheckbox={this.state.showCheckboxes}
                >
                  {this.props.employeeById.familyMember.map((emp,index)=>(


                    <TableRow key={index}>


                      <TableRowColumn> {emp.name}</TableRowColumn>
                      <TableRowColumn> {emp.gender}</TableRowColumn>
                      <TableRowColumn> 
                          <DatePicker  
                          underlineStyle={{display: 'none'}}
                          name="dob"
                          disabled={false} 
                          value={new Date(emp.dob)}
                          />
                      </TableRowColumn>
                      <TableRowColumn> {emp.type}</TableRowColumn>
                      <TableRowColumn> 
                          <Checkbox 
                            style={styles.checkbox}
                            checked={emp.isActive}
                          /> 

                      </TableRowColumn>
               

                    </TableRow>


                  ))}


                </TableBody> 




        </Table>
     )
 

	}
  
}