"use client"

import { AuthContext } from "@/app/Context/AuthProvider";
import { useContext } from "react";

const PostField = () => { 

    const {user} = useContext(AuthContext)
    // console.log(user);

    return (
        <div className="p-8 bg-lightWhite drop-shadow-lg rounded-md">
            <div>
                <h3 className="mb-1 font-semibold text-oliveGreen">Hey, <span className="">{user?.displayName ? user?.displayName : "buddy" }...!</span>  </h3>
                <textarea name="postField" id="" cols="32" rows="6" className="border-2 border-t-0 border-l-1 border-r-0 border-b-oliveGreen/60 p-4 placeholder:text-sm focus:outline-none focus:border-2 focus:border-darkLightWhite" placeholder="Write your thoughts here..."></textarea>
                <button className="w-full bg-oliveGreen py-2 text-lightWhite rounded-md mt-2">Post</button>
            </div>
        </div>
    );
};

export default PostField;