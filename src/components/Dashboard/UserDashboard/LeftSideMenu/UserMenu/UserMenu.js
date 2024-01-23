import { FaHome } from "react-icons/fa";
import { SiPolymerproject } from "react-icons/si";
import { FaUser } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { FaBookReader } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import Link from "next/link";

const UserMenu = () => {
    return (
        <div>
        


            <div className="list-none md:mt-16">

                {/* categories */}
                <li className="cursor-pointer transition-all duration-300 ease-in-out hover:bg-darkLightWhite hover:py-2 hover:px-3 hover:rounded-md">
                    <div className="flex items-center gap-2">
                        <FaHome className="text-xl" /> Dashboard
                    </div>
                </li>

                {/* divider */}
                <div className="divider my-2"></div>
                <li className="cursor-pointer transition-all duration-300 ease-in-out hover:bg-darkLightWhite hover:py-2 hover:px-3 hover:rounded-md">
                    <Link href="dashboard/users" className="flex items-center gap-2">
                        <FaUser className="text-xl" /> My Profile
                    </Link>
                </li>

                {/* divider */}
                <div className="divider my-2"></div>

                <li className="cursor-pointer transition-all duration-300 ease-in-out hover:bg-darkLightWhite hover:py-2 hover:px-3 hover:rounded-md">
                    <div className="flex items-center gap-2">
                        <IoMdAdd className="text-xl" /> Add Book
                    </div>
                </li>
                
                {/* divider */}
                <div className="divider my-2"></div>

                <li className="cursor-pointer transition-all duration-300 ease-in-out hover:bg-darkLightWhite hover:py-2 hover:px-3 hover:rounded-md">
                    <div className="flex items-center gap-2">
                        <FaBookReader className="text-xl" /> My Books
                    </div>
                </li>

            

                {/* divider */}
                <div className="divider my-2"></div>
                
                <li className="cursor-pointer transition-all duration-300 ease-in-out hover:bg-darkLightWhite hover:py-2 hover:px-3 hover:rounded-md">
                    <div className="flex items-center gap-2">
                        <IoSettingsSharp className="text-xl" /> Settings
                    </div>
                </li>


             </div> 


        </div>
    );
};

export default UserMenu;