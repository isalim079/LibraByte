"use client"
import axios from "axios";
import { useEffect, useState } from "react";

const Recommended = () => {
  const [books, setBooks] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const initialDisplayCount = 4;

  useEffect(() => {
    axios
      .get("/books.json")
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

  return (
    <div className="bg-lightWhite rounded-md drop-shadow-lg p-3">
      <div className="flex justify-between items-center p-2">
        <h2 className="text-2xl font-semibold">Recommended</h2>
        {!showAll && books.length > initialDisplayCount && (
          <button className="btn mr-3 bg-white" onClick={handleSeeAllClick}>
            See All
          </button>
        )}
        {showAll && (
          <button className="btn mr-3 bg-white" onClick={handleSeeLessClick}>
            See Less
          </button>
        )}
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-2">
        {books
          .slice(0, showAll ? books.length : initialDisplayCount)
          .map((book) => (
            <div key={book.id} className="rounded-lg max-w-[200px] md:w-[300px] shadow-lg space-y-4">
              <img alt="Product Image" className="w-[275px] h-[300px] rounded-t-lg" src={book.image} />
              <div className="p-3">
                <h1 className="text-lg font-semibold">{book?.name}</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">{book?.author}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Recommended;
