import { getAllUsers } from "@/components/utils/ManageUser/getAllUsers";
import { AiOutlineMail } from "react-icons/ai";

const ManageUserDetails = async () => {

    const allUsers = await getAllUsers();

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table table-xs">
                    <thead>
                        <tr className='bg-lightWhite text-black text-[14px] drop-shadow-md'>
                            <th>#</th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Send Email</th>
                            <th>Join Date</th>
                            <th>Subscription</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allUsers.map(user => <>
                                <tr key={user._id}>
                                    <th>1</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td><AiOutlineMail className="text-xl"></AiOutlineMail> </td>
                                    <td>29/01/2024</td>
                                    <td>{user.subscription}</td>
                                    <td>{user.role}</td>
                                    <td>
                                        <button className="btn bg-green-200 md:px-2 md:py-1 btn-xs mr-1">Make Admin</button>
                                        <button className="btn bg-red-400 md:px-2 md:py-1 hover:bg-red-600 hover:text-white  btn-xs">Delete</button>
                                    </td>

                                </tr>
                            </>)
                        }


                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageUserDetails;