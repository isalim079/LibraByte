import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

export default function App() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >

                <SwiperSlide>
                    <div className='flex md:flex-row-reverse flex-col  justify-between items-center mx-2 lg:mx-14 gap-x-2'>
                        <div className='w-full lg:w-5/12 bg-white p-7 rounded-xl md:block hidden'>
                            <h1 className='text-center font-bold text-oliveGreen my-3 text-sm lg:text-2xl'>"The Hitchhiker's Guide to the Galaxy" </h1>
                            <h3 className='text-xs lg:text-lg font-semibold text-oliveGreen mb-2'> by Douglas Adams</h3>
                            <p className='text-xs md:text-base'>Genre: Science Fiction, Comedy <br />
                                Why: A hilarious and absurd journey through space with an unwitting human and his alien friend, perfect for those who enjoy witty humor.</p>
                        </div>
                        <div className='w-full lg:w-1/2 mx-4'>
                            <Image
                                className=""
                                src="https://m.media-amazon.com/images/I/81AAMH2S0LL._SY466_.jpg"
                                width={500}
                                height={300}
                                alt="top news"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex justify-between items-center mx-2 lg:mx-14 gap-x-2'>
                        <div className='hidden lg:block lg:w-5/12 bg-white p-7 rounded-xl '>
                            <h1 className='text-center font-bold text-oliveGreen my-3 text-2xl'>"The Great Gatsby"  </h1>
                            <h3 className='text-lg font-semibold text-oliveGreen mb-2'> by F. Scott Fitzgerald</h3>
                            <p>Genre: Classic, Literary Fiction <br />
                                Why: A timeless exploration of the American Dream and the decadence of the Jazz Age, filled with rich symbolism and memorable characters.</p>
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <Image
                                className=""
                                src="https://m.media-amazon.com/images/I/71X7HnBk6VL._SY466_.jpg"
                                width={500}
                                height={300}
                                alt="top news"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-row-reverse justify-between items-center mx-2 lg:mx-14 gap-x-2'>
                        <div className='w-5/12 bg-white p-7 rounded-xl hidden md:block '>
                            <h1 className='text-center font-bold text-oliveGreen my-3 text-2xl'>"The Shadow of the Wind" </h1>
                            <h3 className='text-lg font-semibold text-oliveGreen mb-2'>by Carlos Ruiz Zafón</h3>
                            <p>Genre: Mystery, Historical Fiction <br />
                                Why: A beautifully written and engaging mystery set in post-war Barcelona, blending elements of history, love, and literature.</p>
                        </div>
                        <div className='w-full  md:w-1/2'>
                            <Image
                                className=""
                                src="https://m.media-amazon.com/images/I/81LKRcURqWL._SY466_.jpg"
                                width={500}
                                height={300}
                                alt="top news"
                            />
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='flex justify-between items-center mx-2 lg:mx-14 gap-x-2'>
                        <div className='w-5/12 bg-white p-7 rounded-xl hidden md:block'>
                            <h1 className='text-center font-bold text-oliveGreen my-3 text-2xl'> "The Kite Runner"  </h1>
                            <h3 className='text-lg font-semibold text-oliveGreen mb-2'> by Khaled Hosseini</h3>
                            <p>Genre: Historical Fiction, Drama <br />
                                Why: A powerful and emotionally charged story set in Afghanistan, exploring themes of friendship, betrayal, and redemption against the backdrop of historical events.</p>
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <Image
                                className=""
                                src="https://m.media-amazon.com/images/I/81jgIbGaRyL._SY466_.jpg"
                                width={500}
                                height={300}
                                alt="top news"
                            />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex flex-row-reverse justify-between items-center mx-2 lg:mx-14 gap-x-2'>
                        <div className='hidden lg:block w-5/12 bg-white p-7 rounded-xl '>
                            <h1 className='text-center font-bold text-oliveGreen my-3 text-2xl'>"Educated" </h1>
                            <h3 className='text-lg font-semibold text-oliveGreen mb-2'> by Tara Westover</h3>
                            <p>Genre: Memoir <br />
                                Why: A compelling memoir about a woman who grows up in a strict and abusive household in rural Idaho but eventually escapes to learn about the wider world through education.</p>
                        </div>
                        <div className='w-full lg:w-1/2'>
                            <Image
                                className=""
                                src="https://m.media-amazon.com/images/I/71N2HZwRo3L._SL1500_.jpg"
                                width={500}
                                height={300}
                                alt="top news"
                            />
                        </div>
                    </div>
                </SwiperSlide>



                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}