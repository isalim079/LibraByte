import Navbar from '@/components/shared/Navbar/Navbar';
import React from 'react';

const BlogLayout = ({children}) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
};

export default BlogLayout;