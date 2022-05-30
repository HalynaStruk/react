import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {PostService} from "../../services";
import {PostDetails} from "../../components";

const SinglePostPage = () => {
    const {state} = useLocation();
    const [post, setPost] = useState(state);
    const {id} = useParams(); // відловлює id прописану в App
    // <Route path={':id'} element={<SinglePostPage/>}/>

    useEffect(()=>{
        if(!state) {
            PostService.getById(id).then(({data})=> setPost(data))
        } else {
            setPost(state);
        }

    }, [id, state])

    return (
        <div>
            {post && <PostDetails post={post}/>}
        </div>
    );
};

export {SinglePostPage};