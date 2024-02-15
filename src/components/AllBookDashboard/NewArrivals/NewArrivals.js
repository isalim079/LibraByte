import axios from "axios";

const NewArrivals = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:5000/newBooks")
            .then((res) => {
                setBooks(res.data);
            })
            .catch((error) => {
                console.log("error getting books", error);
            });
    }, []);


    return (
        <div className="bg-royalBlue bg-bgTexture rounded-md drop-shadow-lg mt-3 ml-3 p-3 w-auto h-[400px] overflow-y-auto  md:h-auto">
            <h2 className="text-lg lg:text-2xl font-semibold mb-5">New Arrivals </h2>
            <div className="grid justify-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 grid-cols-1 py-2 px-0 lg:px-8 gap-4 ">
                {books.map((book) => (
                        <div
                            key={book.id}
                            className="rounded-lg group max-w-[220px] md:w-[320px] space-y-4 mx-auto text-center bg-royalBlue hover:shadow-customYellow/50 shadow-md"
                        >
                            <img
                                alt="Product Image"
                                className="w-80 h-[260px] rounded-t-lg px-4 pt-6"
                                src={book.image}
                            />
                            <div className="relative hidden group-hover:block ">
                                <span
                                    onClick={() => handleHeartClick(book)}
                                    className={` opacity-100 transition-opacity duration-300 delay-1000 ease-in-out absolute -top-[240px] right-6 text-2xl text-white font-bold cursor-pointer `}
                                >
                                    {likedBooks.includes(book.id) ? <FaHeart /> : <FaRegHeart />}
                                </span>
                            </div>
                            <div className="px-4 pb-6">
                                <div className="h-28 flex flex-col items-center">
                                    <h1 className="text-lg font-semibold text-slate-200">
                                        {book?.name}
                                    </h1>
                                    <p className="text-sm py-1 text-slate-200 dark:text-white">
                                        {book?.author}
                                    </p>
                                    <Rating
                                        className="text-customYellow"
                                        initialRating={book.rating}
                                        emptySymbol={
                                            <MdOutlineStarBorder className="text-2xl" />
                                        }
                                        fullSymbol={
                                            <MdOutlineStar className="text-2xl" />
                                        }
                                        readonly
                                    />
                                </div>
                                <button className="w-full bg-lightBtn text-white hover:bg-darkBtn py-2 mt-3 rounded-md">
                                    <Link href={`/bookDetails/${book?._id}`}>
                                        Details
                                    </Link>
                                </button>
                            </div>
                        </div>
                    ))}

                {!showAll && books.length > initialDisplayCount && (
                    <button
                        className="btn mr-0 mb-2 md:mr-3 bg-royalBlue border-none text-white hover:bg-black md:mt-8"
                        onClick={handleSeeAllClick}
                    >
                        See More
                    </button>
                )}
                {showAll && (
                    <button
                        className="btn mr-0 mb-2 md:mr-3 bg-royalBlue border-none text-white"
                        onClick={handleSeeLessClick}
                    >
                        See Less
                    </button>
                )}

            </div>
        </div>
    );
};

export default NewArrivals;