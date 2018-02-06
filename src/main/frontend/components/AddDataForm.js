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
import AutoComplete from 'material-ui/AutoComplete';
import moment from 'moment'; 

import { createEmployee } from '../actions/employeeActions';
 import validator from 'validator';
 


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


 const nationalities =  ['Afghanistan','Albania','Algeria','American Samoa','Andorra','Angola','Anguilla','Antarctica','Antigua and Barbuda','Argentina','Armenia','Aruba','Australia','Austria','Azerbaijan','Bahamas','Bahrain','Bangladesh','Barbados','Belarus','Belgium','Belize','Benin','Bermuda','Bhutan','Bolivia','Bosnia and Herzegowina','Botswana','Bouvet Island','Brazil','British Indian Ocean Territory','Brunei Darussalam','Bulgaria','Burkina Faso','Burundi','Cambodia','Cameroon','Canada','Cape Verde','Cayman Islands','Central African Republic','Chad','Chile','China','Christmas Island','Cocos (Keeling) Islands','Colombia','Comoros','Congo','Congo, the Democratic Republic of the','Cook Islands','Costa Rica','Cote d Ivoire','Croatia (Hrvatska)','Cuba','Cyprus','Czech Republic','Denmark','Djibouti','Dominica','Dominican Republic','East Timor','Ecuador','Egypt','El Salvador','Equatorial Guinea','Eritrea','Estonia','Ethiopia','Falkland Islands (Malvinas)','Faroe Islands','Fiji','Finland','France','France Metropolitan','French Guiana','French Polynesia','French Southern Territories','Gabon','Gambia','Georgia','Germany','Ghana','Gibraltar','Greece','Greenland','Grenada','Guadeloupe','Guam','Guatemala','Guinea','Guinea-Bissau','Guyana','Haiti','Heard and Mc Donald Islands','Holy See (Vatican City State)','Honduras','Hong Kong','Hungary','Iceland','India','Indonesia','Iran (Islamic Republic of)','Iraq','Ireland','Israel','Italy','Jamaica','Japan','Jordan','Kazakhstan','Kenya','Kiribati','Korea, Democratic People Republic of','Korea, Republic of','Kuwait','Kyrgyzstan','Lao, People Democratic Republic','Latvia','Lebanon','Lesotho','Liberia','Libyan Arab Jamahiriya','Liechtenstein','Lithuania','Luxembourg','Macau','Macedonia, The Former Yugoslav Republic of','Madagascar','Malawi','Malaysia','Maldives','Mali','Malta','Marshall Islands','Martinique','Mauritania','Mauritius','Mayotte','Mexico','Micronesia, Federated States of','Moldova, Republic of','Monaco','Mongolia','Montserrat','Morocco','Mozambique','Myanmar','Namibia','Nauru','Nepal','Netherlands','Netherlands Antilles','New Caledonia','New Zealand','Nicaragua','Niger','Nigeria','Niue','Norfolk Island','Northern Mariana Islands','Norway','Oman','Pakistan','Palau','Panama','Papua New Guinea','Paraguay','Peru','Philippines','Pitcairn','Poland','Portugal','Puerto Rico','Qatar','Reunion','Romania','Russian Federation','Rwanda','Saint Kitts and Nevis','Saint Lucia','Saint Vincent and the Grenadines','Samoa','San Marino','Sao Tome and Principe','Saudi Arabia','Senegal','Seychelles','Sierra Leone','Singapore','Slovakia (Slovak Republic)','Slovenia','Solomon Islands','Somalia','South Africa','South Georgia and the South Sandwich Islands','Spain','Sri Lanka','St. Helena','St. Pierre and Miquelon','Sudan','Suriname','Svalbard and Jan Mayen Islands','Swaziland','Sweden','Switzerland','Syrian Arab Republic','Taiwan, Province of China','Tajikistan','Tanzania, United Republic of','Thailand','Togo','Tokelau','Tonga','Trinidad and Tobago','Tunisia','Turkey','Turkmenistan','Turks and Caicos Islands','Tuvalu','Uganda','Ukraine','United Arab Emirates','United Kingdom','United States','United States Minor Outlying Islands','Uruguay','Uzbekistan','Vanuatu','Venezuela','Vietnam','Virgin Islands (British)','Virgin Islands (U.S.)','Wallis and Futuna Islands','Western Sahara','Yemen','Yugoslavia','Zambia','Zimbabwe' ]
 ;


 
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
 
 handleNationalityInput = (nationality) => {
    this.setState({ nationality});
  };

 onChange = (e) => {
   // Because we named the inputs to match their corresponding values in state, it's
   // super easy to update the state
    const state = this.state
    state[e.target.name] = e.target.value; 
    
    this.setState(state);
  }

  onGenderFieldChange=(event, index, gender)=>{
     this.setState({ gender});  
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
 
                      <AutoComplete
                        floatingLabelText="Nationality"
                        filter={AutoComplete.caseInsensitiveFilter}
                        dataSource={nationalities}
                        onUpdateInput={this.handleNationalityInput}
                      /> <br />

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
                      errorText={this.state.emailFormatError} 
                      type='email'
                      required={true}
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
               // ensabled={stepIndex === 0}
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