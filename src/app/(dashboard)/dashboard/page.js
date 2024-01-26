import AdminDashboard from '@/components/Dashboard/AdminDashboard/AdminDashboard';


const Dashboard = () => {
    return (
        <div>
         
            {/* {
                isAdmin ?

                 <AdminDashboard></AdminDashboard> 
                :
                 <UserDashboard></UserDashboard>

            } */}

           
            <AdminDashboard></AdminDashboard>
        </div>
      
    );
};

export default Dashboard;