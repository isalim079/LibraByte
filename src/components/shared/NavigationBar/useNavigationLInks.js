"use client";

import { FaHome } from "react-icons/fa";
import { FaBlogger } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const useNavigationLInks = () => {
    return [
        { name: "Home", icon: <FaHome />, link: "/" },
        { name: "Blog", icon: <FaBlogger />, link: "/blog" },
        { name: "Dashboard", icon: <MdDashboard />, link: "/dashboard" },
    ];
};

export default useNavigationLInks;
