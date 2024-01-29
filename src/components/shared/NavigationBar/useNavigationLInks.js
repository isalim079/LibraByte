"use client";

import { FaHome } from "react-icons/fa";
import { FaBlogger } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { ImBooks } from "react-icons/im";

const useNavigationLInks = () => {
    return [
        { name: "Home", icon: <FaHome />, link: "/" },
        { name: "Blog", icon: <FaBlogger />, link: "/blog" },
        { name: "Dashboard", icon: <MdDashboard />, link: "/dashboard" },
        { name: "Books", icon: <ImBooks />, link: "/allBooks" },
    ];
};

export default useNavigationLInks;
