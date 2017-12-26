export default class EmployeesApi {  
  static getAllEmployees() {
    return fetch('http://localhost:8080/employees'
    	//,{mode:'no-cors' }
    	).then(response => {
      return response.json();
    }).catch(error => {
      return error;
    });
  }
}

 