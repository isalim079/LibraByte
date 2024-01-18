"use client";

import { AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { useEffect, useState } from "react";
import Link from "next/link";
import logo from "@/assets/logo/LibraByte.png";
import Image from "next/image";
import {
    IoIosArrowDropdownCircle,
    IoIosArrowDropupCircle,
} from "react-icons/io";

import { usePathname } from "next/navigation";


const Navbar = () => {
    // theme
    const [theme, setTheme] = useState("light");

    const [themeDropdown, setThemeDropDown] = useState(false);

    const handleThemeToggle = (e) => {
        const clickedItem = e.target;
        // console.log(clickedItem.innerText);
        if (clickedItem.innerText === "Light") {
            setTheme("light");
        }
        if (clickedItem.innerText === "Dark") {
            setTheme("dark");
        }
        if (clickedItem.innerText === "Retro") {
            setTheme("retro");
        }
        if (clickedItem.innerText === "CupCake") {
            setTheme("cupcake");
        }
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    // menu toggle
    const [menuToggle, setMenuToggle] = useState(false);

    const pathname = usePathname();
    // console.log(pathname);

    // passed href as props for pathname
    const isActiveLink = (href) => {
        return pathname === href;
    };

    // menu white color on dark bg
    const navMenus = theme === "dark" ? "#EFEDE1" : "#333D2E";

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
                            ? `${navMenus}`
                            : "",
                        ["color"]: menuToggle ? "white" : `${navMenus}`,
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
                            ? `${navMenus}`
                            : "",
                        ["color"]: menuToggle ? "white" : `${navMenus}`,
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
                            ? `${navMenus}`
                            : "",
                        ["color"]: menuToggle ? "white" : `${navMenus}`,
                    }}
                >
                    About Us
                </Link>
            </li>
        </>
    );

    // delete bg of nav
    // const navBg = theme === "light" ? "bg-lightWhite" : "bg-slate-900";


    const navBg = 
    theme === "light" ? "bg-lightWhite" :
    theme === "dark" ? "bg-slate-900" :
    theme === "cupcake" ? "bg-[#FAF7F5]" :
    theme === "retro" ? "bg-[#ECE2CA]" : "bg-lightWhite"

  

    return (
        <div className={`py-5 font-poppins ${navBg} drop-shadow-lg`}>
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
                                    <div></div>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>

                    <div className="">
                        <Image src={logo} width={100} height={100} alt="logo" />
                    </div>

                    {/* theme section */}
                    <div>
                        <div className="relative flex flex-col items-center rounded-md">
                            <button
                                className="bg-oliveGreen text-lightWhite px-3 py-2 flex items-center justify-between text-xs rounded-md  gap-2"
                                onClick={() => setThemeDropDown(!themeDropdown)}
                            >
                                Themes
                                {themeDropdown ? (
                                    <IoIosArrowDropupCircle />
                                ) : (
                                    <IoIosArrowDropdownCircle />
                                )}
                            </button>
                            {themeDropdown ? (
                                <div
                                    onClick={handleThemeToggle}
                                    className="bg-oliveGreen absolute text-white list-none p-6 rounded-md top-12 space-y-2 z-50 cursor-pointer text-xs"
                                >
                                    <li name="item1">
                                        <a>Light</a>
                                    </li>
                                    <li name="item2">
                                        <a>Dark</a>
                                    </li>
                                    <li name="item3">
                                        <a>Retro</a>
                                    </li>
                                    <li name="item4">
                                        <a>CupCake</a>
                                    </li>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Max width section/ PC view section */}
            <div className="lg:flex justify-between items-center max-w-screen-xl mx-auto hidden ">
                {/* Logo */}
                <div className="">
                    <Image src={logo} width={100} height={100} alt="logo" />
                </div>

                {/* Navigation */}
                <div className="flex list-none space-x-7 text-base font-semibold">
                    {navLinks}
                </div>

                {/* Login section */}
                <div className="flex items-center gap-4">
                    <div>
                        <button className="bg-[#333D2E] text-white py-2 px-3 text-sm rounded-md">
                            Sign In
                        </button>
                    </div>

                    {/* <div className="">
                        <button className="bg-[#333D2E] text-white py-2 px-3 text-sm rounded-md">Sign Up</button>
                    </div> */}

                    {/* theme dropdown */}
                    <div>
                        <div className="relative flex flex-col items-center rounded-md">
                            <button
                                className="bg-oliveGreen text-white px-3 py-2 flex items-center justify-between text-sm rounded-md tracking-wider gap-2"
                                onClick={() => setThemeDropDown(!themeDropdown)}
                            >
                                Themes
                                {themeDropdown ? (
                                    <IoIosArrowDropupCircle />
                                ) : (
                                    <IoIosArrowDropdownCircle />
                                )}
                            </button>
                            {themeDropdown ? (
                                <div
                                    onClick={handleThemeToggle}
                                    className="bg-oliveGreen absolute text-white list-none p-6 rounded-md top-12 space-y-2 z-50 cursor-pointer"
                                >
                                    <li name="item1">
                                        <a>Light</a>
                                    </li>
                                    <li name="item2">
                                        <a>Dark</a>
                                    </li>
                                    <li name="item3">
                                        <a>Retro</a>
                                    </li>
                                    <li name="item4">
                                        <a>CupCake</a>
                                    </li>
                                </div>
                            ) : (
                                ""
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
