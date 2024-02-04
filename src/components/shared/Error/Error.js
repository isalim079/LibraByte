"use client"

import Lottie from "lottie-react";
import animation from "../../../assets/animation/errorPage.json"

const Error = () => {
    return (
        <div className="h-screen flex justify-center items-center">
            <Lottie className="w-96" animationData={animation} loop={true} />
        </div>
    );
};

export default Error;