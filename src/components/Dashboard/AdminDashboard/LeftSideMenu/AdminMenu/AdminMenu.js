"use client";

import { FaFilePdf, FaHome } from "react-icons/fa";
import { SiPolymerproject } from "react-icons/si";
import { BiSolidBookmarkAltPlus } from "react-icons/bi";
import { GiSpellBook } from "react-icons/gi";

import { FaUser } from "react-icons/fa6";

import { FaUsers } from "react-icons/fa6";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/app/Context/AuthProvider";

import DahsBoardSignOut from "./DashboardSignOut";
import Loading from "@/components/shared/Loading/Loading";

const AdminMenu = () => {
    const { userRole } = useContext(AuthContext);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (userRole) {
            setLoading(false);
        }
    }, [userRole]);
    // console.log(userRole);

    return (
        <div>
            {loading ? (
                <div className="hidden">
                    <Loading />
                </div>
            ) : (
                <div className="">
                    {/* <h1 className='md:mt-11 text-[17px]'>Dashboard home</h1> */}

                    <div className="list-none lg:mt-16 ">
                        {/* categories */}
                        <li className="cursor-pointer transition-all duration-300 ease-in-out text-white hover:text-royalBlue  hover:bg-customYellow hover:rounded-md">
                            <Link
                                href="/dashboard"
                                className="flex px-2 py-1 items-center gap-2"
                            >
                                <FaHome className="text-xl" /> Dashboard
                            </Link>
                        </li>

                        {/* divider */}
                        {userRole === "admin" ? (
                            <>
                                <div className=" my-4 border border-customYellow"></div>
                                <li className="cursor-pointer transition-all duration-300 ease-in-out  text-white hover:text-royalBlue  hover:bg-customYellow hover:rounded-md">
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
                        {userRole === "admin" ? (
                            <div>
                                <div className=" my-4 border border-customYellow"></div>

                                <li className="cursor-pointer transition-all duration-300 ease-in-out  text-white hover:text-royalBlue  hover:bg-customYellow hover:rounded-md">
                                    <Link
                                        href="/dashboard/addBooks"
                                        className="flex px-2 py-1 items-center gap-2"
                                    >
                                        <BiSolidBookmarkAltPlus className="text-md" />{" "}
                                        Add Books
                                    </Link>
                                </li>
                            </div>
                        ) : (
                            ""
                        )}

                        {/* divider */}
                        {userRole === "admin" ? (
                            <div>
                                <div className=" my-4 border border-customYellow"></div>

                                <li className="cursor-pointer transition-all duration-300 ease-in-out  text-white hover:text-royalBlue  hover:bg-customYellow hover:rounded-md">
                                    <Link
                                        href="/dashboard/uploadBooksPdf"
                                        className="flex px-2 py-1 items-center gap-2"
                                    >
                                        <FaFilePdf className="text-md" />{" "}
                                        Upload Pdf
                                    </Link>
                                </li>
                            </div>
                        ) : (
                            ""
                        )}
                         {/* divider */}
                         {userRole === "admin" ? (
                            <div>
                                <div className=" my-4 border border-customYellow"></div>

                                <li className="cursor-pointer transition-all duration-300 ease-in-out  text-white hover:text-royalBlue  hover:bg-customYellow hover:rounded-md">
                                    <Link
                                        href="/dashboard/donateBooks"
                                        className="flex px-2 py-1 items-center gap-2"
                                    >
                                        <GiSpellBook className="text-md" />{" "}
                                        Donation
                                    </Link>
                                </li>
                            </div>
                        ) : (
                            ""
                        )}
                        

                        {userRole === "user" ? (
                            <div>
                                <div className=" my-4 border border-customYellow"></div>

                                <li className="cursor-pointer transition-all duration-300 ease-in-out  text-white hover:text-royalBlue  hover:bg-customYellow hover:rounded-md">
                                    <Link
                                        href="/dashboard/manage-books"
                                        className="flex px-2 py-1 items-center gap-2"
                                    >
                                        <SiPolymerproject className="text-md" />{" "}
                                        Manage Book
                                    </Link>
                                </li>
                            </div>
                        ) : (
                            ""
                        )}
                         {/* divider */}
                         {userRole === "user" ? (
                            <div>
                                <div className=" my-4 border border-customYellow"></div>

                                <li className="cursor-pointer transition-all duration-300 ease-in-out  text-white hover:text-royalBlue  hover:bg-customYellow hover:rounded-md">
                                    <Link
                                        href="/dashboard/donateBooks/ngoDonate"
                                        className="flex px-2 py-1 items-center gap-2"
                                    >
                                        <FaFilePdf className="text-md" />{" "}
                                        Donate to ngo
                                    </Link>
                                </li>
                            </div>
                        ) : (
                            ""
                        )}
                         {/* divider */}
                         {userRole === "user" ? (
                            <div>
                                <div className=" my-4 border border-customYellow"></div>

                                <li className="cursor-pointer transition-all duration-300 ease-in-out  text-white hover:text-royalBlue  hover:bg-customYellow hover:rounded-md">
                                    <Link
                                        href="/dashboard/donateBooks/donation"
                                        className="flex px-2 py-1 items-center gap-2"
                                    >
                                        <FaFilePdf className="text-md" />{" "}
                                        Donate books
                                    </Link>
                                </li>
                            </div>
                        ) : (
                            ""
                        )}

                        {/* divider */}

                        <div className=" my-4 border border-customYellow"></div>
                        <li className="cursor-pointer transition-all duration-300 ease-in-out  text-white hover:text-royalBlue  hover:bg-customYellow hover:rounded-md">
                            <Link
                                href="/dashboard/subscriber"
                                className="flex px-2 py-1 items-center gap-2"
                            >
                                <FaUsers className="text-xl" /> Subscriber
                            </Link>
                        </li>

                        {/* divider */}
                        <div className=" my-4 border border-customYellow"></div>
                        <li className="cursor-pointer transition-all duration-300 ease-in-out  text-white hover:text-royalBlue  hover:bg-customYellow flex  items-center hover:rounded-md">
                            <DahsBoardSignOut />
                        </li>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminMenu;
