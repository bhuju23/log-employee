import fetchReducer from './fetchemployees';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    fetch: fetchReducer
})

export default rootReducer;