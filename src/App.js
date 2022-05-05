import React, {useState} from 'react';

import {Posts, UserDetails, Users} from "./components";
import css from './App.module.css'
import {postService} from "./services";


const App = () => {
    const [userDetails, setUserDetails] = useState(null);
    const [posts, setPosts] = useState([]);

    const getUserId = async (userId) => {
        const {data} = await postService.getPostByUserId(userId);
        setPosts(data);
    }

    const trigger = () => {
        setPosts([])
    }

    return (
        <div>
            <div className={css.wrap}>
                <Users setUserDetails={setUserDetails} trigger={trigger}/>
                {userDetails && <UserDetails userDetails={userDetails} getUserId={getUserId}/>}
            </div>
            <Posts posts={posts}/>
        </div>
    );
};

export default App;