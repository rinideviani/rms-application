 

import * as types from '../actions/actionTypes'

export default function reducer(state={
  employees:[], 
  error: null
}, action){
  switch (action.type) {
    case types.LOAD_EMP_SUCCESS:{
      return action.employees
    }
   
     /*case types.LOAD_EMP_FAILED:{
       return {
                ...state,
                fetching: false,
                error: action.payload
              }
     }*/

  }
  return state;
}