"use client"

import Lottie from "lottie-react";
import comingSoon from "@/assets/animation/comingSoon.json"


const Blog = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <Lottie animationData={comingSoon} loop={true} className="w-72 -z-10"/>
        </div>
    );
};

export default Blog;