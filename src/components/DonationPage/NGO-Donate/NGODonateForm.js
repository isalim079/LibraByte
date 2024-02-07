
"use-client"
// components/NGODonateForm.jsx
import React from 'react';

const NGODonateForm = ({ onSubmit }) => {
    return (
        <form onSubmit={onSubmit}>
            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Book Name</label>
                <input className='w-full border rounded-md p-2' type="text" name="name" required />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Author</label>
                <input className='w-full border rounded-md p-2' type="text" name="author" required />
            </div>

            <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Genre</label>
                <input className='w-full border rounded-md p-2' type="text" name="genre" required />
            </div>

            <button className='bg-blue-500 text-white px-4 py-2 rounded-md' type="submit">Submit</button>
        </form>
    );
};

export default NGODonateForm;
