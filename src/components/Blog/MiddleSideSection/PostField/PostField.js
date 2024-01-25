"use client"

import { AuthContext } from "@/app/Context/AuthProvider";
import { useContext } from "react";
import "./postFields.css"
import useAxiosPublic from "@/lib/hooks/useAxiosPublic";

const PostField = () => { 

    const {user} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    // console.log(user?.photoURL);

    const handlePost = async (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = await user?.displayName
        const image = await user?.photoURL
        const bookName = form.get("postFieldTitle")
        const bookReview = form.get("postField")
    
        const blogPostData = {
            name, image, bookName, bookReview
        }
        // console.log(blogPostData);

        axiosPublic.post("/blogPost/v1", blogPostData)
        .then(res => {
            console.log(res.data);
        })
        .catch(error => {
            console.log(error);
        })

    }

    return (
        <div className="p-8 bg-lightWhite drop-shadow-lg rounded-md">
            <div>
                <h3 className="mb-1 font-semibold text-oliveGreen">Hey, <span className="">{user?.displayName ? user?.displayName : "buddy" }...!</span>  </h3>
                <form onSubmit={handlePost}>
                <input type="text" className=" w-full my-2 h-10 text-sm pl-4 focus:outline-none focus:border-2 focus:border-darkLightWhite" placeholder="Type your book name..." required name="postFieldTitle" id="" />
                <textarea id="textArea" name="postField" cols="32" rows="6" required className="border-2 border-t-0 border-l-1 border-r-0 border-b-oliveGreen/60 p-4 placeholder:text-sm focus:outline-none focus:border-2 focus:border-darkLightWhite" placeholder="Write your thoughts here..."></textarea>
                <button className="w-full bg-oliveGreen py-2 text-lightWhite rounded-md mt-2">Post</button>
                </form>
            </div>
        </div>
    );
};

export default PostField;