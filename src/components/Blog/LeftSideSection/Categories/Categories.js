const Categories = () => {
    return (
        <div className="mt-8 bg-lightWhite p-8 rounded-md">
            <div>
                <h2 className="text-2xl font-semibold text-oliveGreen">
                    Categories
                </h2>
                <div className="border-2 border-oliveGreen w-32 mt-1 mb-5"></div>
            </div>
            <div className="list-none">

                {/* categories */}
                <li className="cursor-pointer transition-all duration-300 ease-in-out hover:bg-darkLightWhite hover:py-2 hover:px-3 hover:rounded-md">
                    Thriller
                </li>

                {/* divider */}
                <div className="divider my-2"></div>
                <li className="cursor-pointer transition-all duration-300 ease-in-out hover:bg-darkLightWhite hover:py-2 hover:px-3 hover:rounded-md">
                    Sci-Fi
                </li>

                {/* divider */}
                <div className="divider my-2"></div>
                <li className="cursor-pointer transition-all duration-300 ease-in-out hover:bg-darkLightWhite hover:py-2 hover:px-3 hover:rounded-md">
                    Horror
                </li>

                {/* divider */}
                <div className="divider my-2"></div>
                <li className="cursor-pointer transition-all duration-300 ease-in-out hover:bg-darkLightWhite hover:py-2 hover:px-3 hover:rounded-md">
                    Comics
                </li>

                {/* divider */}
                <div className="divider my-2"></div>
                <li className="cursor-pointer transition-all duration-300 ease-in-out hover:bg-darkLightWhite hover:py-2 hover:px-3 hover:rounded-md">
                    Noble
                </li>
            </div>
        </div>
    );
};

export default Categories;
