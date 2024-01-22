"use client"

const BannerBody = ({bannerDetails}) => {

    console.log(bannerDetails);

    // const { bookName, image, description } = bannerDetails;
    // console.log(bannerDetails?.bookName);

    return (
        <div className="max-w-screen-xl mx-auto pt-20">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-white font-bebas text-8xl">{bannerDetails?.bookName}</h1>
                    <p className="text-white w-96 text-base font-montserrat">
                        {bannerDetails?.description}
                    </p>
                </div>
                <div className="w-96 h-[500px]  bg-base-100 shadow-xl relative">
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
                        <h2 className=" text-white pl-8 pt-[440px] text-4xl font-bebas">
                            {bannerDetails?.bookName}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerBody;