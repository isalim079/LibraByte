"use client";

import { AuthContext } from "@/app/Context/AuthProvider";
import useAxiosPublic from "@/lib/hooks/useAxiosPublic";
import { useContext, useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";

const ProfileDashBoardTable = () => {
    const { user } = useContext(AuthContext);

    const axiosPublic = useAxiosPublic();

    const [findUserBorrow, setFindUserBorrow] = useState([]);

    useEffect(() => {
        axiosPublic
            .get("/addborrow/v1")
            .then((res) => {
                const borrowData = res.data;
                const filteredData = borrowData.filter(
                    (borrow) => borrow?.borrower_email === user?.email
                );

                setFindUserBorrow(filteredData);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [user]);
    console.log(findUserBorrow);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                    />
                                </label>
                            </th>
                            <th>Book Info</th>
                            <th>User Info</th>
                            <th>Pickup Date</th>
                            <th>Borrow Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {findUserBorrow.map((borrow) => (
                            <tr key={borrow._id}>
                                <th>
                                    <label>
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                        />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img
                                                    src={borrow?.Book_image}
                                                    alt={borrow?.Book_name}
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">
                                                {borrow?.Book_name}
                                            </div>
                                            <div className="text-sm opacity-50">
                                                {borrow?.Book_author}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {borrow?.borrower_name}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">
                                        {borrow?.borrower_email}
                                    </span>
                                </td>
                                <td>{borrow?.Date}</td>
                                <td className="">
                                    {borrow?.borrow_status === false ? (
                                        <span className="flex items-center justify-start gap-2 btn btn-ghost">
                                            <FaClock /> Pending
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-start gap-2 btn btn-ghost">
                                            <IoIosCheckmarkCircle /> Approved
                                        </span>
                                    )}
                                </td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">
                                        details
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ProfileDashBoardTable;
