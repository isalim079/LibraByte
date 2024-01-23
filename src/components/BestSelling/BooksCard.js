import { IoMdStar } from "react-icons/io";

const BooksCard = ({ book }) => {
    return (
        <div>
            <div className=" w-60 bg-lightWhite drop-shadow-lg ">
                <figure className="h-64">
                    <img src={book?.image} alt="books" className="" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className=" text-oliveGreen">{book?.name}</h2>
                    {/* <p className="text-oliveGreen">{book?.author}</p> */}

                    <p className="flex gap-1 text-orange-400 mb-1">
                        <IoMdStar></IoMdStar>
                        <IoMdStar></IoMdStar>
                        <IoMdStar></IoMdStar>
                        <IoMdStar></IoMdStar>
                        <IoMdStar></IoMdStar>
                    </p>
                    <div className="card-actions">
                        <button className="btn btn-wide max-w-[175px] bg-[#333D2E] hover:bg-darkOliveGreen text-white">
                            View More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksCard;
