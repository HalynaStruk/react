import React from 'react';

export const User = ({user, setUser}) => {
    const click = () => {
        setUser(user)
    }
    return (
        <div>
            {user.name}
            <input type="button" value="show info" onClick={click}/>
        </div>
    );
};

