import React from 'react';

const User = ({user, setUserDetails, trigger}) => {
    const {id, name} = user;
    const click = () => {
        setUserDetails(user)
        trigger()
    }
    return (
        <div>
            {id}.) {name}
            <button onClick={()=>click()}>Get details</button>
        </div>
    );
};

export {User};