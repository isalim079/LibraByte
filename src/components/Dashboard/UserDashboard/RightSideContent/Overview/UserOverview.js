import React from 'react';
import EventCard from './Eventcard/EventCard';
import OverViewCard from './OverviewCard/OverViewCard';

const UserOverview = () => {
    return (
        <div className='grid mt-7 grid-cols-1 md:grid-cols-12 md:gap-2 lg:grid-cols-12 lg:gap-3'>

            <div className='md:col-span-8 lg:col-span-9'>
                <OverViewCard></OverViewCard>
            </div>

            <div className='md:col-span-4 lg:col-span-3'>
                <EventCard></EventCard>
            </div>
        </div>
    );
};

export default UserOverview;