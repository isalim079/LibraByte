"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import { GoBookmark } from "react-icons/go";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import useAxiosPublic from '@/lib/hooks/useAxiosPublic';



const BookDetails = ({params}) => {


    // console.log(params.bookDetails);               // receive data by params
    const axiosPublic = useAxiosPublic()

    /* getting data from server and find specific id */
    const [bookData, setBookData] = useState([])

    useEffect(() => {
        axiosPublic.get("/books")
        .then(res => {
            setBookData((res.data).find(getBooks => getBooks._id === params.bookDetails))
        })
        .catch(error => {
            console.log(error);
        })
    }, [])
    // console.log(bookData.name);

    


    return (
        <div className='bg-lightWhite 2xl:h-[1250px] '>
            <div className='min-h-[100vh] 2xl:relative'>
                <div className='flex flex-col md:flex-row justify-center items-start px-5 xl:px-36 lg:px-24 md:px-14 2xl:px-44  py-2 2xl:py-20 '>
                    <div className='w-full 2xl:w-1/2 flex flex-col 2xl:flex-row justify-center pl-0 2xl:pl-36 items-center mr-10  h-3/4 z-30'>
                        <Image className='shadow-2xl shadow-black ' src={bookData.image} alt='book image' height={400} width={300} />
                    </div>
                    <div className='w-full 2xl:w-1/2  mt-10 2xl:mt-16 mr-1 2xl:mr-16 ml-0 2xl:ml-6 pb-5 lg:pb-0'>
                        <h1 className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold 2xl:font-normal 2xl:text-7xl'>{bookData.name}</h1>
                        <h1 className='text-lg lg:text-xl 2xl:text-2xl font-semibold pt-2 2xl:pt-8 pb-5'>{bookData.author}</h1>
                        <p className='text-justify'>{bookData.description}</p>
                    </div>
                </div>
                <div className='bg-white mx-5 2xl:mx-44 min-h-72 2xl:absolute top-[450px] pb-5 2xl:pb-0'>
                    <div className='flex flex-col md:flex-row justify-between items-center'>
                        <div className='w-1/2 hidden md:block'>

                        </div>
                        <div className='w-full 2xl:w-1/2 ml-10 flex justify-between items-center py-8 mr-5 border-b-2'>
                            <button className='bg-darkOliveGreen text-white px-5 py-2 ml-4 md:ml-0 rounded-full flex justify-center items-center'>Start Reading <FiArrowUpRight className='ml-1 text-2xl' /></button>
                            <div className='flex justify-center items-center gap-x-5 mr-24 pl-5 md:pl-0'>
                                <div className='bg-slate-200 p-2 rounded-full cursor-pointer'>
                                    <GoBookmark className='text-2xl' />
                                </div>
                                <div className='bg-slate-200 p-2 rounded-full cursor-pointer'>
                                    <IoShareSocialOutline className='text-2xl' />
                                </div>
                                <div className='bg-slate-200 p-2 rounded-full cursor-pointer'>
                                    <MdOutlineFileDownload className='text-2xl' />
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className='p-10 2xl:px-24 2xl:pt-24 flex flex-col md:flex-row justify-between items-center gap-x-20'>
                        <div className='w-full 2xl:w-6/12'>
                            <h1 className='font-bold text-xl pb-3'>Description</h1>
                            <p className='text-justify'> Facilis, laboriosam. Aliquid, est praesentium? Asperiores reprehenderit ex, in dignissimos nemo laborum expedita eligendi unde autem odio est eius quod? Dolor incidunt modi fuga cum, labore accusantium ab accusamus blanditiis, repellendus molestias totam odio .<br />laboriosam sint perspiciatis numquam incidunt dolor cumque, fugit suscipit ducimus natus assumenda saepe at. Molestiae, blanditiis temporibus  quae laboriosam maxime? Dolorem nesciunt provident dignissimos pariatur ullam fugiat fugit libero, repellendus assumenda corrupti neque laboriosam et accusamus sunt?</p>
                            <div className='w-full flex justify-center items-start gap-x-4 py-7'>
                                <img src="https://source.unsplash.com/100x100/?portrait" alt="" className=" w-12 h-12 rounded-full dark:bg-gray-500" />
                                <div>
                                    <h1 className='font-bold'>{bookData.author}</h1>
                                    <p className='text-xs pr-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quis porro est itaque vitae sed quo saepe assumenda omnis tempore.</p>
                                </div>
                            </div>

                        </div>
                        <div className=' w-full 2xl:w-5/12'>
                            <h1 className='text-lg font-bold'>Editor</h1>
                            <p className='text-justify'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti veritatis odio sed ipsum beatae error, ad velit impedit iure laborum?</p>
                            <br />
                            <br />
                            <h1 className='text-lg font-bold'>Language</h1>
                            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, cumque.</p>
                            <br />
                            <br />
                            <h1 className='text-lg font-bold'>Paperback</h1>
                            <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium eum molestias similique cumque architecto et, dicta qui nobis porro expedita?</p>
                        </div>
                    </div>
                    <div className='flex justify-center items-center pb-10'>
                        <button className='bg-oliveGreen text-white font-semibold text-lg px-10 py-2 rounded-3xl flex justify-between items-center gap-x-3'>Requst to borrow <BsFillRocketTakeoffFill className='text-xl'/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;