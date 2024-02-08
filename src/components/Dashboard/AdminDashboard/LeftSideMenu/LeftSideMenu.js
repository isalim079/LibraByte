import Logo from "./Logo/Logo";
import AdminMenu from "./AdminMenu/AdminMenu";

const LeftSideMenu = () => {
    return (
        <div>
            <div className="  p-10 min-h-screen">
                <Logo></Logo>
                <AdminMenu></AdminMenu>
            </div>
        </div>
    );
};

export default LeftSideMenu;
