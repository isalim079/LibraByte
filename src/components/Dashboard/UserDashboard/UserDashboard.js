import LeftSideUserMenu from "./LeftSideMenu/LeftSideUserMenu";
import RightSideUserContent from "./RightSideContent/RightSideUserContent";


const UserDashboard = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12'>

                <div className='md:col-span-3 lg:col-span-2'>
                    <LeftSideUserMenu></LeftSideUserMenu>
                </div>

                <div className='md:col-span-9 lg:col-span-10'>
                    <RightSideUserContent></RightSideUserContent>
                </div>
            </div>
        </div>
    );
};

export default UserDashboard;