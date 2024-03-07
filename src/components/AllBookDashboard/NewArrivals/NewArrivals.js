"use client";
import useAxiosPublic from "@/lib/hooks/useAxiosPublic";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import Rating from "react-rating";

const NewArrivals = () => {
    
    const axiosPublic = useAxiosPublic()

    const [books, setBooks] = useState([]);

    useEffect(() => {
        axiosPublic
            .get("/reversedBooks")
            .then((res) => {
                setBooks(res.data);
            })
            .catch((error) => {
                console.log("error getting books", error);
            });
    }, []);


    return (
        <div className="bg-royalBlue bg-bgTexture rounded-md drop-shadow-lg mt-3 ml-3 p-3 w-auto h-[400px] overflow-y-auto  md:h-auto">
            <h2 className="text-lg lg:text-2xl font-semibold mb-5">New Arrivals </h2>
            <div className="grid justify-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 py-2 px-0 lg:px-8 gap-6 ">
                {books.map((book) => (
                    <div key={book.id}>
                            <div className="bg-teal-600 bg-bgTexture rounded-md mx-auto flex flex-col shadow-2xl items-center">
                                <Image
                                    className="w-48 h-[280px] rounded-t-md pt-5 "
                                    src={book.image}
                                    width={150}
                                    height={220}
                                    alt="book_image"
                                />
                                <h3 className="text-lg font-semibold px-6 text-center h-16 flex items-center text-white mt-2">
                                    {book?.name}
                                </h3>
                                <p className="text-sm text-royalBlue px-2">
                                    {book?.author}
                                </p>
                                <Rating
                                    className="text-royalBlue my-2"
                                    initialRating={book.rating}
                                    emptySymbol={
                                        <MdOutlineStarBorder className="text-2xl" />
                                    }
                                    fullSymbol={
                                        <MdOutlineStar className="text-2xl" />
                                    }
                                    readonly
                                />
                                <Link href={`/bookDetails/${book?._id}`}>
                                <button className="btn hover:bg-royalBlue hover:border-white hover:shadow-lg hover:shadow-lightBtn bg-royalBlue text-white mx-auto w-48 mb-4 border-royalBlue">
                                    See Details
                                </button>
                                </Link>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewArrivals;