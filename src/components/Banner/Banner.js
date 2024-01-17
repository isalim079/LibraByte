import Image from "next/image";
import book from "@/assets/book.png"
const Banner = () => {
    return (
        <div className="overflow-hidden">
            <section className="flex min-h-[600px]  w-full items-center justify-center bg-[#EFEDE1]  py-5">
                <div className="flex w-full  gap-10 lg:flex-row flex-col-reverse items-center justify-between lg:px-[140px] md:px-[80px] px-8">
                    <div className="max-w-lg md:space-y-6 sm:space-y-5 space-y-4">
                        <h1 className="lg:text-5xl sm:text-4xl text-3xl font-bold leading-tight text-[#312B21]">Your Gateway to Literary Exploration and Knowledge <span className="relative -top-6 left-[220px] md:left-[480px] lg:left-[360px]"><svg width="44" height="41" viewBox="0 0 44 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="Layer_x0020_1">
                                <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M28.4603 25.8615C20.5883 25.8615 14.2302 19.4782 14.2302 11.6314C14.2302 19.4782 7.84677 25.8615 0 25.8615C7.84677 25.8615 14.2302 32.2197 14.2302 40.0665C14.2302 32.2197 20.5883 25.8615 28.4603 25.8615Z" fill="#FFD93B" />
                                <g id="Group">
                                    <path id="Vector_2" fillRule="evenodd" clipRule="evenodd" d="M43.0689 33.2037C38.7545 33.2037 35.2726 29.6966 35.2726 25.4074C35.2726 29.6966 31.7655 33.2037 27.4763 33.2037C31.7655 33.2037 35.2726 36.6855 35.2726 41C35.2726 36.6855 38.7545 33.2037 43.0689 33.2037Z" fill="#FFB030" />
                                    <path id="Vector_3" fillRule="evenodd" clipRule="evenodd" d="M38.5778 9.48677C33.3298 9.48677 29.0911 5.248 29.0911 0C29.0911 5.248 24.8523 9.48677 19.6043 9.48677C24.8523 9.48677 29.0911 13.7255 29.0911 18.9735C29.0911 13.7255 33.3298 9.48677 38.5778 9.48677Z" fill="#FFB030" />
                                </g>
                            </g>
                        </svg></span>
                        </h1>



                        <button class=" bg-[#333D2E] rounded-lg px-12 py-4 text-white btn btn-xs sm:btn-sm md:btn-md lg:btn-lg relative -top-5 ">Explore</button>

                    </div>
                    <div >
                        <Image
                            src={book}
                            width={800}
                            height={500}
                            alt="top news"
                        />
                        {/* <img src="https://i.ibb.co/b5ZHR9h/Untitled-1-1.png" className="relative " /> */}
                    </div>
                </div>
            </section>

        </div>
    );
};
export default Banner;