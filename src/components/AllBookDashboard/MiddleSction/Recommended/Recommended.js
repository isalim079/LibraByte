"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import Rating from "react-rating";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";
import Link from "next/link";

const Recommended = () => {
    const [books, setBooks] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const initialDisplayCount = 5;

    // const [selectedBooks, setSelectedBooks] = useState(null);
    // const drawerWidth = 300;

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

    const handleBookClick = (book) => {
        // console.log(book);
        setSelectedBooks(book);
    };

    // const closeDrawer = () => {
    //     setSelectedBooks(null);
    // };

    return (
        <div className="bg-lightWhite rounded-md drop-shadow-lg py-8 px-4 w-auto h-[300px] overflow-y-auto  md:h-auto ">
            <div className="flex flex-col lg:flex-row justify-center md:justify-between  items-center  px-0 lg:px-3">
                <h2 className="text-lg lg:text-2xl font-semibold">
                    Recommended
                </h2>
                {!showAll && books.length > initialDisplayCount && (
                    <button
                        className="btn mr-0 mb-2 md:mr-3 bg-[#333D2E] text-white"
                        onClick={handleSeeAllClick}
                    >
                        See More
                    </button>
                )}
                {showAll && (
                    <button
                        className="btn mr-0 mb-2 md:mr-3 bg-[#333D2E] text-white"
                        onClick={handleSeeLessClick}
                    >
                        See Less
                    </button>
                )}
            </div>
            <div className="grid justify-center md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5 grid-cols-1 py-2 px-0 lg:px-8 gap-4">
                {books
                    .slice(0, showAll ? books.length : initialDisplayCount)
                    .map((book) => (
                        <div
                            key={book.id}
                            className="rounded-lg max-w-[220px] md:w-[320px] shadow-lg space-y-4 mx-auto"
                            onClick={() => handleBookClick(book)}
                        >
                            <img
                                alt="Product Image"
                                className="w-80 h-[250px] rounded-t-lg px-4 pt-6"
                                src={book.image}
                            />
                            <div className="px-4 pb-6">
                                <h1 className="text-lg font-semibold">
                                    {book?.name}
                                </h1>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {book?.author}
                                </p>
                            </div>
                        </div>
                    ))}
            </div>

            
        </div>
    );
};

export default Recommended;
