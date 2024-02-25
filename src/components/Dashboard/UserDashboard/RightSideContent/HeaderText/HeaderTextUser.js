"use client"

import useFindUser from '@/lib/hooks/useFindUser';
import React from 'react';

const HeaderTextUser = () => {

    const users = useFindUser()
    
    // console.log(users[0].name);

    return (
        <div>
            <h1 className='text-xl font-semibold text-center py-2 md:text-2xl md:text-start lg:text-3xl lg:text-start'>Welcome Back {users[0]?.name}</h1>
        
            <p className='text-center text-[#93A4AE] md:text-start lg:text-start'>Hope you are doing well</p>
        </div>
    );
};

export default HeaderTextUser;