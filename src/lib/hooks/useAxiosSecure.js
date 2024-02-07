'use client'

import { AuthContext } from "@/app/Context/AuthProvider";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext } from "react";



const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',

})

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext)
    const router = useRouter();

    axiosSecure.interceptors.request.use((config) => {
        // console.log(config.headers)
        const token = localStorage.getItem('access-token');
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    axiosSecure.interceptors.response.use(response => {
        return response
    }, async error => {
        const status = error.response.status;
        if (status === 401 || status === 403) {
            await logOut();
            router.push('/login');
        }
        return Promise.reject(error)
    })



    return axiosSecure
};

export default useAxiosSecure;