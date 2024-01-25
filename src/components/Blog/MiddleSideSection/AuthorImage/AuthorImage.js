"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./authorStyles.css";

import { EffectFlip, Pagination, Navigation } from "swiper/modules";

const AuthorImage = () => {
    return (
        <div className="mt-8 p-8 bg-lightWhite rounded-md drop-shadow-lg">
            <div>
                <h3 className="text-2xl font-semibold text-oliveGreen">
                    Contact
                </h3>
                <div className="border-2 border-oliveGreen w-[95px] mt-1 mb-5"></div>
            </div>
           <div className="">
           <Swiper
                effect={"flip"}
                grabCursor={true}
                pagination={true}
                navigation={true}
                modules={[EffectFlip, Navigation, Pagination]}
                className="mySwiper"
                loop={true}
            >
                {/* 1st slide */}
                <SwiperSlide>
                    <img
                        className=""
                        src="https://i.ibb.co/tqthQ5N/top-Post-People6.jpg"
                        alt=""
                    />
                </SwiperSlide>
                {/* 2nd slide */}
                <SwiperSlide>
                    <img
                        className=""
                        src="https://i.ibb.co/ZM1TKgS/TS7-YLBQM7-FH4-VKLH5-K4-SFJP4-RU.jpg"
                        alt=""
                    />
                </SwiperSlide>
                {/* 3rd slide */}
                <SwiperSlide>
                    <img
                        className=""
                        src="https://i.ibb.co/fGDWsn6/David-D-Clark-in-office.jpg"
                        alt=""
                    />
                </SwiperSlide>
                {/* 4th slide */}
                <SwiperSlide>
                    <img
                        className=""
                        src="https://i.ibb.co/y6Jn8Hr/top-Post-Person7.jpg"
                        alt=""
                    />
                </SwiperSlide>
            </Swiper>
           </div>
        </div>
    );
};

export default AuthorImage;
