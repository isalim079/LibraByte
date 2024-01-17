'use client';

import { auth } from '@/firebase/firebase';
import { signInWithPopup } from 'firebase/auth';
import { createContext, useState } from 'react';

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {

    // loading while creating account and login
    const [loading, setLoading] = useState(true)


    // google login function
    const googleLogInPopup = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const contextData = {
        googleLogInPopup
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;