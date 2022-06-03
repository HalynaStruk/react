import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadUsers} from "../redux/action.types";


const Users = () => {

    let users = useSelector(({userState}) => userState);
    let dispatch = useDispatch();

    useEffect(()=> {
        dispatch(loadUsers())
    }, [])

    return (
        <div>
            {users.map(value => <div key={value.id}>{value.name}</div>)}
        </div>
    );
};

export {Users};