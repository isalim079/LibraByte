"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Link from 'next/link';

const Categories = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const initialDisplayCount = 5;


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

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    // Filter books based on the selected category
    const filteredBooksData = books.filter((book) => !selectedCategory || book.category === selectedCategory);
    
    
    // Set the filtered result using setFilteredBooks
    setFilteredBooks(filteredBooksData);
  }, [books, selectedCategory]);
  const handleSeeAllClick = () => {
    setShowAll(true);
};

const handleSeeLessClick = () => {
    setShowAll(false);
};
  return (
    <div className='bg-lightWhite rounded-md drop-shadow-lg my-5 p-3 w-auto h-[300px] overflow-y-auto  md:h-auto '>
      <div className="mt-3">
      <div className="flex flex-col lg:flex-row justify-center md:justify-between  items-center  p-0 lg:p-2">
                <h2 className="text-lg lg:text-2xl font-semibold">
                    Categories
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
        <Tabs>
          <TabList className="grid grid-cols-3  lg:grid-cols-5 gap-3  text-sm">
            <Tab
              className={`bg-[#333D2E] text-white flex justify-center items-center  border-none p-2 rounded-xl hover:bg-[#476f32] ${
                selectedCategory === 'Mystery' ? 'bg-slate-500' : ''
              }`}
              onClick={() => handleCategoryChange('Mystery')}
            >
              Mystery
            </Tab>
            <Tab
              className={`bg-[#333D2E] text-white flex justify-center items-center  border-none p-2 rounded-xl hover:bg-[#476f32] ${
                selectedCategory === 'Sci-Fi' ? 'bg-slate-500' : ''
              }`}
              onClick={() => handleCategoryChange('Sci-Fi')}
            >
              Sci-Fi
            </Tab>
            <Tab
              className={`bg-[#333D2E] text-white flex justify-center items-center  border-none p-2 rounded-xl hover:bg-[#476f32] ${
                selectedCategory === 'Fantasy' ? 'bg-slate-500' : ''
              }`}
              onClick={() => handleCategoryChange('Fantasy')}
            >
              Fantasy
            </Tab>
            <Tab
              className={`bg-[#333D2E] text-white flex justify-center items-center  border-none p-2 rounded-xl hover:bg-[#476f32] ${
                selectedCategory === 'Fiction' ? 'bg-slate-500' : ''
              }`}
              onClick={() => handleCategoryChange('Fiction')}
            >
              Fiction
            </Tab>
            <Tab
              className={`bg-[#333D2E] text-white flex justify-center items-center  border-none p-2 rounded-xl hover:bg-[#476f32] ${
                selectedCategory === 'Self-Help' ? 'bg-slate-500' : ''
              }`}
              onClick={() => handleCategoryChange('Self-Help')}
            >
              Self-Help
            </Tab>
          </TabList>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center my-5 gap-2 '>
          {filteredBooks?.slice(0, showAll ? books.length : initialDisplayCount).map((book) =><div key={book.id}>
          <Link href={`/bookDetails/${book?._id}`}>
                <div className='bg-lightWhite shadow-md rounded-md mx-auto h-[380px] flex flex-col items-center'>
                    <Image className="w-[175px] h-[250px] rounded-t-md" src={book.image} width={150} height={200} alt="book_image"/>
                    <h3 className="text-lg font-semibold px-2 text-center">{book?.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 px-2">{book?.author}</p>
                     </div>
                  </Link>

                </div>

              )}
          </div>
          
        </Tabs>
      </div>
    </div>
  );
};

export default Categories;
