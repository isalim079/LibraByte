"use client"

import { AuthContext } from '@/app/Context/AuthProvider';
import useFindUser from '@/lib/hooks/useFindUser';
import Image from 'next/image';
import React, { useContext } from 'react';

const User = () => {

    const {user} = useContext(AuthContext)

    const [findUser] = useFindUser()
    // console.log(findUser);

    return (
        <div className='bg-white drop-shadow-md rounded-md p-4'>

            <div className='flex flex-row-reverse justify-between items-center md:gap-1'>

                <div>
                    <h3 className='text-xl font-semibold'>{findUser?.name}</h3>

                    <div className='flex py-1 items-center gap-3'>
                        <h2 className=' md:text-sm'>{findUser?.role}</h2>
                        <span className='text-[#68B8A1] font-bold text-sm'></span>
                    </div>

                    <p className='text-[#9da1a4] text-[13px]'>Active {findUser?.role === "admin" ? "admin" : "user"}</p>
                </div>
 
                <div>
                    <Image className='rounded-full' height={60} width={60} src={user?.photoURL}></Image>
                </div>

            </div>
        </div>
    );
};

export default User;