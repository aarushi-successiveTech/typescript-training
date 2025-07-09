'use client'

import { createContext, useState, ReactNode } from "react";

interface AuthContextType {
  logIn: boolean;
  username: string;
  userLogin: (name: string, password: string) => boolean;
  userLogout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
interface AuthProviderProps {
  children: ReactNode;
}


export const AuthProvider : React.FC<AuthProviderProps>= ({children}) => {

    const [logIn, setLogIn] = useState<boolean>(false);
    const [username , setUsername] = useState<string>('');

    const userLogin = (name:string, password:string) : boolean => {

        if(name == 'admin' && password ==='1234'){
            setUsername(name);
            setLogIn(true);
        return true};

            return false;
        }
        
    const userLogout = ():void => {
        setUsername('');
        setLogIn(false);}

    return (
        <AuthContext.Provider value = {{logIn, username, userLogin, userLogout}}>
            {children}
        </AuthContext.Provider>
    );
};