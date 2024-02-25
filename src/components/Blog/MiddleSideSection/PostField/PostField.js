"use client";

import { AuthContext } from "@/app/Context/AuthProvider";
import { useContext } from "react";

import PostFieldForm from "./PostFieldForm/PostFieldForm";

const  PostField = () => {
    const { user } = useContext(AuthContext);


    return (
        <div>
            <div className="">
                <h2 className="text-2xl font-semibold text-royalBlue">
                    Post on your wall
                </h2>
                <div className="border-2 border-customYellow w-[190px] mt-1 mb-5"></div>
            </div>
            <div className="p-8 border-2 border-royalBlue drop-shadow-lg rounded-md">
            <div>
                <h3 className="mb-1 font-semibold text-royalBlue drop-shadow-sm">
                    Hey,{" "}
                    <span className="">
                        {user?.displayName ? user?.displayName : "buddy"}...!
                    </span>{" "}
                </h3>

                {/* post field */}
                
                <PostFieldForm />
            </div>
        </div>
        </div>
    );
};

export default PostField;
