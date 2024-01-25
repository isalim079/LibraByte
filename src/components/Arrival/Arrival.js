"use client"
import Image from "next/image";
import img1 from "@/assets/Rectangle 20.png"
import { HiOutlineExternalLink } from "react-icons/hi";
import Link from "next/link";

const Arrival = () => {
    return (
        <div className="bg-lightWhite py-10 sm:py-20 px-4 sm:px-0">
            <div className="max-w-screen-xl mx-auto">
            <div className=" flex justify-between flex-col md:flex-row items-center mb-10 ">
                    <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold mb-2 md:mb-0">
                        New Arrival
                    </h1>
                   <Link href="/allBooks"> <button className="flex bg-oliveGreen text-lightWhite px-4 py-2 rounded-md hover:bg-darkOliveGreen justify-between items-center gap-x-2 text-sm md:text-base">
                        View All{" "}
                        <HiOutlineExternalLink className="lg:text-[22px] text-lg" />
                    </button></Link>
                </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                <div className="card md:w-72 lg:w-[350px] xl:w-96 bg-[#EFEDE1]  shadow-xl">
                    <figure className="px-6 pt-6">
                        <img src="https://i.ibb.co/TbkjVgH/Rectangle-20.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body text-[#333D2E]">
                        <h2 className="card-title text-2xl lg:text-3xl ">Company of  One</h2>
                        <p className="my-1 md:my-2 lg:my-4">Company of One by Paul Jarvis explores the idea of building a successful business without chasing growth for its own sake, emphasizing the value of </p>
                        <div className="flex flex-row ">
                            <button className="text-lg font-medium pr-2">View All</button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_30_584)">
                                    <path d="M9 5V7H15.59L4 18.59L5.41 20L17 8.41V15H19V5H9Z" fill="#333D2E" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_30_584">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="card md:w-72 lg:w-[350px] xl:w-96 bg-[#333D2E] shadow-xl">
                    <figure className="px-6 pt-6">
                        <img src="https://i.ibb.co/TbkjVgH/Rectangle-20.png" alt="Shoes" className="rounded-xl" />
                        {/* <Image href={img1} width={500} height={300} alt="arrival" className="rounded-xl"/> */}
                    </figure>
                    <div className="card-body text-[#FDFCF7]">
                        <h2 className="card-title text-2xl lg:text-3xl ">Company of  One</h2>
                        <p className="my-1 md:my-2 lg:my-4">Company of One by Paul Jarvis explores the idea of building a successful business without chasing growth for its own sake, emphasizing the value of </p>
                        <div className="flex flex-row ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_30_572)">
                                    <path d="M9 5V7H15.59L4 18.59L5.41 20L17 8.41V15H19V5H9Z" fill="#FDFCF7" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_30_572">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="card md:w-72 lg:w-80 xl:w-96 bg-[#EFEDE1] shadow-xl">
                    <figure className="px-6 pt-6">
                        <img src="https://i.ibb.co/TbkjVgH/Rectangle-20.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body text-[#333D2E]">
                        <h2 className="card-title text-2xl lg:text-3xl ">Company of  One</h2>
                        <p className="my-1 md:my-2 lg:my-4">Company of One by Paul Jarvis explores the idea of building a successful business without chasing growth for its own sake, emphasizing the value of </p>
                        <div className="flex flex-row ">
                            <button className="text-lg font-medium pr-2">View All</button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <g clip-path="url(#clip0_30_584)">
                                    <path d="M9 5V7H15.59L4 18.59L5.41 20L17 8.41V15H19V5H9Z" fill="#333D2E" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_30_584">
                                        <rect width="24" height="24" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Arrival;