import React from 'react';
import AnalyticsCard from './AnalyticsCard/AnalyticsCard';

const TeamAnalytics = () => {
    return (
        <div className='bg-white mt-5 drop-shadow-md   md:rounded-md p-4'>
            <div>
                <h1 className='text-center font-semibold pb-4 lg:text-xl '>Team Analytics</h1>
            </div>
            <AnalyticsCard></AnalyticsCard>
            <AnalyticsCard></AnalyticsCard>
            <AnalyticsCard></AnalyticsCard>
            <AnalyticsCard></AnalyticsCard>
        </div>
    );
};

export default TeamAnalytics;