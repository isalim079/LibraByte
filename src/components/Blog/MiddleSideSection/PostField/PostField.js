"use client"

import { AuthContext } from "@/app/Context/AuthProvider";
import { useContext, useEffect, useState } from "react";
import "./postFields.css"
import useAxiosPublic from "@/lib/hooks/useAxiosPublic";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import useBlogPost from "@/lib/hooks/useBlogPost";

const PostField = () => { 

    const {user} = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    // console.log(user?.photoURL);

    const [, refetch] = useBlogPost()

    
    // console.log(blogPost);

    const [blogPostData, setBlogPostData] = useState()

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
            if(res.data) {
                toast.success("your post updated")
                refetch()
                e.target.reset()
            }
        })
        .catch(error => {
            console.log(error);
        })

    }


        // const { data = [], refetch } = useQuery({
        //     queryKey: ['blogPostData'],
        //     queryFn: async () => {
        //         const result = await axiosPublic.get("/blogPost/v1")
        //         return result.data
        //         // setBlogPostData(result.data)
        //     },
            
        //   })

        //   console.log(data);

    

    return (
        <div className="p-8 bg-lightWhite drop-shadow-lg rounded-md">
            <div>
                <h3 className="mb-1 font-semibold text-oliveGreen">Hey, <span className="">{user?.displayName ? user?.displayName : "buddy" }...!</span>  </h3>
                <form onSubmit={handlePost}>
                <input type="text" className=" xl:w-[327px] w-full my-2  h-10 text-sm pl-4 focus:outline-none focus:border-2 focus:border-darkLightWhite" placeholder="Write your blog title" required name="postFieldTitle" id="" />

                <textarea id="textArea" name="postField" cols="32" rows="6" required className="border-2 border-t-0 border-l-1 border-r-0 border-b-oliveGreen/60 p-4 placeholder:text-sm focus:outline-none focus:border-2 focus:border-darkLightWhite" placeholder="Share your thoughts here..."></textarea>
                <button className="w-full bg-oliveGreen py-2 text-lightWhite rounded-md mt-2">Post</button>
                </form>
            </div>
        </div>
    );
};

export default PostField;