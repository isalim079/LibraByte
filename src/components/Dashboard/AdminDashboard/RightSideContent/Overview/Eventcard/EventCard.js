import Image from 'next/image';
import React from 'react';

const EventCard = () => {
    return (
        <div className='bg-[#17203F] text-white drop-shadow-lg rounded-md p-4'>

            <div className='flex justify-between items-center md:gap-1'>

                <div>
                    <h3 className=''>All Subscriber</h3>

                    {/* <div className='flex py-1 items-center gap-3'>
                        <h2 className='font-bold md:text-xl'>103</h2>
                        <span className='text-[#68B8A1] font-bold text-[13px]'>+5.2%</span>
                    </div> */}
                    <p className='lg:text-xl font-semibold py-1'>0</p>

                    <p className='text-[#9da1a4] text-[13px]'>All Subscriber</p>
                </div>

                <div>
                    <Image height={50} width={50} src="https://i.ibb.co/yFwyLH6/young-man-4440953.png"></Image>
                </div>

            </div>
        </div>
    );
};

export default EventCard;