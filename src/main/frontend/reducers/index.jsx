import { combineReducers } from 'redux'; 
import employees from './userReducer';
import { reducer as formReducer } from 'redux-form';


const rootReducer = combineReducers({  
      employees,
      form:formReducer
});

export default rootReducer;
