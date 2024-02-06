"use client";

import Image from "next/image";
import logo from "../../../assets/logo/LibraByte.png";
import NavigationRoute from "./NavigationRoute";
import SignInOut from "./SignInOut";
import MobileNavigation from "./MobileNavigation";
import Link from "next/link";

const NavigationBar = () => {
    return (
        <div className="bg-[#0C1335] max-h-[74px] shadow-lg">
            {/* Mobile nav */}
            <MobileNavigation />

            {/* Pc nav */}
            <div className="lg:flex justify-between max-w-screen-xl mx-auto items-center hidden">

                {/* Logo */}
                
                    <Link href={'/'}>
                    {/* <Image
                        src={logo}
                        height={100}
                        width={100}
                        alt="logo"
                    ></Image> */}
                    <p className="text-white text-2xl">Libra<span className="text-[#ECC21C]">Byte</span></p>
                    </Link>
                

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
