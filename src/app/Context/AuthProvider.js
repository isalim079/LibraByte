'use client';

import { auth } from '@/firebase/firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    // loading while creating account and login
    const [loading, setLoading] = useState(true)
    // checking is user logged in or not
    const [user, setUser] = useState();


    // google login function
    const googleLogInPopup = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // creating users with signup with google
    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // Watching users while state changing
    useEffect(() => {
        const unSubs = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubs();
        }
    }, [])


    // passing data through context api
    const contextData = {
        googleLogInPopup,
        registerUser
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;