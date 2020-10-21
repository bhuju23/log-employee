import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  fetchEmployees } from '../actions/index';
import { useHistory } from 'react-router-dom';

const Loginform = ()=>{
    const [input, setInput] = useState('');
    const history = useHistory();   

    const dispatch = useDispatch();
    const selector = useSelector(state => state.fetch);

    console.log(selector);

    const onInputChange = (e)=>{
        setInput(e.target.value);
    }

    useEffect(()=>{
        if(selector.error){
            alert('This Username does not exist');
        }

    },[selector])

    useEffect(() => {
        if(selector.data){
            history.push('/employeedashboard')
        }
    }, [selector])

    const onSubmitHandler = (e)=>{
        e.preventDefault();
        dispatch(fetchEmployees(input));
        
    }


    return(
        <div className="form-container">
            <form className="ui form" onSubmit={onSubmitHandler}>
                <div className="field">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" placeholder="Enter Your Name" onChange={onInputChange}/>
                </div>
                <button className="ui button" type="submit">Login</button>
            </form>
        </div>
    );
}

export default Loginform;