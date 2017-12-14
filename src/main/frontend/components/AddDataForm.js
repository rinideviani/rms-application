import React from 'react';
import {
  Step,
  Stepper,
  StepLabel 
} from 'material-ui/Stepper';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import ExpandTransition from 'material-ui/internal/ExpandTransition';
import TextField from 'material-ui/TextField'; 
import Upload from 'material-ui-upload/Upload';

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
    nationality: '',
    maritalStatus: '',
    phone: '' ,
    location:'',
    avatar:'',
    dob:''

  };

 onChange = (e) => {
        // Because we named the inputs to match their corresponding values in state, it's
        // super easy to update the state
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
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

                    <TextField
                      name="gender" 
                      style={textStyle} 
                      disabled={false}
                      floatingLabelText="Gender"
                      value={this.state.gender}
                       onChange={this.onChange}
                    /><br /> 
                </div> 
          
        );
      case 1:
        return (
        <div style={mainBody}> 
               
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
                </div> 
           
        );
      case 2:
        return (
           <div style={mainBody}> 
               
              <TextField 
              name="location" 
              style={textStyle} 
              disabled={false}
              floatingLabelText="Location"
              value={this.state.location}
              onChange={this.onChange}
              /><br />
 

             <Upload 
             name="avatar" 
             label="Add" 
             onFileLoad={this.onFileLoad}
             value={this.state.avatar}
             />

                  
          </div> 
        );
      default:
        return 'Reset Data';
    }
  }

  renderContent() {
    const {finished, stepIndex} = this.state;
    const contentStyle = {margin: '0 16px', overflow: 'hidden'};

    if (finished) {
      return (
        <div style={contentStyle}>
          <p>
            <a
              href="#"
              onClick={(event) => {

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
        <div style={{marginTop: 24, marginBottom: 12}}>
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            onClick={this.handlePrev}
            style={{marginRight: 12}}
          />
          <RaisedButton
            label={stepIndex === 2 ? 'Finish' : 'Next'}
            primary={true}
            onClick={this.handleNext}
          />
        </div>
      </div>
    );
  }

  render() {
    const {loading, stepIndex} = this.state;

    return (
      <div style={{width: '100%', maxWidth: 700, margin: 'auto'}}>
        <Stepper activeStep={stepIndex}>
          <Step>
            <StepLabel>Create New Employee</StepLabel>
          </Step>
          <Step>
            <StepLabel>Employee Profile</StepLabel>
          </Step>
          <Step>
            <StepLabel>More Data</StepLabel>
          </Step>
        </Stepper>
        <ExpandTransition loading={loading} open={true}>
          {this.renderContent()}
        </ExpandTransition>
      </div>
    );
  }
}

export default AddDataForm;