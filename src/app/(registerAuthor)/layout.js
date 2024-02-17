import NavigationBar from "@/components/shared/NavigationBar/NavigationBar";


const registerAuthorLayout = ({children}) => {
    return (
        <div>
            <NavigationBar />
            {children}
        </div>
    );
};

export default registerAuthorLayout;