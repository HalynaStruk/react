import React from 'react';
import {Outlet, NavLink} from 'react-router-dom';

import css from './MainLayout.module.css'

const MainLayout = () => {
    return (
        <div>
           <div className={css.header}>
               <NavLink to="/home">Home</NavLink>
               <NavLink to="/users">Users</NavLink>
               <NavLink to="/posts">Posts</NavLink>
               <NavLink to="/about">About</NavLink>
               {/* коли ми використовуємо NavLink
                то при натискані на силку в неї зявляється class='active' */}

               {/*<Link to="/home">Home</Link>*/}
               {/*<Link to="/users">Users</Link>*/}
               {/*<Link to="/posts">Posts</Link>*/}
               {/*<Link to="/about">About</Link>*/}
           </div>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};