import Analytics from "./Analytics/Analytics";
import HeaderText from "./HeaderText/HeaderText";
import Overview from "./Overview/Overview";
import ProjectDetsilsTable from "./ProjectDetsilsTable/ProjectDetsilsTable";
import Searchbar from "./SearchBar/Searchbar";


const RightSideContent = () => {
    return (
        <div className='bg-[#EEF1FF] p-10'>
           
           {/* navbar searchbar  */}
            <Searchbar></Searchbar>
            {/* <hr className="border-[#c8c19e] mt-2"></hr> */}

            {/* header text component  */}
            <HeaderText></HeaderText>

            {/* Dashboard Overview  */}
            <Overview></Overview>

            {/* Website Analytics  */}
            <Analytics></Analytics>

            {/* Projects Details Table  */}
            <ProjectDetsilsTable></ProjectDetsilsTable>


        </div>
    );
};

export default RightSideContent;