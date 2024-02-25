"use client";
import { GiReturnArrow } from "react-icons/gi";
import useAxiosPublic from "@/lib/hooks/useAxiosPublic";
import useFindUser from "@/lib/hooks/useFindUser";
import React, { useEffect, useState } from "react";

const Librarian = async () => {
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

    const totalRatings = allBooks.filter((ratings) => ratings.rating === 5);
    //    console.log(totalRatings.length);

    return (
        <div className="bg-white drop-shadow-md rounded-md p-4">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-xl font-semibold">
                        {findUser?.role === "admin"
                            ? "Top Rated Books"
                            : "Have To Return Books"}
                    </h3>

                    <div className="flex py-1 items-center gap-3">
                        <h2 className="font-bold md:text-xl">
                            {findUser?.role === "admin"
                                ? totalRatings.length
                                : findUser?.totalBorrow}
                        </h2>
                        {findUser?.role === "admin" ? (
                            <span className="text-[#68B8A1] font-bold text-[13px]">
                                +5.2%
                            </span>
                        ) : (
                            ""
                        )}
                    </div>
                    {findUser?.role === "admin" ? (
                        <p className="text-[#9da1a4] text-[13px]">All Author</p>
                    ) : (
                        <p className="text-[#9da1a4] text-[13px]">
                            Return Books
                        </p>
                    )}
                </div>

                <div className="border-2 border-oliveGreen p-1 rounded-full">
                    <GiReturnArrow className="text-3xl" />
                </div>
            </div>
        </div>
    );
};

export default Librarian;
