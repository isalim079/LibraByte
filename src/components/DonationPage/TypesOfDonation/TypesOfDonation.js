import Image from 'next/image';
import React from 'react';

const TypesOfDonation = () => {
    return (
        <div className='2xl:mx-[155px] xl:mx-[140px] lg:mx-[110px] md:mx-[80px] mb-10 lg:mb-28'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='w-full md:w-1/2 mb-10'>
                    <Image src="https://i.postimg.cc/fLnhtbsy/bookdonate.jpg" height="300" width="500" alt='Donation Book Image'></Image>
                </div>
                <div>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold '>We are waiting for your Donation</h1>
                    <p>Your given books will be stored in our library to </p>
                </div>
            </div>
            <div className='flex flex-col md:flex-row-reverse justify-between items-center'>
                <div className='w-full md:w-1/2 mb-10 '>
        
                        <Image className='max-h-[300px]' src="https://i.postimg.cc/Ss9Bg6yk/book-shop-11.jpg" height="200" width="500" alt='Donation Book Image'></Image>
                    
                </div>
                    <div>
                        <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold '>We are waiting for your Donation</h1>
                        <p>Your given books will be stored in our library to </p>
                    </div>
            </div>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='w-full md:w-1/2 mb-10'>
                    <Image src="https://i.postimg.cc/YCF7jBWd/The-children-suffering-by-poverty-Help-for-education.jpg" height="300" width="500" alt='Donation Book Image'></Image>
                </div>
                <div>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-bold '>We are waiting for your Donation</h1>
                    <p>Your given books will be stored in our library to </p>
                </div>
            </div>
        </div>
    );
};

export default TypesOfDonation;