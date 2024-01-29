"use client";
import { AuthContext } from '@/app/Context/AuthProvider';
import React, { useContext } from 'react';

const HeaderText = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className='mt-10'>
            <h1 className='text-xl font-semibold text-center pl-3 py-2 md:text-2xl md:text-start lg:text-3xl lg:text-start'>Welcome Back <span className="drop-shadow-sm"> {user?.displayName} </span></h1>
        
            <p className='text-center text-[#93A4AE]  pl-3 mb-5 md:text-start lg:text-start'>Dashboard Overview</p>
        </div>
    );
};

export default HeaderText;