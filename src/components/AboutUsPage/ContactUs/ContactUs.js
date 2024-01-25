import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
const ContactUs = () => {
    return (
        <div className=' mx-44 my-10 relative'>
            <div className='bg-black h-[600px] p-10 flex gap-x-8 justify-center items-center '>
                <div className='w-5/12  min-h-[450px] grid grid-cols-2 gap-8 absolute left-16 '>
                    <div className='bg-white h-[220px] w-[220px]'>
                    <FaLocationDot className='text-[50px] text-center mx-auto my-4'/>
                    </div>
                    <div className='bg-white h-[220px] w-[220px]'>
                    <MdCall className='text-[50px] text-center mx-auto my-4' />
                    </div>
                    <div className='bg-white h-[220px] w-[220px]'>

                    </div>
                    <div className='bg-white h-[220px] w-[220px]'>

                    </div>
                </div>
                <div className='w-7/12 bg-lightWhite min-h-[500px] absolute right-10 '>

                </div>
            </div>
        </div>
    );
};

export default ContactUs;