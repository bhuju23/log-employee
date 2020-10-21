import React, { useState } from 'react';
import  {useSelector} from 'react-redux';
import TimeField from 'react-simple-timefield';
import axios from 'axios';


const Employeedash = ()=>{

    const[starttime, setStartTime] = useState('');
    const[endtime, setEndTime] = useState('');
    const[log, setLog] = useState('');

    const selector = useSelector(state => state.fetch);
    console.log(selector);

    const employeeid = selector.data.id;

  

    const onStartChange = (e, time)=>{
        setStartTime(time);
    }

    const onEndChange = (e, time)=>{
        setEndTime(time);
    }

    const onInputChange = (e)=>{
        setLog(e.target.value);
    }

    const onSubmitHandler = async (e)=>{
        e.preventDefault();
       
        
        const res = await axios.post('http://localhost:4000/logs', {starttime, endtime, log, employeeid})
         console.log(res);

        
    
    }



    return(
        <div className="employee-dash">
            <h1>Welcome, {selector.data.name}</h1>
            <TimeField 
                onChange={onStartChange}
                value={starttime}
                className="ui input"
            />
            <TimeField 
                onChange={onEndChange}
                className="ui input"
                value={endtime}
            />
            <input className ="ui input" type="text"  onChange={onInputChange} />
            <button className="ui button" onClick={onSubmitHandler}>submit</button>
        </div>
    );
}

export default Employeedash;