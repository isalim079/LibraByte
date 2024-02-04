"use client";

import { auth } from "@/firebase/firebase";
import useAxiosPublic from "@/lib/hooks/useAxiosPublic";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} from "firebase/auth";

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    // loading while creating account and login

    const [loading, setLoading] = useState(true);

    const axiosPublic = useAxiosPublic();

    // checking is user logged in or not
    const [user, setUser] = useState(null);
    // console.log(user?.email);

    // google login function

    const googleLogInPopup = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider);
    };

    // creating users with signup with google

    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // update user function

    const handleUpdateUser = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
        });
    };

    // password  login

    const passwordLogIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Password reset function

    const passwordReset = (email) => {
        setLoading(true);
        return sendPasswordResetEmail(auth, email);
    };

    // sign out function

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Watching users while state changing

    useEffect(() => {
        const unSubs = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            if (currentUser) {
                const user = { email: currentUser.email };
                axiosPublic.post("/jwt/v1", user).then((res) => {
                    if (res.data.token) {
                        localStorage.setItem("access-token", res.data.token);
                        setLoading(false);
                    }
                });
            } else {
                localStorage.removeItem("access-token");
                setLoading(false);
            }
        });
        return () => {
            unSubs();
        };
    }, [user, axiosPublic]);

    // passing data through context api

    const contextData = {
        googleLogInPopup,
        registerUser,
        handleUpdateUser,
        passwordLogIn,
        passwordReset,
        logOut,
        user,
        loading,
    };

    const queryClient = new QueryClient();

    return (
        <AuthContext.Provider value={contextData}>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </AuthContext.Provider>
    );
};

export default AuthProvider;
