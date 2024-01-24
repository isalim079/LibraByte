import Link from 'next/link';
import React from 'react';

const ManageUsersPagination = () => {
    return (
        <div className='flex gap-3'>
            <div>
                <Link href="/dashboard"><button className="btn bg-lightWhite"><span>«</span> Go Dashboard</button></Link>
            </div>
            <div className="join ">
                <button className="join-item btn bg-lightWhite">«</button>
                <button className="join-item btn bg-lightWhite">First Page</button>
                <button className="join-item btn bg-lightWhite">»</button>
            </div>
        </div>
    );
};

export default ManageUsersPagination;