import React from 'react';
import AnalyticsChart from './AnalyticsChart/AnalyticsChart';
import TeamAnalytics from './TeamAnalytics/TeamAnalytics';

const Analytics = () => {
    return (
        <div className='grid mt-7 grid-cols-1 md:grid-cols-12 md:gap-2 lg:grid-cols-12 lg:gap-3'>

        <div className='md:col-span-8 lg:col-span-9'>
            {/* <AnalyticsChart></AnalyticsChart> */}
        </div>

        <div className='md:col-span-4 lg:col-span-3'>
            <TeamAnalytics></TeamAnalytics>
        </div>
    </div>
    );
};

export default Analytics;