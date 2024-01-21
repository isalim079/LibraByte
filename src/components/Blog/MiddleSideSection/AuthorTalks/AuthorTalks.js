"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import "animate.css";
import classNames from "classnames";

const AuthorTalks = () => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        axios
            .get("/authorTalks.json")
            .then((res) => {
                setUserData(res.data);
            })
            .catch((error) => {
                console.log("error getting topPost", error);
            });
    }, []);

    // animation
    const textAnimation = classNames(
        "animate__animated",
        "animate__backInLeft"
    );

    return (
        <div className="mt-8 p-8 bg-lightWhite rounded-md drop-shadow-lg overflow-y-auto h-[1310px]">
            {/* title section */}
            <div>
                <h1 className="text-2xl font-semibold text-oliveGreen">
                    Author Talks
                </h1>
                <div className="border-2 border-oliveGreen w-[148px] mt-1 mb-5"></div>
            </div>

            {/* author section */}
            <div>
                <div>
                    {userData.map((author) => (
                        <div key={author?.name}>
                            <div className="mb-2">
                                <Image
                                    className="rounded-full h-[50px]"
                                    src={author?.image}
                                    width={50}
                                    height={100}
                                    alt="image"
                                ></Image>
                            </div>
                            <div
                                className={`bg-darkLightWhite p-3 rounded-b-2xl rounded-tr-2xl px-5 ${textAnimation}`}
                            >
                                <h3 className="font-semibold">
                                    {author?.author}
                                </h3>
                                <p className="text-sm text-justify text-oliveGreen">
                                    {author?.review}
                                </p>
                            </div>
                            <span className="divider"></span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AuthorTalks;
