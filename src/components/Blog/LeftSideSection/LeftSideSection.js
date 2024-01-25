import Categories from "./Categories/Categories";
import RecommendBooks from "./RecommendBooks/RecommedBooks";
import Search from "./Search/Search";
import TopPost from "./TopPost/TopPost";


const LeftSideSection = () => {
    return (
        <div>
            <Search />
            <div className="hidden sm:block">
            <Categories />
            </div>
            <TopPost />
            <RecommendBooks />
        </div>
    );
};

export default LeftSideSection;