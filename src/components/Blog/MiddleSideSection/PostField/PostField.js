"use client";

import { AuthContext } from "@/app/Context/AuthProvider";
import { useContext } from "react";

import PostFieldForm from "./PostFieldForm/PostFieldForm";

const PostField = () => {
    const { user } = useContext(AuthContext);


    return (
        <div className="p-8 bg-lightWhite drop-shadow-lg rounded-md">
            <div>
                <h3 className="mb-1 font-semibold text-oliveGreen">
                    Hey,{" "}
                    <span className="">
                        {user?.displayName ? user?.displayName : "buddy"}...!
                    </span>{" "}
                </h3>

                {/* post field */}
                
                <PostFieldForm />
            </div>
        </div>
    );
};

export default PostField;
