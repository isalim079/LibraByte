
import NavigationBar from '@/components/shared/NavigationBar/NavigationBar';
import React from 'react';

const BlogLayout = ({children}) => {
    return (
        <div>
            <NavigationBar />
            {children}
        </div>
    );
};

export default BlogLayout;