import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loadPosts} from "../redux/action.types";


const Posts = () => {

    let posts = useSelector(({postState}) => postState);
    let dispatch = useDispatch();


    useEffect(()=> {
        dispatch(loadPosts())
    }, [])
    return (
        <div>
            {posts.map(value => <div key={value.id}>{value.title}</div>)}
        </div>
    );
};

export {Posts};