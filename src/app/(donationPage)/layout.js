

import Footer from '@/components/shared/Footer/Footer';
import NavigationBar from '@/components/shared/NavigationBar/NavigationBar';
import React from 'react';

const DonationLayout = ({children}) => {
    return (
        <div>
            <NavigationBar />
            {children}
            <Footer />
        </div>
    );
};

export default DonationLayout;