"use client";
import { AuthContext } from "@/app/Context/AuthProvider";
import { PiUsersFourFill } from "react-icons/pi";
import useAxiosPublic from "@/lib/hooks/useAxiosPublic";

import useFindUser from "@/lib/hooks/useFindUser";

import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { ImUsers } from "react-icons/im";

const User = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    // console.log(user);
    const [allUsers, setAllUsers] = useState([]);
    useEffect(() => {
        axiosPublic
            .get("/users/v1")
            .then((res) => {
                setAllUsers(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const [findUser] = useFindUser();
    // console.log(findUser);

    return (
        <div className="bg-white drop-shadow-md rounded-md p-4">
            <div className="flex justify-between items-center md:gap-1">
                <div>
                    <h3 className="text-xl font-semibold">
                        {findUser?.role === "admin"
                            ? "Total Users"
                            : user?.displayName}
                    </h3>

                    <div className="flex py-1 items-center gap-3">
                        <h2 className="font-bold md:text-xl">
                            {findUser?.role === "admin" ? (
                                allUsers?.length
                            ) : (
                                <div>
                                    <span className="font-normal md:text-base">
                                        Subscription:
                                    </span>{" "}
                                    <span className="font-normal md:text-base">
                                        {findUser?.subscription}
                                    </span>
                                </div>
                            )}
                        </h2>
                        {findUser?.role === "admin" ? (
                            <span className="text-[#68B8A1] font-bold text-[13px]">
                                +5.2%
                            </span>
                        ) : (
                            ""
                        )}
                    </div>

                    <p className="text-[#9da1a4] text-[13px]">
                        {findUser?.role === "admin" ? "Active Users" : "Active"}
                    </p>
                </div>

                {findUser?.role === "admin" ? (
                    <div className="border-2 border-oliveGreen rounded-full p-1">
                        <PiUsersFourFill className="text-3xl" />
                    </div>
                ) : (
                    <Image
                        height={40}
                        width={40}
                        src={user?.photoURL}
                        className="rounded-full"
                    ></Image>
                )}
            </div>
        </div>
    );
};

export default User;
