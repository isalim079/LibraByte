"use client";
import { allBooks } from "@/components/utils/AllBooks/allBooks";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ManageBook = () => {
    const [booksToShow, setBooksToShow] = useState([]);
    const [search, setSearch] = useState('');
    const [filteredBooks, setFilteredBooks] = useState()


    // Take the first 5 items by using this useeffect
    useEffect(() => {
        const fetchData = async () => {
            const allBooksData = await allBooks();
            setBooksToShow(allBooksData.slice(0, 5));
            setFilteredBooks(allBooksData.slice(0, 5))
        };

        fetchData();
    }, []);

    // console.log(filteredBooks);

    const handleSearch = (e) => {

        e.preventDefault();
        const input = document.getElementById('input')

        let items = []
        const value = search.toLowerCase()
        booksToShow.map(book => {
            const bookTitle = book.name.toLowerCase();
            // console.log(bookTitle.includes(value))
            const filtered = bookTitle.includes(value)
            if (filtered) {
                items.push(book)
            }
        })

        if (items?.length > 0) {
            setFilteredBooks(items)
            input.value = ''
        } else {
            toast.success("not found")
            setFilteredBooks(booksToShow)
            input.value = ''
        }

    }


    return (
        <div>

            <div>

                <div className=" my-5 flex gap-5">
                    <div className="grow">
                        <form onChange={(e) => setSearch(e.target.value)} className=" flex">
                            <input
                                id="input"
                                className=" rounded-md grow  bg-lightWhite px-3 outline-none py-3"
                                type="text"
                                name="name"
                                placeholder="Search..."
                            />
                            <button
                                onClick={handleSearch}
                                className=" py-3 px-6 rounded-md bg-oliveGreen text-lightWhite font-semibold"
                            >
                                Search
                            </button>
                        </form>
                    </div>
                    <div>
                        <select
                            // onChange={(e) => setCategory(e.target.value)}
                            className="px-3 py-3 rounded-md bg-lightWhite"
                            name=""
                            id=""
                        >
                            <option value="">All Category</option>
                            <option value="reading">Reading</option>
                            <option value="Complete">Complete</option>

                        </select>
                    </div>

                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="bg-lightWhite">
                            <th>Book Name</th>
                            <th>Author Name</th>
                            <th>Category</th>
                            <th>Language</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredBooks?.map((book) => (
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
                                                        src={book?.image}
                                                    ></Image>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">
                                                    {book.name}
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
                                    <td>{book.language}</td>
                                    <th>
                                        <button className="btn bg-red-500 text-white md:px-2 md:py-1 hover:bg-red-600 hover:text-white  btn-xs">
                                            Delete
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

export default ManageBook;
