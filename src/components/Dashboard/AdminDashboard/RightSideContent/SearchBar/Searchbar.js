"use client";
import { AuthContext } from "@/app/Context/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import toast from "react-hot-toast";
import { HiOutlineBellAlert } from "react-icons/hi2";

const Searchbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success(
                    `${user?.displayName}, you have logged out successfully`
                );
            })
            .catch((error) => {
                console.log(error);
            });
    };


    return (
        <div>
            <div className='flex justify-end items-center gap-4 mt-3'>
                <div>
                    <input type="text" placeholder="Search here" className="input input-bordered input-sm w-full max-w-xs" />
                </div>
                <div>
                    <HiOutlineBellAlert className="text-2xl" />
                </div>
                <div>


                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <Image alt="Tailwind CSS Navbar component" src={user?.photoURL}
                                    width={40}
                                    height={40}
                                />
                            </div>
                        </div>
                        <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li>
                                <a className="justify-between">
                                    {user?.displayName}
                                </a>
                            </li>
                            <li><Link href="/dashboard/settings">Settings</Link></li>
                            <li><a 
                            onClick={handleSignOut}
                            >Logout</a></li>
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Searchbar;