"use client"

import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosHeartEmpty, IoMdShare } from "react-icons/io";
import { MdOutlineInsertComment } from "react-icons/md";
import { HiMiniUserCircle } from "react-icons/hi2";


const BlogPost = () => {

    const [blogPost, setBlogPost] = useState([]);

    useEffect(() => {
        axios
            .get("/blogPost.json")
            .then((res) => {
                setBlogPost(res.data);
            })
            .catch((error) => {
                console.log("error getting topPost", error);
            });
    }, []);

    return (
        <div className="p-8 h-[1672px] overflow-y-auto">
            <div>
                {
                    blogPost.map(blogPost => (
                        <div key={blogPost?.name} className="mt-10 bg-lightWhite p-4 rounded-md drop-shadow-lg">
                            <div>
                                <div className="flex justify-between items-center">
                                <h3 className="font-semibold text-xl">{blogPost?.name}</h3>
                                <HiMiniUserCircle className="text-4xl" />
                                </div>
                                <div className="border border-oliveGreen mt-1 mb-3"></div>
                                <h4 className="font-semibold">{blogPost?.bookName}</h4>
                                <p>{blogPost?.bookReview}</p>
                            </div>
                            <div className="mt-3 flex gap-3 justify-end">
                            <IoIosHeartEmpty className="text-2xl" />
                            <IoMdShare className="text-2xl" />
                            <MdOutlineInsertComment className="text-2xl" />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default BlogPost;