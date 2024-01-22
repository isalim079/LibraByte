import HeaderText from "./HeaderText/HeaderText";
import Overview from "./Overview/Overview";
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


        </div>
    );
};

export default RightSideContent;