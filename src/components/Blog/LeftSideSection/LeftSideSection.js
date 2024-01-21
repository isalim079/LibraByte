import Categories from "./Categories/Categories";
import RecommendBooks from "./RecommendBooks/RecommedBooks";
import Search from "./Search/Search";
import TopPost from "./TopPost/TopPost";


const LeftSideSection = () => {
    return (
        <div>
            <Search />
            <Categories />
            <TopPost />
            <RecommendBooks />
        </div>
    );
};

export default LeftSideSection;