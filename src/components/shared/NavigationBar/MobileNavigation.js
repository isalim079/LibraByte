"use client";

import { useEffect, useState } from "react";
import useNavigationLInks from "./useNavigationLInks";
import SignInOut from "./SignInOut";
import { usePathname } from "next/navigation";
import Link from "next/link";

const MobileNavigation = () => {
    const navLinks = useNavigationLInks();
    const pathName = usePathname();
    const [active, setActive] = useState("");
    useEffect(() => {
        setActive(pathName)
    }, [])

    return (
        <div className="lg:hidden">
            <div className="flex justify-center max-w-screen-xl mx-auto items-center">
                <div className=" flex justify-center items-center">
                    <div className="flex items-center relative space-x-2">
                        {navLinks.map((menu, index) => (
                            <li key={index} className="w-16 list-none">
                                <Link
                                    className={`flex flex-col items-center text-center pt-6 ${
                                        active === menu.link
                                            ? "shadow-md rounded-md"
                                            : ""
                                    }`}
                                    href={menu.link}
                                    onClick={() => setActive(menu.link)}
                                >
                                    <span
                                        className={`text-2xl cursor-pointer duration-500 ${
                                            menu.link === active && "-mt-3"
                                        }`}
                                    >
                                        {menu?.icon}
                                    </span>
                                    <span
                                        className={`${
                                            active === menu.link
                                                ? "translate-y-0 duration-500 opacity-100"
                                                : "opacity-0 translate-y-10"
                                        }`}
                                    >
                                        {menu?.name}
                                    </span>
                                </Link>
                            </li>
                        ))}
                    </div>
                    <SignInOut />
                </div>
            </div>
        </div>
    );
};

export default MobileNavigation;
