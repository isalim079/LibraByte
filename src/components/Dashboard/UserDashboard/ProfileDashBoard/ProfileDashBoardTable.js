"use client";

import { AuthContext } from "@/app/Context/AuthProvider";
import useAxiosPublic from "@/lib/hooks/useAxiosPublic";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { FaClock } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";

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
    // console.log(findUserBorrow);

    const [currentPage, setCurrentPage] = useState(1);
    const [perPageContent] = useState(5);

    const indexOfLastPageData = currentPage * perPageContent;
    const indexOfFirstPageData = indexOfLastPageData - perPageContent;

    const currentPageData = findUserBorrow.slice(
        indexOfFirstPageData,
        indexOfLastPageData
    );

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(findUserBorrow.length / 5); i++) {
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
                            <th>Delivered Status</th>
                            <th>Application Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* show data dynamically */}
                        {(findUserBorrow.length > 5
                            ? currentPageData
                            : findUserBorrow
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
                                <td className="">
                                    {borrow?.delivered_status === false ? (
                                        <span className="flex items-center justify-start gap-2 cursor-pointer">
                                            <FaClock /> Pending
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-start gap-2 cursor-pointer">
                                            <IoIosCheckmarkCircle /> Delivered
                                        </span>
                                    )}
                                </td>
                                <th>
                                    <button className="btn btn-ghost btn-xs">
                                        <Link
                                            href={`/dashboard/${borrow?._id}`}
                                        >
                                            details
                                        </Link>
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* pagination */}

            {findUserBorrow.length > 5 ? (
                <div className="md:mb-20 mt-16">
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

export default ProfileDashBoardTable;
