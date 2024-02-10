"use client"

import axios from "axios";

// https://y-kappa-sage.vercel.app
// http://localhost:5000

const useAxiosPublic = () => {
    const instance = axios.create({
        baseURL: 'http://localhost:5000'
    });

    return instance;
};

export default useAxiosPublic;