import React from 'react';
import LeftSideMenu from './LeftSideMenu/LeftSideMenu';
import RightSideContent from './RightSideContent/RightSideContent';

const AdminDashboard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-12'>

            <div className='md:col-span-2'>
                <LeftSideMenu></LeftSideMenu>
            </div>

            <div className='md:col-span-10'>
                <RightSideContent></RightSideContent>
            </div>
        </div>
    );
};

export default AdminDashboard;