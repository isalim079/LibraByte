import Image from 'next/image';
import { HiOutlineBellAlert } from "react-icons/hi2";

const ManageUsersHeader = () => {
    return (
        <div className='flex justify-between items-center bg-gray-100 mt-10 p-6 rounded drop-shadow-lg'>
            <div>
                <h1 className='hidden md:block text-2xl font-semibold'>Manage User</h1>
            </div>
             <div className='flex justify-end items-center gap-4'>
                <div>
                    <input type="text" placeholder="Search here" className="input input-bordered input-sm w-full max-w-xs" />
                </div>
                <div>
                    <HiOutlineBellAlert className="text-2xl" />
                </div>
                <div>
                 

                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <Image alt="Tailwind CSS Navbar component" src="https://i.ibb.co/4MqdjVY/reading.png"
                                width={40}
                                height={40}
                                />
                            </div>
                        </div>
                        
                    </div>


                </div>
            </div>
        </div>
    );
};

export default ManageUsersHeader;