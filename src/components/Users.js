import React from 'react';
import {useSelector} from "react-redux";
import {User} from "./User";

const Users = () => {
    const {users} = useSelector(state => state.user)
    // users це те що є в файлі user.slice у const initialState = {users: []}
    // user це те що є в файлі store у rootReducer

    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};