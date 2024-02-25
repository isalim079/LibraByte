import React from 'react';
import ManageUsersHeader from './ManageUsersHeader/ManageUsersHeader';
import ManageUserDetails from './ManageUserDetails/ManageUserDetails';
import ManageUsersPagination from './ManageUsersPagination/ManageUsersPagination';

const Manageusers = () => {
    return (
        <div className='md:w-[1200px] mx-auto'>
            {/* <ManageUsersHeader></ManageUsersHeader> */}


            {/* user table  */}
            <div className='mt-8'>
                <ManageUserDetails></ManageUserDetails>
            </div>

            {/* user pagination  */}
            <div className='mt-8'>
                <ManageUsersPagination></ManageUsersPagination>
            </div>
        </div>
    );
};

export default Manageusers;