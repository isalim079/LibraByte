
import Logo from "./Logo/Logo";
import AdminMenu from "./AdminMenu/AdminMenu";


const LeftSideMenu = () => {
    return (
        <div className='bg-[#EFEDE1]  p-10 min-h-screen'>

                <Logo></Logo>
                <AdminMenu></AdminMenu>

        </div>
    );
};

export default LeftSideMenu;