import NavigationBar from "@/components/shared/NavigationBar/NavigationBar";


const SubscriptionPage = ({children}) => {
    return (
        <div>
            <NavigationBar />
            {children}
        </div>
    );
};

export default SubscriptionPage;