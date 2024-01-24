import { AiOutlineMail } from "react-icons/ai";

const ManageUserDetails = () => {
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
                            <th>Joining Date</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                   
                       
                        <tr>
                            <th>1</th>
                            <td>samin Yasar</td>
                            <td>samin@leader.com</td>
                            <td><AiOutlineMail className="text-xl"></AiOutlineMail> </td>
                            <td>29/01/2024</td>
                            <td>Admin</td>
                            <td><button className="btn bg-green-200 md:px-2 md:py-1 btn-xs">Make Admin</button></td>
                            
                        </tr>
                       
                        <tr>
                            <th>2</th>
                            <td>Jahid Hasan</td>
                            <td>jahid@borovai.com</td>
                            <td><AiOutlineMail className="text-xl"></AiOutlineMail> </td>
                            <td>23/01/2024</td>
                            <td>Admin</td>
                            <td><button className="btn bg-green-200 md:px-2 md:py-1 btn-xs">Make Admin</button></td>
                            
                        </tr>
                        
                        <tr>
                            <th>3</th>
                            <td>Salim Vai</td>
                            <td>salim@legend.com</td>
                            <td><AiOutlineMail className="text-xl"></AiOutlineMail> </td>
                            <td>25/01/2024</td>
                            <td>Admin</td>
                            <td><button className="btn bg-green-200 md:px-2 md:py-1 btn-xs">Make Admin</button></td>
                            
                        </tr>

                        <tr>
                            <th>4</th>
                            <td>Nadira</td>
                            <td>nadira@apu.com</td>
                            <td><AiOutlineMail className="text-xl"></AiOutlineMail> </td>
                            <td>28/01/2024</td>
                            <td>Admin</td>
                            <td><button className="btn bg-green-200 md:px-2 md:py-1 btn-xs">Make Admin</button></td>
                            
                        </tr>

                        <tr>
                            <th>5</th>
                            <td>Nishat</td>
                            <td>nishat@apu.com</td>
                            <td><AiOutlineMail className="text-xl"></AiOutlineMail> </td>
                            <td>26/01/2024</td>
                            <td>Admin</td>
                            <td><button className="btn bg-green-200 md:px-2 md:py-1 btn-xs">Make Admin</button></td>
                            
                        </tr>
                      
                      
                    </tbody>
                    
                </table>
            </div>
        </div>
    );
};

export default ManageUserDetails;