"use client"

import loadingAnimation from "@/assets/animation/loadingAnimation.json"
import Lottie from "lottie-react";
import "./loading.css"
import "./bubbleAnimation.css"
import loadingBg from "../../../assets/animation/loadingPageBg.json"


const Loading = () => {
    return (
        <div>
            <div>
          
            <div className="flex flex-col justify-center items-center h-screen">
                {/* <Lottie className="w-72" animationData={loadingAnimation} loop={true} /> */}
                <div className="content" >
                <p className="text-white text-6xl font-extrabold p1  bubbleAnimation">
                    LIBRABYTE{" "}
                </p>
                <p className="text-white text-6xl font-extrabold p2  bubbleAnimation">
                    LIBRABYTE{" "}
                </p>
            </div>
            <div className="-mt-20 w-96">
            <Lottie animationData={loadingBg} loop={true} />
            </div>
           
            </div>
            </div>
        </div>
    );
};

export default Loading;