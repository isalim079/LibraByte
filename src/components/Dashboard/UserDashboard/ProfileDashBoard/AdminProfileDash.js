"use client";

import { FaClock } from "react-icons/fa";
import useBorrowBook from "./useBorrowBook";
import Swal from "sweetalert2";
import useAxiosPublic from "@/lib/hooks/useAxiosPublic";
import { IoIosCheckmarkCircle } from "react-icons/io";

const AdminProfileDash = () => {
    const axiosPublic = useAxiosPublic();

    const [borrowBooksData, refetch] = useBorrowBook();
    // console.log(borrowBooksData);

    const handleBorrowStatus = (borrow) => {
        Swal.fire({
            title: "Do you want to approve?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonColor: "#333D2E",
            cancelButtonColor: "#878783",
            confirmButtonText: "Approve",
            denyButtonText: `Don't approve`,
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                /* patch borrow status */

                 await axiosPublic.patch(
                    `/addborrow/v1/${borrow._id}`,
                    {
                        borrow_status: true,
                    }
                );
                // console.log(result.data);

                refetch();
                Swal.fire("Approved!", "", "success");

                // console.log(borrow._id);
            } else if (result.isDenied) {
                Swal.fire("Cancelled", "", "info");
            }
        });
    };

    return (
        <div>
            <div>
                <h3 className="text-center text-3xl font-bold font-robotoSlab mt-10 mb-5">
                    Manage borrow status
                </h3>
            </div>

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
                        {borrowBooksData.map((borrow) => (
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
                                <td
                                    className=""
                                    onClick={() => handleBorrowStatus(borrow)}
                                >
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

export default AdminProfileDash;
