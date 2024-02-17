"use client";

import { AuthContext } from "@/app/Context/AuthProvider";
import useAxiosPublic from "@/lib/hooks/useAxiosPublic";
import { useContext, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

import { useRouter } from "next/navigation";
import useAuthorTalks from "../useAuthorTalks";
import useFindUser from "@/lib/hooks/useFindUser";
import "./authorPostField.css";
import { RxCrossCircled } from "react-icons/rx";
import { RiSearch2Line } from "react-icons/ri";

const AuthorPostFieldForm = () => {
    const { user, isAuthor } = useContext(AuthContext);
    const [findUser] = useFindUser();
    const axiosPublic = useAxiosPublic();
    // console.log(user?.photoURL);
    const router = useRouter();
    // console.log(router);

    /* Tags input */
    const [tags, setTags] = useState([]);

    const handleKeyDown = (e) => {
        if (e.key !== "Enter") {
            return;
        }
        const value = e.target.value;
        if (!value.trim()) {
            return;
        }
        setTags([...tags, value]);
        e.target.value = "";
    };
    // console.log(tags);

    /* remove tag */
    const handleRemoveTag = (index) => {
        setTags(tags.filter((eachElements, i) => i !== index));
    };

    const [authorTalksPostData, refetch] = useAuthorTalks();

    const handlePost = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const authorName = await user?.displayName;
        const authorEmail = await user?.email;
        const authorImage = await user?.photoURL;
        const authorTitle = form.get("postFieldTitle");
        const authorPost = form.get("postField");
        const authorHashTag = { tags };

        const authorPostData = {
            authorName,
            authorEmail,
            authorImage,
            authorTitle,
            authorPost,
            authorHashTag,
        };
        // console.log(authorPostData);

        const findAuthor = (await findUser?.author) ? findUser?.author : "";

        /* if the user available then he can post */
        if (user) {
            if (findAuthor) {
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
                toast.error("you are not author");
            }
        } else {
            /* otherwise he will redirect to login page */
            toast.error("login first!");
            setTimeout(() => {
                router.push("/login");
            }, 1000);
        }
    };

// console.log(isAuthor);
   

    return (
        <div className="">
            {isAuthor ? (
                <div className="pt-10 flex justify-center">
                    <p className=" text-xl w-full  font-semibold text-royalBlue">
                        Post on <span className="font-bold">#AuthorTalks</span>
                    </p>
                </div>
            ) : (
                ""
            )}

            {isAuthor ? (
                <form
                    onSubmit={handlePost}
                    className="flex flex-col justify-center items-center space-y-4 mb-10 "
                >
                    {/* input tag */}
                    <div className="tags-input-container h-14 flex gap-4 text-sm pl-4 focus:outline-none focus:border-2 focus:border-[#126056]  rounded-md shadow-md shadow-royalBlue/10 border-2 border-lightBtn text-royalBlue w-full mt-4 py-2">
                        {tags.map((tag, index) => (
                            <div
                                className="tag-item flex gap-2  h-full"
                                key={index}
                            >
                                <div className=" text-sm flex items-center gap-1 bg-lightBtn text-white py-2 rounded-sm px-3 w-full">
                                    <span className="text flex">{tag}</span>
                                    <span className="close">
                                        <RxCrossCircled
                                            className="cursor-pointer"
                                            onClick={() =>
                                                handleRemoveTag(index)
                                            }
                                        />
                                    </span>
                                </div>
                            </div>
                        ))}
                        <input
                            onKeyDown={handleKeyDown}
                            type="text"
                            className="tags-input bg-transparent outline-none w-full h-full"
                            placeholder="sciFi, thriller, history, etc."
                        />
                    </div>
                    {/* ------------ */}

                    <input
                        type="text"
                        className="w-full  my-2  h-14 text-sm pl-4 focus:outline-none focus:border-2 focus:border-[#126056]  rounded-md shadow-md shadow-royalBlue/10 border-2 border-lightBtn text-royalBlue"
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
                        className="w-full p-4 placeholder:text-sm focus:outline-none focus:border-2 focus:border-[#126056]  rounded-md shadow-md shadow-royalBlue/10 border-2 border-lightBtn text-royalBlue"
                        placeholder="Share your thoughts here..."
                    ></textarea>
                    <div className="flex justify-start w-full">
                        <button
                            className={`btn-wide bg-royalBlue hover:shadow-royalBlue/40 shadow-lg py-2 text-white rounded-md mt-2`}
                        >
                            Post
                        </button>
                    </div>
                </form>
            ) : (
                ""
            )}

          

        </div>
    );
};

export default AuthorPostFieldForm;
