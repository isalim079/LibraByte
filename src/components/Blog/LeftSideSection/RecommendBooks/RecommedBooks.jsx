"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const RecommendBooks = () => {
    return (
        <div className="mt-8 bg-royalBlue drop-shadow-lg p-8 rounded-md">
            <div>
                <h3 className="text-2xl font-bold text-slate-200">
                    Recommended for you!
                </h3>
                <div className="border-2 border-slate-200 md:w-[272px] mt-1 mb-5"></div>
            </div>

            <div>
                <Marquee className="" speed={80}>
                    {/* image 1 */}
                    <div className="w-72 mr-10 ">
                        <Image
                            src="https://i.ibb.co/JzY92NN/bio3.jpg"
                            width={800}
                            height={550}
                            alt="image"
                        ></Image>
                        <div className="mt-4">
                            <button className="text-white bg-lightBtn hover:bg-darkBtn w-full py-2 rounded-md">
                                Details
                            </button>
                        </div>
                    </div>
                    {/* image 2 */}
                    <div className="w-72 mr-10 h-full">
                        <Image
                            src="https://i.ibb.co/0ZPR9fy/bio4.jpg"
                            width={800}
                            height={500}
                            alt="image"
                        ></Image>
                        <div className="mt-4">
                            <button className="text-white bg-lightBtn hover:bg-darkBtn w-full py-2 rounded-md">
                                Details
                            </button>
                        </div>
                    </div>
                    {/* image 3 */}
                    <div className="w-72 mr-10 ">
                        <Image
                            src="https://i.ibb.co/DfTQDLF/Familia.jpg"
                            width={800}
                            height={500}
                            alt="image"
                        ></Image>
                        <div className="mt-4">
                            <button className="text-white bg-lightBtn hover:bg-darkBtn w-full py-2 rounded-md">
                                Details
                            </button>
                        </div>
                    </div>
                    {/* image 4  */}
                    <div className="w-72 mr-10 ">
                        <Image
                            src="https://i.ibb.co/XjkZHb3/book-Of-The-Month4.jpg"
                            width={800}
                            height={500}
                            alt="image"
                        ></Image>
                        <div className="mt-4">
                            <button className="text-white bg-lightBtn hover:bg-darkBtn w-full py-2 rounded-md">
                                Details
                            </button>
                        </div>
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default RecommendBooks;
