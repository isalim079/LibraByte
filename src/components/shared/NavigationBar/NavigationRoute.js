"use client";

import { useState } from "react";
import useNavigationLInks from "./useNavigationLInks";
import { usePathname } from "next/navigation";

const NavigationRoute = () => {
    const navLinks = useNavigationLInks();
    const pathName = usePathname();
    const [active, setActive] = useState(pathName);
    // console.log(active);

    return (
        <div>
            <ul className="flex items-center relative space-x-2">
                {navLinks.map((menu, index) => (
                    <li key={index} className="w-16">
                        <a
                            className={`flex flex-col items-center text-center pt-6 ${
                                active === menu.link
                                    ? "shadow-md rounded-md"
                                    : ""
                            }`}
                            href={menu.link}
                            onClick={() => setActive(index)}
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
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NavigationRoute;
