"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import familia from '@/assets/banner/Familia.jpg'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import Image from "next/image";

import book from "@/assets/book.png";
import "./styles.css"

// import required modules
import { EffectCards } from "swiper/modules";
const BannerSwipe = () => {
    return (
        <>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper z-10"
            >
                <SwiperSlide>
                    <Image
                        className=""
                        src="https://i.ibb.co/HnhDZ22/the-vacation-house.jpg"
                        width={800}
                        height={500}
                        alt="top news"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Image
                        className=""
                        src="https://i.ibb.co/x56XSBb/Dead.jpg"
                        width={800}
                        height={500}
                        alt="top news"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Image
                        className=""
                        src="https://i.ibb.co/DfTQDLF/Familia.jpg"
                        width={800}
                        height={500}
                        alt="top news"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className=""
                        src="https://i.ibb.co/VLNnRmP/Dragons.jpg"
                        width={800}
                        height={500}
                        alt="top news"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className=""
                        src="https://i.ibb.co/MnPbs95/Deep-fried.jpg"
                        width={800}
                        height={500}
                        alt="top news"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className=""
                        src="https://i.ibb.co/gDBxZ5D/Every-Time.jpg"
                        width={800}
                        height={500}
                        alt="top news"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className=""
                        src="https://i.ibb.co/jrQp7yY/Money.jpg"
                        width={800}
                        height={500}
                        alt="top news"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className=""
                        src="https://i.ibb.co/2v5nPNh/ikigai.jpg"
                        width={800}
                        height={500}
                        alt="top news"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Image
                        className=""
                        src="https://i.ibb.co/K9zjGGH/Betrayal.jpg"
                        width={800}
                        height={500}
                        alt="top news"
                    />
                </SwiperSlide>
            </Swiper>
        </>
    );
};
export default BannerSwipe;
