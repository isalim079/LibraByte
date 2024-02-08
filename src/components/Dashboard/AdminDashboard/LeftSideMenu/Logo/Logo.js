import Image from "next/image";
import logo from "@/assets/logo/LibraByte.png";

const Logo = () => {
    return (
        <div>
            <div className="">
                <a href="/">
                    {/* <Image
                                src={logo}
                                width={100}
                                height={100}
                                alt="logo"
                                className='mb-5'
                            /> */}

                    <p className="text-white text-2xl">
                        Libra<span className="text-[#ECC21C]">Byte</span>
                    </p>
                </a>
                {/* <hr className="border-[#c8c19e] md:mt-9"></hr> */}
            </div>
        </div>
    );
};

export default Logo;
