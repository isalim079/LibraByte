"use client";

import { AuthContext } from "@/app/Context/AuthProvider";
import useAxiosPublic from "@/lib/hooks/useAxiosPublic";
import { useContext } from "react";
import toast from "react-hot-toast";

import { useRouter } from "next/navigation";
import useAuthorTalks from "../useAuthorTalks";

const AuthorPostFieldForm = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    // console.log(user?.photoURL);
    const router = useRouter();
    // console.log(router);

    const [, refetch] = useAuthorTalks();

    const handlePost = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const authorName = await user?.displayName;
        const authorEmail = await user?.email;
        const authorImage = await user?.photoURL;
        const authorTitle = form.get("postFieldTitle");
        const authorPost = form.get("postField");

        const authorPostData = {
            authorName,
            authorEmail,
            authorImage,
            authorTitle,
            authorPost,
        };

        /* if the user available then he can post */
        if (user) {
            axiosPublic
                .post("/authorTalks/v1", authorPostData)
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
        <div className="">

            <div className="pt-10 flex justify-center">
                <p className=" text-xl w-full max-w-[520px] font-semibold text-royalBlue">Post on <span className="font-bold">#AuthorTalks</span></p>
            </div>

            <form onSubmit={handlePost} className="flex flex-col justify-center items-center">
                <input
                    type="text"
                    className="w-full max-w-[520px]  my-2  h-10 text-sm pl-4 focus:outline-none focus:border-2 focus:border-[#126056] bg-royalBlue text-white rounded-md focus:shadow-md focus:shadow-royalBlue/60"
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
                    className="w-full max-w-[520px] border-2 bg-royalBlue p-4 placeholder:text-sm focus:outline-none focus:border-2 focus:border-[#126056] text-white rounded-md focus:shadow-md focus:shadow-royalBlue/60"
                    placeholder="Share your thoughts here..."
                ></textarea>
                <button className="w-full max-w-[520px] bg-royalBlue hover:shadow-royalBlue/40 shadow-lg py-2 text-white rounded-md mt-2">
                    Post
                </button>
            </form>
        </div>
    );
};

export default AuthorPostFieldForm;
