"use client"

import { AuthContext } from '@/app/Context/AuthProvider';
// components/NGODonate.jsx
import React, { useContext } from 'react';


const NGODonate = () => {

    const { user } = useContext(AuthContext);


    
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const bookDetails = {
            name: form.name.value,
            author: form.author.value,
            genre: form.genre.value,
            // Add more fields as needed
        };
        console.log(bookDetails);
    }

    return (
        <div className='m-4 shadow-xl p-16'>
            <h1 className='text-3xl font-semibold'>Enter Your Book Details Below</h1>
            <p className='text-md text-red-700 font-medium'>All fields are required *</p>

            <form  onSubmit={handleSubmit}>

                <div className='flex justify-center items-start gap-x-5'>
                    <div className='w-1/2'>
                        <h1 className='my-5 text-lg font-semibold'>Book Information :</h1>
                        <div className="mb-4">
                            <label className=" text-sm font-medium text-gray-700">Book Name</label>
                            <input className='w-full  border rounded-md p-2' type="text" name="name" required />
                        </div>

                        <div className="mb-4">
                            <label className=" text-sm font-medium text-gray-700">Author Name</label>
                            <input className='w-full  border rounded-md p-2' type="text" name="author" required />
                        </div>

                        <div className="mb-4">
                            <label className=" text-sm font-medium text-gray-700">Book Description</label>
                            <input className='w-full  border rounded-md p-2' type="text" name="genre" required />
                        </div>
                        <div className='flex justify-center items-center gap-x-5'>

                            <div className="mb-4 w-1/2">
                                <label className=" text-sm font-medium text-gray-700">Overall Condition</label>
                                <select className="select select-bordered w-full max-w-xs" required>
                                    <option disabled selected>Select one please</option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
                                </select>
                            </div>
                            <div className="mb-4 w-1/2">
                                <label className=" text-sm font-medium text-gray-700">Book Category</label>
                                <select className="select select-bordered w-full max-w-xs" required>
                                    <option disabled selected>Select one please </option>
                                    <option>Han Solo</option>
                                    <option>Greedo</option>
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
                            <input className='w-full  border rounded-md p-2' type="email" name="author" defaultValue={user?.email} required />
                        </div>

                        <div className="mb-4">
                            <label className=" text-sm font-medium text-gray-700">Notes From You</label>
                            <input className='w-full  border rounded-md p-2' type="text" name="genre" required />
                        </div>
                    </div>
                </div>


                <button className='bg-blue-500 text-white px-4 py-2 rounded-md' type="submit">Submit</button>
            </form>
        </div>
    );
};

export default NGODonate;

