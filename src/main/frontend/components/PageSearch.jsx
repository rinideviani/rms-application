import React, { Component } from 'react';

//material-ui
import {ListItem, makeSelectable, List} from 'material-ui/List';
import Avatar from 'material-ui/Avatar'; 
import {fetchUsers} from '../actions/UserActions';  
import PropTypes from 'prop-types';
import wrapState from './SelectedList' 
import Divider from 'material-ui/Divider'; 
import TextField from 'material-ui/TextField';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add'; 
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import AddDataForm from './AddDataForm'

import { deleteEmployee } from '../actions/employeeActions';

//icons
import ActionOfflinePin from 'material-ui/svg-icons/action/offline-pin';
import {orange500, blue500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import ContentSort from 'material-ui/svg-icons/content/sort'; 
import ActionDelete from 'material-ui/svg-icons/action/delete';  
import ToggleRadioButtonChecked from 'material-ui/svg-icons/toggle/radio-button-checked'

//lodash 
import sortBy from 'lodash/sortBy' 


const jumbotronStyle = {
	color: '#00B1E1',
    fontSize: 13 
};

const textStyle = {
	backgroundColor: 'blue'    
};
 
const individer = {
  backgroundColor: '#90A4AE'  
}; 

const styles = { 
  underlineStyle: {
  // borderColor: 'white',
  // width:'70px' ,
   //display:'none' 
   underlineShow:false
  } ,
  textFieldStyle:{
    margin:'0px 0px 0px 25px', 
    fontSize:15,
    paddingLeft:'2px',
    paddingTop:'2px' ,
    height:'30px',position:'relative',top:'5px' ,
    width:220
  } ,
  inputStyle:{
    bottom:'9px',
    color:'white'
  }
};

const contentAddStyle = {
    margin: 0,
    top: 'auto',
    left: 300,
    bottom: 20,
    right: 'auto',
    position: 'fixed'
};

 

  const rightIcons = (
    <div style={{width: '60px', height:'50px'}}> 
     <ToggleRadioButtonChecked  style={{size:'30px', height:'50px',width:'30px',color:'#7986CB' }}   />
        
    </div>
  );

  let SelectableList = makeSelectable(List);  
  SelectableList = wrapState(SelectableList);
  
export default class PageSearch extends Component{  

    constructor(){
    super();
    this.state={inputText: "", 
    addDialogOpen: false, 
    deleteDialogOpen: false,
    deleteButton: false }; 
    }    

     handleClick(keyData) {   
     this.setState({keyData:keyData});  
     this.props.callBackFromSearchPage(keyData); 
    }  

     componentWillReceiveProps(keyData) {
      this.setState({
      currentKey: this.state.keyData 
      }); 
    } 

   sortAscending(empName) {  

     this.setState ( 
      {sorted:sortBy(empName, function(o) { return o.firstName; })}
      );  
    }

 


  handleAddDialogOpen = () => {
    this.setState({addDialogOpen: true});
  };

    handleDeleteDialogOpen = () => {
    this.setState({deleteDialogOpen: true});
  };

  handleDeleteDialogClose = () => {
    this.setState({deleteDialogOpen: false});
  };

  handleAddDialogClose = () => {
    this.setState({addDialogOpen: false});
  };


  
    render(){   
        let that=this; 
        let languages;
       
        if(!this.state.sorted){
            languages = this.props.items 
        }else languages=this.state.sorted

        let  inputText = this.state.inputText.trim().toLowerCase();  
        if(inputText.length > 0){
            languages = languages.filter(function(emp){
                const fullName = emp.firstName+emp.lastName;
                return fullName.toLowerCase().match(inputText);
            }); 
        }    
        
        const addEmployeeDialogActions = [
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this.handleAddDialogClose}
            />,
            <FlatButton
              label="Submit"
              primary={true}
              keyboardFocused={true}
              onClick={this.handleAddDialogClose}
            /> 
          ];

          const deleteEmployeeDialogActions = [
              <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleDeleteDialogClose}
              />,
              <FlatButton
                label="Delete"
                primary={true}
                onClick={(event) => {

                event.preventDefault();
                
                console.log('id to delete',this.state.keyData);
                deleteEmployee(parseInt(this.state.keyData));  
                this.setState({deleteDialogOpen: false});
                 }  
                }

              /> 
            ];
   
    	   return( 
    				<div className="container"> 
            <FloatingActionButton style={contentAddStyle} onClick={this.handleAddDialogOpen}><ContentAdd />
            </FloatingActionButton>

              <Dialog
                  title="Create Employee"
                  //actions={addEmployeeDialogActions}
                  modal={false}
                  open={this.state.addDialogOpen}
                  onRequestClose={this.handleAddDialogClose}
                  autoScrollBodyContent={true} 
                >  
               <AddDataForm/>  
              </Dialog>


    				   <div style={{backgroundColor:'#7986CB' ,marginBottom:'9px',height:'46px' }}> 

                   <TextField style={styles.textFieldStyle}
                    id="text-field-search"
                    inputStyle={styles.inputStyle}
                    hintText='Search' 
                    hintStyle= {{color:'#C5CAE9'}}                    
                    // underlineStyle={styles.underlineStyle}
                    underlineShow={false}
                    value={this.state.inputText}
                    onChange={e => this.setState({inputText: e.target.value})}
                     />    

                    <IconButton 
                      onClick= {this.handleDeleteDialogOpen} >
                      <ActionDelete color='white'/>  
                    </IconButton>

                     <Dialog
                        actions={deleteEmployeeDialogActions}
                        modal={false}
                        open={this.state.deleteDialogOpen}
                        onRequestClose={this.handleClose}
                      >
                        Delete Employee id # {this.state.keyData}   ?
                      </Dialog>

                    <IconButton 
                      onClick={this.sortAscending.bind(this,this.props.items)} >
                      <ContentSort color='white'/> 
                    </IconButton>
                       
                </div>  
                  { 
                     languages.map(function(emp,index){  
                      return(
                          <div>  
                            <List defaultValue={0}   
                             className="list-group-item" key={index}>           
                              <ListItem className="listItem" 

                                 rightIcon={rightIcons}

                                 value= {that.state.keyData} 
                                 onClick={that.handleClick.bind(that,emp.id)} 

                                 primaryText={emp.firstName+" "+emp.lastName}
                                
                                 secondaryText={
                                  <p>
                                     {emp.grade} , {emp.division} <br />
                                     {emp.location}  ,  {emp.phone}
                                  </p>
                                    
                                }
                                secondaryTextLines={2}
                                leftAvatar={<Avatar size={50} src={'data:image/png;base64,' + emp.avatar} />} 
                            >
                            </ListItem >  
                            <Divider style={{backgroundColor: 'grey' }} />   
                          </List> 
                        </div>   
                      ) 
                    }) 
                  }  

		  </div>
  );

  }

}
 
