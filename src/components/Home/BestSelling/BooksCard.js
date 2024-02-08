import Link from "next/link";
import { IoMdStar } from "react-icons/io";

const BooksCard = ({ book }) => {
    return (
        <div>
            <div className=" w-60 bg-royalBlue text-white drop-shadow-lg ">
                <figure className="h-64">
                    <img src={book?.image} alt="books" className="" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className=" text-white">{book?.name}</h2>
                    {/* <p className="text-oliveGreen">{book?.author}</p> */}

                    <p className="flex gap-1 text-orange-400 mb-1">
                        <IoMdStar></IoMdStar>
                        <IoMdStar></IoMdStar>
                        <IoMdStar></IoMdStar>
                        <IoMdStar></IoMdStar>
                        <IoMdStar></IoMdStar>
                    </p>
                    <div className="card-actions">
                        <Link href={`/bookDetails/${book?._id}`}><button className="btn btn-wide max-w-[175px] bg-lightBtn hover:bg-darkBtn border-none text-white">
                            View More
                        </button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksCard;
