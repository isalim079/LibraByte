"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { GoBookmark } from "react-icons/go";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdAttachEmail, MdOutlineFileDownload } from "react-icons/md";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import useAxiosPublic from "@/lib/hooks/useAxiosPublic";
import { useForm } from "react-hook-form";
import { FaBusinessTime } from "react-icons/fa";
import { AuthContext } from "@/app/Context/AuthProvider";
import toast from "react-hot-toast";
import "./bookDetails.css";

import { useRouter } from "next/navigation";

import { RxCross2 } from "react-icons/rx";
import { pdfjs } from 'react-pdf';

import usePdfBooks from "@/lib/hooks/usePdfBooks";
import PdfBooksComponents from "@/PdfBooksComponents";
import Loading from "@/components/shared/Loading/Loading";





pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const BookDetails = ({ params }) => {
    const { register, handleSubmit } = useForm();
    const [openModal, setOpenModal] = useState(false);
    const { user } = useContext(AuthContext);
    const router = useRouter();





    // console.log(params.bookDetails);

    // console.log(params.bookDetails);               // receive data by params
    const axiosPublic = useAxiosPublic();

    /* getting data from server and find specific id */
    const [bookData, setBookData] = useState([]);

    useEffect(() => {
        axiosPublic
            .get("/books")
            .then((res) => {
                setBookData(
                    res.data.find(
                        (getBooks) => getBooks._id === params.bookDetails
                    )
                );
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);



    
           
      
    
//  console.log(borrowLimit);
    const { name, image, author } = bookData;
    // console.log(bookData.name);
    const onSubmit = async (data) => {
        if (!user) {
            // If user is not authenticated, redirect to login page
            router.push("/login");
            return;
        }
        // console.log(data);
        try {
            // Fetch borrow limit
            const borrowLimitResponse = await axiosPublic.get("/payment/v1");
            const borrowLimit = borrowLimitResponse.data[0].borrow_limit;
            const paymentId=borrowLimitResponse.data[0]._id;
            console.log(borrowLimitResponse)
            console.log(borrowLimit);
            console.log(paymentId)
    
            if (borrowLimit === 0) {
                toast.error("You have reached your borrow limit.");
            } else {
                // Proceed with borrowing logic
                const bookInfo = {
                    Book_name: name,
                    Book_image: image,
                    Book_author: author,
                    Date: data.date,
                    borrower_email: user?.email,
                    borrower_name: user?.displayName,
                    borrow_status: false,
                    delivered_status: false,
                    returned_status: false,
                };
    
                const BookResponse = await axiosPublic.post("/addborrow/v1", bookInfo);
                console.log(BookResponse.data);
    
                if (BookResponse.data._id) {
                    const decreaseBorrowLimitResponse = await axiosPublic.patch(`/payment/v1/${paymentId}`, { borrow_limit: borrowLimit - 1 });
                    console.log(decreaseBorrowLimitResponse.data);
                    toast.success(`Your book is in the queue`);
                } else if (BookResponse.data.message === "Product already exists") {
                    toast.error(`Book is already in the queue`);
                } else {
                    toast.loading('Loading');
                }
            }
        } catch (error) {
            console.error("Error fetching borrow limit:", error);
            toast.error("Failed to fetch borrow limit. Please try again.");
        }
        // console.log(bookInfo);
    };


           /* -----------------pdf section -------------------------------- */
           const [booksPdf, refetch] = usePdfBooks();
           // console.log(booksPdf);
       
       
       
           const [pdfBooks, setPdfBooks] = useState(null)
           const [findBooksPdf, setFindBooksPdf] = useState();
       
           // console.log(pdfBooks);
       
           const [loading, setLoading] = useState(true)
       
       
           useEffect(() => {
       
               const fetchData = async () => {
                   const findBooks =  booksPdf.find(
                       (books) => books?.bookId === params?.bookDetails
                   );
                   setFindBooksPdf(findBooks);
                   setLoading(false)
               }
       
               setLoading(true)
               fetchData()
       
           }, [booksPdf, params]);
       
           if(loading) {
               return <span className="loading loading-bars loading-sm"></span>
           }
       
           // console.log(findBooksPdf);
           // console.log(params);
       
           /* --------------------------------------------------------------------------- */

    return (
        <div className="bg-bgTexture pt-14 md:pt-20 2xl:h-[1250px] ">
            <div className="min-h-[100vh] 2xl:relative">
                <div className="flex flex-col md:flex-row justify-center items-start px-5 xl:px-36 lg:px-24 md:px-14 2xl:px-44  py-2 2xl:py-20 ">
                    <div className="w-full 2xl:w-1/2 flex flex-col 2xl:flex-row justify-center pl-0 2xl:pl-36 items-center mr-10  h-3/4 z-30">
                        <Image
                            className="shadow-2xl shadow-black h-[500px]"
                            src={bookData?.image}
                            alt="book image"
                            height={400}
                            width={300}
                        />
                    </div>
                    <div className="w-full 2xl:w-1/2  mt-10 2xl:mt-16 mr-1 2xl:mr-16 ml-0 2xl:ml-6 pb-5 lg:pb-0">
                        <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold ">
                            {bookData?.name}
                        </h1>
                        <h1 className="text-lg lg:text-xl 2xl:text-2xl font-semibold pt-2 2xl:pt-8 pb-5">
                            {bookData?.author}
                        </h1>
                        <p className="text-justify">{bookData?.description}</p>
                    </div>
                </div>
                <div className="bg-lightBtn bg-bgTexture mx-5 2xl:mx-44 min-h-72 2xl:absolute top-[450px] pb-5 2xl:pb-0">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="w-1/2 hidden md:block"></div>
                        <div className="w-full 2xl:w-1/2 ml-10 flex justify-between items-center py-8 mr-5 border-b-2">
                            {/* ------------------- pdf reading -------------------- */}
                            <div>
                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                <button
                                    className=" bg-royalBlue text-white px-3 py-2 rounded-md"
                                    onClick={() => {
                                       
                                            
                                            setPdfBooks(`http://localhost:5000/uploads/${findBooksPdf?.pdfFile}`);
                                            document
                                                .getElementById("my_modal_1")
                                                .showModal()
                                        
                                    }}
                                >
                                    <span className="flex items-center gap-1" 
                                    // onClick={() =>  setPdfBooks(`http://localhost:5000/uploads/${findBooksPdf?.pdfFile}`)}
                                    >
                                        <span>{Loading ? Loading : "Start Reading"}</span>
                                        <span>
                                            <FiArrowUpRight className="text-lg" />
                                        </span>
                                    </span>
                                </button>
                                <dialog id="my_modal_1" className="modal">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">
                                            {bookData?.name}
                                        </h3>
                                        <div className="py-4 ">
                                            <PdfBooksComponents pdfBooks={pdfBooks} />
                                        </div>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn ">
                                                    Close
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                            {/* ------------------------------------------ */}

                            <div className="flex justify-center items-center gap-x-5 mr-24 pl-5 md:pl-0">
                                <div className="bg-slate-200 p-2 rounded-full cursor-pointer">
                                    <GoBookmark className="text-2xl" />
                                </div>
                                <div className="bg-slate-200 p-2 rounded-full cursor-pointer">
                                    <IoShareSocialOutline className="text-2xl" />
                                </div>
                                <div className="bg-slate-200 p-2 rounded-full cursor-pointer">
                                    <MdOutlineFileDownload className="text-2xl" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-10 2xl:px-24 2xl:pt-24 flex flex-col md:flex-row justify-between items-center gap-x-20">
                        <div className="w-full 2xl:w-6/12">
                            <h1 className="font-bold text-xl pb-3">
                                Description
                            </h1>
                            <p className="text-justify">
                                {bookData?.bookDescription}
                            </p>
                            <div className="w-full flex justify-center items-start gap-x-4 py-7">
                                <img
                                    src="https://source.unsplash.com/100x100/?portrait"
                                    alt=""
                                    className=" w-12 h-12 rounded-full dark:bg-gray-500"
                                />
                                <div>
                                    <h1 className="font-bold">
                                        {bookData?.author}
                                    </h1>
                                    <p className="text-xs pr-10">
                                        {bookData?.authorDetails}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=" w-full 2xl:w-5/12">
                            <h1 className="text-lg font-bold">Editor</h1>
                            <p className="text-justify">{bookData?.editor}</p>
                            <br />
                            <br />
                            <h1 className="text-lg font-bold">Language</h1>
                            <p className="text-justify">{bookData?.language}</p>
                            <br />
                            <br />
                            <h1 className="text-lg font-bold">Paperback</h1>
                            <p className="text-justify">{bookData?.format}</p>
                        </div>
                    </div>

                    {/* Request to borrow book modal */}

                    <div className="w-72 mx-auto flex items-center justify-center pb-10">
                        <div className="animationContainer">
                            <button
                                onClick={() => setOpenModal(true)}
                                className="bg-royalBlue text-white font-semibold text-lg px-10 py-2 rounded-3xl flex justify-between items-center gap-x-3  buttonBorrow"
                            >
                                Request to borrow{" "}
                                <BsFillRocketTakeoffFill className="text-xl" />
                            </button>
                        </div>
                        <div
                            onClick={() => setOpenModal(false)}
                            className={`fixed flex justify-center items-center z-[100] ${
                                openModal
                                    ? "visible opacity-1"
                                    : "invisible opacity-0"
                            } inset-0 w-full h-full backdrop-blur-sm bg-black/20 duration-100`}
                        >
                            <div
                                onClick={(e_) => e_.stopPropagation()}
                                className={`absolute w-full lg:w-[500px] bg-white drop-shadow-2xl rounded-lg ${
                                    openModal
                                        ? "opacity-1 duration-300 translate-y-0"
                                        : "-translate-y-20 opacity-0 duration-150"
                                }`}
                            >
                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="p-10"
                                >
                                    <RxCross2
                                        onClick={() => setOpenModal(false)}
                                        className="text-3xl w-10 mx-auto mr-0 cursor-pointer"
                                    />

                                    <h1 className="backdrop-blur-sm text-3xl pb-8">
                                        Book Borrowing Request
                                    </h1>
                                    <div className="space-y-5">
                                        <label
                                            htmlFor="email"
                                            className="block"
                                        >
                                            Email
                                        </label>
                                        <div className="relative">
                                            <input
                                                readOnly
                                                type="email"
                                                placeholder={user?.email}
                                                {...register("email")}
                                                className="p-3 block w-full pl-10 drop-shadow-lg rounded-lg outline-none"
                                            />
                                            <span className="absolute top-1/4 left-2">
                                                <MdAttachEmail className="inline-block w-6 text-xl" />
                                            </span>
                                        </div>
                                        <label htmlFor="date" className="block">
                                            Due date
                                        </label>
                                        <div className="relative">
                                            <input required
                                                type="date"
                                                placeholder=".............."
                                                {...register("date")}
                                                className="p-3 block w-full pl-10 drop-shadow-lg rounded-lg outline-none"
                                            />
                                            <span className="absolute top-4 text-xl left-4">
                                                <FaBusinessTime></FaBusinessTime>
                                            </span>
                                        </div>
                                    </div>
                                    {/* button type will be submit for handling form submission*/}
                                    <button
                                        type="submit"
                                        className="py-2 px-5 mb-4 mt-6 shadow-lg rounded-lg before:block before:-left-1 before:-top-1 before:bg-black before:rounded-lg before:absolute before:h-0 before:w-0 before:hover:w-[100%] before:hover:h-[100%]  before:duration-500 before:-z-40 after:block after:-right-1 after:-bottom-1 after:bg-black after:rounded-lg after:absolute after:h-0 after:w-0 after:hover:w-[100%] after:hover:h-[100%] after:duration-500 after:-z-40 bg-white relative inline-block"
                                    >
                                        Submit
                                    </button>
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
