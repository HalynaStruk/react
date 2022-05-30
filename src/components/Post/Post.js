import React from 'react';
// import {useNavigate} from 'react-router-dom';
// import {Link} from "react-router-dom";
import {Button} from "../Button/Button";

const Post = ({post, flag}) => {
    // const navigate = useNavigate();
    const {id, title} = post;
    return (
        <div>
            {/*{id} -- {title} <Link to={`${id}`} state={post}>get Details</Link>*/}
        {/* state={post} тут ми передали пост який є по id*/}

            {id} -- {title}
            {
                flag && <Button to={`${id}`} state={post}>get Details</Button>
            }
            {/*<button onClick={()=>navigate('/users')}>go to users</button> /!* navigate з button не робити це приклад*!/*/}
        </div>
    );
};

export {Post};