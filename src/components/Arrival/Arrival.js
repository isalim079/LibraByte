
import Image from "next/image";
import img1 from "@/assets/Rectangle 20.png"

const Arrival = () => {
    return (
        <div className="mx-[140px]">
            <h1 className="text-6xl text-center font-semibold mb-24">New Arrival</h1>
            <div className="grid grid-cols-3 gap-6">
            <div className="card w-96 bg-[#EFEDE1] shadow-xl">
                    <figure className="px-6 pt-6">
                        <img src="https://i.ibb.co/TbkjVgH/Rectangle-20.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body text-[#333D2E]">
                        <h2 className="card-title text-3xl ">Company of  One</h2>
                        <p className="my-4">Company of One by Paul Jarvis explores the idea of building a successful business without chasing growth for its own sake, emphasizing the value of </p>
                        <div className="flex flex-row w-24">
                            <button className="text-lg font-medium">View All</button>
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
                <div className="card w-96 bg-[#333D2E] shadow-xl">
                    <figure className="px-6 pt-6">
                        <img src="https://i.ibb.co/TbkjVgH/Rectangle-20.png" alt="Shoes" className="rounded-xl" />
                        {/* <Image href={img1} width={500} height={300} alt="arrival" className="rounded-xl"/> */}
                    </figure>
                    <div className="card-body text-[#FDFCF7]">
                        <h2 className="card-title text-3xl ">Company of  One</h2>
                        <p className="my-4">Company of One by Paul Jarvis explores the idea of building a successful business without chasing growth for its own sake, emphasizing the value of </p>
                        <div className="flex flex-row w-24">
                            <button className="text-lg font-medium">View All</button>
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
                <div className="card w-96 bg-[#EFEDE1] shadow-xl">
                    <figure className="px-6 pt-6">
                        <img src="https://i.ibb.co/TbkjVgH/Rectangle-20.png" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body text-[#333D2E]">
                        <h2 className="card-title text-3xl ">Company of  One</h2>
                        <p className="my-4">Company of One by Paul Jarvis explores the idea of building a successful business without chasing growth for its own sake, emphasizing the value of </p>
                        <div className="flex flex-row w-24">
                            <button className="text-lg font-medium">View All</button>
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
    );
};

export default Arrival;