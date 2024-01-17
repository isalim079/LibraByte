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
                        ["color"]: isActiveLink("/") ? (menuToggle ? "white" : "#333D2E") : "black",
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
                        ["color"]: isActiveLink("/blog") ? "#333D2E" : "black",
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
                        ["color"]: isActiveLink("/aboutUs")
                            ? "#333D2E"
                            : "black",
                    }}
                >
                    About Us
                </Link>
            </li>
        </>
    );



    return (
        <div className="py-5 font-poppins">
            <div className="lg:hidden">
                <div className="flex w-full justify-between items-center px-3 md:p-0">
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
                            className="absolute top-1/3 left-1/3"
                            onClick={() => setMenuToggle(!menuToggle)}
                        >
                            {menuToggle ? (
                                <div className="p-6 bg-[#333D2E]">
                                    <div className="space-y-4 text-xs list-none">
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
            <div className="lg:flex justify-between items-center max-w-screen-xl mx-auto hidden">
                <div className="">
                    <Image src={logo} width={100} height={100} alt="logo" />
                </div>
                <div className="flex list-none space-x-7 text-base font-semibold">
                    {navLinks}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
