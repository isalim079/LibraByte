"use client";

import Image from "next/image";
import logo from "../../../assets/logo/LibraByte.png";
import NavigationRoute from "./NavigationRoute";
import SignInOut from "./SignInOut";
import MobileNavigation from "./MobileNavigation";

const NavigationBar = () => {
    return (
        <div className="bg-lightWhite max-h-[74px]">
            {/* Mobile nav */}
            <MobileNavigation />

            {/* Pc nav */}
            <div className="lg:flex justify-between max-w-screen-xl mx-auto items-center hidden">
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
                    <SignInOut />
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
