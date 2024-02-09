"use client"
import React from 'react';
import PromotionCard from './PromotionCard';
import { FaHeartCircleXmark } from "react-icons/fa6";

const items = [
    { id: 1, name: 'The Da Vinci Code',  imgToFetch: 'https://i.ibb.co/p2BG6zF/p159678-p-v8-av.jpg' },
    { id: 2, name: 'Gone Girl',  imgToFetch: 'https://i.ibb.co/xHzNGzs/4c61372c2a8bdadae20b5f03d33c7893.jpg' },
    { id: 3, name: 'Sherlock Holmes',  imgToFetch: 'https://i.ibb.co/drKvh0f/bf-Oa-LDKfx-Jut-QBLgm-OXKz0w20hy-TI3-R02b6sy-GLR.jpg' },
    { id: 4, name: 'The Girl with the Dragon Tattoo',  imgToFetch: 'https://i.ibb.co/R2rnNjL/9781849162883-uk.jpg' },
];
const Wishlist = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-evenly'>
            <div className="ml-0 md:ml-20 lg:ml-0 bg-gray-250 shadow-md max-w-[700px] md:w-[600px] p-8 mb-20 mt-10 space-y-6">
            {/* top part  */}
            <div className="flex justify-between items-center">
                <h4 className="text-xl font-medium text-slate-800 uppercase">Wishlist</h4>
                <p className="text-sm font-medium text-gray-400 uppercase">Remove</p>
            </div>
            <hr />
            {/*  Cart  map */}
            {items.map((item, idx) => (
                <div key={item?.id} className="flex justify-between items-center border-b pb-6">
                    <div className="flex flex-wrap items-center gap-4">
                        <img className="w-[85px] h-[75px] rounded-lg bg-slate-500" src={item?.imgToFetch} alt="" />
                        <div>
                            <h5 className="text-lg font-medium">{item?.name}</h5>
                            {/* <p className="text-sm text-gray-400">Delivery {item?.deliveryDate}</p> */}
                        </div>
                    </div>
                    {/* item increase decrees  */}
                    <div className="flex flex-wrap items-center gap-4 md:gap-10">
                        {/* <div className="space-x-3">
                            <span className="py-1 px-2 hover:text-[#3EBFA4] text-xl duration-200">-</span>
                            <span className="py-1 px-2.5 border hover:bg-[#3EBFA4] hover:text-white hover:border-[#3EBFA4] duration-300 ease-in-out rounded-sm">4</span>
                            <span className="py-1 px-2 hover:text-[#3EBFA4] text-xl duration-200">+</span>
                        </div> */}
                        <button className="text-3xl font-medium text-[#33958e]"><FaHeartCircleXmark></FaHeartCircleXmark></button>
                    </div>
                </div>
            ))}
            {/* calculation part  */}
            <div className="space-y-10">
                {/* <div className="flex justify-between items-center py-6">
                    <h5 className="text-xl text-slate-800 capitalize">total Price :</h5>
                    <h4 className="text-xl font-medium text-slate-800">$155.99</h4>
                </div> */}
                <button className="font-semibold bg-[#3EBFA4] text-white py-4 w-full duration-500 active:bg-[#278b76]">Request to borrow</button>
            </div>
        </div>
        <PromotionCard></PromotionCard>
        </div>
    );
};

export default Wishlist;