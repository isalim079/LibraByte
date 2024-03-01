"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import Rating from "react-rating";

const NewArrivals = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/reversedBooks")
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
            <div className="grid justify-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 py-2 px-0 lg:px-8 gap-4 ">
                {books.map((book) => (
                    <div key={book.id}>
                        <Link href={`/bookDetails/${book?._id}`}>
                            <div className="bg-lightBtn bg-bgTexture shadow-md rounded-md mx-auto h-[420px] flex flex-col items-center">
                                <Image
                                    className="w-[175px] h-[280px] rounded-t-md pt-5"
                                    src={book.image}
                                    width={150}
                                    height={220}
                                    alt="book_image"
                                />
                                <h3 className="text-lg font-semibold px-2 text-center text-white mt-2">
                                    {book?.name}
                                </h3>
                                <p className="text-sm text-white dark:text-gray-400 px-2">
                                    {book?.author}
                                </p>
                                <Rating
                                    className="text-royalBlue"
                                    initialRating={book.rating}
                                    emptySymbol={
                                        <MdOutlineStarBorder className="text-2xl" />
                                    }
                                    fullSymbol={
                                        <MdOutlineStar className="text-2xl" />
                                    }
                                    readonly
                                />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NewArrivals;