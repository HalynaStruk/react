import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {MainLayout} from "./layout";
import {AboutPage, HomePage, NotFoundPage, PostPage, SinglePostPage, SingleUserPage, UsersPage} from "./pages";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                {/* це означає що при відкритті сторінки одразу відкриватиметься HomePage */}
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'users'} element={<UsersPage/>}>
                    <Route path={':id'} element={<SingleUserPage/>}/>
                </Route>
                <Route path={'posts'} element={<PostPage/>}>
                    <Route path={':id'} element={<SinglePostPage/>}/>
                </Route>
                <Route path={'about'} element={<AboutPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
                {/* '*' означає, якщо жоден зі шляхів вище не відбувся,
                  тобто це означає все інше */}
            </Route>
        </Routes>
);
};

export default App;