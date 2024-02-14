import NavigationBar from "@/components/shared/NavigationBar/NavigationBar";


const WishListPage = ({children}) => {
    return (
        <div>
            <NavigationBar />
            {children}
        </div>
    );
};

export default WishListPage;