"use client"

import Lottie from "lottie-react";
import animation from "../../../assets/animation/404Page.json"
import Link from "next/link";

const ErrorPage = () => {
    return (
        <div className="h-screen flex justify-center items-center">
           <div>
           <Lottie className="w-96" animationData={animation} loop={true} />
           <p className="text-center text-4xl font-bold mt-5">404...! Not found</p>
            <p className="text-center text-lg ">Oh! You are in a wrong place!</p>
          <div className="flex justify-center mt-5">
          <Link href={'/'}><button className="bg-black rounded-md text-lightWhite px-4 py-2">Go Home</button></Link>
          </div>
           </div>
        </div>
    );
};

export default ErrorPage;