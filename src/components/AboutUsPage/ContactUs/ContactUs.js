import React from 'react';
import { FiSend } from "react-icons/fi";
import { IoLocation } from "react-icons/io5";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { BsBrowserChrome } from "react-icons/bs";




const ContactUs = () => {
    return (
        <div className='my-10 mb-20 '>
            <h1 className='text-4xl font-bold text-center'>Contact With Us </h1>
            <p className='text-center text-lg pb-10 pt-2'>You can get our contact information and send us email</p>
            <div className='bg-lightWhite mx-44 ml-80 min-h-[450px] absolute'>

                <h1 className='font-bold text-4xl text-darkOliveGreen pt-10 pl-56 pr-[500px]'>Get In Touch </h1>
                <p className='text-xl  py-2 pl-56'>Fell free to drop us a comment </p>

                <form >
                    <div className='space-y-3'>
                        <input type="text" placeholder="Name" className="input input-bordered w-full max-w-xl rounded-none bg-transparent shadow-xl ml-56" />
                        <input type="text" placeholder="Email" className="input input-bordered w-full max-w-xl rounded-none bg-transparent shadow-xl ml-56" />
                        <textarea className="textarea textarea-bordered min-w-[575px] min-h-28 rounded-none bg-transparent shadow-xl ml-56" placeholder="Bio"></textarea>
                    </div>
                    <button className='bg-oliveGreen text-white font-bold px-5 py-2 text-lg ml-56 flex justify-center items-center gap-x-3 mt-2'>Send <FiSend className='text-lg' />
                    </button>
                </form>

            </div>

            <div className='bg-oliveGreen min-h-[400px] w-80 relative left-44 top-6 '>
                <h1 className='text-center font-bold text-white pt-7 text-xl'>Our Contact Information</h1>

                <div className='p-5 space-y-4'>
                    <h1><IoLocation className='text-white text-3xl' /> </h1>
                    <h1><BiMessageSquareDetail className='text-white text-2xl' /> </h1>
                    <h1><FaPhoneAlt className='text-white text-xl' /> </h1>
                    <h1><BsBrowserChrome className='text-white text-xl' /> </h1>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;