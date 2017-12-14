import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui';

import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';  
 
import DatePicker from 'material-ui/DatePicker'; 


export default class EmployeeGradeDisplay extends React.Component{


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
           <TableRow >
                <TableHeaderColumn> DS </TableHeaderColumn >
                <TableHeaderColumn> Grade </TableHeaderColumn >
                <TableHeaderColumn> Start Date </TableHeaderColumn >
                <TableHeaderColumn> End Date </TableHeaderColumn >
                <TableHeaderColumn> Action </TableHeaderColumn >
           </TableRow>
 
         </TableHeader>

           <TableBody style={tableStyle}
            displayRowCheckbox={this.state.showCheckboxes}
            >
            {this.props.employeeById.gradeHistory.map((emp,index)=>(

              
              <TableRow key={index}>

                <TableRowColumn> {emp.ds}</TableRowColumn>
                <TableRowColumn> {emp.currentGrade}</TableRowColumn>
                <TableRowColumn >   
                    <DatePicker 
                      underlineStyle={{display: 'none'}}
                      name="startDate"
                      disabled={false} 
                      value={new Date(emp.startDate)}
                    />
                </TableRowColumn>

                <TableRowColumn  > 
                     <DatePicker 
                      underlineStyle={{display: 'none'}}
                      name="endDate"
                      disabled={false} 
                      value={new Date(emp.endDate)}
                      />

                </TableRowColumn>

                <TableRowColumn>  
                  Delete
                </TableRowColumn> 

              </TableRow>

            ))}
               
          </TableBody> 

      </Table>

     )
 

	}
  
}