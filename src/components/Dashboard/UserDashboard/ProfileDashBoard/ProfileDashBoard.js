"use client";

import Image from "next/image";
import libraByte from "../../../../assets/logo/LibraByte.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/app/Context/AuthProvider";
import { PiUserCirclePlusDuotone } from "react-icons/pi";
import { IoDiamond } from "react-icons/io5";

import useFindUser from "@/lib/hooks/useFindUser";
import AdminProfileDash from "./AdminProfileDash";
import useAxiosPublic from "@/lib/hooks/useAxiosPublic";



const ProfileDashBoard = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic()
    // console.log(user);

    const [findUser] = useFindUser();
    // console.log(findUser);

 

    const [borrowStatusTrue, setBorrowStatusTrue] = useState([])
    const [borrowStatusFalse, setBorrowStatusFalse] = useState([])

    const [findUserBorrow, setFindUserBorrow] = useState([])

    useEffect(() => {
        axiosPublic.get('/addborrow/v1')
        .then(res => {
            const borrowData =  res.data
            const filteredData =  borrowData.filter(borrow => borrow?.borrower_email === user?.email)

            const borrowFalse = filteredData.filter(bor => bor?.borrow_status === false)
            setBorrowStatusFalse(borrowFalse)

            const borrowTrue = filteredData.filter(bor => bor?.borrow_status === true)
            setBorrowStatusTrue(borrowTrue)

            // setFindUserBorrow(filteredData)

            const currentDate = new Date().getTime()

            const borrowDate = filteredData.filter(bor => {
                // console.log(bor.Date);
                const borrowDate = new Date(bor.Date).getTime()
                // console.log(borrowDate);

                const tenDay = (24*60*60*1000)*10
                const findDate = borrowDate + tenDay
                console.log(findDate);

               return  findDate >= borrowDate + tenDay

            })
            console.log(borrowDate);



            // console.log(currentDate);

        })
        .catch(error => {
            console.log(error);
        })
    }, [user])

    // console.log(borrowStatusFalse.length);
    // console.log(user?.email);

//    console.log(borrowStatusTrue.length);




    return (
        <div>
            {findUser.role === "admin" ? (
                <AdminProfileDash />
            ) : (
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
                                "Books are the plane, and the train and the
                                road. They are the destination, and the journey.
                                They are home"
                            </p>
                            <p>- Anna Quindlen</p>
                        </div>
                    </div>

                    {/* Application status */}

                    <div className="my-16 ml-28 pr-16">
                        <div>
                            <h3 className="text-2xl font-sans font-bold mb-4 ml-[52px]">
                                My Application Status
                            </h3>
                        </div>
                        <div className="flex items-center">
                            {/* steps */}
                            <div className="">
                                <ul className="steps steps-vertical space-y-2">
                                    <li
                                        data-content={findUserBorrow.length === 0 ? "✕" : "✓"}
                                        className={findUserBorrow.length === 0 ? `step step-neutral` : `step step-success`}
                                    ></li>
                                    <li
                                        data-content={findUserBorrow.length !== 0 ?  (borrowStatusTrue.length === findUserBorrow.length ? "✓" : `${borrowStatusTrue.length}/${findUserBorrow.length}`) : "✕"}
                                        className={findUserBorrow.length === 0 || borrowStatusTrue.length !== findUserBorrow.length ? `step step-neutral` : `step step-success`}
                                    ></li>
                                    <li
                                        data-content="✕"
                                        className="step step-neutral"
                                    ></li>
                                </ul>
                            </div>

                            <div className="space-y-5">
                                {/* 1st status */}

                                <p className="text-lg font-sans">
                                    Your scheduled time to pick up the book is
                                    still not confirmed. The status will
                                    immediately update after your request has
                                    been approved by the library.
                                </p>

                                {/* 2nd status */}

                                <p className="text-lg font-sans">
                                    Thank you for your patience. We're pleased
                                    to inform you that your request to pick up
                                    the book has been approved by the library
                                </p>

                                {/* 3rd status */}

                                <p className="text-lg font-sans">
                                    The book has been delivered to you. Please,
                                    note that to avoid extra cost, return it
                                    before the return date.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProfileDashBoard;
