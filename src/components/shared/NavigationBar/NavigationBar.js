"use client";

import Image from "next/image";
import logo from "../../../assets/logo/LibraByte.png";
import NavigationRoute from "./NavigationRoute";



const NavigationBar = () => {
   



    return (
        <div className="bg-lightWhite max-h-[74px]">
            {/* nav container */}
            <div className="flex justify-between max-w-screen-xl mx-auto items-center">
                {/* Logo */}
                <div>
                    <Image
                        src={logo}
                        height={100}
                        width={100}
                        alt="logo"
                    ></Image>
                </div>

                {/* Navigation */}
                <div className="">
                    <NavigationRoute />
                </div>

                {/* sign in button */}

                <div>
                    <button className="bg-[#333D2E] text-white py-2 px-3 text-sm rounded-md">
                        Sign In
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
