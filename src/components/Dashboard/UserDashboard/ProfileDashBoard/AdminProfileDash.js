"use client";

import { FaClock } from "react-icons/fa";
import useBorrowBook from "./useBorrowBook";
import Swal from "sweetalert2";
import useAxiosPublic from "@/lib/hooks/useAxiosPublic";
import { IoIosCheckmarkCircle } from "react-icons/io";

import { useState } from "react";

import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { IoCheckmarkSharp } from "react-icons/io5";

const AdminProfileDash = () => {
    // console.log(pageNumber.page);

    const axiosPublic = useAxiosPublic();

    const [borrowBooksData, refetch] = useBorrowBook();
    // console.log(borrowBooksData);

    /* handle borrow status */
    const handleBorrowStatus = (borrow) => {
        Swal.fire({
            title: "Do you want to approve borrow request?",
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

                const res = await axiosPublic.patch(
                    `/addborrow/v1/${borrow._id}`,
                    {
                        borrow_status: true,
                    }
                );
                // console.log(res);
                if (res.status === 200) {
                    refetch();
                    Swal.fire("Approved!", "", "success");
                }

                // console.log(borrow._id);
            } else if (result.isDenied) {
                Swal.fire("Cancelled", "", "info");
            }
        });
    };

    /* handle delivered status */
    const handleDeliveredStatus = (borrow) => {
        Swal.fire({
            title: "Do you want to approve delivery?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonColor: "#333D2E",
            cancelButtonColor: "#878783",
            confirmButtonText: "Approve",
            denyButtonText: `Didn't delivered yet`,
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                /* patch borrow status */

                const res = await axiosPublic.patch(
                    `/updateDeliver/v1/${borrow._id}`,
                    {
                        delivered_status: true,
                    }
                );
                // console.log(res);

                if (res.status === 200) {
                    refetch();
                    Swal.fire("Delivered!", "", "success");
                }

                // console.log(borrow._id);
            } else if (result.isDenied) {
                Swal.fire("Cancelled", "", "info");
            }
        });
        // console.log(borrow);
    };

    /* handle returned status */
    const handleReturnedStatus = (borrow) => {
        Swal.fire({
            title: "Want to update return status?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonColor: "#333D2E",
            cancelButtonColor: "#878783",
            confirmButtonText: "Yes",
            denyButtonText: `Not now`,
        }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
    //             /* patch returned status */

                const res = await axiosPublic.patch(
                    `/returnedStatus/v1/${borrow._id}`,
                    {
                        returned_status: true,
                    }
                );
                // console.log(res);

                if (res.status === 200) {
                    refetch();
                    Swal.fire("Successfully updated returned status", "", "success");
                }

                // console.log(borrow._id);
            } else if (result.isDenied) {
                Swal.fire("Cancelled", "", "info");
            }
        });
        // console.log(borrow);
    };


    /* Pagination */

    const [currentPage, setCurrentPage] = useState(1);

    /* how many content you want to show in one page */
    const [borrowInfoPerPage] = useState(10);

    // console.log(currentPage);

    /* total data */
    const indexOfLastBorrowBooksData = currentPage * borrowInfoPerPage;

    /* data from where it will be shown. page 2 will exclude 1st 10 data, page 3 will exclude 1st 20 data */
    const indexOfFirstBorrowBooksData =
        indexOfLastBorrowBooksData - borrowInfoPerPage;

    /* splice by excluding data */
    const currentBorrowBooksData = borrowBooksData.slice(
        indexOfFirstBorrowBooksData,
        indexOfLastBorrowBooksData
    );

    const pageNumbers = [];

    /* divide numbers will be how many pages you want to show in one page */

    for (let i = 1; i <= Math.ceil(borrowBooksData.length / 10); i++) {
        pageNumbers.push(i);
    }

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    /* managing previous click */

    const handlePreviousClick = () => {
        if (currentPage > 0 && currentPage - 1 !== 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    /* managing Next click */

    const handleNextClick = () => {
        if (currentPage > 0 && currentPage + 1 !== pageNumbers.length + 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="">
            <div>
                <h3 className="text-center text-3xl font-bold font-robotoSlab pt-10 mb-5">
                    Manage borrow status
                </h3>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-xs lg:table-xs">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    {/* <input
                                        type="checkbox"
                                        className="checkbox"
                                    /> */}
                                </label>
                            </th>
                            <th>Book Info</th>
                            <th>User Info</th>
                            <th>Pickup Date</th>
                            <th>Borrow Status</th>
                            <th>Delivery Status</th>
                            <th>Returned Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* if borrowBooksData length is greater than 5, then it will map currentBooksData, otherwise it will map borrow books data */}
                        {(borrowBooksData.length > 10
                            ? currentBorrowBooksData
                            : borrowBooksData
                        ).map((borrow) => (
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
                                        <span className="flex items-center text-sm font-normal justify-start gap-2 cursor-pointer underline">
                                            <FaClock /> Pending
                                        </span>
                                    ) : (
                                        <span className="flex items-center text-sm font-normal justify-start gap-2 cursor-pointer underline">
                                            <IoIosCheckmarkCircle /> Approved
                                        </span>
                                    )}
                                </td>
                                <th>
                                    

                                        {/* delivery status */}
                                        <div
                                            onClick={() =>
                                                handleDeliveredStatus(borrow)
                                            }
                                        >
                                            {borrow?.delivered_status ===
                                            false ? (
                                                <span className="flex items-center justify-start gap-2 text-sm font-normal cursor-pointer underline">
                                                    <FaClock /> Pending
                                                </span>
                                            ) : (
                                                <span className="flex items-center justify-start gap-2 text-sm font-normal cursor-pointer underline">
                                                    <IoIosCheckmarkCircle />{" "}
                                                    Delivered
                                                </span>
                                            )}
                                        </div>

                                      
                                  
                                </th>

                                <th>
                                      {/* returned status */}

                                      <div 
                                      onClick={() => handleReturnedStatus(borrow)}
                                      >
                                            {borrow?.returned_status ===
                                            false ? (
                                                <span className="flex items-center font-normal text-sm justify-start gap-2 cursor-pointer underline">
                                                    <RxCross2 /> Not Returned
                                                </span>
                                            ) : (
                                                <span className="flex items-center font-normal text-sm justify-start gap-2 cursor-pointer underline">
                                                    <IoCheckmarkSharp />{" "}
                                                    Returned
                                                </span>
                                            )}
                                        </div>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}

            {/* If borrow books data is more than 5, then data will be shown. otherwise not. */}

            {borrowBooksData.length > 10 ? (
                <div className="pb-10">
                    <ul className="flex items-center gap-10 text-xl font-semibold justify-center mt-10">
                        {/* previous button */}
                        <button className="btn-5">
                            <MdSkipPrevious
                                onClick={() => handlePreviousClick()}
                                className="text-3xl border border-royalBlue rounded-full p-[2px]  hover:bg-royalBlue hover:text-white"
                            />
                        </button>

                        {/* This is the logic for slice. I give an example
                
                slice(0, 7) => shows 1 to 7
                slice(1, 8) => shows 2 to 8
                slice(2, 9) => shows 3 to 9

                so, default current page is 1. If we minus 1 from current page. It will be 0 and if we plus 6, it will be 7. our 1st example.
                in second, if our current page is 2, then current page - 1 will be 2 and current page + 6 will be 8. our 2nd example. 
                
                */}

                        {/* If user clicks number 2 or other then it will show */}
                        {currentPage !== 1 && pageNumbers.length > 7 ? (
                            <>
                                {pageNumbers.slice(0, 1).map((number) => (
                                    <li key={number}>
                                        <button
                                            onClick={() => paginate(number)}
                                            className={
                                                currentPage === number
                                                    ? "bg-royalBlue text-white px-2 py-1 rounded-md -translate-y-1 shadow-lg transition-all duration-400 ease-in-out"
                                                    : ""
                                            }
                                        >
                                            {number}
                                        </button>
                                    </li>
                                ))}
                            </>
                        ) : (
                            ""
                        )}

                        {/* ... condition */}

                        {currentPage !== 1 && pageNumbers.length > 7 ? (
                            <li>...</li>
                        ) : (
                            ""
                        )}
                        {/* pages */}
                        {pageNumbers
                            .slice(
                                pageNumbers.length > 7 ? currentPage - 1 : 0,
                                currentPage + 6
                            )
                            .map((number) => (
                                <li key={number}>
                                    <button
                                        onClick={() => paginate(number)}
                                        className={
                                            currentPage === number
                                                ? "bg-royalBlue text-white px-2 py-1 rounded-md -translate-y-1 shadow-lg transition-all duration-400 ease-in-out"
                                                : ""
                                        }
                                    >
                                        {number}
                                    </button>
                                </li>
                            ))}

                        {pageNumbers.length > 7 &&
                            currentPage <= pageNumbers.length - 6 && (
                                <li>...</li>
                            )}

                        {pageNumbers.length > 7 ? (
                            <button>{pageNumbers.length}</button>
                        ) : (
                            ""
                        )}

                        {/* next button */}

                        <button>
                            <MdSkipNext
                                onClick={() => handleNextClick()}
                                className="text-3xl border border-royalBlue rounded-full p-[2px] hover:bg-royalBlue hover:text-white"
                            />
                        </button>
                    </ul>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default AdminProfileDash;
