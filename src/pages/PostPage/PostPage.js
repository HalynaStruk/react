import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {PostService} from "../../services";
import {Post} from "../../components";

const PostPage = () => {
    const {userId} = useParams();
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        if (userId) {
            PostService.getByUserId(userId).then(({data}) => setPosts(data))
        } else {
            PostService.getAll().then(({data}) => setPosts(data))
        }
    }, [userId])

    return (
        <div style={{display:'flex'}}>
            <div>{posts.map(post => <Post key={post.id} post={post}/>)}</div>
            <div><Outlet/></div>
        </div>
    );
};

export {PostPage};