"use client";

import { useState } from "react";
import useNavigationLInks from "./useNavigationLInks";
import SignInOut from "./SignInOut";

const MobileNavigation = () => {
    const navLinks = useNavigationLInks();
    const [active, setActive] = useState(0);

    return (
        <div className="lg:hidden">
            <div className="flex justify-center max-w-screen-xl mx-auto items-center">
                <div className=" flex justify-center items-center">
                    <ul className="flex items-center relative space-x-2">
                        {navLinks.map((menu, index) => (
                            <li key={index} className="w-16">
                                <a
                                    className="flex flex-col items-center text-center pt-6"
                                    href={menu.link}
                                    onClick={() => setActive(index)}
                                >
                                    <span
                                        className={`text-2xl cursor-pointer duration-500 ${
                                            index === active && "-mt-3"
                                        }`}
                                    >
                                        {menu?.icon}
                                    </span>
                                    <span
                                        className={`${
                                            active === index
                                                ? "translate-y-0 duration-500 opacity-100"
                                                : "opacity-0 translate-y-10"
                                        }`}
                                    >
                                        {menu?.name}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                    <SignInOut />
                </div>
            </div>
        </div>
    );
};

export default MobileNavigation;
