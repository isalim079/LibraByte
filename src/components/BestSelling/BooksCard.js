import { IoMdStar } from "react-icons/io";



const BooksCard = () => {
    return (
        <div>
            <div className="card  bg-base-100 shadow-sm">
                <figure className="px-10 pt-10">
                    <img src="https://i.ibb.co/C8sHzRx/best-books.png" alt="books" className="rounded-lg" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-oliveGreen">Book Name1</h2>
                    <p className="text-oliveGreen">Book Name By Author</p>

                    <p className="flex gap-1 text-orange-400 mb-1">
                        <IoMdStar></IoMdStar>
                        <IoMdStar></IoMdStar>
                        <IoMdStar></IoMdStar>
                        <IoMdStar></IoMdStar>
                        <IoMdStar></IoMdStar>
                    </p>
                    <div className="card-actions">
                        <button className="btn btn-wide max-w-[175px] bg-[#333D2E] hover:bg-darkOliveGreen text-white">View More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksCard;