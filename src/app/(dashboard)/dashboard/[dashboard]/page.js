import ApplicationStatus from '@/components/Dashboard/UserDashboard/ProfileDashBoard/ApplicationStatus';
import React from 'react';

const DashBoardPage = ({params}) => {
    // console.log(params);
    return (
        <div>
            <ApplicationStatus params = {params} />
        </div>
    );
};

export default DashBoardPage;