import PrivateRoute from "@/components/auth/PrivateRoute";
import NavigationBar from "@/components/shared/NavigationBar/NavigationBar";
import React from "react";

const BlogLayout = ({ children }) => {
    return (
        <div>
            <PrivateRoute>
            <NavigationBar />
            {children}
            </PrivateRoute>
        </div>
    );
};

export default BlogLayout;
