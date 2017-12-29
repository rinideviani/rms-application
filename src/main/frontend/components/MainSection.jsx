 //mainSection 
import React, { Component, PropTypes } from 'react';  
import MobileTearSheet from './MobileTearSheet';  
import PageSearch  from './PageSearch';    

export default class MainSection extends React.Component{
   
    mainSectionCallBack = (keyData) => { 
          this.props.callBackFromMainSection(keyData);  
    } 
 

  render(){
   
    return(
       <div id="mainSection" >  
          <MobileTearSheet  height={740} style={{border: '2px solid #d9d9d9', borderBottom: 'none', width:'500px'}} >
            <PageSearch items={this.props.items} callBackFromSearchPage={this.mainSectionCallBack} />
          </MobileTearSheet>  
 

       </div> 
    ) 
  }

}
  
 