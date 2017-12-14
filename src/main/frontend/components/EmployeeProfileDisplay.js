import React from "react";
import ReactDOM from "react-dom";  

//added for display 
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';
import MobileTearSheet from './MobileTearSheet';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker'; 
import Avatar from 'material-ui/Avatar';  
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
 
  

export default class EmployeeProfileDisplay extends React.Component{ 
 
  render(){   
      const hiredDate = new Date(this.props.hiredDate); 
      const dob = new Date(this.props.dob);   
     /* let suspendDate; 
      if(!this.props.suspendDate){
        suspendDate= this.props.suspendDate
      }else
       suspendDate = new Date(this.props.suspendDate);
*/

      const mainBody ={ 
        display: 'flex',
        width:"1000px" ,
        margin : "20px"
      };

      const containerStyle={
        width:'400px',
        height:'550px',
        margin : "10px",
        borderBottom: 'none'
        
      }

      const textStyle={
      width:'700px' 
      }

      const raisedButtonStyle = {
        margin: 12 
      };

       const rightButtons = (
        <div> 
          <RaisedButton label="CANCEL" secondary={true} style={raisedButtonStyle} />
          <RaisedButton label="SAVE" secondary={true} style={raisedButtonStyle}  />  
        </div>
      );

      const leftButtons=(
      <div> 
      </div>
      );

 
     return( 
        <div>
          <div style={mainBody}>

           
              <MobileTearSheet style={containerStyle}  >
               <TextField 
                 style={textStyle} 
                 disabled={false}
                 floatingLabelText="First Name"
                 defaultValue={this.props.firstName}
               /><br />

               <TextField
                style={textStyle} 
                disabled={false}
                floatingLabelText="Last Name"
                defaultValue={this.props.lastName} 
             /><br />

              <TextField
                style={textStyle} 
                disabled={false}
                floatingLabelText="Gender"
                defaultValue={this.props.gender}
             /><br />

            <DatePicker  
                underlineStyle={textStyle} 
                disabled={false}
                floatingLabelText="DOB" 
                defaultDate={dob}
            /> 
               
            <TextField
                style={textStyle} 
                disabled={false}
                floatingLabelText="Nationality"
                defaultValue={this.props.nationality}
            /><br /> 

            <TextField
                style={textStyle} 
                disabled={false}
                floatingLabelText="Marital Status"
                defaultValue={this.props.maritalStatus}
            /><br />

            <TextField
                style={textStyle} 
                disabled={false}
                floatingLabelText="Phone"
                defaultValue={this.props.phone}
            /><br />
                
            </MobileTearSheet>
                
            <div>  
             <MobileTearSheet style={containerStyle} >

               <TextField
                style={textStyle} 
                disabled={false}
                floatingLabelText="Subdivision"
                defaultValue={this.props.subdivision}
             /><br />

             <TextField
                style={textStyle} 
                disabled={false}
                floatingLabelText="Status"
                defaultValue={this.props.status}
              /><br />
         
           
                <TextField
                style={textStyle} 
                disabled={false}
                floatingLabelText="Suspend Date"
                defaultValue={this.props.suspendDate}
              /><br />
             

             <DatePicker 
                underlineStyle={textStyle}  
                disabled={false}
                floatingLabelText="Hired Date" 
                defaultDate={hiredDate}
             /> 
             
              <TextField
                style={textStyle} 
                disabled={false}
                floatingLabelText="Grade"
                defaultValue={this.props.grade}
              /><br />

              <TextField
                style={textStyle} 
                disabled={false}
                floatingLabelText="Division"
                defaultValue={this.props.division}
              /><br />

              <TextField
                style={textStyle} 
                disabled={false}
                floatingLabelText="Email"
                defaultValue={this.props.email}
              /><br /> 
              
            </MobileTearSheet>
         
             
          </div> 
                <Avatar 
                size={80}
                src={'data:image/png;base64,' + this.props.avatar} />
               
       </div> 

            <AppBar iconElementRight={rightButtons}
            iconElementLeft={leftButtons}/> 
                      
      </div>

      )
   }
}