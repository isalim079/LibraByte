import Sidebar from '@/components/AllBookDashboard/Sidebar/Sidebar';
import PrivateRoute from '@/components/auth/PrivateRoute';
import React from 'react';

const AllBookLayout = ({children}) => {
    return (
        <div className='overflow-x-hidden'>
          {/* <PrivateRoute> */}
          <Sidebar>
            {children}
          </Sidebar>
          {/* </PrivateRoute> */}
          
  
        </div>
    );
};

export default AllBookLayout;