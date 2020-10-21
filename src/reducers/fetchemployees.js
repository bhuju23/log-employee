const fetchReducer = (state = { 
    loading: false,
    data: null,
    error: null
}, action)=>{

    switch (action.type){
        case 'FETCH_EMPLOYEES_PENDING':
            return {...state, loading: true}

        case 'FETCH_EMPLOYEES_SUCCESS':
            return {...state, data: action.payload, loading: false }

        case 'FETCH_EMPLOYEES_REJECTED':
            return {...state, error: 'Wrong username'}    

        default:
            return state 
    }

}

export default fetchReducer;