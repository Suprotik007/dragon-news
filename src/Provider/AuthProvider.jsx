import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
const auth = getAuth(app);
export const AuthContext=createContext();
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);

const createUser=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
}

const signIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}
const logOut=()=>{
return signOut(auth)
}

useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
    })
    return()=>{
        unsubscribe()
    }
},[])

    const authData={
        user,
        setUser,
        createUser,
        logOut,
        signIn
    };
    return <AuthContext value={authData}>{children}</AuthContext>;
        
    
};

export default AuthProvider;