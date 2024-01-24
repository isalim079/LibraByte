"use client"

import loadingAnimation from "@/assets/animation/loadingAnimation.json"
import Lottie from "lottie-react";

const RegisterLoading = () => {
    return (
        <div>
            <div className="flex justify-center items-center max-h-[24px]">
                <Lottie className="h-16" animationData={loadingAnimation} loop={true} />
            </div>
        </div>
    );
};

export default RegisterLoading;