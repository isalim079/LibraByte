"use client";

import { AuthContext } from "@/app/Context/AuthProvider";

import useAxiosPublic from "@/lib/hooks/useAxiosPublic";
import useFindUser from "@/lib/hooks/useFindUser";

import React, { useEffect, useState } from "react";
import { PiBooksFill } from "react-icons/pi";

const Projects = () => {
    const axiosPublic = useAxiosPublic();

    // console.log(user);
    const [allBooks, setAllBooks] = useState([]);
    useEffect(() => {
        axiosPublic
            .get("/books")
            .then((res) => {
                setAllBooks(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const [findUser] = useFindUser();

    return (
        <div className="bg-white drop-shadow-md rounded-md p-4">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-xl font-semibold">
                        {findUser?.role === "admin"
                            ? "All Books"
                            : "Total Books Read"}
                    </h3>

                    <div className="flex py-1 items-center gap-1 lg:gap-3">
                        <h2 className="font-bold md:text-xl">
                            {findUser?.role === "admin"
                                ? allBooks?.length
                                : findUser?.totalReturns}
                        </h2>
                        {findUser?.role === "admin" ? (
                            <span className="text-[#68B8A1] font-bold text-[13px]">
                                +11.92%
                            </span>
                        ) : (
                            ""
                        )}
                    </div>

                    <p className="text-[#9da1a4] text-[13px]">
                        {findUser?.role === "admin"
                            ? "All Books"
                            : "Long way to go"}
                    </p>
                </div>

                <div className="border-2 border-oliveGreen p-1 rounded-full">
                    <PiBooksFill className="text-3xl" />
                </div>
            </div>
        </div>
    );
};

export default Projects;
