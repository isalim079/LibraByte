"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const Categories = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredBooks, setFilteredBooks] = useState([]);


  useEffect(() => {
    axios
      .get("/books.json")
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
    const filteredBooksData = books.filter((book) => !selectedCategory || book.category === selectedCategory).slice(0, 5);
    
    
    // Set the filtered result using setFilteredBooks
    setFilteredBooks(filteredBooksData);
  }, [books, selectedCategory]);
  return (
    <div className='bg-lightWhite rounded-md drop-shadow-lg my-5 p-3'>
      <div className="mt-3">
        <h2 className="text-2xl font-semibold mb-5">Categories</h2>
        <Tabs>
          <TabList className="flex gap-3">
            <Tab
              className={`bg-slate-100 border-none p-2 rounded-xl hover:bg-slate-500 ${
                selectedCategory === 'Mystery' ? 'bg-slate-500' : ''
              }`}
              onClick={() => handleCategoryChange('Mystery')}
            >
              Mystery
            </Tab>
            <Tab
              className={`bg-slate-100 border-none p-2 rounded-xl hover:bg-slate-500 ${
                selectedCategory === 'Sci-Fi' ? 'bg-slate-500' : ''
              }`}
              onClick={() => handleCategoryChange('Sci-Fi')}
            >
              Sci-Fi
            </Tab>
            <Tab
              className={`bg-slate-100 border-none p-2 rounded-xl hover:bg-slate-500 ${
                selectedCategory === 'Fantasy' ? 'bg-slate-500' : ''
              }`}
              onClick={() => handleCategoryChange('Fantasy')}
            >
              Fantasy
            </Tab>
            <Tab
              className={`bg-slate-100 border-none p-2 rounded-xl hover:bg-slate-500 ${
                selectedCategory === 'Fiction' ? 'bg-slate-500' : ''
              }`}
              onClick={() => handleCategoryChange('Fiction')}
            >
              Fiction
            </Tab>
            <Tab
              className={`bg-slate-100 border-none p-2 rounded-xl hover:bg-slate-500 ${
                selectedCategory === 'Self-Help' ? 'bg-slate-500' : ''
              }`}
              onClick={() => handleCategoryChange('Self-Help')}
            >
              Self-Help
            </Tab>
          </TabList>
          <div className='grid grid-cols-5 justify-center my-5 gap-2 '>
          {filteredBooks?.map((book) =><div key={book.id}>
                  <div className='bg-lightWhite shadow-md rounded-md mx-auto h-[380px] flex flex-col items-center'>
                    <Image className="w-[175px] h-[250px] rounded-t-md" src={book.image} width={150} height={200} alt="book_image"/>
                    <h3 className="text-lg font-semibold px-2 text-center">{book?.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 px-2">{book?.author}</p>
                  </div>
                </div>
              )}
          </div>
          
        </Tabs>
      </div>
    </div>
  );
};

export default Categories;
