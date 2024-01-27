
import NavigationBar from '@/components/shared/NavigationBar/NavigationBar';
import React from 'react';

const LoginLayout = ({children}) => {
    return (
        <div>
           <NavigationBar />
            {children}
        </div>
    );
};

export default LoginLayout;