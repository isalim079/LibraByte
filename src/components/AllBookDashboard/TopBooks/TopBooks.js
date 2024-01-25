"use client"
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const TopBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios
          .get("https://y-kappa-sage.vercel.app/books")
          .then((res) => {
            setBooks(res.data);
          })
          .catch((error) => {
            console.log("error getting books", error);
          });
      }, []);
      const topRatedBooks = books.filter((book) => book.rating === 5);

    return (
        <div className='bg-lightWhite rounded-md drop-shadow-lg mt-3 ml-3 p-3 w-auto h-[400px] overflow-y-auto  md:h-auto '>
        <h2 className="text-lg lg:text-2xl font-semibold mb-5">Top Books</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center my-5 gap-2 '>
          {topRatedBooks?.map((book) =><div key={book.id}>
                  <div className='bg-lightWhite shadow-md rounded-md mx-auto h-[380px] flex flex-col items-center'>
                    <Image className="w-[175px] h-[250px] rounded-t-md" src={book.image} width={150} height={200} alt="book_image"/>
                    <h3 className="text-lg font-semibold px-2 text-center">{book?.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 px-2">{book?.author}</p>
                  </div>
                </div>
              )}
          </div>
        </div>
    );
};

export default TopBooks;