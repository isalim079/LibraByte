"use client"
import React, { useContext } from 'react';
import { AuthContext } from "@/app/Context/AuthProvider";
import { FaUserCircle } from 'react-icons/fa';
import Image from 'next/image';
import { Novu } from './Novu';
const Header = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className='overflow-x-hidden'>
            <div className="drop-shadow-md px-5 py-2 bg-lightWhite ">
                <div className=" flex justify-between items-center gap-2">
                    <div className="form-control ">
                        {/* <input type="text" placeholder="Search your favorite book" className="input input-bordered w-24 md:w-auto" /> */}
                    </div>
                    <div className=" flex justify-center items-center">
                        <Novu></Novu>
                        <div role="button" className="btn btn-ghost btn-circle avatar">
                            <div>{user ?
                                <Image width={30} height={30} className='rounded-full w-8 h-8' src={user?.photoURL} alt="profile picture" />
                                :
                                <FaUserCircle className='text-4xl'></FaUserCircle>
                            }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
