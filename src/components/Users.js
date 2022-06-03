import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Users = () => {

    let defaultRootState = useSelector(state => state);
    let dispatch = useDispatch();

    return (
        <div>
            Users
        </div>
    );
};

export {Users};