"use client"

const BannerBody = ({bannerDetails}) => {

    // console.log(bannerDetails);

    // const { bookName, image, description } = bannerDetails;
    // console.log(bannerDetails?.bookName);

    return (
        <div className="max-w-screen-xl mx-auto md:pt-20 p-3 ">
            <div className="flex md:flex-row flex-col justify-between items-center">
                <div>
                    <h1 className="text-white font-semibold lg:mb-2 text-2xl lg:text-7xl">{bannerDetails?.bookName}</h1>
                    <p className="text-white md:w-96 text-justify md:text-base font-montserrat text-sm">
                        {bannerDetails?.description}
                    </p>
                </div>
                <div className="lg:w-[280px] md:w-[220px] w-[130px]  md:h-[330px] lg:h-[470px] h-[200px]  bg-base-100 shadow-xl -z-30 relative mt-4 md:mt-0">
                    <figure>
                        <img
                            className="absolute border border-red  h-full border-none"
                            src={bannerDetails?.image}
                            alt=""
                        />
                    </figure>
                    <div
                        className="absolute  top-0 left-0 w-full h-full"
                        style={{
                            backgroundImage:
                                "linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)",
                            zIndex: "2",
                        }}
                    >
                        <h2 className=" text-white pl-8 pt-[420px] text-xl">
                            {bannerDetails?.bookName}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerBody;