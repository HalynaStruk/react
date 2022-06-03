import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";


const Users = () => {

    let defaultRootState = useSelector(({usersState}) => usersState);
    let dispatch = useDispatch();

    useEffect(()=> {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(users => {
                dispatch({type:'LOAD', payload: users})
            })
    }, [])

    return (
        <div>
            {defaultRootState.map(value => <div key={value.id}>{value.name}</div>)}
        </div>
    );
};

export {Users};