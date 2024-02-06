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
                    (borrow) => borrow?._id === params.dashboard
                );

                setFindDetails(filteredData);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [user]);

console.log(findDetails.borrow_status);

    return (
        <div>
            <div className="my-16 mx-20 bg-lightWhite p-14 shadow-lg">
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
                                        data-content="✓"
                                        className="step step-success"
                                    ></li>
                                    <li
                                        data-content={}
                                        className="step step-neutral"
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
                                    successfully requested. 
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
    );
};

export default ApplicationStatus;