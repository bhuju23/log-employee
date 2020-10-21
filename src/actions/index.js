import axios from 'axios';

export const fetchEmployees = (input)=> async dispatch =>{
    dispatch({ type: 'FETCH_EMPLOYEES_PENDING'});

    try{
        const response = await axios.get(`http://localhost:4000/employees?name=${input}`);
        if(response.data.length===0){
            dispatch({ type: 'FETCH_EMPLOYEES_REJECTED'}); 
        }
        else{
            dispatch({ type: 'FETCH_EMPLOYEES_SUCCESS', payload: response.data[0]});
        }
    }
    catch{
        dispatch({ type: 'FETCH_EMPLOYEES_REJECTED'});    
    }

}


