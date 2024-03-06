"use client"

import React, {  useRef } from 'react';
import { FiSend } from "react-icons/fi";
import { IoLocation } from "react-icons/io5";
import { BiMessageSquareDetail } from "react-icons/bi";
import { FaPhoneAlt } from "react-icons/fa";
import { BsBrowserChrome } from "react-icons/bs";
import Image from 'next/image';
import img from "../../../../public/images/location.jpg"
import dynamic from 'next/dynamic';
// import { EmailJSResponseStatus } from '@emailjs/browser';



const ContactUs = () => {


    const form = useRef();

    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     const name = e.target.name.value;
    //     const email = e.target.email.value;
    //     const messege = e.target.message.value;
    //     console.log(name, email, messege)

    //     const templateParams = {
    //         to_name: "Samin" ,
    //         from_name: {email},
    //         message: {messege}
    //     };

    //     EmailJSResponseStatus.sendForm('service_1qpabdd', 'template_siyi23e', templateParams, 'PGdz_9bvjcdgFmVc9' ,form.current)
    //         .then((result) => {
    //             console.log(result.text);
    //         }, (error) => {
    //             console.log(error.text);
    //         });
    // };

    return (
        <div className='py-28 pb-36 bg-bgTexture'>
            <h1 className='text-4xl font-bold text-center'>Contact With Us </h1>
            <p className='text-center text-lg pb-10 pt-2'>You can get our contact information and send us email</p>
            <div className='bg-royalBlue lg:mx-44 lg:ml-80 min-h-[450px] lg:absolute text-white'>

                <h1 className='font-bold text-4xl text-white pt-10 pl-10 lg:pl-56 lg:pr-[500px]'>Get In Touch </h1>
                <p className='text-xl  py-2 pl-10 lg:pl-56'>Feel free to drop us a comment </p>

                <form ref={form} 
                // onSubmit={sendEmail}
                >
                    <div className='space-y-3'>
                        <input type="text" placeholder="Name" className="input input-bordered min-w-[300px] lg:w-full lg:max-w-xl rounded-none bg-transparent shadow-xl ml-10 lg:ml-56 border border-customYellow" name="name" />
                        <input type="text" placeholder="Email" className="input input-bordered min-w-[300px] lg:w-full lg:max-w-xl rounded-none bg-transparent shadow-xl ml-10 lg:ml-56 border border-customYellow " name="email" />
                        <textarea className="textarea textarea-bordered min-w-[300px] lg:min-w-[575px] min-h-28 rounded-none bg-transparent shadow-xl ml-10 lg:ml-56 border border-customYellow" placeholder="Message" name="message"></textarea>
                    </div>
                    <button className='bg-lightBtn hover:bg-darkBtn text-white font-bold px-5 py-2 text-lg ml-56 flex justify-center items-center gap-x-3 mt-2' type='submit'>Send <FiSend className='text-lg' />
                    </button>
                </form>

            </div>

            <div className='hidden lg:block bg-customYellow min-h-[400px] w-60 left-5 lg:w-80 relative  md:left-44 top-6 '>
                <h1 className='text-center font-bold text-royalBlue pt-7 text-2xl'>Contact Information</h1>

                <div className='p-5 space-y-4'>
                    <h1 className='flex justify-start text-royalBlue items-center gap-x-4 text-lg font-medium'><IoLocation className='text-royalBlue text-3xl' />Dhaka, Bangladesh </h1>
                    <h1 className='flex justify-start text-royalBlue items-center gap-x-4 text-lg font-medium'><BiMessageSquareDetail className='text-royalBlue text-2xl' />librabyte@gmail.com </h1>
                    <h1 className='flex justify-start text-royalBlue items-center gap-x-4 text-lg font-medium'><FaPhoneAlt className='text-royalBlue text-xl' /> +880 1234567890 </h1>
                    <h1 className='flex justify-start text-royalBlue items-center gap-x-4 text-lg font-medium'><BsBrowserChrome className='text-royalBlue text-xl' /> www.librabyte.com </h1>
                </div>
                <Image className='max-h-36' src={img} height={200} width={400} alt='Location' />

            </div>
        </div>
    );
};

// export default ContactUs;

export default dynamic(() => Promise.resolve(ContactUs), {ssr: false})