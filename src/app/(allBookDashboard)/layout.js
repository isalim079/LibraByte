import Sidebar from '@/components/AllBookDashboard/Sidebar/Sidebar';
import React from 'react';

const AllBookLatout = ({children}) => {
    return (
        <div className='overflow-x-hidden'>
          <Sidebar>
            {children}
          </Sidebar>
          
  
        </div>
    );
};

export default AllBookLatout;