"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

const TopPost = () => {
    const [topPostInfo, setTopPostInfo] = useState([]);

    useEffect(() => {
        axios
            .get("/topPost.json")
            .then((res) => {
                setTopPostInfo(res.data);
            })
            .catch((error) => {
                console.log("error getting topPost", error);
            });
    }, []);
    // console.log(topPostInfo);

    return (
        <div>
            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-royalBlue">
                    Top Post
                </h2>
                <div className="border-2 border-customYellow w-[102px] mt-1 mb-5"></div>
            </div>

            <div className="border-2 border-royalBlue p-8 rounded-md h-[695px] overflow-y-auto drop-shadow-lg">
            
            <div className="list-none">
                <div className="">
                    {topPostInfo.map((topPost, index) => (
                        <div key={index}>
                            <div className="flex items-center space-x-6">
                                <Image
                                    className="rounded-full h-[50px] border-2 border-customYellow"
                                    src={topPost?.image}
                                    width={50}
                                    height={100}
                                    alt="image"
                                ></Image>
                                <p className="font-semibold text-royalBlue">{topPost?.name}</p>
                            </div>
                            <div className="mt-4 mb-10">
                                <h3 className="text-lg font-semibold text-royalBlue">
                                    {topPost?.blogPostTitle}
                                </h3>

                                <p className="text-justify mt-1 text-royalBlue">
                                    {topPost?.description}
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

export default TopPost;
