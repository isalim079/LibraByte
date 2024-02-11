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
import animation from "../../../../assets/animation/BlogPostAnimation.json"
import Lottie from "lottie-react";

const MyBlogPost = () => {
    const { user } = useContext(AuthContext);

    const axiosPublic = useAxiosPublic();

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
        <div className="bg-bgTexture">
            <div className=" pt-20 pb-20 md:pt-28 max-w-screen-xl mx-auto">
                {/* -------------- Title -------------------- */}
                <div className="flex justify-center items-center flex-col ">
                    <div className="fixed pt-10 shadow-md z-10 bg-royalBlue rounded-md">
                        <h2 className="text-2xl text-center  font-bold text-white ">
                            My Post
                        </h2>
                        <div className="">
                            <div className="border-2 border-customYellow w-32 mt-2 mb-5"></div>
                        </div>
                    </div>
                </div>
                {/* --------------------------- */}

                <div className=" rounded-md">
                    <div>
                        {blogPost.map((blogPost) => (
                            <div
                                key={blogPost?._id}
                                className=" text-royalBlue drop-shadow-sm mt-10"
                            >
                                {user?.email === blogPost?.email ? (
                                    <div>
                                        <div>
                                            <div className="flex justify-between items-center pb-2 ">
                                                <h3 className="font-semibold text-xl text-royalBlue">
                                                    {blogPost?.name}
                                                </h3>
                                                {blogPost?.image ? (
                                                    <div>
                                                        <img
                                                            className="w-14 rounded-full"
                                                            src={
                                                                blogPost?.image
                                                            }
                                                            alt=""
                                                        />
                                                    </div>
                                                ) : (
                                                    <div>
                                                        <HiMiniUserCircle className="text-6xl" />
                                                    </div>
                                                )}
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
                                            <IoIosHeartEmpty className="text-2xl" />
                                            <IoMdShare className="text-2xl" />
                                            <MdOutlineInsertComment className="text-2xl" />
                                            {blogPost?.email === user?.email ? (
                                                <div>
                                                    <button
                                                        onClick={() =>
                                                            handleDeleteBlogPost(
                                                                blogPost
                                                            )
                                                        }
                                                    >
                                                        <AiFillDelete className="text-2xl" />
                                                    </button>
                                                </div>
                                            ) : (
                                                ""
                                            )}
                                        </div>
                                    </div>
                                ) : (
                                    <div className="h-[calc(100vh-240px)] flex justify-center items-center">
                                        <Lottie className="w-72" animationData={animation} loop={true} />
                                    </div> 
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyBlogPost;
