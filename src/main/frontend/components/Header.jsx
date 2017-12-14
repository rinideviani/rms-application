import React, { PropTypes, Component } from 'react'; 

import AppBar from 'material-ui/AppBar';

const defaultStyle = {
  marginLeft: 20
};

class Header extends Component {
   

  render() {
    return (
      <header className="header">
 
          <AppBar title=" " /> 
            {
               /* 
               <h1 style={defaultStyle} >Employee name</h1>
               <TodoTextInput newTodo
                onSave={this.handleSave.bind(this)}
                placeholder="Add new employee" />*/
            }
 
          
      </header>
    );
  }
}

 

export default Header;
