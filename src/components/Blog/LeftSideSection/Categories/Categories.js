const Categories = () => {
    return (
        <div className="mt-8 bg-royalBlue text-slate-400 p-8 rounded-md drop-shadow-lg max-h-[370px]">
            <div>
                <h2 className="text-2xl font-semibold text-slate-400">
                    Categories
                </h2>
                <div className="border-2 border-customYellow w-32 mt-1 mb-5"></div>
            </div>
            <div className="list-none">

                {/* categories */}
                <li className="cursor-pointer transition-all duration-300 ease-in-out hover:bg-customYellow hover:py-2 hover:px-3 hover:rounded-md hover:text-royalBlue hover:text-center">
                    Thriller
                </li>

                {/* divider */}
                <div className="divider my-2"></div>
                <li className="cursor-pointer transition-all duration-300 ease-in-out hover:bg-customYellow hover:py-2 hover:px-3 hover:rounded-md hover:text-royalBlue hover:text-center">
                    Sci-Fi
                </li>

                {/* divider */}
                <div className="divider my-2"></div>
                <li className="cursor-pointer transition-all duration-300 ease-in-out hover:bg-customYellow hover:py-2 hover:px-3 hover:rounded-md hover:text-royalBlue hover:text-center">
                    Horror
                </li>

                {/* divider */}
                <div className="divider my-2"></div>
                <li className="cursor-pointer transition-all duration-300 ease-in-out hover:bg-customYellow hover:py-2 hover:px-3 hover:rounded-md hover:text-royalBlue hover:text-center">
                    Comics
                </li>

                {/* divider */}
                <div className="divider my-2"></div>
                <li className="cursor-pointer transition-all duration-300 ease-in-out hover:bg-customYellow hover:py-2 hover:px-3 hover:rounded-md hover:text-royalBlue hover:text-center">
                    Noble
                </li>
            </div>
        </div>
    );
};

export default Categories;
