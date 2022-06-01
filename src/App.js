import React from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {MainLayout} from "./layout";
import {
    AboutPage,
    HomePage,
    LoginPage,
    NotFoundPage,
    PostPage,
    SinglePostPage,
    SingleUserPage,
    UsersPage
} from "./pages";
import {RequireAuth} from "./hoc/RequireAuth";

const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                {/* це означає що при відкритті сторінки одразу відкриватиметься HomePage */}
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'users'} element={
                    <RequireAuth>
                        <UsersPage/>
                    </RequireAuth>
                }> {/* якщо ми хочемо щоб на UsersPage не можна було потрапити без логінації, то огортаємо наш UsersPage - RequireAuth*/}
                    <Route path={':userId'} element={<SingleUserPage/>}>
                        <Route path={'posts'} element={<PostPage/>}/>
                    </Route>
                </Route>
                <Route path={'posts'} element={<PostPage/>}>
                    <Route path={':id'} element={<SinglePostPage/>}/>
                </Route>
                <Route path={'about'} element={<AboutPage/>}/>
                <Route path={'/login'} element={<LoginPage/>}/>
                <Route path={'*'} element={<NotFoundPage/>}/>
                {/* '*' означає, якщо жоден зі шляхів вище не відбувся,
                  тобто це означає все інше */}
            </Route>
        </Routes>
);
};

export default App;