"use client";

import { HiOutlineExternalLink } from "react-icons/hi";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import BooksCardAuthor from "./AuthorCard";

const BestAuthor = () => {
    const breakpoints = {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1440: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    };

    return (
        <div className="md:p-[80px] lg:p-[140px]  p-8 bg-lightWhite">
            {/* Title  */}

            <div className=" flex justify-between items-center pb-20">
                <h1 className="lg:text-5xl md:text-3xl text-2xl font-semibold">
                Best Author
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
                className="mySwiper w-full rounded-2xl"
                loop={true}
            >
                <SwiperSlide>
                    {" "}
                    <BooksCardAuthor />
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <BooksCardAuthor></BooksCardAuthor>
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <BooksCardAuthor></BooksCardAuthor>
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <BooksCardAuthor></BooksCardAuthor>
                </SwiperSlide>
                <SwiperSlide>
                    {" "}
                    <BooksCardAuthor></BooksCardAuthor>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default BestAuthor;
