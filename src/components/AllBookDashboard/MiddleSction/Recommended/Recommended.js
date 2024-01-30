"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import RightBar from "../RightBar/RightBar";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import Rating from "react-rating";
import { MdOutlineStar, MdOutlineStarBorder } from "react-icons/md";

const Recommended = () => {
    const [books, setBooks] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const initialDisplayCount = 4;

    const [selectedBooks, setSelectedBooks] = useState(null);
    const drawerWidth = 300;

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

    const closeDrawer = () => {
        setSelectedBooks(null);
    };

    return (
        <div className="bg-lightWhite rounded-md drop-shadow-lg p-3 w-auto h-[300px] overflow-y-auto  md:h-auto ">
            <div className="flex flex-col lg:flex-row justify-center md:justify-between  items-center  p-0 lg:p-2">
                <h2 className="text-lg lg:text-2xl font-semibold">
                    Recommended
                </h2>
                {!showAll && books.length > initialDisplayCount && (
                    <button
                        className="btn mr-0 mb-2 md:mr-3 bg-[#333D2E] text-white"
                        onClick={handleSeeAllClick}
                    >
                        See All
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
            <div className="grid justify-center md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1   gap-2">
                {books
                    .slice(0, showAll ? books.length : initialDisplayCount)
                    .map((book) => (
                        <div
                            key={book.id}
                            className="rounded-lg max-w-[200px] md:w-[300px] shadow-lg space-y-4 mx-auto"
                            onClick={() => handleBookClick(book)}
                        >
                            <img
                                alt="Product Image"
                                className="w-[275px] h-[300px] rounded-t-lg"
                                src={book.image}
                            />
                            <div className="p-3">
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

            {selectedBooks && (
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
                                    Details
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Recommended;
