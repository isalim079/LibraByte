"use client"

import Lottie from "lottie-react";
import comingSoon from "@/assets/lottieAnimation/comingSoon.json"


const Blog = () => {
    return (
        <div className="flex justify-center items-center">
            <Lottie animationData={comingSoon} loop={true} className="w-96 h-screen"/>
        </div>
    );
};

export default Blog;