"use client"

import axios from "axios";

// https://y-kappa-sage.vercel.app
// http://localhost:5000

const useAxiosPublic = () => {
    const instance = axios.create({
        baseURL: 'https://y-kappa-sage.vercel.app'
    });

    return instance;
};

export default useAxiosPublic;