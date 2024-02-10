"use client";

import Image from "next/image";
import libraByte from "../../../../assets/logo/LibraByte.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/app/Context/AuthProvider";
import { PiUserCirclePlusDuotone } from "react-icons/pi";
import { IoDiamond } from "react-icons/io5";
import AdminProfileDash from "./AdminProfileDash";

import ProfileDashBoardTable from "./ProfileDashBoardTable";
import Loading from "@/components/shared/Loading/Loading";


const ProfileDashBoard2 = () => {
    const { user, userRole } = useContext(AuthContext);

    // console.log(userRole);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (userRole) {
            setLoading(true);
        }
    }, [userRole]);
    // console.log(userRole);

    return (
        <div className="">
            {loading ? (
                <Loading />
            ) : (
                <>
                    {userRole === "admin" ? (
                        <AdminProfileDash />
                    ) : (
                        <div className="font-serif">
                            <div className="relative">
                                <div className=" w-full h-[280px] pt-4 flex justify-center items-center bg-royalBlue bg-bgTexture">
                                    {/* <Image
                                        className=""
                                        src={libraByte}
                                        alt="logo"
                                        width={320}
                                        height={120}
                                    /> */}
                                    <p className="text-white text-6xl">
                                        Libra
                                        <span className="text-[#ECC21C]">
                                            Byte
                                        </span>{" "}
                                    </p>
                                </div>
                                <div className="absolute -bottom-28 left-16">
                                    <Image
                                        className="rounded-full w-56"
                                        src={
                                            user ? (
                                                user.photoURL
                                            ) : (
                                                <PiUserCirclePlusDuotone />
                                            )
                                        }
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
                                        <h3 className="text-2xl ml-80  mt-4">
                                            Name
                                        </h3>
                                        <p className="ml-80 ">
                                            {user?.displayName}
                                        </p>
                                    </div>

                                    {/* Email */}

                                    <div>
                                        <h3 className="text-2xl ml-80  mt-2">
                                            Email
                                        </h3>
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
                                        "Books are the plane, and the train and
                                        the road. They are the destination, and
                                        the journey. They are home"
                                    </p>
                                    <p>- Anna Quindlen</p>
                                </div>
                            </div>

                            {/* Application status */}

                            <div className="mt-8">
                                <ProfileDashBoardTable />
                            </div>
                        </div>
                    )}
                </>
            )}

            
        </div>
    );
};

export default ProfileDashBoard2;
