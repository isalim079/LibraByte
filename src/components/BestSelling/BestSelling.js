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

import { useEffect, useState } from "react";
import axios from "axios";

const BestSelling = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios
            .get("/books.json")
            .then((res) => {
                setBooks(res.data);
            })
            .catch((error) => {
                console.log("error loading best selling book data", error);
            });
    }, []);

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
        <div className="bg-lightWhite">
            <div className="max-w-screen-xl mx-auto py-10">
            {/* <div className="border-2 border-textLightWhite mb-10"></div> */}
                {/* Title  */}

                <div className=" flex justify-between items-center lg:px-8">
                    <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold">
                        Best Of Best
                    </h1>
                    <button className="flex bg-oliveGreen text-lightWhite px-4 py-2 rounded-md hover:bg-darkOliveGreen justify-between items-center gap-x-2 text-sm md:text-base">
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
                    className="mySwiper"
                    loop={true}
                >
                    <div>
                        {books.map((book) => (
                            <SwiperSlide key={book?.id}>
                                <BooksCard className="" book={book} />
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default BestSelling;
