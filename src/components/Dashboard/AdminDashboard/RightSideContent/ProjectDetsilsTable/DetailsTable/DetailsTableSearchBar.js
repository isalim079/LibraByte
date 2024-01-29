import toast from "react-hot-toast";

const DetailsTableSearchBar = () => {

    const handleSearch = (e) => {

        e.preventDefault();
        // console.log(e.target.name.value)
        // const getValue = e.target.name.value;
        // e.target.name.value = ''
        // setSearch(getValue)
        // let items = []
        // const value = getValue.toLowerCase()
        // filteredMeals.map(meal => {
        //     const mealTitle = meal.title.toLowerCase();
        //     console.log(mealTitle.includes(value))
        //     const filtered = mealTitle.includes(value)
        //     if (filtered) {
        //         items.push(meal)
        //     }
        // })

        // if (items?.length > 0) {
        //     setFilteredMeals(items)
        // } else {
        //     toast.success("not found")
        //     setFilteredMeals(meals)
        // }

    }

    return (
        <div className="px-5 mt-5 lg:mt-16 flex gap-5">
            <div className="grow">
                <form  className=" flex">
                    <input
                        className=" rounded-md grow  bg-slate-100 px-3 outline-none py-3"
                        type="text"
                        name="name"
                        placeholder="Search..."
                    />
                    <button
                        type="submit"
                        className=" py-3 px-6 rounded-md bg-oliveGreen text-lightWhite font-semibold"
                    >
                        Search
                    </button>
                </form>
            </div>
            <div>
                <select
                    // onChange={(e) => setCategory(e.target.value)}
                    className="px-3 py-3 rounded-md bg-slate-100"
                    name=""
                    id=""
                >
                    <option value="">All Category</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                </select>
            </div>
            <div>
                <select
                    // onChange={(e) => setPrice(e.target.value)}
                    className="px-3 rounded-md py-3 bg-slate-100"
                    name=""
                    id=""
                >
                    <option value="">Price</option>
                    <option value="asc">Low - High</option>
                    <option value="desc">High - Low</option>
                </select>
            </div>
        </div>
    );
};

export default DetailsTableSearchBar;
