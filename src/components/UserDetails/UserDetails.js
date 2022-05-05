import React from 'react';

const UserDetails = ({userDetails, getUserId}) => {
    const {id, name, username, email} = userDetails;
    return (
        <div>
            <h2>id:{id}</h2>
            <h3>name:{name}</h3>
            <h3>username:{username}</h3>
            <h3>email:{email}</h3>
            <button onClick={()=>getUserId(id)}>Get posts</button>
        </div>
    );
};

export {UserDetails};