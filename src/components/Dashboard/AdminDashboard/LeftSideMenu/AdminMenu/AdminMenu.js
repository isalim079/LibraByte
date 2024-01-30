"use client";

import { FaHome } from "react-icons/fa";
import { SiPolymerproject } from "react-icons/si";
import { BiSolidMessage } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { FaUser } from "react-icons/fa6";
import { MdReportProblem } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { FaUsers } from "react-icons/fa6";
import Link from "next/link";
import { useContext } from "react";
import { AuthContext } from "@/app/Context/AuthProvider";
import useAxiosPublic from "@/lib/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

import DahsBoardSignOut from "./DashboardSignOut";

const AdminMenu = () => {
    const { user } = useContext(AuthContext);

    const axiosPublic = useAxiosPublic();

    const { data = [] } = useQuery({
        queryKey: ["usersData"],
        queryFn: async () => {
            const result = await axiosPublic.get("/users/v1");
            const users = result.data;

            const findUser = users.find((users) => users.email === user.email);

            return findUser;
        },
    });
    const findUser = data;

    // console.log(findUser.role);

    return (
        <div className="">
            {/* <h1 className='md:mt-11 text-[17px]'>Dashboard home</h1> */}

            

            <div className="list-none md:mt-16">
                {/* categories */}
                <li className="cursor-pointer transition-all duration-300 ease-in-out  hover:bg-darkLightWhite hover:rounded-md">
                    <Link
                        href="/dashboard"
                        className="flex px-2 py-1 items-center gap-2"
                    >
                        <FaHome className="text-xl" /> Dashboard
                    </Link>
                </li>

                {/* divider */}
                {findUser.role === "admin" ? (
                    <>
                        <div className="divider my-2"></div>
                        <li className="cursor-pointer transition-all duration-300 ease-in-out  hover:bg-darkLightWhite hover:rounded-md">
                            <Link
                                href="/dashboard/users"
                                className="flex px-2 py-1 items-center gap-2"
                            >
                                <FaUser className="text-xl" /> Users
                            </Link>
                        </li>
                    </>
                ) : (
                    ""
                )}

                {/* divider */}
                <div className="divider my-2"></div>

                <li className="cursor-pointer transition-all duration-300 ease-in-out  hover:bg-darkLightWhite hover:rounded-md">
                    <Link
                        href="/dashboard/manage-books"
                        className="flex px-2 py-1 items-center gap-2"
                    >
                        <SiPolymerproject className="text-md" /> Manage Book
                    </Link>
                </li>

                {/* divider */}
                <div className="divider my-2"></div>
                <li className="cursor-pointer transition-all duration-300 ease-in-out  hover:bg-darkLightWhite hover:rounded-md">
                    <Link
                        href="/dashboard/subscriber"
                        className="flex px-2 py-1 items-center gap-2"
                    >
                        <FaUsers className="text-xl" /> Subscriber
                    </Link>
                </li>

                {/* divider */}
                <div className="divider my-2"></div>
                <li className="cursor-pointer transition-all duration-300 ease-in-out  hover:bg-darkLightWhite hover:rounded-md">
                <DahsBoardSignOut />
            </li>
            </div>
        </div>
    );
};

export default AdminMenu;
