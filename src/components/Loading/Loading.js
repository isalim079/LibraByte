"use client"

import loadingAnimation from "@/assets/animation/loadingAnimation.json"
import Lottie from "lottie-react";

const Loading = () => {
    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <Lottie className="w-72" animationData={loadingAnimation} loop={true} />
            </div>
        </div>
    );
};

export default Loading;