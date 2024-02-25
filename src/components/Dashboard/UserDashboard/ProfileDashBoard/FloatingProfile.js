"use client"

import { useContext, useEffect, useState } from "react";
import { FaCircleUser } from "react-icons/fa6";


import { FaUserCheck } from "react-icons/fa";
import { AuthContext } from "@/app/Context/AuthProvider";
import { useRouter } from "next/navigation";
import Link from "next/link";
import AdminMenu from "../../AdminDashboard/LeftSideMenu/AdminMenu/AdminMenu";

const FloatingProfile = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user?.photoURL);

    const [showButton, setShowButton] = useState(true);
    const router = useRouter()

    useEffect(() => {
        const handleScroll = () => {
            const yPosition = window.scrollY;
            if (yPosition > -10) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window?.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const [menuToggle, setMenuToggle] = useState(false);

    // const handleSignOut = () => {
    //     logOut()
    //         .then(() => {
    //             console.log("you have logged out successfully");
    //            router.push("/");
    //         })
    //         .catch((error) => {
    //             console.log(error.code);
    //             console.log(error.message);
    //         });
    // };

    return (
        <div>
            {showButton && (
                <div className="fixed bottom-5 right-5 z-50">
                    <div className=" drop-shadow-[0_10px_10px_rgba(0,0,0,0.25)] rounded-full bottom-10 right-10">
                        {user?.email ? (
                            <div>
                                <button
                                    onClick={() => setMenuToggle(!menuToggle)}
                                >
                                    {user?.photoUrl ? (
                                        <img
                                            className="w-14 h-14 rounded-full"
                                            src={user?.photoURL}
                                            alt=""
                                        />
                                    ) : (
                                        <FaUserCheck className="text-5xl" />
                                    )}
                                </button>
                                <div
                                    className="absolute text-white"
                                    onClick={() => setMenuToggle(!menuToggle)}
                                >
                                    {menuToggle ? (
                                        <div className="bg-gray-800 p-6 absolute bottom-20 -right-5 rounded-md w-60">
                                            <div className=" text-xs">
                                                

                                                <AdminMenu />

                                                {/* <button
                                                    onClick={handleSignOut}
                                                    className="bg-slate-600 w-full py-2 text-sm"
                                                >
                                                    Logout
                                                </button> */}
                                            </div>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div>
                                <button
                                    onClick={() => setMenuToggle(!menuToggle)}
                                >
                                    <FaCircleUser className="text-6xl text-white bg-teal-900 rounded-full border-none" />
                                </button>
                                <div
                                    className="absolute text-white"
                                    onClick={() => setMenuToggle(!menuToggle)}
                                >
                                    {menuToggle ? (
                                        <div className="bg-gray-800 p-6 absolute bottom-10 right-5 rounded-md w-52">
                                            <div className="space-y-4 text-xs">
                                                <p className="text-base">
                                                    Hey, User
                                                </p>
                                                <Link href="/login">
                                                    <button className="bg-slate-600 w-full py-2 text-sm mt-4">
                                                        Login First!
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default FloatingProfile;