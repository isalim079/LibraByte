"use client";
import { AuthContext } from '@/app/Context/AuthProvider';
import useAxiosPublic from '@/lib/hooks/useAxiosPublic';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import ReactStars from 'react-rating-stars-component';



const ReviewNComplain = () => {
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();

    const handleRatingChange = newRating => setRating(newRating);

    const handleReviewSubmit = () => {
        // Clear the input fields
        setRating(0);
        setReviewText('');
        toast.success('Thanks for your feedback!')

        // Close the modal
        document.getElementById('my_modal_1').close();
        
    };



    
    const handleComplain =async (e) => {

        setReviewText('');
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = await user?.displayName;
        const email = await user?.email;
        const image = await user?.photoURL;
        const complain = form.get("postComplain");

        const complainData = {
            name,
            email,
            image,
            complain
        };

        /* if the user available then he can post */
        if (user) {
            axiosPublic
                .post("/complain/v1", complainData)
                .then((res) => {
                    console.log(res.data);
                    if (res.data) {
                        toast.success("thanks for contributing to our improvement!");
                        refetch();
                        e.target.reset();
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
        /* otherwise he will redirect to login page */
            toast.error("login first!");
            // setTimeout(() => {
            //     router.push("/login");
            // }, 1000);
        }

        // toast.success('thanks for contributing to our improvement!')

        document.getElementById('my_modal_2').close();
    }



    return (
        <div className='flex flex-row justify-between mx-4 md:mx-10 lg:mx-40 my-10'>
            <button className="btn px-10 bg-teal-500 hover:bg-teal-600 hover:shadow-lightBtn hover:shadow-2xl text-white" onClick={() => document.getElementById('my_modal_1').showModal()}>Reviews</button>
            <dialog id='my_modal_1' className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-2xl text-teal-600">✕</button>
                    </form>
                    <h3 className="font-bold text-lg text-center mt-4">Share Your Feedback</h3>
                    <div className='flex flex-row gap-2 my-2'>
                        <h1 className='mt-2'>Rating Us: </h1>
                        <ReactStars
                            count={5}
                            onChange={handleRatingChange}
                            size={24}
                            value={rating}
                        />
                    </div>
                    <textarea
                        className='w-full h-16'
                        value={reviewText}
                        onChange={e => setReviewText(e.target.value)}
                        placeholder="Write your review here..."
                    />
                    <div className="modal-action">
                        <button onClick={handleReviewSubmit} type="submit" className="btn bg-teal-500 hover:bg-teal-600 text-base normal-case text-white px-4">Submit</button>
                    </div>

                </div>
            </dialog>
            <button className="btn  px-10 bg-teal-500 hover:bg-teal-600 hover:shadow-lightBtn hover:shadow-2xl text-white" onClick={() => document.getElementById('my_modal_2').showModal()}>Complains</button>
            <dialog id='my_modal_2' className="modal">
                <form onSubmit={handleComplain} className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-2xl text-teal-600">✕</button>
                    </form>
                    <h3 className="font-bold text-lg text-center mt-4">Complain Box</h3>
                    <textarea
                        className='w-full h-16'
                        value={reviewText}
                        name='postComplain'
                        onChange={e => setReviewText(e.target.value)}
                        placeholder="Drop your complain here..."
                    />
                    <div className="modal-action">
                        <button type="submit" className="btn bg-teal-500 hover:bg-teal-600 text-base normal-case text-white px-4">Submit</button>
                    </div>
                </form>
            </dialog>
        </div>
    ); 
};

export default ReviewNComplain;
