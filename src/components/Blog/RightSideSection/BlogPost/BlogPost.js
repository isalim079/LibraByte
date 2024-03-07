"use client";

import { IoIosHeartEmpty, IoMdShare } from "react-icons/io";
import { MdOutlineInsertComment } from "react-icons/md";
import { HiMiniUserCircle } from "react-icons/hi2";
import useBlogPost from "@/lib/hooks/useBlogPost";
import { AiFillDelete } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "@/app/Context/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "@/lib/hooks/useAxiosPublic";
import { CgSearch } from "react-icons/cg";

const BlogPost = () => {
    const { user } = useContext(AuthContext);

    const axiosPublic = useAxiosPublic()

    const [blogPost, refetch] = useBlogPost();
    // console.log(blogPost);


    /* Delete own post */
    const handleDeleteBlogPost = (post) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete this post!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosPublic.delete(
                    `/blogPostDelete/v1/${post._id}`
                );
                if (res.status === 200) {
                    refetch();

                    Swal.fire({
                        title: "Deleted!",
                        text: "Post has been deleted.",
                        icon: "success",
                    });
                }
            }
        });
        
    };

    return (
        <div className=" ">


            {/* Search */}
            {/* <div className="relative w-full mb-8">
                <div onChange={(e) => setSearchTag(e.target.value)}>
                    <input
                        type="search"
                        name="search"
                        placeholder="Search by keyword..."
                        id=""
                        className="h-12  pl-4 w-full border rounded-md focus:outline-none focus:border-2 focus:border-customYellow bg-royalBlue drop-shadow-lg text-white"
                    />
                </div>
                <div className="absolute top-3 right-5">
                    <button className="">
                        <CgSearch className="text-2xl text-slate-400 hover:text-white" />
                    </button>
                </div>
            </div> */}

            {/* --------------------- */}


            <div className="">
                <h2 className="text-2xl font-semibold text-royalBlue">
                    All Post
                </h2>
                <div className="border-2 border-customYellow w-[90px] mt-1 mb-5"></div>
            </div>
            <div className="h-[1672px] border-2 border-royalBlue rounded-md  overflow-y-auto">
                <div>
                    {blogPost.map((blogPost) => (
                        <div
                            key={blogPost?.name}
                            className=" text-royalBlue p-8 drop-shadow-sm"
                        >
                            <div>
                                <div className="flex justify-between items-center">
                                    <h3 className="font-semibold text-xl text-royalBlue">
                                        {blogPost?.name}
                                    </h3>
                                    <HiMiniUserCircle className="text-4xl" />
                                </div>
                                <div className="border border-customYellow mt-1 mb-3"></div>
                                <h4 className="font-semibold ">
                                    {blogPost?.bookName}
                                </h4>
                                <p className="text-justify text-royalBlue">
                                    {blogPost?.bookReview}
                                </p>
                            </div>
                            <div className="mt-3 flex gap-3 justify-end">
                                {/* <IoIosHeartEmpty className="text-2xl" />
                                <IoMdShare className="text-2xl" />
                                <MdOutlineInsertComment className="text-2xl" /> */}
                                {blogPost?.email === user?.email ? (
                                    <div>
                                        <button onClick={() => handleDeleteBlogPost(blogPost)}>
                                            <AiFillDelete className="text-2xl" />
                                        </button>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
