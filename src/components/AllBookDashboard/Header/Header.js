"use client"
import React, { useContext } from 'react';
import { AuthContext } from "@/app/Context/AuthProvider";
import { FaUserCircle } from 'react-icons/fa';
import Image from 'next/image';
const Header = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className='overflow-x-hidden'>
            <div className="drop-shadow-md px-5 py-2 bg-lightWhite ">
                <div className=" flex justify-between items-center gap-2">
                    <div className="form-control ">
                        <input type="text" placeholder="Search your favorite book" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className=" flex justify-center items-center">
                        {/* <button className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                <span className="badge badge-xs badge-primary indicator-item"></span>
                            </div>
                        </button> */}
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
