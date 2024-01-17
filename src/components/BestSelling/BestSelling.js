import { HiOutlineExternalLink } from "react-icons/hi";
import BooksCard from "./BooksCard";

const BestSelling = () => {
    return (
        <div className='md:m-[80px] lg:m-[140px]  m-8'>

            {/* Title  */}

            <div className=" flex justify-between items-center pb-20">
                <h1 className="lg:text-5xl md:text-3xl text-2xl font-semibold">Best Of Best</h1>
                <button className="flex justify-between items-center gap-x-2 lg:text-xl md:text-lg text-lg">View All <HiOutlineExternalLink className="lg:text-[22px] text-lg" /></button>
            </div>


            {/* best books card  */}

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <BooksCard></BooksCard>
                <BooksCard></BooksCard>
                <BooksCard></BooksCard>
                <BooksCard></BooksCard>
              
            </div>
        </div>
    );
};

export default BestSelling;