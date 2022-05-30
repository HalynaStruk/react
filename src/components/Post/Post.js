import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div>
            {id} -- {title} <Link to={`${id}`} state={post}>get Details</Link>
        {/* state={post} тут ми передали пост який є по id*/}
        </div>
    );
};

export {Post};