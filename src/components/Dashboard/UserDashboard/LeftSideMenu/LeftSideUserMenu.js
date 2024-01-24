import Logo from "./Logo/Logo";
import UserMenu from "./UserMenu/UserMenu";


const LeftSideUserMenu = () => {
    return (
        <div className='bg-[#EFEDE1]  p-10 min-h-screen'>

                <Logo></Logo>
                <UserMenu></UserMenu>

        </div>
    );
};

export default LeftSideUserMenu;