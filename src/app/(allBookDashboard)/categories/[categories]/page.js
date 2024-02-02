
import Categories from '@/components/AllBookDashboard/MiddleSction/Categories/Categories';

const CategoriesPage = ({params}) => {

    console.log(params);

    return (
        <div>
            <Categories params={params} />
        </div>
    );
};

export default CategoriesPage;