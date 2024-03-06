import React from 'react';
import img1 from "../../../assets/book.png"
import img2 from "../../../assets/best-books.png"
import img3 from "../../../assets/best-books.png"
import Marquee from "react-fast-marquee";
import Image from 'next/image';
import Link from 'next/link';
const DonationBanner = () => {

    return (
        <div>
            <div className='flex flex-col md:flex-row justify-between items-center 2xl:mx-[155px] xl:mx-[140px] lg:mx-[110px] md:mx-[80px] mx-10 py-10 lg:pb-20 lg:pt-40  bg-bgTexture'>
                <div className='w-full md:w-1/2 '>
                    <h1 className='text-5xl font-bold '>Donate and sell your <br /></h1>
                    <h1 className=' text-5xl font-bold  mt-2 lg:mt-5'> Old books</h1>

                    <p className='py-5 font-medium'>One and only stop for buyind and selling old books. You can also <br /> donate your old acdemic books to NGO, So that it can help others.</p>

                    <div className='flex justify-start items-center gap-x-5'>
                        <Link href="/dashboard/donateBooks/donation"><button className='px-6 py-2 bg-green-200 text-green-900 font-semibold text-base md:text-lg rounded-md cursor-pointer'>Donate Now</button></Link>
                        <button className='px-6 py-2 bg-blue-200 text-blue-900 font-semibold text-base md:text-lg rounded-md cursor-pointer'>Sell</button>
                    </div>
                    <Link href="/dashboard/donateBooks/ngoDonate"><button className='my-5 px-[58px] py-2  text-oliveGreen  border-oliveGreen border-4 font-semibold text-base md:text-lg rounded-md hover:bg-oliveGreen hover:text-white'> Donate to NGO</button></Link>
                </div>
                <div className='w-full md:w-1/2 max-h-[350px] flex flex-col justify-center items-center '>
                    <div className="w-[340px] lg:w-[600px] h-[400px] relative overflow-hidden ">
                        <Marquee pauseOnHover={true} speed={60} direction={"right"}>
                            <div className='max-h-[200px] w-[120px]'>
                                <Image src="https://i.ibb.co/T1RS5sS/91-UN5-Yl-y8-L-AC-UF1000-1000-QL80.jpg" height="200" width="100" alt='Donation Book Image'></Image>
                            </div>

                            <div className='max-h-[200px] w-[120px]'>
                                <Image src="https://i.ibb.co/v3J2xGg/6474511e112a244f7ca01d9573cb4054.jpg" height="200" width="100" alt='Donation Book Image'></Image>
                            </div>

                            <div className='max-h-[180px] w-[120px]'>
                                <Image src="https://i.ibb.co/GtmMbWk/All-the-Light-We-Cannot-See-Doerr-novel.jpg" height="200" width="100" alt='Donation Book Image'></Image>
                            </div>

                            <div className='max-h-[200px] w-[120px]'>
                                <Image src="https://i.ibb.co/9G0gpL4/download.jpg" height="200" width="100" alt='Donation Book Image'></Image>
                            </div>
                            <div className='max-h-[200px] w-[120px]'>
                                <Image src="https://i.ibb.co/VWfYT1Z/fee940080bb953f6348e9bcfd8b8e79d.jpg" height="200" width="100" alt='Donation Book Image'></Image>
                            </div>

                        </Marquee>

                    </div>
                    <div className=" w-[340px] lg:w-[600px] h-[400px] relative overflow-hidden">
                        <Marquee pauseOnHover={true} speed={60} direction={"left"}>


                            <div className='max-h-[200px] w-[120px]'>
                                <Image src="https://i.ibb.co/CzWSgpK/the-hobbit-flat-cover.jpg" height="200" width="100" alt='Donation Book Image'></Image>
                            </div>

                            <div className='max-h-[200px] w-[120px]'>
                                <Image src="https://i.ibb.co/qmCypqB/Philosoper-s-Stone-New-UK-Cover.webp" height="200" width="100" alt='Donation Book Image'></Image>
                            </div>

                            <div className='max-h-[180px] w-[120px]'>
                                <Image src="https://i.ibb.co/4NgGSRs/68428.jpg" height="200" width="100" alt='Donation Book Image'></Image>
                            </div>

                            <div className='max-h-[200px] w-[120px]'>
                                <Image src="https://i.ibb.co/WBtZjNw/611i-KJa7a-L-AC-UF894-1000-QL80.jpg" height="200" width="100" alt='Donation Book Image'></Image>
                            </div>
                            <div className='max-h-[200px] w-[120px]'>
                                <Image src="https://i.ibb.co/yV44HGF/81r-Jm9qk3-HL-AC-UF894-1000-QL80.jpg" height="200" width="100" alt='Donation Book Image'></Image>
                            </div>


                        </Marquee>

                    </div>


                </div>

            </div>
        </div>
    );
};

export default DonationBanner;