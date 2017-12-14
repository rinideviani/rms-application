import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs'; 

import EmployeeProfileContainer from './EmployeeProfileContainer'; 
import EmployeeGradeDisplay from './EmployeeGradeDisplay' 
import EmployeeFamilyDisplay from './EmployeeFamilyDisplay'
import EmployeeWorkHistoryDisplay from './EmployeeWorkHistoryDisplay'

//icons
import HomeIcon from 'react-icons/lib/fa/home'
import IoPerson from 'react-icons/lib/io/person'
import IoClock from 'react-icons/lib/io/clock'
import GoLocation from 'react-icons/lib/go/location'
 
import MdPeople from 'react-icons/lib/md/people'
import MdInfo from 'react-icons/lib/md/info'


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400 
  } ,
  tabs:{
    width:'915px'
  }
};

 export class EmployeeDetailTab extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a' 
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value 
    });
  };

   
  render() { 
    // console.log('callBack in detail tab', this.props.tabKey.id) ; 
    return (
      <Tabs style={styles.tabs} 
        value={this.state.value}
        onChange={this.handleChange} >
        
            <Tab icon={<IoPerson />} value="a">
               <div > 
                <EmployeeProfileContainer employeeById={this.props.employeeById} />  
               </div>   
            </Tab>

            <Tab icon={<IoClock />} value="b">
              <div>
                 <EmployeeWorkHistoryDisplay  employeeById={this.props.employeeById}/>
              </div>
            </Tab>
            
            <Tab  icon={<MdInfo />}  value="c"> 
               <EmployeeGradeDisplay employeeById={this.props.employeeById} /> 
            </Tab>
            
            <Tab icon={<MdPeople />} value="d"> 
                <EmployeeFamilyDisplay employeeById={this.props.employeeById} /> 
            </Tab>
            
            <Tab icon={<HomeIcon />} value="e">
              <div>
                <h2 style={styles.headline}>Address</h2> 
              </div>
            </Tab>
            
            <Tab icon={<GoLocation />} value="f">
              <div>
                <h2 style={styles.headline}>Location</h2>
                <p>
                  Under developed.
                </p>
              </div>
            </Tab>
            
      </Tabs>
    );
  }
}
 