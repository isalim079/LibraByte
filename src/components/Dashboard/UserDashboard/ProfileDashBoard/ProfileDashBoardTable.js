

const ProfileDashBoardTable = () => {
    const { user } = useContext(AuthContext);

    const axiosPublic = useAxiosPublic()

    const [findUserBorrow, setFindUserBorrow] = useState([])


    useEffect(() => {
        axiosPublic.get('/addborrow/v1')
        .then(res => {
            const borrowData =  res.data
            const filteredData =  borrowData.filter(borrow => borrow?.borrower_email === user?.email)

            setFindUserBorrow(filteredData)

        })
        .catch(error => {
            console.log(error);
        })
    }, [user])
    console.log(findUserBorrow);

    return (
        <div>
            
        </div>
    );
};

export default ProfileDashBoardTable;