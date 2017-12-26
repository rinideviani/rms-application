import axios from "axios";
import React from 'react';

const BASE_URL='http://localhost:8080';

 

export{fetchUsers,submit};
function fetchUsers(){

	const url=`${BASE_URL}/employees`;
	return axios.get(url 
		//, { headers: { 'Access-Control-Allow-Origin': '*' }}
	).then(response => response.data);
 
}


function submit(value){

}