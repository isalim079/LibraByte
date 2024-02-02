
import HeaderTextUser from "./HeaderText/HeaderTextUser";
import UserOverview from "./Overview/UserOverview";
import ProjectDetsilsTable from "./ProjectDetsilsTable/ProjectDetsilsTable";
import Searchbar from "./SearchBar/Searchbar";


const RightSideUserContent = () => {
    return (
        <div className='bg-[#EEF1FF] p-10'>
           
           {/* navbar searchbar  */}
            {/* <Searchbar></Searchbar> */}
            {/* <hr className="border-[#c8c19e] mt-2"></hr> */}

            {/* header text component  */}
            <HeaderTextUser></HeaderTextUser>

            {/* Dashboard Overview  */}
            <UserOverview></UserOverview>

            

            {/* Projects Details Table  */}
            <ProjectDetsilsTable></ProjectDetsilsTable>


        </div>
    );
};

export default RightSideUserContent;