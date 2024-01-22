import AdminMenu from "./AdminMenu/AdminMenu";
import Logo from "./Logo/Logo";


const LeftSideMenu = () => {
    return (
        <div className='bg-[#EFEDE1]  p-10'>

                <Logo></Logo>
                <AdminMenu></AdminMenu>

        </div>
    );
};

export default LeftSideMenu;