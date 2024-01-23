import React from 'react';
import DetailsTable from './DetailsTable/DetailsTable';

const ProjectDetsilsTable = () => {
    return (
        <div className='bg-white p-8 mt-5 drop-shadow-lg rounded-md'>
            <h1 className='text-2xl font-semibold mb-5'>Projects Overview</h1>

            <DetailsTable></DetailsTable>

        </div>
    );
};

export default ProjectDetsilsTable;