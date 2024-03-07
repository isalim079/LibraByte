"use client"

const BannerBody = ({bannerDetails}) => {

    // console.log(bannerDetails);

    // const { bookName, image, description } = bannerDetails;
    // console.log(bannerDetails?.bookName);

    return (
        <div className="max-w-screen-xl mx-auto md:pt-20 p-3 ">
            <div className="flex md:flex-row flex-col justify-between items-center ">
                <div className="md:w-full md:max-w-[50%] lg:max-w-[57%]">
                    <h1 className="text-slate-300 font-medium mb-3 lg:mb-5 bg-royalBlue/70 rounded-md p-2 lg:p-4 text-xl lg:text-3xl uppercase border-b-[3px] border-b-customYellow text-center">{bannerDetails?.bookName}</h1>
                    {/* <div className="border-2 border-customYellow mb-4"></div> */}
                    <p className="text-slate-200 p-8 text-justify md:text-base font-montserrat text-xs bg-royalBlue/70 rounded-md border-b-[3px] border-b-white hover:bg-royalBlue/80">
                        {bannerDetails?.description}
                    </p>
                </div>
                <div className="lg:w-[280px] md:w-[220px] w-[130px]  md:h-[330px] lg:h-[470px] h-[200px]  bg-base-100 shadow-xl -z-30 relative mt-4 md:mt-0">
                    <figure>
                        <img
                            className="absolute  h-full"
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