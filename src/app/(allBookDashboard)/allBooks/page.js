import Header from '@/components/AllBookDashboard/Header/Header';
import MiddleSection from '@/components/AllBookDashboard/MiddleSction/MiddleSection';
import React from 'react';

const Default = () => {
    return (
        <div className='overflow-x-hidden'>
            <main className='bg-slate-100 '>
        <Header/>
        <div >
          <MiddleSection></MiddleSection>
        </div>
      </main>
        </div>
    );
};

export default Default;