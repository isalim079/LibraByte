"use client"

import useAxiosPublic from "@/lib/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineMail } from "react-icons/ai";
import Swal from "sweetalert2";

const ManageUserDetails = async () => {

    const axiosPublic = useAxiosPublic()


    /* getting all users */
    const {data = [], refetch} = useQuery({
        queryKey: ['usersData'],
        queryFn: async () => {
            const usersData = await axiosPublic.get('/users/v1')
            return usersData.data
        }
    })
    const usersData = data
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
            confirmButtonText: "Yes!"
          }).then( async(result) => {
            if (result.isConfirmed) {


                    /* making user to admin */
               if(users.role === "user") {
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
                        icon: "success"
                      });
                }
               }

               /* making admin to user */
               if(users.role === "admin") {
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
                        icon: "success"
                      });
                }
               }



             
            }
          });

    }

    return (
        <div className="mt-7">
            <div className="overflow-x-auto">
                <table className="table table-md">
                    <thead>
                        <tr className='bg-royalBlue text-white text-[14px] drop-shadow-md'>
                            <th>#</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Send Email</th>
                            <th>Join Date</th>
                            <th>Subscription</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            usersData.map((user, idx) => <>
                                <tr key={user._id}>
                                    <th>{idx + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td><AiOutlineMail className="text-xl"></AiOutlineMail> </td>
                                    <td>{user?.date}</td>
                                    <td>{user?.subscription}</td>
                                    <td>{user?.role}</td>
                                    <td className="flex gap-3 justify-between">
                                        <button onClick={() => handleMakeAdminUser(user)} className="hover:shadow-lightBtn hover:shadow-md flex justify-center items-center bg-lightBtn text-white hover:bg-darkBtn md:px-2 md:py-1 btn-xs mr-1">{user?.role === "admin" ? "Make User" : "Make Admin"}</button>
                                        <button className="hover:shadow-red-700 hover:shadow-md flex justify-center items-center bg-red-600 md:px-2 md:py-1 hover:bg-red-700 text-white  btn-xs">Delete</button>
                                    </td>

                                </tr>
                            </>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageUserDetails;