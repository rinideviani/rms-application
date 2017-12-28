import React from 'react';
import {
  Step,
  Stepper,
  StepLabel 
} from 'material-ui/Stepper';

import MobileTearSheet from './MobileTearSheet';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import TextField from 'material-ui/TextField'; 
import Upload from 'material-ui-upload/Upload';
import DatePicker from 'material-ui/DatePicker'; 
import IconButton from 'material-ui/IconButton';   


import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import moment from 'moment';

import { createEmployee } from '../actions/employeeActions';
 


const mainBody ={  
margin : "20px"
};

const buttonStyle={
margin:"20px"
}


const textStyle={
width:'400px' 
}

const uploadButtonStyle={
  width:'40px',
  color:'red'
}

const containerStyle={
        width:'400px',
        height:'550px',
        margin : "10px",
        borderBottom: 'none'
        
      }

 


/**
 * A contrived example using a transition between steps
 */
class AddDataForm extends React.Component {
 
  state = {
    loading: false,
    finished: false,
    stepIndex: 0 ,

    firstName: '',
    lastName: '',
    gender: '',
    dob:'',
    nationality: '',
    maritalStatus: '',
    phone: '' ,

    subdivision:'',
    status:'',
    suspendDate:'',
    hiredDate:'',
    grade:'',
    division:'',
    email:'',
    location:'',
    avatar:''  

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

 onFileLoad = (e, file) => {
 console.log(e.target.result, file.name); 
 const state= this.state 
 state['avatar']=(e.target.result).slice(23);
 this.setState(state);
} 

  dummyAsync = (cb) => {
    this.setState({loading: true}, () => {
      this.asyncTimer = setTimeout(cb, 500);
    });
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex + 1,
        finished: stepIndex >= 2 
      }));
    }
  };



  handlePrev = () => {
    const {stepIndex} = this.state;
    if (!this.state.loading) {
      this.dummyAsync(() => this.setState({
        loading: false,
        stepIndex: stepIndex - 1 
      }));
    }
  };


 
_openFileDialog=()=>{
  const fileUploadDom = React.findDOMNode(this.refs.fileUpload);
  fileUploadDom.click();
} ;

resetValue= () => {
    this.setState({
    firstName: '',
    lastName: '',
    gender: '',
    dob:'',
    nationality: '',
    maritalStatus: '',
    phone: '' ,

    subdivision:'',
    status:'',
    suspendDate:'',
    hiredDate:'',
    grade:'',
    division:'',
    email:'',
    location:'',
    avatar:''  
    })
}

  getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
           
              <div style={mainBody}>  
               
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
                        floatingLabelText="Date of Birth"  
                        onChange={this.onDobChange}
                     /> <br />


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
                    onChange={this.onSuspendDateChange}
                 /> <br />
      

                 <DatePicker  
                    underlineStyle={textStyle}  
                    disabled={false}
                    floatingLabelText="Hired Date"  
                    onChange={this.onHiredDateChange}
                 /> <br />
                 
              
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
                  
                    
                     <Upload 
                     name="avatar" 
                     label="Add" 
                     onFileLoad={this.onFileLoad}
                     value={this.state.avatar}
                     buttonControl={IconButton}
                     />
 
                    

                </div> 
          
        );
          case 1:
            return (
              <div style={mainBody}>          
              </div> 
               
            );
          case 2:
            return (
              <div style={mainBody}> 
              </div> 
            );

          default:
            return 'Reset Data';
    }
  }

  renderContent() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px', overflow: 'hidden' };

    if (finished) {
      return (
        <div style={contentStyle}>
        
          <p>
            <a
              href="#"
              onClick= 
              {(event) => {

                event.preventDefault();
                
                console.log('value',this.state);
                createEmployee(this.state);
                
                this.setState({stepIndex: 0, finished: false});
              }}
            >
              Submit
            </a>  
          </p>
        </div>
      );
    }

    return (
      <div style={contentStyle}>
        <div>{this.getStepContent(stepIndex)}</div>
          <div style={{marginTop: 24, marginBottom: 12 }}>
              <RaisedButton
                label="Reset"
                ensabled={stepIndex === 0}
                style={{marginRight: 12, marginLeft:480}} 
                //onClick={this.handlePrev}
                onClick={this.resetValue}
                
              />
              <RaisedButton
                label={stepIndex === 0 ? 'Save' : 'Next'}
                primary={true}
               // onClick={this.handleNext}
               onClick={(event) => {

                    event.preventDefault();
                    
                    console.log('value',this.state);
                    createEmployee(this.state);
                    
                    this.setState({stepIndex: 0, finished: false});


                  }}
              />
        </div>
      </div>
    );
  }

  render() {
    const {loading, stepIndex} = this.state;

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        
        <ExpandTransition loading={loading} open={true}>
          {this.renderContent()}
        </ExpandTransition>
      </div>
    );
  }
}

export default AddDataForm;