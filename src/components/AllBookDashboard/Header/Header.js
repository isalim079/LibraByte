"use client";
import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from "@/app/Context/AuthProvider";
import { FaUserCircle } from 'react-icons/fa';
import Image from 'next/image';
import { Novu } from './Novu';
import axios from 'axios';
import Link from 'next/link';

const Header = () => {
    const { user } = useContext(AuthContext);
    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

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

    // Filter books based on the search query
    useEffect(() => {
        const filteredBooks = books.filter(book =>
            book.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(filteredBooks);
    }, [searchQuery, books]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className='overflow-x-hidden '>
            <div className="drop-shadow-md px-5 py-2 bg-royalBlue bg-bgTexture ">
                <div className=" flex justify-between items-center gap-2">
                    <div className="form-control relative">
                        <input
                            type="text"
                            placeholder="Search your favorite book..."
                            className="input input-bordered w-24 md:w-auto"
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                    </div>
                    <div className=" flex justify-center items-center">
                        <Novu></Novu>
                        <div role="button" className="btn btn-ghost btn-circle avatar">
                            <div>
                                {user ? (
                                    <Image
                                        width={30}
                                        height={30}
                                        className='rounded-full w-8 h-8'
                                        src={user.photoURL}
                                        alt="profile picture"
                                    />
                                ) : (
                                    <FaUserCircle className='text-4xl'></FaUserCircle>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Display search suggestions */}
            {searchQuery && searchResults.length > 0 && (
                <div className="-mt-3 ml-5 z-50 absolute bg-slate-50 text-oliveGreen rounded-sm shadow-xl">
                    <ul className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 gap-2 md:gap-10 p-1 md:p-10'>
                        {searchResults.map(book => (
                            <li key={book.id} className='hover:bg-lightWhite grid-cols-12'>
                                {/* Display book name for mobile devices */}
                                <div className='md:hidden'>
                                    {book.name}
                                </div>

                                {/* Display book image for larger devices */}
                                <div className='hidden md:block'>
                                    <Link href={`/bookDetails/${book?._id}`}>
                                        <Image
                                            width={300}
                                            height={500}
                                            src={book.image}
                                            alt="searching"
                                            className='w-40 h-64 border-4 hover:shadow-2xl hover:border-black transition-all duration-300'
                                        />
                                    </Link>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Header;
