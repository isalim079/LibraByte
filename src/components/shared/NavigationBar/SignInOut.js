"use client";

import { AuthContext } from "@/app/Context/AuthProvider";
import Link from "next/link";
import { useContext } from "react";
import toast from "react-hot-toast";
import { CiLogin } from "react-icons/ci";
import { TbLogout2 } from "react-icons/tb";
import animation from "@/assets/animation/navBarUser.json";
import Lottie from "lottie-react";
import Image from "next/image";

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
        <div className="flex justify-center items-center flex-row-reverse gap-5">
            
            <div className="">

                {/* dropdown */}

                <details className="dropdown dropdown-bottom">
                    <summary className="m-1 btn btn-link">

                    {/* User photo */}

                    {user?.photoURL ? (
                    <div>
                        <Image
                            className="w-10 rounded-full"
                            width={40}
                            height={40}
                            src={user?.photoURL}
                            alt="profile picture"
                        />
                    </div>
                ) : (
                    <div>
                        <Lottie
                            className="w-10 border-2 border-sky-600 rounded-full p-1 cursor-pointer"
                            animationData={animation}
                            loop={true}
                        />
                    </div>
                )}

                    </summary>

                    {/* dropdown links */}

                    <ul className="p-2 shadow menu dropdown-content z-[1]  rounded-box w-52 bg-royalBlue text-white">
                       {
                        user ?  <li>
                        <a href="/dashboard">Dashboard</a>
                    </li> : ""
                       }
                        <li>
                        <div>
                {user ? (
                    <div className="">
                        {/* sign out */}
                        <div>
                            <button
                                className="bg-lightBtn hover:bg-darkBtn text-white py-2 px-3 rounded-md text-sm origin-left duration-200 hidden lg:flex"
                                onClick={
                                    user
                                        ? handleSignOut
                                        : () =>
                                              toast.error(
                                                  "You are not logged in"
                                              )
                                }
                            >
                                SignOut
                            </button>
                        </div>

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
                        </li>
                    </ul>
                </details>

            </div>
        </div>
    );
};

export default SignInOut;
