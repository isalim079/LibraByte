"use client";

import Image from "next/image";
import libraByte from "../../../../assets/logo/LibraByte.png";
import { useContext } from "react";
import { AuthContext } from "@/app/Context/AuthProvider";
import { PiUserCirclePlusDuotone } from "react-icons/pi";
import { IoDiamond } from "react-icons/io5";

import { FaCircle } from "react-icons/fa";
import { MdError } from "react-icons/md";
import useFindUser from "@/lib/hooks/useFindUser";

const ProfileDashBoard = () => {
    const { user } = useContext(AuthContext);
    // console.log(user);

    const [findUser] = useFindUser()

    return (
        <div className="font-serif ">
            <div className="relative">
                <div className=" w-full h-[280px] mt-4 flex justify-center items-center bg-lightWhite">
                    <Image
                        className=""
                        src={libraByte}
                        alt="logo"
                        width={320}
                        height={120}
                    />
                </div>
                <div className="absolute -bottom-28 left-16">
                    <Image
                        className="rounded-full w-56"
                        src={user ? user.photoURL : <PiUserCirclePlusDuotone />}
                        alt="logo"
                        width={320}
                        height={120}
                    />
                </div>
            </div>
            <div className="flex items-center">

                {/* text container */}
                <div>
                    {/* Name */}

                    <div>
                        <h3 className="text-2xl ml-80  mt-4">Name</h3>
                        <p className="ml-80 ">{user?.displayName}</p>
                    </div>

                    {/* Email */}

                    <div>
                        <h3 className="text-2xl ml-80  mt-2">Email</h3>
                        <p className="ml-80 ">{user?.email}</p>
                    </div>

                    {/* Icon*/}

                    <div className="mt-2 flex ml-80 gap-2 text-3xl">
                        <IoDiamond className="border border-oliveGreen rounded-full p-1" />
                        <IoDiamond className="border border-oliveGreen rounded-full p-1" />
                        <IoDiamond className="border border-oliveGreen rounded-full p-1" />
                    </div>
                </div>

                {/* quote container */}

                <div className="text-center italic w-[580px] ml-20 mt-4">
                    <p>
                        "Books are the plane, and the train and the road. They
                        are the destination, and the journey. They are home"
                    </p>
                    <p>- Anna Quindlen</p>
                </div>
            </div>

            {/* Application status */}

            <div className="my-16 ml-28 pr-16">
                <div>
                    <h3 className="text-2xl font-sans font-bold mb-4 ml-[52px]">My Application Status</h3>
                </div>
                <div className="space-y-5">
                    {/* 1st status */}
                    <div className="flex items-center gap-10">
                    <div>
                    <MdError className="text-2xl" />
                    </div>
                    <div>
                    <p className="text-lg font-sans">Your scheduled time to pick up the book is still not confirmed. The status will immediately update after your request has been approved by the library.</p>
                    </div>
                    
                    </div>
                    {/* 2nd status */}
                    <div className="flex items-center gap-10">
                    <div>
                    <MdError className="text-2xl" />
                    </div>
                    <div>
                    <p className="text-lg font-sans">Thank you for your patience. We're pleased to inform you that your request to pick up the book has been approved by the library</p>
                    </div>
                    
                    </div>
                    {/* 1st status */}
                    <div className="flex items-center gap-10">
                    <div>
                    <MdError className="text-2xl" />
                    </div>
                    <div>
                    <p className="text-lg font-sans">The book has been delivered to you. Please, note that to avoid extra cost, return it before the return date.</p>
                    </div>
                    
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default ProfileDashBoard;
