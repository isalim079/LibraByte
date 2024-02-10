"use client";

import { AuthContext } from "@/app/Context/AuthProvider";
import useAxiosPublic from "@/lib/hooks/useAxiosPublic";
import useBlogPost from "@/lib/hooks/useBlogPost";
import { useContext } from "react";
import toast from "react-hot-toast";
import "./postFields.css";
import { useRouter } from "next/navigation";

const PostFieldForm = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    // console.log(user?.photoURL);
    const router = useRouter();
    // console.log(router);

    const [, refetch] = useBlogPost();

    const handlePost = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = await user?.displayName;
        const email = await user?.email;
        const image = await user?.photoURL;
        const bookName = form.get("postFieldTitle");
        const bookReview = form.get("postField");

        const blogPostData = {
            name,
            email,
            image,
            bookName,
            bookReview,
        };

        /* if the user available then he can post */
        if (user) {
            axiosPublic
                .post("/blogPost/v1", blogPostData)
                .then((res) => {
                    console.log(res.data);
                    if (res.data) {
                        toast.success("your post updated");
                        refetch();
                        e.target.reset();
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
        /* otherwise he will redirect to login page */
            toast.error("login first!");
            setTimeout(() => {
                router.push("/login");
            }, 1000);
        }
    };

    return (
        <div className="k">
            <form onSubmit={handlePost} className="">
                <input
                    type="text"
                    className=" xl:max-w-[352px] w-full  my-2  h-10 text-sm pl-4 focus:outline-none focus:border-2 focus:border-[#126056] bg-white text-white"
                    placeholder="Write your blog title"
                    required
                    name="postFieldTitle"
                    id=""
                />

                <textarea
                    id="textArea"
                    name="postField"
                    cols="32"
                    rows="6"
                    required
                    className="border-2 xl:w-[352px] border-t-0 border-l-1 border-r-0 border-b-royalBlue border-l-royalBlue bg-white p-4 placeholder:text-sm focus:outline-none focus:border-2 focus:border-[#126056] text-white"
                    placeholder="Share your thoughts here..."
                ></textarea>
                <button className="xl:max-w-[352px] w-full bg-darkBtn hover:bg-[#126056] shadow-lg py-2 text-lightWhite rounded-md mt-2">
                    Post
                </button>
            </form>
        </div>
    );
};

export default PostFieldForm;
