"use client"

import { AuthContext } from '@/app/Context/AuthProvider';
import Image from 'next/image';
// components/NGODonate.jsx
import React, { useContext } from 'react';


const NGODonate = () => {

    const { user } = useContext(AuthContext);

    // image hosting api
    const image_hosting_key = "a4ccb3a63f667b950886af818162e9e1";
    const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;



    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const bookDetails = {
            bookname: form.bookname.value,
            author: form.author.value,
            description: form.description.value,
            condition: form.condition.value,
            category: form.category.value,
            name: form.name.value,
            email: form.email.value,
            note: form.note.value,
            photo: form.photo.value


        };
        console.log(bookDetails);
    }

    return (
        <div className='m-4 shadow-xl p-16'>
            <h1 className='text-3xl font-semibold'>Enter Your Book Details Below</h1>
            <p className='text-md text-red-700 font-medium'>All fields are required *</p>

            <form onSubmit={handleSubmit}>

                <div className='flex justify-center items-start gap-x-5'>
                    <div className='w-1/2'>
                        <h1 className='my-5 text-lg font-semibold'>Book Information :</h1>
                        <div className="mb-4">
                            <label className=" text-sm font-medium text-gray-700">Book Name</label>
                            <input className='w-full  border rounded-md p-2' type="text" name="bookname" required />
                        </div>

                        <div className="mb-4">
                            <label className=" text-sm font-medium text-gray-700">Author Name</label>
                            <input className='w-full  border rounded-md p-2' type="text" name="author" required />
                        </div>

                        <div className="mb-4">
                            <label className=" text-sm font-medium text-gray-700">Book Description</label>
                            <input className='w-full  border rounded-md p-2' type="text" name="description" required />
                        </div>
                        <div className='flex justify-center items-center gap-x-5'>

                            <div className="mb-4 w-1/2">
                                <label className=" text-sm font-medium text-gray-700">Overall Condition</label>
                                <select className="select select-bordered w-full max-w-xs" name='condition' required>
                                    <option disabled selected>Select one please</option>
                                    <option>Very Good</option>
                                    <option>Good</option>
                                    <option>Usual</option>
                                    <option>Bad</option>
                                    <option>Very Bad</option>
                                </select>
                            </div>
                            <div className="mb-4 w-1/2">
                                <label className=" text-sm font-medium text-gray-700">Book Category</label>
                                <select className="select select-bordered w-full max-w-xs" name='category' required>
                                    <option disabled selected>Select one please </option>
                                    <option>Science Fiction</option>
                                    <option>Mystry</option>
                                    <option>Fantasy</option>
                                    <option>Self-help</option>
                                </select>
                            </div>

                        </div>
                    </div>
                    <div className='w-1/2'>
                        <h1 className='my-5 text-lg font-semibold'>Your Parsonal Information : </h1>
                        <div className="my-4">
                            <label className=" text-sm font-medium text-gray-700">Your Name</label>
                            <input className='w-full  border rounded-md p-2' type="text" name="name" defaultValue={user?.displayName} required />
                        </div>

                        <div className="mb-4">
                            <label className=" text-sm font-medium text-gray-700">Your Email</label>
                            <input className='w-full  border rounded-md p-2' type="email" name="email" defaultValue={user?.email} required />
                        </div>

                        <div className="mb-4">
                            <label className=" text-sm font-medium text-gray-700">Notes From You</label>
                            <input className='w-full  border rounded-md p-2' type="text" name="note" required />
                        </div>

                        <div>
                            <label className=" text-sm font-medium text-gray-700"> Your book image </label>
                            <input
                                type='file'
                                className=" file-input-bordered file-input w-full "
                                name='photo' />
                            <br />
                        </div>
                    </div>
                </div>


                <div className="flex justify-center">
                    <button className='bg-oliveGreen text-white px-16 py-2 rounded-md my-5 flex justify-center' type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default NGODonate;

