import React, { Component, PropTypes } from "react"; 
import MainSection from '../components/MainSection'; 

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

// For Customization Options, edit  or use
// './src/material_ui_raw_theme_file.jsx' as a template.
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from '../app/material_ui_raw_theme_file'

import { EmployeeDetailTab }  from '../components/EmployeeDetailTab'; 
import  AddDataForm  from '../components/AddDataForm' 
import {fetchUsers} from '../actions/UserActions'; 
import * as employeeActions from '../actions/employeeActions'
 
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FaPowerOff from 'react-icons/lib/fa/power-off'
import GoGear from 'react-icons/lib/go/gear'

class App extends Component {
 
  constructor(){
    super(); 
    this.state={ users:[] ,person:[]};  
  } 
   
  getUsersDetail(){
    fetchUsers().then((users) => {
      this.setState({ users }); 
    });
  }

  componentDidMount(){
      this.getUsersDetail();
  }  
  
  mainAppCallBack = (keyData) => { 
          this.setState({keyData:keyData});   
  }   


 
  render() {   
        const appBarStyle={
        width:'100%',
        height:'50px',
        backgroundColor:'#5C6BC0',
        alignItems:'center' 
      }


      const {empData, actions} = this.props ;


      const rightButtons = (
        <div> 
          <IconButton>
            <GoGear size='25' color='white' /> 
          </IconButton> 
          <IconButton>
            <FaPowerOff size='25'color='white'/> 
          </IconButton>
           
        </div>
      );
        
     
  this.state.person=this.state.users.find(person => person.id === this.state.keyData)

  // console.log('emp',this.state.person)
    return (
      <div className="app"> 
          <MuiThemeProvider muiTheme={theme}>
            <div>
              <AppBar style={appBarStyle} zDepth={0}
                iconElementRight={rightButtons}   
              /> 
              {(this.props.location.pathname === "/")? 

              <div id="mainSection" style={{display: 'flex'}}> 

                 <MainSection items={this.state.users}
                  callBackFromMainSection={this.mainAppCallBack}/> 
 
               
              <div>  
                  <EmployeeDetailTab employeeById={this.state.person}/> 
              </div>

              </div> : 

               <AddDataForm/> 
            }
          </div>

          </MuiThemeProvider>   
      </div>
    );
  }
} 

//Map the state to props
function mapStateToProps(state,ownProps) { 
  return {
    employees: state.employees  
  };
}
  

//Map the action to props
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(employeeActions, dispatch)  
  };
}

//connect the component to the Redux Store
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App); 
