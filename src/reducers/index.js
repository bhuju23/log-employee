import logReducer from './log';
import loginReducer from './logininput';
import fetchReducer from './fetchemployees';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    log: logReducer,
    login: loginReducer,
    fetch: fetchReducer
})

export default rootReducer;