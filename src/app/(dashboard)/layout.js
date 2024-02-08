import LeftSideMenu from "@/components/Dashboard/AdminDashboard/LeftSideMenu/LeftSideMenu";
import FloatingProfile from "@/components/Dashboard/UserDashboard/ProfileDashBoard/FloatingProfile";

const DashboardLayout = ({ children }) => {
    return (
        <div className="">
            <div className="lg:grid lg:grid-cols-12">

            <div className="lg:col-span-2 hidden lg:block">

                <div className="lg:bg-royalBlue lg:h-full lg:fixed  lg:bg-bgTexture">
                <LeftSideMenu />
                </div>
                <div className="hidden lg:block lg:bg-royalBlue w-full"></div>

            </div>

            <div className="lg:hidden block">
                <FloatingProfile />
            </div>
                
                
                {/* children */}
                <div className="lg:col-span-10  bg-bgTexture">
                {children}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
