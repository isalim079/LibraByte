import NavigationBar from "@/components/shared/NavigationBar/NavigationBar";


const RegisterLayout = ({children}) => {
    return (
        <div>
            <NavigationBar />
            {children}
        </div>
    );
};

export default RegisterLayout;