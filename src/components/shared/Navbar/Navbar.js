"use client";

import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { useState } from "react";
import Link from "next/link";
import logo from "@/assets/logo/LibraByte.png";
import Image from "next/image";

import { usePathname } from "next/navigation";

const Navbar = () => {
    // menu toggle
    const [menuToggle, setMenuToggle] = useState(false);

    const pathname = usePathname();
    // console.log(pathname);

    // passed href as props for pathname
    const isActiveLink = (href) => {
        return pathname === href;
    };

    // Navbar items
    const navLinks = (
        <>
            <li>
                <Link
                    href="/"
                    style={{
                        ["fontWeight"]: isActiveLink("/") ? "bold" : "normal",
                        ["textDecoration"]: isActiveLink("/")
                            ? "underline"
                            : "",
                        ["textDecorationColor"]: isActiveLink("/")
                            ? "#333D2E"
                            : "",
                        ["color"]: menuToggle ? "white" : "#333D2E",
                    }}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    href="/blog"
                    style={{
                        ["fontWeight"]: isActiveLink("/blog")
                            ? "bold"
                            : "normal",
                        ["textDecoration"]: isActiveLink("/blog")
                            ? "underline"
                            : "",
                        ["textDecorationColor"]: isActiveLink("/blog")
                            ? "#333D2E"
                            : "",
                        ["color"]: menuToggle ? "white" : "#333D2E",
                    }}
                >
                    Blog
                </Link>
            </li>
            <li>
                <Link
                    href="/aboutUs"
                    style={{
                        ["fontWeight"]: isActiveLink("/aboutUs")
                            ? "bold"
                            : "normal",
                        ["textDecoration"]: isActiveLink("/aboutUs")
                            ? "underline"
                            : "",
                        ["textDecorationColor"]: isActiveLink("/aboutUs")
                            ? "#333D2E"
                            : "",
                        ["color"]: menuToggle ? "white" : "#333D2E",
                    }}
                >
                    About Us
                </Link>
            </li>
        </>
    );

    return (<div className="py-5 font-poppins bg-lightWhite drop-shadow-lg">
            {/* Toggle section/ Mobile view section */}
            <div className="lg:hidden">
                <div className="flex w-full justify-between items-center md:px-10 px-3 md:p-0 ">
                    <div className="">
                        <button
                            className=" text-3xl "
                            onClick={() => setMenuToggle(!menuToggle)}
                        >
                            {menuToggle ? (
                                <AiOutlineMenuUnfold></AiOutlineMenuUnfold>
                            ) : (
                                <AiOutlineMenuFold></AiOutlineMenuFold>
                            )}
                        </button>
                        <div
                            className="absolute  w-full pl-14 pr-20 mt-8 pb-10 "
                            onClick={() => setMenuToggle(!menuToggle)}
                        >
                            {menuToggle ? (
                                <div className="h-[380px] bg-[#333D2E] backdrop-blur-xl rounded-md">
                                    <div className="space-y-4 text-xs list-none flex flex-col justify-center items-center h-full">
                                        {navLinks}
                                    </div>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>

                    <div className="">
                        <Image src={logo} width={100} height={100} alt="logo" />
                    </div>
                </div>
            </div>

            {/* Max width section/ PC view section */}
            <div className="lg:flex justify-between items-center max-w-screen-xl mx-auto hidden lg:px-10">
                {/* Logo */}
                <div className="">
                    <Image src={logo} width={100} height={100} alt="logo" />
                </div>

                {/* Navigation */}
                <div className="flex list-none space-x-7 text-base font-semibold">
                    {navLinks}
                </div>

                {/* Login section */}
                <div className="flex">
                    <div>
                        <button className="bg-[#333D2E] text-white py-2 px-3 text-sm rounded-md">
                            Sign In
                        </button>
                    </div>
                    {/* <div className="ml-3">
                        <button className="bg-[#333D2E] text-white py-2 px-3 text-sm rounded-md">Sign Up</button>
                    </div> */}
                </div>
            </div>
        </div>
        
    );
};

export default Navbar;
