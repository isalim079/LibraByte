"use client";

import { HiOutlineExternalLink } from "react-icons/hi";
import BooksCard from "./BooksCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

const BestSelling = () => {
    const breakpoints = {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    };

    return (
        <div className="md:m-[80px] lg:m-[140px]  m-8">
            {/* Title  */}

            <div className=" flex justify-between items-center pb-20">
                <h1 className="lg:text-5xl md:text-3xl text-2xl font-semibold">
                    Best Of Best
                </h1>
                <button className="flex justify-between items-center gap-x-2 lg:text-xl md:text-lg text-lg">
                    View All{" "}
                    <HiOutlineExternalLink className="lg:text-[22px] text-lg" />
                </button>
            </div>

            {/* best books card  */}

            <Swiper
                breakpoints={breakpoints}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                id="bestSellingSwiper"
                className="mySwiper w-full"
                loop={true}
            >
                <SwiperSlide>
                    {" "}
                    <BooksCard></BooksCard>
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <BooksCard></BooksCard>
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <BooksCard></BooksCard>
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <BooksCard></BooksCard>
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <BooksCard></BooksCard>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BestSelling;
