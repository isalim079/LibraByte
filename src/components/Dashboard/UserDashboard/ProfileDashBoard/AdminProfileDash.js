"use client";

import useBorrowBook from "./useBorrowBook";

const AdminProfileDash = () => {
    const [borrowBooksData, refetch] = useBorrowBook();
    // console.log(borrowBooksData);

    return (
        <div>
            <div>
                <h3 className="text-center text-3xl font-bold font-robotoSlab mt-10 mb-5">
                    Manage borrow status
                </h3>
            </div>

            <div className="overflow-x-auto">
               
                    <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                    />
                                </label>
                            </th>
                            <th>Book Info</th>
                            <th>User Info</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        
                       {
                          borrowBooksData.map(borrow => (
                            <tr key={borrow._id}>
                            <th>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                    />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img
                                                src={borrow?.Book_image}
                                                alt={borrow?.Book_name}
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">
                                            {borrow?.Book_name}
                                        </div>
                                        <div className="text-sm opacity-50">
                                        {borrow?.Book_author}
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">
                                    Desktop Support Technician
                                </span>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">
                                    details
                                </button>
                            </th>
                        </tr>
                          ))
                       }
                        
                    </tbody>
                  
                
                </table>
            </div>
        </div>
    );
};

export default AdminProfileDash;
