import Image from 'next/image';
import React from 'react';

const Librarian = () => {
    return (
        <div className='bg-white drop-shadow-md rounded-md p-4'>

            <div className='flex justify-between items-center'>

                <div>
                    <h3 className='text-xl font-semibold'>Author</h3>

                    <div className='flex py-1 items-center gap-3'>
                        <h2 className='font-bold md:text-xl'>103</h2>
                        <span className='text-[#68B8A1] font-bold text-[13px]'>+5.2%</span>
                    </div>

                    <p className='text-[#9da1a4] text-[13px]'>All Author</p>
                </div>

                <div>
                    <Image height={40} width={40} src="https://i.ibb.co/4MqdjVY/reading.png"></Image>
                </div>

            </div>
        </div>
    );
};

export default Librarian;