"use client";

import { AuthContext } from "@/app/Context/AuthProvider";
import Link from "next/link";
import { useContext } from "react";
import toast from "react-hot-toast";
import { CiLogin } from "react-icons/ci";
import { TbLogout2 } from "react-icons/tb";
import animation from "@/assets/animation/navBarUser.json";
import Lottie from "lottie-react";

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
            <div>
                {user ? (
                    <div className="">
                        {/* sign out */}
                        <div>
                            <button
                                className="bg-[#333D2E] text-white py-2 px-3 rounded-md text-sm origin-left duration-200 hidden lg:flex"
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
            <div className="hidden lg:flex">
                {user?.photoURL ? (
                    <div>
                        <img
                            className="w-10 rounded-full"
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
            </div>
        </div>
    );
};

export default SignInOut;
