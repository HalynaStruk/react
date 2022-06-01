import React from 'react';
import {Outlet, NavLink, useNavigate} from 'react-router-dom';

import css from './MainLayout.module.css'
import {useAuth} from "../../hooks";

const MainLayout = () => {
    const navigate = useNavigate();
    const {user, logOut} = useAuth();

    return (
        <div>
           <div className={css.header}>
               <NavLink to="/home">Home</NavLink>
               <NavLink to="/users">Users</NavLink>
               <NavLink to="/posts" replace>Posts</NavLink> {/*replace затирає історію переходу на сторінку в даному випадку затре
               той перехід що буде перед тим як ми натиснемо на сторінку PostPage*/}
               <NavLink to="/about">About</NavLink>
               {/* коли ми використовуємо NavLink
                то при натискані на силку в неї зявляється class='active' */}
               {user && <h1>{user} <button onClick={()=> logOut(()=>navigate('/'))}>LogOut</button></h1>}

               {/*<Link to="/home">Home</Link>*/}
               {/*<Link to="/users">Users</Link>*/}
               {/*<Link to="/posts">Posts</Link>*/}
               {/*<Link to="/about">About</Link>*/}
           </div>
            <hr/>
            <div>
                <button onClick={()=>navigate(-1)}>prev</button>
                <button onClick={()=>navigate(1)}>next</button>
            </div>
            <Outlet/>
        </div>
    );
};

export {MainLayout};