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

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem'; 
 
import { updateEmployee } from '../actions/employeeActions';
import moment from 'moment'; 

export default class EmployeeProfileDisplay extends React.Component{ 
 


  state = { 
    firstName:this.props.firstName,
    lastName: this.props.lastName,
    gender: this.props.gender,
    dob:this.props.dob,
    nationality: this.props.nationality,
    maritalStatus: this.props.maritalStatus,
    phone: this.props.phone ,

    subdivision:this.props.subdivision,
    status:this.props.status,
    suspendDate:this.props.suspendDate,
    hiredDate:this.props.hiredDate,
    grade:this.props.grade,
    division:this.props.division,
    email:this.props.email,
    avatar:this.props.avatar,

    location:this.props.location,
    id:this.props.id

  };

   onChange = (e) => {
   // Because we named the inputs to match their corresponding values in state, it's
   // super easy to update the state
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

   onGenderFieldChange=(event, index, gender)=>{
     this.setState({gender}); 
  }

  onDobChange=(event, x) => {  
    this.setState({dob: moment(x).format('YYYY-MM-DD')})   
  }

  onHiredDateChange=(event, x) => {  
    this.setState({hiredDate: moment(x).format('YYYY-MM-DD')}) 
  }

  onSuspendDateChange=(event, x) => {  
    this.setState({suspendDate: moment(x).format('YYYY-MM-DD')}) 
  }


  render(){   
      const hiredDate = new Date(this.state.hiredDate); 
      const dob = new Date(this.state.dob);  
      const suspendDate=new Date(this.state.suspendDate) 
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
        height:'580px',
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
          <RaisedButton label="SAVE" 
             secondary={true} 
             style={raisedButtonStyle} 
              onClick= 
              {(event) => {

                event.preventDefault();
                
                console.log('value',this.state);
                updateEmployee(this.state);  
              }} 
           />   
        </div>
       );

  const leftButtons=(
   <div></div>
  );

 
     return( 
        <div>
          <div style={mainBody}>

           
              <MobileTearSheet style={containerStyle}  >
               <TextField 
                 name="firstName"
                 style={textStyle} 
                 disabled={false}
                 floatingLabelText="First Name"
                 value={this.state.firstName} 
                 onChange={this.onChange}
               /><br />

               <TextField
                name="lastName" 
                style={textStyle} 
                disabled={false}
                floatingLabelText="Last Name"
                value={this.state.lastName} 
                onChange={this.onChange}
             /><br />
 
                <SelectField
                      name="gender" 
                      style={textStyle} 
                      disabled={false}
                      floatingLabelText="Gender"
                      value={this.state.gender}
                      onChange={this.onGenderFieldChange} 
                       > 
                    <MenuItem value={'Female'} primaryText="Female" />
                    <MenuItem value={'Male'} primaryText="Male" />

                    </SelectField><br /> 


            <DatePicker  
                underlineStyle={textStyle} 
                disabled={false}
                floatingLabelText="DOB" 
                defaultDate={dob}
                onChange={this.onDobChange}
            /> 
               
            <TextField
                name="nationality" 
                style={textStyle} 
                disabled={false}
                floatingLabelText="Nationality"
                value={this.state.nationality}
                onChange={this.onChange}
            /><br /> 

            <TextField
                name="maritalStatus" 
                style={textStyle} 
                disabled={false}
                floatingLabelText="Marital Status"
                value={this.state.maritalStatus}
                onChange={this.onChange}
            /><br />

            <TextField
                name="phone" 
                style={textStyle} 
                disabled={false}
                floatingLabelText="Phone"
                value={this.state.phone}
                onChange={this.onChange}
            /><br />

            <TextField 
              name="location" 
              style={textStyle} 
              disabled={false}
              floatingLabelText="Location"
              value={this.state.location}
              onChange={this.onChange}
            /><br />
  
                
            </MobileTearSheet>
                
            <div>  
             <MobileTearSheet style={containerStyle} >

               <TextField 
                name="subdivision" 
                style={textStyle} 
                disabled={false}
                floatingLabelText="Subdivision"
                value={this.state.subdivision}
                onChange={this.onChange}
             /><br />

             <TextField
                name="status" 
                style={textStyle} 
                disabled={false}
                floatingLabelText="Status"
                value={this.state.status}
                onChange={this.onChange}
              /><br /> 

              <DatePicker  
                underlineStyle={textStyle}  
                disabled={false}
                floatingLabelText="Suspend Date" 
                defaultDate={suspendDate} 
                onChange={this.onSuspendDateChange} 
              />  
             

             <DatePicker 
                underlineStyle={textStyle}  
                disabled={false}
                floatingLabelText="Hired Date" 
                defaultDate={hiredDate}
                onChange={this.onHiredDateChange}
             />  
             
              <TextField
                name="grade" 
                style={textStyle} 
                disabled={false}
                floatingLabelText="Grade"
                value={this.state.grade}
                onChange={this.onChange} 
              /><br />

              <TextField
                name="division" 
                style={textStyle} 
                disabled={false}
                floatingLabelText="Division"
                value={this.state.division}
                onChange={this.onChange}

              /><br />

              <TextField
                name="email" 
                style={textStyle} 
                disabled={false}
                floatingLabelText="Email"
                value={this.state.email}
                onChange={this.onChange}

              /><br /> 
              
            </MobileTearSheet>
         
             
          </div> 
                <Avatar 
                size={80}
                src={'data:image/png;base64,' + this.state.avatar} 
                 />
               
       </div> 

            <AppBar iconElementRight={rightButtons}
            iconElementLeft={leftButtons}/> 
                      
      </div>

      )
   }
}