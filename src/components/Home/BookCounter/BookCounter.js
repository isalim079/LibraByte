import { FaUsers } from "react-icons/fa6";
import { FaBook } from "react-icons/fa6";
import { AiTwotoneBook } from "react-icons/ai";
import { MdAudioFile } from "react-icons/md";
import { getAllUsers } from "@/components/utils/ManageUser/getAllUsers";
import { allBooks } from "@/components/utils/AllBooks/allBooks";

const BookCounter = async () => {

    const allUsers = await getAllUsers();
    const TotalBooks = await allBooks();
    

    return (
        <div className="md:max-w-[1200px] mx-auto my-40">

            <h1 className="text-2xl md:text-5xl text-oliveGreen mb-20 text-center font-semibold">Your Gateway to <br /> Literary Exploration and  <br /> Knowledge</h1>

            <div className='grid grid-cols-2 px-5 py-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                <div className="bg-white text-center  py-5 rounded-lg drop-shadow-lg  hover:drop-shadow-2xl">
                    <div className="text-center">
                        <FaUsers className="text-3xl text-center ml-20 md:text-4xl md:ml-24  lg:text-5xl lg:ml-28"></FaUsers>
                    </div>
                    <p className="text-oliveGreen text-[15px] font-semibold md:text-xl py-2">Users</p>
                    <h1 className="text-xl text-oliveGreen md:text-5xl font-bold">{allUsers.length}</h1>
                </div>
              
                <div className="bg-oliveGreen text-white text-center  py-5 rounded-lg drop-shadow-lg  hover:drop-shadow-2xl">
                    <div className="text-center">
                        <FaBook className="text-2xl text-center ml-20 md:text-4xl md:ml-24  lg:text-5xl lg:ml-28"></FaBook>
                    </div>
                    <p className=" text-[15px] font-semibold md:text-xl py-2">Books</p>
                    <h1 className="text-xl  md:text-5xl font-bold">{TotalBooks.length}</h1>
                </div>
              
                <div className="bg-white text-center  py-5 rounded-lg drop-shadow-lg  hover:drop-shadow-2xl">
                    <div className="text-center">
                        <AiTwotoneBook className="text-2xl text-center ml-20 md:text-4xl md:ml-24  lg:text-5xl lg:ml-28"></AiTwotoneBook>
                    </div>
                    <p className="text-oliveGreen text-[15px] font-semibold md:text-xl py-2">E-Book</p>
                    <h1 className="text-xl text-oliveGreen md:text-5xl font-bold">1452</h1>
                </div>
              
                <div className="bg-oliveGreen text-white text-center  py-5 rounded-lg drop-shadow-lg  hover:drop-shadow-2xl">
                    <div className="text-center">
                        <MdAudioFile className="text-2xl text-center ml-20 md:text-4xl md:ml-24  lg:text-5xl lg:ml-28"></MdAudioFile>
                    </div>
                    <p className=" text-[15px] font-semibold md:text-xl py-2">Audio-Book</p>
                    <h1 className="text-xl  md:text-5xl font-bold">1520</h1>
                </div>
              
              
                

            </div>

        </div>

    );
};

export default BookCounter;