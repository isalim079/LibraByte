import Image from "next/image";
import Link from "next/link";

const CategoryTab = ({ category, showAll, initialDisplayCount, books }) => {
    // console.log(category);
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-center my-5 gap-2 ">
            {category
                ?.slice(0, showAll ? books.length : initialDisplayCount)
                .map((book) => (
                    <div key={book._id}>
                        <Link href={`/bookDetails/${book?._id}`}>
                            <div className="bg-lightBtn bg-bgTexture text-white shadow-md rounded-md mx-auto h-[380px] flex flex-col items-center">
                                <Image
                                    className="w-[175px] h-[300px] rounded-t-md pt-7"
                                    src={book.image}
                                    width={150}
                                    height={200}
                                    alt="book_image"
                                />
                                <h3 className="text-lg font-semibold px-2 text-center mt-2">
                                    {book?.name}
                                </h3>
                                <p className="text-sm text-white dark:text-gray-400 px-2">
                                    {book?.author}
                                </p>
                            </div>
                        </Link>
                    </div>
                ))}
        </div>
    );
};

export default CategoryTab;
