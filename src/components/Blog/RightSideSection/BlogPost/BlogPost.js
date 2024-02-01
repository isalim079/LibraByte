"use client";


import { IoIosHeartEmpty, IoMdShare } from "react-icons/io";
import { MdOutlineInsertComment } from "react-icons/md";
import { HiMiniUserCircle } from "react-icons/hi2";
import useBlogPost from "@/lib/hooks/useBlogPost";

const BlogPost = () => {

    const [blogPost, refetch] = useBlogPost()
    // console.log(blogPost);
 

    return (
        <div className="p-8 h-[1672px] overflow-y-auto">
            <div>
                <h2 className="text-2xl font-semibold text-oliveGreen">
                    All Post
                </h2>
                <div className="border-2 border-oliveGreen w-[90px] mt-1 mb-5"></div>
            </div>
            <div>
                {blogPost.map((blogPost) => (
                    <div
                        key={blogPost?.name}
                        className="mt-10 bg-lightWhite p-4 rounded-md drop-shadow-lg"
                    >
                        <div>
                            <div className="flex justify-between items-center">
                                <h3 className="font-semibold text-xl">
                                    {blogPost?.name}
                                </h3>
                                <HiMiniUserCircle className="text-4xl" />
                            </div>
                            <div className="border border-oliveGreen mt-1 mb-3"></div>
                            <h4 className="font-semibold">
                                {blogPost?.bookName}
                            </h4>
                            <p className="text-justify text-textLightWhite">
                                {blogPost?.bookReview}
                            </p>
                        </div>
                        <div className="mt-3 flex gap-3 justify-end">
                            <IoIosHeartEmpty className="text-2xl" />
                            <IoMdShare className="text-2xl" />
                            <MdOutlineInsertComment className="text-2xl" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogPost;
