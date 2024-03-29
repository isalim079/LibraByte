"use client"
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Donation = () => {
    const [books,setBooks]=useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:5000/ngo-donate/v1")
            .then((res) => {
                setBooks(res.data);
            })
            .catch((error) => {
                console.log("error getting donation", error);
            });
    }, []);
    return (
        <div>
            
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-lightWhite">
                            <th>Book Name</th>
                            <th>Author Name</th>
                            <th>Category</th>
                            <th>Remove</th>
                            <th>Accept</th>
                        </tr>
                    </thead>
                    <tbody>
                        {books?.map((book) => (
                            <>
                                {/* row 1 */}
                                <tr key={book._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div>
                                                    <Image
                                                        height={35}
                                                        width={35}
                                                        src={book?.photo}
                                                    ></Image>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">
                                                    {book.bookname}
                                                </div>
                                                {/* <div className="text-sm opacity-50">কোলকাতা</div> */}
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        {book.author}
                                        <br />
                                        {/* <span className="badge badge-ghost badge-sm"></span> */}
                                    </td>
                                    <td>{book.category}</td>
                                    <th>
                                        <button className="btn bg-red-500 text-white md:px-2 md:py-1 hover:bg-red-600 hover:text-white  btn-xs">
                                            Delete
                                        </button>
                                    </th>
                                    <th>
                                        <button className="btn bg-green-500 text-white md:px-2 md:py-1 hover:bg-green-600 hover:text-white  btn-xs">
                                            Add
                                        </button>
                                    </th>
                                </tr>
                            </>
                        ))}
                    </tbody>
                </table>
            </div>
  
        </div>
    );
};

export default Donation;