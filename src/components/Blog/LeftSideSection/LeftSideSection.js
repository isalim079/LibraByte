import Categories from "./Categories/Categories";
import Search from "./Search/Search";
import TopPost from "./TopPost/TopPost";


const LeftSideSection = () => {
    return (
        <div>
            <Search />
            <Categories />
            <TopPost />
        </div>
    );
};

export default LeftSideSection;