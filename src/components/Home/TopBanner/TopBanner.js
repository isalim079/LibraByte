"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import BannerBody from "./BannerBody";
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from "react-icons/md";
import dynamic from "next/dynamic";

const TopBanner = () => {
    const [topBanner, setTopBanner] = useState([]);
    const [currentCardImage, setCurrentCardImage] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/topBanner.json");
                setTopBanner(response.data);
                setLoading(false);
            } catch (error) {
                console.log("Error getting topBanner", error);
            }
        };

        fetchData();
    }, []);

    // console.log(topBanner);

    // card setting logic

    const handlePreviousClick = () => {
        setCurrentCardImage((prevImage) =>
            prevImage === 0 ? topBanner.length - 1 : prevImage - 1
        );
    };

    const handleNextClick = () => {
        setCurrentCardImage((prevImage) =>
            prevImage === topBanner.length - 1 ? 0 : prevImage + 1
        );
    };

    const currentCard = topBanner[currentCardImage];
    // console.log(currentCard);

    const backgroundImageStyle = {
        backgroundImage: `url(${currentCard?.bgImage})`,
        // height: "650px",
        backgroundSize: "cover",
        position: "absolute",
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.9)",
    };


    return (
        <div className="mb-16 md:mb-14 mt-12">
            <div className="relative">
                <div
                    style={backgroundImageStyle}
                    className="absolute top-0 bottom-0 brightness-[40%] -z-50 lg:h-[650px] md:h-[510px] h-[450px] "
                ></div>
            </div>
            <div>
                <BannerBody bannerDetails={currentCard} />
                <div className="flex justify-center items-center">
                    <button
                        onClick={handlePreviousClick}
                        className="bg-transparent border hover:bg-lightWhite hover:text-oliveGreen text-white px-4 py-2 mr-4"
                    >
                        <MdOutlineNavigateBefore></MdOutlineNavigateBefore>
                    </button>
                    <button
                        onClick={handleNextClick}
                        className="bg-transparent border hover:bg-lightWhite hover:text-oliveGreen text-white px-4 py-2"
                    >
                        <MdOutlineNavigateNext></MdOutlineNavigateNext>
                    </button>
                </div>
            </div>
        </div>
    );
};

// export default TopBanner;

export default dynamic(() => Promise.resolve(TopBanner), {ssr: false})
