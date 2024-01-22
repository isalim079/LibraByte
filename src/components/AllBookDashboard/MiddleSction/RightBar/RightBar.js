import Image from "next/image";
import { IoIosBookmarks, IoMdStar } from "react-icons/io";
const RightBar = () => {
    return (
        <div>
            <div className="flex  justify-center bg-[#333D2E] h-[1070px] rounded-br-lg p-5 ">
                <div className="  w-[200px] h-[350px] mt-8 ">
                    <Image
                        className="rounded-md"
                        src="https://i.ibb.co/gDBxZ5D/Every-Time.jpg"
                        width={800}
                        height={500}
                        alt="Time"
                    />
                    <h2 className="py-4 text-white text-center text-lg font-semibold ">Every Time You Go Away</h2>
                    <p className="text-white text-center text-sm">Avigail Johnson</p>
                    <p className="flex gap-1 justify-center text-orange-400 mb-1">
                        <IoMdStar></IoMdStar>
                        <IoMdStar></IoMdStar>
                        <IoMdStar></IoMdStar>
                        <IoMdStar></IoMdStar>
                        <IoMdStar></IoMdStar>
                    </p>
                   
                        <div className="flex gap-1 py-5 text-center text-white justify-center"><p>320 Pages</p>
                        <span className='border-r-[2px] border-gray-200 w-full p-2'></span>
                        <p>643 Ratings</p>
                        <span className='border-r-[2px] border-gray-200 w-full p-2'></span>
                        <p>120 Downloads</p></div>
                    
                    <p className="text-center text-slate-200 text-sm mb-20">"Every Time You Go Away" is an emotionally charged novel that explores the intricate dynamics of love, loss, and the resilience of the human spirit.</p>
                    <button className="text-xl  flex justify-center items-center gap-1 w-48 h-16 text-green-900 bg-lightWhite group hover:text-sky-900 font-semibold">Read Now  <IoIosBookmarks size={20} /></button>

                </div>
            </div>
        </div>
    );
};

export default RightBar;