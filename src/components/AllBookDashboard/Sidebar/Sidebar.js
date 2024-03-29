"use client";
import React, { useContext, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo/LibraByte.png";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { IoIosBookmarks } from "react-icons/io";
import { FaFileDownload } from "react-icons/fa";
import { RiBookMarkFill } from "react-icons/ri";
import { TbLogout2 } from "react-icons/tb";
import { AuthContext } from "@/app/Context/AuthProvider";
import toast from "react-hot-toast";
import shortLogo from "@/assets/logo/Lblogo.png";
import { MdLogin, MdUpcoming } from "react-icons/md";

const Sidebar = ({ children }) => {
    const [open, setOpen] = useState(true);
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success("you have logged out successfully");
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    };

    return (
        <div className="flex overflow-x-hidden">
            <div className="">
                <div
                    className={`fixed ${
                        open ? "w-40" : "w-20 "
                    } h-screen p-4 bg-royalBlue  bg-bgTexture flex flex-col justify-between`}
                >
                    <img
                        src="https://i.ibb.co/F8gzPTB/control.png"
                        className={`absolute cursor-pointer -right-3 top-16 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
                        onClick={() => setOpen(!open)}
                    />
                    <div className={`flex flex-col items-start`}>
                        <div className="">
                            <a href="/">
                                {open ? (
                                    <div className="px-3">
                                        {/* <Image
                                            src={logo}
                                            width={100}
                                            height={100}
                                            alt="logo"
                                        /> */}
                                        <p className="text-white text-2xl">
                                            Libra
                                            <span className="text-[#ECC21C]">
                                                Byte
                                            </span>
                                        </p>
                                    </div>
                                ) : (
                                    // <Image
                                    //     className=""
                                    //     src={shortLogo}
                                    //     width={100}
                                    //     height={100}
                                    //     alt="logo"
                                    // />
                                    <div className="ml-2">
                                      <p className="text-white text-2xl">
                                        L
                                        <span className="text-[#ECC21C]">
                                            B
                                        </span>
                                    </p>
                                    </div>
                                )}
                            </a>
                        </div>
                        <span className="border-b-[1px] border-customYellow w-full p-2"></span>
                        <Link href="/allBooks">
                            <div className=" hover:bg-lightBtn  cursor-pointer my-2 p-3 rounded-lg flex gap-2 text-stone-600">
                                <FaHome size={20} className="text-white" />{" "}
                                <p
                                    className={`text-sm origin-left duration-200 text-white ${
                                        !open && "hidden"
                                    }`}
                                >
                                    Discover
                                </p>
                            </div>
                        </Link>
                        <Link href="/categories/Mystery">
                            <div className=" hover:bg-lightBtn cursor-pointer my-2 p-3 rounded-lg flex gap-2 text-stone-600">
                                <RxDashboard size={20} className="text-white" />{" "}
                                <p
                                    className={`text-sm origin-left duration-200 text-white  ${
                                        !open && "hidden"
                                    }`}
                                >
                                    Category
                                </p>
                            </div>
                        </Link>
                        <Link href="/dashboard">
                            <div className=" hover:bg-lightBtn cursor-pointer my-2 p-3 rounded-lg flex gap-2 text-stone-600">
                                <IoIosBookmarks
                                    size={20}
                                    className="text-white"
                                />{" "}
                                <p
                                    className={`text-sm origin-left duration-200 text-white ${
                                        !open && "hidden"
                                    }`}
                                >
                                    My Library
                                </p>
                            </div>
                        </Link>
                        <Link href="/topBooks">
                            <div className=" hover:bg-lightBtn cursor-pointer my-2 p-3 rounded-lg flex gap-2 text-stone-600">
                                <RiBookMarkFill
                                    size={20}
                                    className="text-white"
                                />{" "}
                                <p
                                    className={`text-sm origin-left duration-200 text-white ${
                                        !open && "hidden"
                                    }`}
                                >
                                    TopBooks
                                </p>
                            </div>
                        </Link>
                        <Link href="/newArrivals">
                            <div className=" hover:bg-lightBtn cursor-pointer my-2 p-3 rounded-lg flex gap-2 text-stone-600">
                                <MdUpcoming
                                    size={20}
                                    className="text-white"
                                />{" "}
                                <p
                                    className={`text-sm origin-left duration-200 text-white ${
                                        !open && "hidden"
                                    }`}
                                >
                                    New Arrivals
                                </p>
                            </div>
                        </Link>
                        <span className="border-b-[1px] border-customYellow w-full p-2"></span>
                        {user ? (
                            <button>
                                <div
                                    onClick={handleSignOut}
                                    className="hover:bg-lightBtn cursor-pointer my-2 p-3 rounded-lg flex gap-2 text-stone-600"
                                >
                                    <TbLogout2
                                        size={20}
                                        className="text-white"
                                    />{" "}
                                    <p
                                        className={`text-sm origin-left duration-200 text-white ${
                                            !open && "hidden"
                                        }`}
                                    >
                                        Logout
                                    </p>
                                </div>
                            </button>
                        ) : (
                            <Link href="/login">
                                <div className="hover:bg-stone-300 cursor-pointer my-2 p-3 rounded-lg flex gap-2 text-stone-600">
                                    <MdLogin></MdLogin>{" "}
                                    <p
                                        className={`text-sm origin-left duration-200 ${
                                            !open && "hidden"
                                        }`}
                                    >
                                        Sign In
                                    </p>
                                </div>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
            <main className={`${open ? "ml-40" : "ml-20"} w-full `}>
                {children}
            </main>
        </div>
    );
};

export default Sidebar;
