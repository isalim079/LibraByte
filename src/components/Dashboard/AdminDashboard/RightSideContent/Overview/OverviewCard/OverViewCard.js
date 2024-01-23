import React from 'react';
import User from './User/User';
import Projects from './Projects/Projects';
import Librarian from './Librarian/Librarian';

const OverViewCard = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-2 lg:grid-cols-3 gap-5'>
            <div>
                <User></User>
            </div>
            <div>
                <Projects></Projects>
            </div>
            <div>
                <Librarian></Librarian>
            </div>

        </div>
    );
};

export default OverViewCard;