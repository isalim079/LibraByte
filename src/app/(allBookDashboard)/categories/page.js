import Header from '@/components/AllBookDashboard/Header/Header';
import Categories from '@/components/AllBookDashboard/MiddleSction/Categories/Categories';
import Recommended from '@/components/AllBookDashboard/MiddleSction/Recommended/Recommended';
import React from 'react';

const Categorypage = () => {
    return (
        <div className='ml-5'>
            {/* <Categories></Categories> */}
            <div className="overflow-x-hidden" >
            <div  className="bg-slate-100 mt-1 md:mt-3 p-0 md:p-3  ml-3 grid grid-cols-4">
                <div className="col-span-4 lg:col-span-4">
                    {/* <Recommended ></Recommended> */}
                   <Categories></Categories>
                </div>
                <div className="hidden lg:block">
                    {/* <RightBar></RightBar> */}
                </div>
            </div>
        </div>
        </div>
    );
};

export default Categorypage;