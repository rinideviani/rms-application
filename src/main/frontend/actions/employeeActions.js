 
import employeeApi from '../api/employeeApi';

export const fetchSuccess = (employees)=>{
	return{
		type:'LOAD_EMP',employees
	}
};


export function loadEmployees() {  
  return function(dispatch) {
    return employeeApi.getAllEmployees().then(employees => {
      dispatch(fetchSuccess(employees));
    }).catch(error => {
      throw(error);
    });
  };
}


export function createEmployee(data){

  return fetch('http://localhost:8080/employees', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(data)  
    }).then(res => {
        return res;
    }).catch(err => err);

}

 



export function deleteEmployee(key){

    const request = new Request('http://localhost:8080/employees/'+(key),
    {
      method: 'DELETE'
    });

    return fetch(request).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
 
