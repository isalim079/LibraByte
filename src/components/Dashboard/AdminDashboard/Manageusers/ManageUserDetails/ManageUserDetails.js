"use client";

import useAxiosPublic from "@/lib/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import Swal from "sweetalert2";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import Moment from "react-moment";

const ManageUserDetails = async () => {
    const axiosPublic = useAxiosPublic();

    /* getting all users */
    const { data = [], refetch } = useQuery({
        queryKey: ["usersData"],
        queryFn: async () => {
            const usersData = await axiosPublic.get("/users/v1");
            return usersData.data;
        },
    });
    const usersData = data;
    // console.log(usersData);

    /* changing user role */
    const handleMakeAdminUser = (users) => {
        // console.log(users);

        Swal.fire({
            title: "Are you sure?",
            text: "You are going update this user role!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                /* making user to admin */
                if (users.role === "user") {
                    const res = await axiosPublic.patch(
                        `/userRole/v1/${users._id}`,
                        {
                            role: "admin",
                        }
                    );
                    // console.log(res);
                    if (res.status === 200) {
                        refetch();
                        Swal.fire({
                            title: "You have successfully updated this user role!",
                            text: "Role updated.",
                            icon: "success",
                        });
                    }
                }

                /* making admin to user */
                if (users.role === "admin") {
                    const res = await axiosPublic.patch(
                        `/userRole/v1/${users._id}`,
                        {
                            role: "user",
                        }
                    );
                    // console.log(res);
                    if (res.status === 200) {
                        refetch();
                        Swal.fire({
                            title: "You have successfully updated this user role!",
                            text: "Role updated.",
                            icon: "success",
                        });
                    }
                }
            }
        });
    };

    /* delete user */
    const handleDeleteUser = (users) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete this user!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosPublic.delete(
                    `/userDelete/v1/${users._id}`
                );
                if (res.status === 200) {
                    refetch();

                    Swal.fire({
                        title: "Deleted!",
                        text: "User has been deleted.",
                        icon: "success",
                    });
                }
            }
        });
    };

     /* Pagination */

     const [currentPage, setCurrentPage] = useState(1);

     /* how many content you want to show in one page */
     const [usersDataPerPage] = useState(10);
 
     // console.log(currentPage);
 
     /* total data */
     const indexOfLastUsersData = currentPage * usersDataPerPage;
 
     /* data from where it will be shown. page 2 will exclude 1st 10 data, page 3 will exclude 1st 20 data */
     const indexOfFirstUsersData =
         indexOfLastUsersData - usersDataPerPage;
 
     /* splice by excluding data */
     const currentUsersData = usersData.slice(
         indexOfFirstUsersData,
         indexOfLastUsersData
     );
 
     const pageNumbers = [];
 
     /* divide numbers will be how many pages you want to show in one page */
 
     for (let i = 1; i <= Math.ceil(usersData.length / 10); i++) {
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
        <div className="mt-7">
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className="bg-royalBlue text-white text-[14px] drop-shadow-md">
                            <th>#</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Send Email</th>
                            <th>Join Date</th>
                            <th>Subscription</th>
                            <th>Role</th>
                            <th>Make User/Admin</th>
                            <th>Delete User</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentUsersData.map((user, idx) => (
                            <>
                                <tr key={user._id}>
                                    <th>{idx + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>
                                        <AiOutlineMail className="text-xl"></AiOutlineMail>{" "}
                                    </td>
                                    <td><Moment format="DD/MM/YYYY">
                                    {user?.date}
                                        </Moment></td>
                                    <td>{user?.subscription}</td>
                                    <td>{user?.role}</td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                handleMakeAdminUser(user)
                                            }
                                            className="hover:shadow-lightBtn hover:shadow-md flex justify-center items-center bg-lightBtn text-white hover:bg-darkBtn md:px-2 md:py-1 mr-1"
                                        >
                                            {user?.role === "admin"
                                                ? "Make User"
                                                : "Make Admin"}
                                        </button>
                                        
                                    </td>
                                    <td>
                                    <button
                                            onClick={() =>
                                                handleDeleteUser(user)
                                            }
                                            className="hover:shadow-red-700 hover:shadow-md flex justify-center items-center bg-red-600 md:px-2 md:py-1 hover:bg-red-700 text-white "
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </>
                        ))}
                    </tbody>

                    
                     {/* Pagination */}

            {/* If borrow books data is more than 5, then data will be shown. otherwise not. */}

            {usersData.length > 10 ? (
                <div className="pb-10">
                    <ul className="flex items-center gap-10 text-xl font-semibold justify-center mt-10">
                        {/* previous button */}
                        <button className="btn-5">
                            <GrFormPrevious
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
                            <GrFormNext
                                onClick={() => handleNextClick()}
                                className="text-3xl border border-royalBlue rounded-full p-[2px] hover:bg-royalBlue hover:text-white"
                            />
                        </button>
                    </ul>
                </div>
            ) : (
                ""
            )}


                </table>
            </div>
        </div>
    );
};

export default ManageUserDetails;
