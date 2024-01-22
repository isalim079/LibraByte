"use client"

import axios from "axios";
import { useContext, useEffect, useState } from "react";
import BannerBody from "./BannerBody";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md';
import { AuthContext } from "@/app/Context/AuthProvider";

const TopBanner = () => {

    const {loading} = useContext(AuthContext)

    const [topBanner, setTopBanner] = useState([]);
    const [currentCardImage, setCurrentCardImage] = useState(0);

    useEffect(() => {
      axios
            .get("/topBanner.json")
            .then((res) => {
                setTopBanner(res.data);
            })
            .catch((error) => {
                console.log("error getting topBanner", error);
            });
    }, []);

    // console.log(topBanner);

    // card setting logic

    const handlePreviousClick = () => {
        setCurrentCardImage((prevImage) =>
            prevImage === 0 ? currentCardImage.length - 1 : prevImage - 1
        );
    };

    const handleNextClick = () => {
        setCurrentCardImage((nextImage) =>
            nextImage === currentCardImage.length - 1 ? 0 : nextImage + 1
        );
    };
  

    const currentCard = topBanner[currentCardImage];
    // console.log(currentCard);
    
    const backgroundImageStyle = {
        backgroundImage: `url(${currentCard?.image})`,
        height: "900px",
        backgroundSize: "cover",
        position: "absolute",
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.9)",
    };

    return (
        <div className="">
        <div className="relative">
            
            

            <div
                style={backgroundImageStyle}
                className="absolute top-0 bottom-0 brightness-[40%] -z-50"
            ></div>
        </div>
        <div>
          

            <BannerBody bannerDetails={currentCard} />
            <div className="flex justify-center items-center">
                <button
                    onClick={handlePreviousClick}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mr-4"
                >
                    <MdOutlineNavigateBefore></MdOutlineNavigateBefore>
                </button>
                <button
                    onClick={handleNextClick}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2"
                >
                    <MdOutlineNavigateNext></MdOutlineNavigateNext>
                </button>
            </div>
        </div>
    </div>
    );
};

export default TopBanner;