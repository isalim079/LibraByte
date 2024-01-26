import React from 'react';
import DetailsTable from './DetailsTable/DetailsTable';
import Link from 'next/link';

const ProjectDetsilsTable = () => {
    return (
        <div className='bg-white p-8 mt-5 drop-shadow-lg rounded-md'>
            <div className='flex justify-between items-center'>
                <h1 className='text-2xl font-semibold mb-5'>Manage Books</h1>
                <Link href="dashboard/manage-book" className="bg-green-300 px-3 py-1 rounded-lg drop-shadow-md hover:bg-green-500 hover:cursor-pointer transition-all duration-300 ease-in-out hover:drop-shadow-2xl hover:text-white">View All »</Link>
            </div>

            <DetailsTable></DetailsTable>

        </div>
    );
};

export default ProjectDetsilsTable;