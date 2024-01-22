import Categories from "./Categories/Categories";
import Recommended from "./Recommended/Recommended";
import RightBar from "./RightBar/RightBar";

const MiddleSection = () => {
    return (
        <div >
            <div  className="bg-slate-100 mt-3 p-3  ml-3 grid grid-cols-4">
                <div className="col-span-3">
                    <Recommended ></Recommended>
                   <Categories></Categories>
                </div>
                <div>
                    <RightBar></RightBar>
                </div>
            </div>
        </div>
    );
};

export default MiddleSection;