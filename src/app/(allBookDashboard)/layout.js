import Sidebar from '@/components/AllBookDashboard/Sidebar/Sidebar';
import React from 'react';

const AllBookLayout = ({children}) => {
    return (
        <div className='overflow-x-hidden'>
          <Sidebar>
            {children}
          </Sidebar>
          
  
        </div>
    );
};

export default AllBookLayout;