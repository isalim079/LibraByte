"use client";

import { useContext, useState } from "react";
import logo from "../../../assets/logo/LibraByte.png";
import useNavigationLInks from "./useNavigationLInks";

import Image from "next/image";
import { AuthContext } from "@/app/Context/AuthProvider";
import Lottie from "lottie-react";
import animation from "@/assets/animation/navBarUser.json";

import { FaAlignLeft, FaAlignRight } from "react-icons/fa";
import { CgLogIn, CgLogOut } from "react-icons/cg";
import { RiDashboardFill } from "react-icons/ri";

const MobileNavigation = () => {
    const { user, logOut } = useContext(AuthContext);
    const navLinks = useNavigationLInks();

    const [open, setOpen] = useState(false);

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
        <div className="lg:hidden">
            <div className=" max-w-screen-xl mx-auto">
                {/* menu container */}

                <div className=" flex justify-between items-center pr-4">
                    {/* left side dropdown */}

                    <div className="">
                        <details className="dropdown">
                            <summary
                                className=" btn btn-link"
                                onClick={() => setOpen(!open)}
                            >
                                {open ? (
                                    <FaAlignRight className="text-2xl text-white" />
                                ) : (
                                    <FaAlignLeft className="text-2xl text-white" />
                                )}
                            </summary>
                            <ul className="p-2 shadow menu dropdown-content z-[1] bg-royalBlue rounded-box w-48 text-white">
                                {navLinks.map((menu, index) => (
                                    <li key={index} className=" list-none">
                                        <a
                                            className=""
                                            href={menu.link}
                                            onClick={() => setActive(menu.link)}
                                        >
                                            <span>{menu?.icon}</span>
                                            <span>{menu?.name}</span>
                                        </a>
                                    </li>
                                ))}
                                <li><a className="" href="/dashboard"><span className="flex items-center gap-2"><span><RiDashboardFill /></span><span>Dashboard</span></span></a></li>
                                {
                                    user ? <li onClick={handleSignOut}>
                                    <a>
                                        {" "}
                                        <span>
                                            <CgLogOut />
                                        </span>{" "}
                                        <span>Sign Out</span>
                                    </a>
                                </li> : <li >
                                    <a href="/login">
                                        {" "}
                                        <span>
                                            <CgLogIn />
                                        </span>{" "}
                                        <span>Sign In</span>
                                    </a>
                                </li>
                                }
                            </ul>
                        </details>
                    </div>

                    {/* middle side */}

                    <div>
                        {/* <Image src={logo} width={80} height={80} alt="logo" /> */}
                        <p className="text-white text-xl">
                            Libra<span className="text-[#ECC21C]">Byte</span>
                        </p>
                    </div>

                    {/* right side */}

                    <div>
                        {user?.photoURL ? (
                            <div>
                                <Image
                                    className="w-8 rounded-full"
                                    width={30}
                                    height={30}
                                    src={user?.photoURL}
                                    alt="profile picture"
                                />
                            </div>
                        ) : (
                            <div>
                                <Lottie
                                    className="w-8 border-2 border-sky-600 rounded-full p-1 cursor-pointer"
                                    animationData={animation}
                                    loop={true}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNavigation;
