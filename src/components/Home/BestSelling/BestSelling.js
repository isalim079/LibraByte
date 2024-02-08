"use client";

import { HiOutlineExternalLink } from "react-icons/hi";
import BooksCard from "./BooksCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./bestSellingStyles.css";

// import required modules
import { Pagination } from "swiper/modules";

import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

const BestSelling = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios
            .get("https://y-kappa-sage.vercel.app/books")
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
        <div className="bg-bgTexture">
            <div className="max-w-screen-xl mx-auto py-10">
            {/* <div className="border-2 border-textLightWhite mb-10"></div> */}
                {/* Title  */}

                <div className=" flex justify-between items-center lg:px-8 md:pb-10 md:flex-row flex-col">
                    <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold mb-2 md:mb-0">
                        Best Of Best
                    </h1>
                   <Link href="/topBooks"> <button className="flex bg-lightBtn text-white px-4 py-2 rounded-md hover:bg-darkBtn justify-between items-center gap-x-2 text-sm md:text-base">
                        View All{" "}
                        <HiOutlineExternalLink className="lg:text-[22px] text-lg" />
                    </button></Link>
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
                        {books.slice(0,5).map((book) => (
                            <SwiperSlide key={book?.id}>
                                <BooksCard className="" book={book} />
                            </SwiperSlide>
                        ))}
                    </div>
                </Swiper>
                <p id="swipeText" className="text-center font-semibold -mt-6 hidden">swipe</p>
            </div>
        </div>
    );
};

export default BestSelling;
