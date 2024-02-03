"use client"

import Lottie from "lottie-react";
import animation from "../../../assets/animation/errorPage.json"

const Error = () => {
    return (
        <div>
            <Lottie animationData={animation} loop={true} />
        </div>
    );
};

export default Error;