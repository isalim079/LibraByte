import LeftSideMenu from "@/components/Dashboard/AdminDashboard/LeftSideMenu/LeftSideMenu";

const DashboardLayout = ({ children }) => {
    return (
        <div className="bg-bgTexture">
            <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-1">
                <div className="md:col-span-3 lg:col-span-2 h-screen">
                    <div className="fixed  bg-royalBlue">
                        <LeftSideMenu></LeftSideMenu>
                    </div>
                    <div className="bg-royalBlue md:col-span-3 lg:col-span-2"></div>
                </div>

                <div className="md:col-span-9 lg:col-span-10 px-2 ">
                    {/* <Searchbar></Searchbar>  */}

                    {children}
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
