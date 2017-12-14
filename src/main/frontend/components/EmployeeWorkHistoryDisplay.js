 import React from "react";
import ReactDOM from "react-dom";  

//added for display 
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import MobileTearSheet from './MobileTearSheet';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker'; 
import Avatar from 'material-ui/Avatar';   
import Subheader from 'material-ui/Subheader'; 

import {GridList, GridTile} from 'material-ui/GridList';
import ToggleRadioButtonChecked from 'material-ui/svg-icons/toggle/radio-button-checked'


import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui';


//icons 
import ContentInbox from 'material-ui/svg-icons/communication/business';
 
export default class EmployeeWorkHistoryDisplay extends React.Component{

	render(){

	 const mainBody ={ 
	 	display:'flex',
        flex:1,
        width:"900px" ,
        margin : "20px", 
	    flexWrap: 'wrap',
	    justifyContent: 'left'  
      };

       const dividerStyle ={  
        width:"200px"   
      };
		const companyName ={  
        fontWeight: 'bold'
      };

      const bottomLine ={  
        width:"800px" ,
        backgroundColor:'grey'

      };


 	  const tableStyle ={
      background: "none" , 
      height:"20px", 
      width:"1000px"
      };
   
    const styles = {

    	leftContainer: {
		    width: 200,
		    overflow: 'hidden',
		    margin: '20px auto 0' 
		 },
		rightContainer: {
		    width: 500,
		    overflow: 'hidden',
		    margin: '20px 0px 0px 80px' 
		 },
		 
	  	 
  	  	gridList: {
		    width: 500,
		    marginBottom:'15px'  

		  } 
    } 
 const  employee  = this.props.employeeById;
 if ( !employee )
        {
            return (<div> </div>) 
        } 
 
  
	return(
		   
			
	 <div style={mainBody}>  
		<List > 
			{this.props.employeeById.workHistory.map((emp,index)=>(
				
				<GridList  cellHeight='auto'  style={styles.gridList}  key={index}>  
						 	<div style={styles.leftContainer}>
							    <Subheader>  
		                           <TextField   
							         	underlineStyle={{display: 'none'}}
					                 	disabled={true}
					                	floatingLabelText={(new Date(emp.startDate)).toLocaleString("en-us",{month:"long"})
					                						 +" - "+ 
					                						 (new Date(emp.endDate)).toLocaleString("en-us",{month:"long"}) 
					                						}
					                	defaultValue={(new Date(emp.startDate)).toLocaleString("en-us",{year:"numeric"})
					                					+" - "+
					                					(new Date(emp.endDate)).toLocaleString("en-us",{year:"numeric"})
					                				}
			             			/> 
			             		</Subheader> 
						    
						     	<Divider style={dividerStyle} /> 
						        <ListItem style={companyName}
						          primaryText={emp.company}
						        />
						        <ListItem
						           primaryText={emp.jobName}
						        />
						    </div>
					       
						    <div style={styles.rightContainer}>
							       <h3>Job Descriptions</h3> 
		 						 {emp.jobDesc.map((desc,index)=>(
							         <ListItem   key={index} 
							          leftIcon={<ToggleRadioButtonChecked style={{height:'23px',width:'17px', color:'#37474F' }}   />}
							          primaryText={desc.jobDesc} 
							          /> 
							    ))}	
						    </div> 

					 	<Divider style={bottomLine} />
				
					 </GridList>   

					))} 
				</List>  
		   </div> 

		)
	}



}