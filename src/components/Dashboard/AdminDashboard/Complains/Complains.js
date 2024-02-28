import useAxiosPublic from "@/lib/hooks/useAxiosPublic";

const Complains = () => {
    const [complains, setComplains] = useState([]);
    const axiosPublic = useAxiosPublic();

    useEffect(() => {
        axiosPublic
            .get("http://localhost:5000/complain/v1")
            .then((res) => {
                setComplains(res.data);
            })
            .catch((error) => {
                console.log("error getting complains", error);
            });
    }, []);


    return (
        <div>
            {complains.map((complain)=>(
                <div key={complain._id}>
                    <h1>{complain.complain}</h1>
                </div>
            ))}
        </div>
    );
};

export default Complains;