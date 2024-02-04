"use client"
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import { FiArrowUpRight } from "react-icons/fi";
import { GoBookmark } from "react-icons/go";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineFileDownload } from "react-icons/md";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import useAxiosPublic from '@/lib/hooks/useAxiosPublic';
import { useForm } from "react-hook-form"
import { FaBusinessTime } from "react-icons/fa";
import { AuthContext } from '@/app/Context/AuthProvider';
import toast from 'react-hot-toast';



const BookDetails = ({params}) => {

    const { register, handleSubmit } = useForm()
    const [openModal, setOpenModal] = useState(false);
    const {user} =useContext(AuthContext);

  
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
    }, []);
    const {name,image}= bookData;
    // console.log(bookData.name);
    const onSubmit = async (data) => 
    {
        console.log(data);
        const bookInfo = {
                
           Book_name: name,
            Book_image:image,
            Date:data.date,
            borrower_email:user?.email,
            borrower_name:user?.displayName

        }
        const BookResponse = await axiosPublic.post('/addborrow/v1', bookInfo);
        console.log(BookResponse.data)
        if(BookResponse.data._id)
        {
            toast.success(`Your book are in queue`);
        }
    }

    


    return (
        <div className='bg-lightWhite 2xl:h-[1250px] '>
            <div className='min-h-[100vh] 2xl:relative'>
                <div className='flex flex-col md:flex-row justify-center items-start px-5 xl:px-36 lg:px-24 md:px-14 2xl:px-44  py-2 2xl:py-20 '>
                    <div className='w-full 2xl:w-1/2 flex flex-col 2xl:flex-row justify-center pl-0 2xl:pl-36 items-center mr-10  h-3/4 z-30'>
                        <Image className='shadow-2xl shadow-black h-[500px]'
                         src={bookData?.image} alt='book image' height={400} width={300} />
                    </div>
                    <div className='w-full 2xl:w-1/2  mt-10 2xl:mt-16 mr-1 2xl:mr-16 ml-0 2xl:ml-6 pb-5 lg:pb-0'>
                        <h1 className='text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold '>{bookData?.name}</h1>
                        <h1 className='text-lg lg:text-xl 2xl:text-2xl font-semibold pt-2 2xl:pt-8 pb-5'>{bookData?.author}</h1>
                        <p className='text-justify'>{bookData?.description}</p>
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
                            <p className='text-justify'>{bookData?.bookDescription}</p>
                            <div className='w-full flex justify-center items-start gap-x-4 py-7'>
                                <img src="https://source.unsplash.com/100x100/?portrait" alt="" className=" w-12 h-12 rounded-full dark:bg-gray-500" />
                                <div>
                                    <h1 className='font-bold'>{bookData?.author}</h1>
                                    <p className='text-xs pr-10'>{bookData?.authorDetails}</p>
                                </div>
                            </div>

                        </div>
                        <div className=' w-full 2xl:w-5/12'>
                            <h1 className='text-lg font-bold'>Editor</h1>
                            <p className='text-justify'>{bookData?.editor}</p>
                            <br />
                            <br />
                            <h1 className='text-lg font-bold'>Language</h1>
                            <p className='text-justify'>{bookData?.language}</p>
                            <br />
                            <br />
                            <h1 className='text-lg font-bold'>Paperback</h1>
                            <p className='text-justify'>{bookData?.format}</p>
                        </div>
                    </div>

                    {/* Request to borrow book modal */}
                    
             <div className="w-72 mx-auto flex items-center justify-center ">
                <button onClick={() => setOpenModal(true)} className='bg-oliveGreen text-white font-semibold text-lg px-10 py-2 rounded-3xl flex justify-between items-center gap-x-3'>Requst to borrow <BsFillRocketTakeoffFill className='text-xl'/></button>
                <div onClick={() => setOpenModal(false)} className={`fixed flex justify-center items-center z-[100] ${ openModal ? 'visible opacity-1' : 'invisible opacity-0'} inset-0 w-full h-full backdrop-blur-sm bg-black/20 duration-100`}>
                    <div onClick={(e_) => e_.stopPropagation()} className={`absolute w-full lg:w-[500px] bg-white drop-shadow-2xl rounded-lg ${openModal ? 'opacity-1 duration-300 translate-y-0' : '-translate-y-20 opacity-0 duration-150'}`}>
                        <form onSubmit={handleSubmit(onSubmit)} className="p-10">
                            <svg onClick={() => setOpenModal(false)} className="w-10 mx-auto mr-0 cursor-pointer" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M6.99486 7.00636C6.60433 7.39689 6.60433 8.03005 6.99486 8.42058L10.58 12.0057L6.99486 15.5909C6.60433 15.9814 6.60433 16.6146 6.99486 17.0051C7.38538 17.3956 8.01855 17.3956 8.40907 17.0051L11.9942 13.4199L15.5794 17.0051C15.9699 17.3956 16.6031 17.3956 16.9936 17.0051C17.3841 16.6146 17.3841 15.9814 16.9936 15.5909L13.4084 12.0057L16.9936 8.42059C17.3841 8.03007 17.3841 7.3969 16.9936 7.00638C16.603 6.61585 15.9699 6.61585 15.5794 7.00638L11.9942 10.5915L8.40907 7.00636C8.01855 6.61584 7.38538 6.61584 6.99486 7.00636Z" fill="#000000"></path></g></svg>
                            <h1 className="backdrop-blur-sm text-3xl pb-8">Book Borrowing Request</h1>
                            <div className="space-y-5">
                                <label htmlFor="email" className="block">Email</label>
                                <div className="relative">
                                    <input readOnly type="email" placeholder={user?.email} {...register("email")}className="p-3 block w-full pl-10 drop-shadow-lg rounded-lg outline-none" />
                                    <span className="absolute top-1/4 left-2"><svg viewBox="0 0 24 24" fill="none" className="inline-block w-6" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M2 10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.22876 2 10 2H14C17.7712 2 19.6569 2 20.8284 3.17157C22 4.34315 22 6.22876 22 10V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V10ZM7.73867 16.4465C8.96118 15.5085 10.4591 15 12 15C13.5409 15 15.0388 15.5085 16.2613 16.4465C17.4838 17.3846 18.3627 18.6998 18.7615 20.1883C18.9044 20.7217 18.5878 21.2701 18.0544 21.413C17.5209 21.556 16.9726 21.2394 16.8296 20.7059C16.5448 19.6427 15.917 18.7033 15.0438 18.0332C14.1706 17.3632 13.1007 17 12 17C10.8993 17 9.82942 17.3632 8.95619 18.0332C8.08297 18.7033 7.45525 19.6427 7.17037 20.7059C7.02743 21.2394 6.47909 21.556 5.94563 21.413C5.41216 21.2701 5.09558 20.7217 5.23852 20.1883C5.63734 18.6998 6.51616 17.3846 7.73867 16.4465ZM10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 10.1046 13.1046 11 12 11C10.8954 11 10 10.1046 10 9ZM12 5C9.79086 5 8 6.79086 8 9C8 11.2091 9.79086 13 12 13C14.2091 13 16 11.2091 16 9C16 6.79086 14.2091 5 12 5Z" fill="#000000"></path><rect x="2.5" y="2.5" width="19" height="19" rx="3.5" stroke="#000000"></rect></g></svg></span>
                                </div>
                                <label htmlFor="date" className="block">Due date</label>
                                <div className="relative">
                                    <input  type="date" placeholder=".............." {...register("date")}className="p-3 block w-full pl-10 drop-shadow-lg rounded-lg outline-none" />
                                    <span className="absolute top-4 text-xl left-4"><FaBusinessTime></FaBusinessTime></span>
                                </div>
                            </div>
                            {/* button type will be submit for handling form submission*/}
                            <button type="submit" className="py-2 px-5 mb-4 mt-6 shadow-lg rounded-lg before:block before:-left-1 before:-top-1 before:bg-black before:rounded-lg before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:rounded-lg after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;