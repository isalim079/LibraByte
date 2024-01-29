import ManageBook from '@/components/Dashboard/AdminDashboard/RightSideContent/ManageBook/ManageBook';
import Link from 'next/link';
import React from 'react';

const ManageBooks = () => {
    return (
        <div className='bg-white p-8 mt-5 drop-shadow-lg rounded-md'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-semibold mb-5'>Manage Books</h1>
                <Link href="/dashboard/manage-books" className="bg-oliveGreen text-white px-3 py-1 rounded-lg drop-shadow-md hover:bg-darkOliveGreen hover:cursor-pointer transition-all duration-300 ease-in-out hover:drop-shadow-2xl hover:text-white">View All »</Link>
            </div>

            <ManageBook></ManageBook>

        </div>
    );
};

export default ManageBooks;