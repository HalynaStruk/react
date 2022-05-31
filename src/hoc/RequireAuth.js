import React from 'react';
import {useLocation} from "react-router-dom";
import {useAuth} from "../hooks";

const RequireAuth = ({children}) => {
    const location = useLocation();
    const {user} = useAuth();

    if (!user) {
        return <Navigate to={'/login'} state={location}/>
    }
    return (
        <div>
            RequireAuth
        </div>
    );
};

export {RequireAuth};