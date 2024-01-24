import AdminDashboard from '@/components/Dashboard/AdminDashboard/AdminDashboard';
import React from 'react';

const Dashboard = () => {
    return (
        <div>
            {/* jokhn backend api and jwt verify implement kora ses hoye jabe tokhn ei login kaj korbe   */}
           
            {/* {
                isAdmin ?

                 <AdminDashboard></AdminDashboard> 
                :
                 <UserDashboard></UserDashboard>

            } */}

            {/* User dashboard check korar jonno testuserdashboard name route create kora ace. test sese ei route delete kora hobe  */}

            <AdminDashboard></AdminDashboard>
            
        </div>
    );
};

export default Dashboard;