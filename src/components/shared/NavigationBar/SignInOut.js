"use client";

import { AuthContext } from "@/app/Context/AuthProvider";
import Link from "next/link";
import { useContext } from "react";
import toast from "react-hot-toast";
import { CiLogin } from "react-icons/ci";
import { TbLogout2 } from "react-icons/tb";

const SignInOut = () => {
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
            {user ? (
                <div className="">
                    <button
                        className="bg-[#333D2E] text-white py-2 px-3 rounded-md text-sm origin-left duration-200 hidden lg:flex"
                        onClick={
                            user
                                ? handleSignOut
                                : () => toast.error("You are not logged in")
                        }
                    >
                        Logout
                    </button>
                    <button
                        className="lg:hidden text-2xl flex justify-center items-center ml-3"
                        onClick={
                            user
                                ? handleSignOut
                                : () => toast.error("You are not logged in")
                        }
                    >
                        <TbLogout2 />
                    </button>
                </div>
            ) : (
                <div>
                   
                    <Link href={"/login"}>
                        <button className="bg-[#333D2E] text-white py-2 px-3 text-sm rounded-md hidden lg:flex">
                            Sign In
                        </button>
                    </Link>
                    <Link href={"/login"}>
                        <button className="text-oliveGreen text-2xl flex justify-center items-center rounded-md lg:hidden">
                            <CiLogin />
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default SignInOut;
