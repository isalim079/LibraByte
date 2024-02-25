"use client";

import Image from "next/image";

import "animate.css";
import classNames from "classnames";

import { usePathname } from "next/navigation";
import { RiUser4Line } from "react-icons/ri";

import { useEffect, useState } from "react";
import useAuthorTalks from "../../MiddleSideSection/AuthorTalks/useAuthorTalks";

const AuthorTalksBlog = () => {
    const [authorTalksPostData] = useAuthorTalks();

    // animation
    const textAnimation = classNames(
        "animate__animated",
        "animate__backInLeft"
    );

    return (
        <div className="bg-bgTexture">
            {/* Title */}
            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-royalBlue">
                    Author Talks
                </h2>
                <div className="border-2 border-customYellow w-[102px] mt-1 mb-5"></div>
            </div>

            {/* --------------------------- */}
            <div className=" rounded-md drop-shadow-lg overflow-y-auto h-[860px] border-2 border-royalBlue p-8">
                {/* author section */}
                <div>
                    <div>
                        {authorTalksPostData.map((author) => (
                            <div key={author?._id}>
                                <div className="mb-2">
                                    <div className="flex items-center gap-5">
                                        <div>
                                            {author?.authorImage ? (
                                                <Image
                                                    className="rounded-full h-[50px] border-2 border-customYellow"
                                                    src={author?.authorImage}
                                                    width={50}
                                                    height={100}
                                                    alt="image"
                                                ></Image>
                                            ) : (
                                                <div>
                                                    <RiUser4Line className="text-2xl" />
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <div>
                                                <p className="font-bold text-royalBlue text-lg">
                                                    {author?.authorName}
                                                </p>
                                                <p className="space-x-3">
                                                    {(author?.authorHashTag?.tags).map(
                                                        (tag, index) => (
                                                            <span>#{tag}</span>
                                                        )
                                                    )}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={`bg-lightBtn text-white p-3 rounded-b-2xl rounded-tr-2xl px-5 ${textAnimation}`}
                                >
                                    <h3 className="font-semibold">
                                        {author?.authorTitle}
                                    </h3>
                                    <p className=" text-justify text-slate-200">
                                        {author?.authorPost}
                                    </p>
                                </div>
                                <span className="divider"></span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthorTalksBlog;
