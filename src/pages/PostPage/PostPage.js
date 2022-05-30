import React, {useEffect, useState} from 'react';
import {PostService} from "../../services";
import {Post} from "../../components";

const PostPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        PostService.getAll().then(({data}) => setPosts(data))
    }, [])

    return (
        <div>
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {PostPage};