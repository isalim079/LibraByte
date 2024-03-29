"use client";
import { AuthContext } from '@/app/Context/AuthProvider';
import useAxiosPublic from '@/lib/hooks/useAxiosPublic';
import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import Rating from 'react-rating';
import { BsStar, BsStarFill } from "react-icons/bs";
// import ReactStars from 'react-rating-stars-component';



const ReviewNComplain = () => {
    // const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState('');
    const [complainText, setComplainText] = useState('');
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const [selectedRating, setSelectedRating] = useState();

    const onRatingSelected = selectedValue => {
        setSelectedRating(selectedValue);
      };

    // const handleRatingChange = newRating => setRating(newRating);
    // console.log(selectedRating);

    const handleReview =async (e) => {
        // Clear the input fields
        setRating(0);
        setReviewText('');
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = await user?.displayName;
        const email = await user?.email;
        const image = await user?.photoURL;
        const review = form.get("postReviews");

        const reviewData = {
            name,
            email,
            image,
            selectedRating,
            review
        };

        if (user) {
            axiosPublic
                .post("/reviews/v1", reviewData)
                .then((res) => {
                    // console.log(res.data);
                    if (res.data) {
                        handleResetRating();
                        toast.success('Thanks for your feedback!')
                        e.target.reset();
                        document.getElementById('my_modal_1').close();
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        } 
        else {
            toast.error("login first!");            
        }        
    };

    const handleResetRating = () => {
        setRating(0);
    };


    
    const handleComplain =async (e) => {

        setComplainText('');
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = await user?.displayName;
        const email = await user?.email;
        const image = await user?.photoURL;
        const complain = form.get("postComplain");
        const status = "pending";

        const complainData = {
            name,
            email,
            image,
            complain,
            status
        };

        /* if the user available then he can post */
        if (user) {
            axiosPublic
                .post("/complains/v1", complainData)
                .then((res) => {
                    // console.log(res.data);
                    if (res.data) {
                        toast.success("thanks for contributing to our improvement!");
                        e.target.reset();
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        } 
        else {
            toast.error("login first!");
        }

        document.getElementById('my_modal_2').close();
    }



    return (
        <div className='flex flex-row justify-between mx-4 md:mx-10 lg:mx-40 my-10 gap-8'>
            <button className="btn px-10 bg-teal-500 hover:bg-teal-600 hover:shadow-lightBtn hover:shadow-2xl text-white" onClick={() => document.getElementById('my_modal_1').showModal()}>Reviews</button>
            <dialog id='my_modal_1' className="modal">
                <form onSubmit={handleReview} className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-2xl text-teal-600">✕</button>
                    </form>
                    <h3 className="font-bold text-lg text-center mt-4">Share Your Feedback</h3>
                    <div className='flex items-center gap-2 my-2'>
                        <h1 className=''>Rating Us: </h1>
                        <Rating
                        className='space-x-2 text-xl text-yellow-500'
            initialRating={selectedRating}
            onClick={onRatingSelected}
            stop={5}
            emptySymbol={<BsStar className=''></BsStar>}
            fullSymbol={<BsStarFill className=""></BsStarFill>}
          />
                    </div>
                    <textarea
                        className='w-full h-16'
                        value={reviewText}
                        name='postReviews'
                        onChange={e => setReviewText(e.target.value)}
                        placeholder="Write your review here..."
                        required
                    />
                    <div className="modal-action">
                        <button type="submit" className="btn bg-teal-500 hover:bg-teal-600 text-base normal-case text-white px-4">Submit</button>
                    </div>

                </form>
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
                        value={complainText}
                        name='postComplain'
                        onChange={e => setComplainText(e.target.value)}
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
