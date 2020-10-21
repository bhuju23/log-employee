const loginReducer = (state = '', action)=>{
    if(action.type === 'LOGIN_INPUT'){
        return action.payload
    }

    return state;
}

export default loginReducer;