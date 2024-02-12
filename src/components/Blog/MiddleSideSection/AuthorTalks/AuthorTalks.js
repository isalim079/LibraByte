"use client";

import Image from "next/image";
import { useContext } from "react";
import "animate.css";
import classNames from "classnames";
import AuthorPostFieldForm from "./AuthorPostFieldForm/AuthorPostFieldForm";
import { AuthContext } from "@/app/Context/AuthProvider";

import useAuthorTalks from "./useAuthorTalks";
import useFindUser from "@/lib/hooks/useFindUser";

const AuthorTalks = () => {
    const { user } = useContext(AuthContext);
    const [findUser] = useFindUser()

    const [authorTalksPostData, refetch] = useAuthorTalks();

    // animation
    const textAnimation = classNames(
        "animate__animated",
        "animate__backInLeft"
    );

    console.log(findUser?.author);

    return (
        <div className="bg-bgTexture">
            {/* Title */}
            <div className="flex justify-center items-center flex-col pt-28">
                <div className="fixed pt-10 shadow-md z-10 bg-royalBlue rounded-md px-6">
                    <h2 className="text-2xl text-center  font-bold text-white ">
                        Author Talks
                    </h2>
                    <div className="">
                        <div className="border-2 border-customYellow w-44 mt-1 mb-5"></div>
                    </div>
                </div>
            </div>
            {/* --------------------------- */}
            <div className="pt-10 p-8 max-w-screen-xl mx-auto rounded-md drop-shadow-lg overflow-y-auto ">
                <AuthorPostFieldForm />

                {/* author section */}
                <div>
                    <div>
                        {authorTalksPostData.map((author) => (
                            <div key={author?._id}>
                                <div className="mb-2">
                                    <div className="flex items-center gap-5">
                                        <div>
                                            <Image
                                                className="rounded-full h-[50px] border-2 border-customYellow"
                                                src={author?.authorImage}
                                                width={50}
                                                height={100}
                                                alt="image"
                                            ></Image>
                                        </div>
                                        <div>
                                            <p className="font-bold text-royalBlue text-lg">
                                                {author?.authorName}
                                            </p>
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

export default AuthorTalks;
