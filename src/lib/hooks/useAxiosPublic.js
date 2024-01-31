"use client"

import axios from "axios";



const useAxiosPublic = () => {
    const instance = axios.create({
        baseURL: 'https://y-kappa-sage.vercel.app',
    });

    return instance;
};

export default useAxiosPublic;