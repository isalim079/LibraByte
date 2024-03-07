"use client";
import useAxiosPublic from "@/lib/hooks/useAxiosPublic";
import useComplains from "@/lib/hooks/useComplains";
import toast from "react-hot-toast";
import { FaClock } from "react-icons/fa";
import { IoIosCheckmarkCircle } from "react-icons/io";
import Swal from "sweetalert2";

const Complains = () => {
    const axiosPublic = useAxiosPublic();
    const [complains, refetch] = useComplains();
    
    // const [complains, setComplains] = useState([]);
    // useEffect(() => {
    //     axiosPublic
    //         .get("http://localhost:5000/complains/v1")
    //         .then((res) => {
    //             setComplains(res.data);
    //         })
    //         .catch((error) => {
    //             console.log("error getting complains", error);
    //         });
    // }, []);


    const handleComplain = async (complain) => {
        Swal.fire({
            title: "Want to update complain status?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonColor: "#333D2E",
            cancelButtonColor: "#878783",
            confirmButtonText: "Yes",
            denyButtonText: `Not now`,
        }).then(async (result) => {
            if (result.isConfirmed) {
                console.log(result.isConfirmed);
                const res = await axiosPublic.patch(
                    `/updateComplains/v1/${complain._id}`,
                    {
                        status: "solved"
                    }
                );

                if (res.status === 200) {
                    refetch();
                    toast.success("Issue has been solved")               
                }
            }
        });
       
    }



    return (
        <div>
            {/* {complains.map((complain) => (
                <div key={complain._id} className="card p-4 bg-slate-50">
                    <h1>{complain.complain}</h1>
                </div>
            ))} */}
            <h1 className="text-4xl text-center my-10 font-bold text-royalBlue">lains</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input
                                        type="checkbox"
                                        className="checkbox"
                                    />
                                </label>
                            </th>
                            <th>Username</th>
                            <th>User email</th>
                            <th>See Complains</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* show data dynamically */}
                        {complains.map((complain) => (
                            <tr key={complain._id}>
                                <th>
                                    <label>
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                        />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img
                                                    src={complain?.image}
                                                    alt={complain?.name}
                                                />
                                            </div>
                                        </div>
                                        <div className="font-bold">
                                            {complain?.name}
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {complain?.email}
                                </td>
                                <td>
                                    <button className="hover:shadow-customYellow shadow-2xl  text-2xl hover:text-4xl w-20  transition-all duration-300  "
                                        onClick={() => document.getElementById(`my-modal-${complain._id}`).showModal()}
                                    >👀</button>
                                    <dialog id={`my-modal-${complain._id}`} className="modal modal-bottom sm:modal-middle">
                                        <div className="modal-box">
                                            <div method="dialog">
                                                <button onClick={() => document.getElementById(`my-modal-${complain._id}`).close()} className="btn btn-sm btn-circle btn-ghost text-royalBlue font-extrabold text-2xl absolute right-6 top-6">✕</button>
                                            </div>
                                            <div className="my-6 card">
                                                <h1 className="text-center text-xl font-semibold">Complains of {complain.name}</h1>
                                                <h1 className="min-h-28 my-4">{complain.complain}</h1>
                                            </div>
                                        </div>
                                    </dialog>
                                </td>
                                <td className="">
                                    {complain.status === "solved" ? (
                                        <span className="flex items-center cursor-pointer">
                                            <IoIosCheckmarkCircle /> Solved
                                        </span>
                                    ) : (
                                        <button onClick={()=>handleComplain(complain)} className="btn flex items-center  bg-lightBtn hover:bg-darkBtn px-4 text-white cursor-pointer">
                                            <FaClock /> Pending
                                        </button>

                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Complains;