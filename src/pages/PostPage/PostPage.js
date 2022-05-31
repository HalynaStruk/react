import React, {useContext, useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {PostService} from "../../services";
import {Post} from "../../components";
import {MyContext} from "../../index";

const PostPage = () => {
    const {userId} = useParams();
    const [posts, setPosts] = useState([]);
    const value = useContext(MyContext);
    useEffect(()=>{
        if (userId) {
            PostService.getByUserId(userId).then(({data}) => setPosts(data))
            console.log(value);
            value.name = 'Olia';
        } else {
            PostService.getAll().then(({data}) => setPosts(data))
        }
    }, [userId])

    return (
        <div style={{display:'flex'}}>
            <div>{posts.map(post => <Post key={post.id} post={post} flag={!userId}/>)}</div>
            <div><Outlet/></div>
        </div>
    );
};

export {PostPage};