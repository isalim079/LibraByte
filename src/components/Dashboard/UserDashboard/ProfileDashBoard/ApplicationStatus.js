"use client"

import { AuthContext } from "@/app/Context/AuthProvider";
import useAxiosPublic from "@/lib/hooks/useAxiosPublic";
import { useContext, useEffect, useState } from "react";
import "./applicationStatus.css"

const ApplicationStatus = ({params}) => {

    // console.log(params.dashboard);

    const { user } = useContext(AuthContext);

    const axiosPublic = useAxiosPublic();

    const [findDetails, setFindDetails] = useState();

    useEffect(() => {
        axiosPublic
            .get("/addborrow/v1")
            .then((res) => {
                const borrowData = res.data;
                const filteredData = borrowData.find(
                    (borrow) => borrow?._id === params?.dashboard
                );

                setFindDetails(filteredData);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [user]);

// console.log(findDetails?.borrow_status);

    return (
        <div className=" flex justify-center items-center h-screen bg-bgTexture ">
            <div className="h-[380px] rounded-md mx-20 bg-royalBlue bg-bgTexture p-14 shadow-lg">
                        <div>
                            <h3 className="text-2xl font-sans font-bold mb-4 ml-[52px] text-white">
                                My Application Status
                            </h3>
                        </div>
                        <div className="flex items-center">
                            {/* steps */}
                            <div className="">
                                <ul className="steps steps-vertical space-y-2">
                                    <li
                                        data-content="✓"
                                        className="step step-success"
                                    ></li>
                                    <li
                                        data-content={findDetails?.borrow_status === false ? "✕" : "✓" }
                                        className={findDetails?.borrow_status === false ? "step step-neutral" : "step step-success"}
                                    ></li>
                                    <li
                                        data-content={findDetails?.delivered_status === false ? "✕" : "✓"}
                                        className={findDetails?.delivered_status === false ? "step step-neutral" : "step step-success"}
                                    ></li>
                                </ul>
                            </div>

                            <div className="space-y-5 text-white">
                                {/* 1st status */}

                                <p className="text-lg font-sans">
                                    Your scheduled time to pick up the book is
                                    successfully requested. 
                                </p>

                                {/* 2nd status */}

                                <p className="text-lg font-sans">
                                    Thank you for your patience. {
                                        findDetails?.borrow_status === false ? "Your requested book is waiting for approval by the library. When the book is approved, we will let you know" : "We're pleased to inform you that your request to pick up the book has been approved by the library. Now you can collect your book from the library."
                                    }
                                </p>

                                {/* 3rd status */}

                                <p className="text-lg font-sans">
                                    {
                                        findDetails?.delivered_status === true ? "The book has been delivered to you. Please,note that to avoid extra cost, return it before the return date." : "You haven't picked your book yet. Come to the library to collect your requested book"
                                    }
                                </p>
                            </div>
                        </div>
                    </div>

                   
        </div>
    );
};

export default ApplicationStatus;