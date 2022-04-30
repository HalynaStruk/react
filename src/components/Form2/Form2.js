import React from 'react';
import {useState} from 'react';

const Form2 = () => {
    const [user, setUser] = useState({});
    const getUser = (e) => {
      setUser({...user,[e.target.name]:e.target.value})

    }
    return (
        <div>
            <div><label>Name:<input type="text" name={'name'} onChange={getUser}/></label></div>
            <div><label>Age:<input type="number" age={'age'} onChange={getUser}/></label></div>
            {JSON.stringify(user)}
        </div>
    );
};

export {Form2};