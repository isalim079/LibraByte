"use client";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import Rating from "react-rating";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import Link from "next/link";
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Recommended = () => {
    const [books, setBooks] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const initialDisplayCount = 10;
    const [likedBooks, setLikedBooks] = useState([]);
  


    useEffect(() => {
        axios
            .get("https://y-kappa-sage.vercel.app/books")
            .then((res) => {
                setBooks(res.data);
            })
            .catch((error) => {
                console.log("error getting topPost", error);
            });
    }, []);

    const handleSeeAllClick = () => {
        setShowAll(true);
    };

    const handleSeeLessClick = () => {
        setShowAll(false);
    };
    const handleHeartClick = (bookId) => {
        setLikedBooks((prevLikedBooks) => {
            if (prevLikedBooks.includes(bookId)) {
                return prevLikedBooks.filter((id) => id !== bookId);
            } else {
                return [...prevLikedBooks, bookId];
            }
        });
    };


    return (
        <div className="bg-[#C6DED8] bg-bgTexture rounded-md drop-shadow-lg py-8 px-4 w-auto h-[400px] overflow-y-auto  md:h-auto ">
            <div className="flex flex-col lg:flex-row justify-center md:justify-between  items-center  px-0 lg:px-3">
                <h2 className="text-lg lg:text-2xl font-semibold text-royalBlue md:ml-7">
                    Recommended
                </h2>
                {/* {!showAll && books.length > initialDisplayCount && (
                    <button
                        className="btn mr-0 mb-2 md:mr-3 bg-royalBlue border-none text-white hover:bg-black"
                        onClick={handleSeeAllClick}
                    >
                        See More
                    </button>
                )}
                {showAll && (
                    <button
                        className="btn mr-0 mb-2 md:mr-3 bg-royalBlue border-none text-white"
                        onClick={handleSeeLessClick}
                    >
                        See Less
                    </button>
                )} */}
            </div>
            <div className="grid justify-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 py-2 px-0 lg:px-8 gap-4 ">
                {books
                    .slice(0, showAll ? books.length : initialDisplayCount)
                    .map((book) => (
                        <div
                            key={book.id}
                            className="rounded-lg group max-w-[220px] md:w-[320px] space-y-4 mx-auto text-center bg-royalBlue hover:shadow-customYellow/50 shadow-md"
                        >
                            <img
                                alt="Product Image"
                                className="w-80 h-[260px] rounded-t-lg px-4 pt-6"
                                src={book.image}
                            />
                             <div className="relative hidden group-hover:block ">
                             <span 
                                onClick={() => handleHeartClick(book.id)}
                                className=" opacity-100 transition-opacity duration-300 delay-1000 ease-in-out absolute -top-[240px] right-6 text-2xl text-white font-bold cursor-pointer"
                            >
                                {likedBooks.includes(book.id) ? <FaHeart /> : <FaRegHeart />}
                            </span>
                             </div>
                            <div className="px-4 pb-6">
                                <div className="h-28 flex flex-col items-center">
                                    <h1 className="text-lg font-semibold text-slate-200">
                                        {book?.name}
                                    </h1>
                                    <p className="text-sm py-1 text-slate-200 dark:text-white">
                                        {book?.author}
                                    </p>
                                    <Rating
                                        className="text-customYellow"
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
                                <button className="w-full bg-lightBtn text-white hover:bg-darkBtn py-2 mt-3 rounded-md">
                                    <Link href={`/bookDetails/${book?._id}`}>
                                        Details
                                    </Link>
                                </button>
                            </div>
                        </div>
                    ))}

{!showAll && books.length > initialDisplayCount && (
                    <button
                        className="btn mr-0 mb-2 md:mr-3 bg-royalBlue border-none text-white hover:bg-black md:mt-8"
                        onClick={handleSeeAllClick}
                    >
                        See More
                    </button>
                )}
                {showAll && (
                    <button
                        className="btn mr-0 mb-2 md:mr-3 bg-royalBlue border-none text-white"
                        onClick={handleSeeLessClick}
                    >
                        See Less
                    </button>
                )}

            </div>

            {/* {selectedBooks && (
                // <RightBar book = {selectedBooks} />

                <div
                    className="fixed top-0 right-0 bg-lightWhite w-[300px] shadow-lg p-4 overflow-y-auto border-2 border-oliveGreen rounded-md"
                    style={{ width: drawerWidth }}
                >
                    <button
                        className="absolute top-0 right-0 p-4"
                        onClick={closeDrawer}
                    >
                        <IoCloseOutline className="text-3xl text-oliveGreen border-2 border-oliveGreen rounded-md shadow-md" />
                    </button>
                    <div className=" h-full flex justify-center items-center">
                        <div className=" w-full flex flex-col justify-center items-center">
                            <Image
                                src={selectedBooks.image}
                                alt={selectedBooks.name}
                                width={150}
                                height={250}
                            />
                            <div className="flex flex-col justify-center items-center  w-full">
                                <h3 className="text-xl font-semibold mt-3">
                                    {selectedBooks.name}
                                </h3>
                                <p className="text-base ">
                                    {selectedBooks.author}
                                </p>
                                <Rating
                                    className="text-oliveGreen"
                                    initialRating={selectedBooks.rating}
                                    emptySymbol={
                                        <MdOutlineStarBorder className="text-2xl" />
                                    }
                                    fullSymbol={
                                        <MdOutlineStar className="text-2xl" />
                                    }
                                    readonly
                                />
                                <button className="w-full bg-oliveGreen text-lightWhite py-2 mt-3 rounded-md">
                                    <Link href={`/bookDetails/${selectedBooks?._id}`}>
                                    Details
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )} */}
        </div>
    );
};

export default Recommended;
