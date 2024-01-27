"use client"

import { FaHome } from "react-icons/fa";
import { FaBlogger } from "react-icons/fa";
import { RxDashboard } from "react-icons/rx";

const useNavigationLInks = () => {
    return (
        [
            { name: "Home", icon: <FaHome />, link: "/" },
            { name: "Blog", icon: <FaBlogger />, link: "/blog" },
            { name: "Dashboard", icon: <RxDashboard />, link: "/dashboard" },
        ]
    );
};

export default useNavigationLInks;