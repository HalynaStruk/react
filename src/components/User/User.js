import React from 'react';


const User = ({user, getUserId, getUser}) => {
    const {id, name, username} = user;

    return (
        <div>
            {id} -- {name} -- {username}
            <button onClick={()=>{
                getUserId(id)
                getUser(user)
            }}>click</button>
        </div>
    );
};

export {User};