import { FaHome } from "react-icons/fa";
import { SiPolymerproject } from "react-icons/si";
import { BiSolidMessage } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { FaUser } from "react-icons/fa6";
import { MdReportProblem } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import Link from "next/link";

const AdminMenu = () => {
    return (
        <div>
            {/* <h1 className='md:mt-11 text-[17px]'>Dashboard home</h1> */}



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
                        <FaUser className="text-xl" /> Users
                    </Link>
                </li>

                {/* divider */}
                <div className="divider my-2"></div>

                <li className="cursor-pointer transition-all duration-300 ease-in-out hover:bg-darkLightWhite hover:py-2 hover:px-3 hover:rounded-md">
                    <div className="flex items-center gap-2">
                        <SiPolymerproject className="text-xl" /> Projects
                    </div>
                </li>

                {/* divider */}
                <div className="divider my-2"></div>
                <li className="cursor-pointer transition-all duration-300 ease-in-out hover:bg-darkLightWhite hover:py-2 hover:px-3 hover:rounded-md">
                    <div className="flex items-center gap-2">
                        <BiSolidMessage className="text-xl" /> Message
                    </div>
                </li>

                {/* divider */}
                <div className="divider my-2"></div>
                <li className="cursor-pointer transition-all duration-300 ease-in-out hover:bg-darkLightWhite hover:py-2 hover:px-3 hover:rounded-md">
                    <div className="flex items-center gap-2">
                        <SlCalender className="text-xl" /> Events
                    </div>
                </li>

                {/* divider */}
                <div className="divider my-2"></div>
                <li className="cursor-pointer transition-all duration-300 ease-in-out hover:bg-darkLightWhite hover:py-2 hover:px-3 hover:rounded-md">
                    <div className="flex items-center gap-2">
                        <MdReportProblem className="text-xl" /> Reports
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

export default AdminMenu;