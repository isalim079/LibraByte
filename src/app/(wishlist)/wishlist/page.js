import Wishlist from '@/components/Wishlist/Wishlist';
import NavigationBar from '@/components/shared/NavigationBar/NavigationBar';
import React from 'react';

const wishlistPage = () => {
    return (
        <div>
            {/* <NavigationBar></NavigationBar> */}
           <Wishlist></Wishlist>
        </div>
    );
};

export default wishlistPage;