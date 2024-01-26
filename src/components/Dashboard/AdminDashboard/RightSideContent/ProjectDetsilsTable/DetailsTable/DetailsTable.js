"use client"
import { allBooks } from '@/components/utils/AllBooks/allBooks';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const DetailsTable =  () => {

    const [booksToShow, setBooksToShow] = useState([]);
    // const getAllBooks = await allBooks();

    // Take the first 5 items by using this useeffect
    useEffect(() => {
        const fetchData = async () => {
            const allBooksData = await allBooks();
            setBooksToShow(allBooksData.slice(0, 5)); 
        };

         fetchData();
    }, []);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className='bg-lightWhite'>

                            <th>Book Name</th>
                            <th>Author Name</th>
                            <th>Category</th>
                            <th>Language</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            booksToShow.map(book => <>

                                {/* row 1 */}
                                <tr key={book._id}>

                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">

                                                <div>
                                                    <Image height={35} width={35} src={book?.image}></Image>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{book.name}</div>
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
                                    <td>{book.language}</td>
                                    <th>
                                    <button className="btn bg-red-500 text-white md:px-2 md:py-1 hover:bg-red-600 hover:text-white  btn-xs">Delete</button>
                                    </th>
                                </tr>
                            </>)
                        }


                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default DetailsTable;