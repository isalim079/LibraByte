"use client"
import Image from "next/image";
import img1 from "@/assets/Rectangle 20.png"
import { HiOutlineExternalLink } from "react-icons/hi";
import Link from "next/link";

const Arrival = () => {
    return (
        <div className="bg-bgTexture py-10 sm:py-20 px-4 sm:px-0">
            <div className="max-w-screen-xl mx-auto">
            <div className=" flex justify-between flex-col md:flex-row items-center mb-10 ">
                    <h1 className="lg:text-4xl md:text-3xl text-2xl font-semibold mb-2 md:mb-0">
                        New Arrival
                    </h1>
                   <Link href="/allBooks"> <button className="flex bg-lightBtn text-white px-4 py-2 rounded-md hover:bg-darkBtn justify-between items-center gap-x-2 text-sm md:text-base">
                        View All{" "}
                        <HiOutlineExternalLink className="lg:text-[22px] text-lg" />
                    </button></Link>
                </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                <div className="card md:w-72 lg:w-[350px] xl:w-96 bg-lightBtn  shadow-xl">
                    <figure className="px-6 pt-6 max-h-[350px] bg-darkBtn mx-5 mt-5 pb-6">
                        <img src="https://i.ibb.co/rZxh8bT/714-Exofe-KJL-AC-UF1000-1000-QL80.jpg" alt="Upcoming" className="rounded-xl max-h-[300px]" />
                    </figure>
                    <div className="card-body text-white">
                        <h2 className="card-title text-2xl lg:text-3xl ">A Game of Thrones</h2>
                        <p className="my-1 md:my-2 lg:my-4">CThe first book in the A Song of Ice and Fire series, a tale of power and intrigue. </p>
                        <div className="flex flex-row ">
                        <Link href="/allBooks">
                        <button className="text-lg font-medium pr-2">View All</button>
                        </Link>                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
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
                <div className="card md:w-72 lg:w-[350px] xl:w-96 bg-royalBlue shadow-xl">
                <figure className="px-6 pt-6 max-h-[350px] bg-[#ECC21C] mx-5 mt-5 pb-6">
                        <img src="https://i.ibb.co/tpLyzm4/8bb699eb40d839446e354e6fef36bcc1.jpg" alt="Shoes" className="rounded-xl max-h-[300px]" />
                    </figure>
                    <div className="card-body text-[#FDFCF7]">
                        <h2 className="card-title text-2xl lg:text-3xl ">The Book Thief</h2>
                        <p className="my-1 md:my-2 lg:my-4">A novel set in Nazi Germany narrated by Death.</p>
                        <div className="flex flex-row ">
                        <Link href="/allBooks">
                        <button className="text-lg font-medium pr-2">View All</button>
                        </Link>
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
                <div className="card md:w-72 lg:w-80 xl:w-96 bg-lightBtn shadow-xl">
                <figure className="px-6 pt-6 max-h-[350px] bg-darkBtn mx-5 mt-5 pb-6">
                        <img src="https://i.ibb.co/BzJkQKM/TPON-Cover-LG.jpg" alt="Shoes" className="rounded-xl max-h-[300px]" />
                    </figure>
                    <div className="card-body text-white">
                        <h2 className="card-title text-2xl lg:text-3xl ">The Power of Now</h2>
                        <p className="my-1 md:my-2 lg:my-4">A spiritual guide to living in the present moment and finding peace and fulfillment.</p>
                        <div className="flex flex-row ">
                        <Link href="/allBooks">
                        <button className="text-lg font-medium pr-2">View All</button>
                        </Link>                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
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