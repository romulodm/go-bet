import { createContext, useEffect, useState, useContext } from "react";
import { loginRequest, registerRequest } from "../data/authentication";

interface AuthContextInterface {
    userSigned: boolean;
    user: object | null;
    handleLogin(): void;
    handleLogout(): void;
}

const AuthContext = createContext<AuthContextInterface>({} as AuthContextInterface);

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState<object | null>(null);

    useEffect(() => {
        const userOnStorage = sessionStorage.getItem('@App:user');
        if (userOnStorage) {
            setUser(JSON.parse(userOnStorage));
        }
    }, [])

    function handleLogin(user: object, token: string, refreshToken: string) {
        setUser(user);

        sessionStorage.setItem('@App:user', JSON.stringify(user))
        sessionStorage.setItem('@App:token', token)
        sessionStorage.setItem('@App:refreshToken', refreshToken)
    }

    function handleLogout() {
        setUser(null);

        sessionStorage.removeItem('@App:user')
        sessionStorage.removeItem('@App:token')
        sessionStorage.removeItem('@App:refreshToken')
    }

    return (
        <AuthContext.Provider value={{signed: Boolean(user), user, handleLogin, handleLogout}}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}