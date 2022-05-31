import React, {useEffect, useState} from 'react';
import {Outlet, useParams, useSearchParams} from "react-router-dom";

import {PostService} from "../../services";
import {Post} from "../../components";


const PostPage = () => {
    const {userId} = useParams();
    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useSearchParams({page:'1'})

    useEffect(()=>{
        if (userId) {
            PostService.getByUserId(userId).then(({data}) => setPosts(data))

        } else {
            PostService.getAll(query.get('page'), 10).then(({data}) => setPosts(data))
        }
    }, [userId, query])

    const nextPage = () => {
        // let page = query.get('page');
        // page = +page + 1
        // setQuery({page:page.toString()})

        // інший спосіб
        const queryObj = Object.fromEntries(query.entries()) // зробивши з query.entries() - Object ми можево витягнути
        // з нього всі його значення, які будуть прописані в урлі
        // query.entries() повертає ітератор
        // (грубо кажучи, це як витягувати з масиву по одній штуці)
        queryObj.page++ // те саме що let page = query.get('page'); page = +page + 1
        setQuery(queryObj);
    }

    return (
        <div style={{display:'flex'}}>
            <div>
                {posts.map(post => <Post key={post.id} post={post} flag={!userId}/>)}
                <button onClick={()=>nextPage()}>Next</button>
            </div>
            <div><Outlet/></div>
        </div>
    );
};

export {PostPage};