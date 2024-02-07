import TopBooks from "../TopBooks/TopBooks";
import Categories from "./Categories/Categories";
import Recommended from "./Recommended/Recommended";
import RightBar from "./RightBar/RightBar";

const MiddleSection = () => {
    return (
        <div className="overflow-x-hidden" >
            <div  className="bg-bgTexture mt-1 md:mt-3 p-0 md:p-3  ml-3 grid grid-cols-4">
                <div className="col-span-4 lg:col-span-4">
                    <Recommended ></Recommended>
                   {/* <Categories></Categories> */}
                   {/* <TopBooks /> */}
                </div>
                <div className="hidden lg:block">
                    {/* <RightBar></RightBar> */}
                </div>
            </div>
        </div>
    );
};

export default MiddleSection;