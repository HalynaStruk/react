import {createContext, useState} from "react";

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const login = (newUser, cb) => {
        setUser(newUser);
        cb();
    }
    const logOut = (cb) => {
        setUser(null);
        cb();
    }

    const value = {user, login, logOut}
    return (
        <div>
            <AuthContext.Provider value={value}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export {AuthProvider, AuthContext};