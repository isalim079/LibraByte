"use client";
import { FaCheck } from "react-icons/fa";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import useSubscriptionData from "@/lib/hooks/useSubscriptionData";

const Subscription = () => {

    const [subscriptionData, refetch] = useSubscriptionData();

    const stripePromise = loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    );




    return (
        <div className="bg-bgTexture pt-24">
            <div className="max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-xl mx-auto py-16 ">
                <h1 className="text-royalBlue text-4xl font-bold text-center">
                    Subscription
                </h1>
                <p className="text-center text-lg mx-6 md:mx-10 lg:mx-20 mt-4 mb-16">
                    Don't just manage your library, empower it! Our subscription
                    is your key to a seamless, modern, and user-friendly library
                    experience. Because your collection deserves the best.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {
                        subscriptionData.map((subscription) => (
                            // {console.log(object)}
                            <div
                                key={subscription.id}
                                className="rounded-tl-3xl rounded-br-3xl border-2 bg-white pt-8 mx-6 md:mx-0 hover:bg-royalBlue border-royalBlue hover:text-white hover:shadow-2xl hover:shadow-royalBlue cursor-pointer transition-all duration-500"
                            >
                                <h4 className="text-center text-2xl py-6 uppercase font-bold">
                                    {subscription.pack}
                                </h4>
                                <h1 className="text-center text-3xl font-extrabold ">
                                    ${subscription.price}
                                </h1>
                                <h2 className="text-center font-semibold text-base ">
                                    /Monthly
                                </h2>
                                <ul className="text-base pt-6 px-12">
                                    <div className="flex py-2">
                                        <FaCheck className="font-extrabold pt-1 text-xl" />
                                        <p className="pl-2">
                                            Borrow maximum {subscription.borrow_limit} books at a
                                            time
                                        </p>
                                    </div>
                                    <div className="flex py-2">
                                        <FaCheck className="font-extrabold pt-1 text-2xl" />
                                        <p className="pl-2">
                                            Borrow each books for maximum 30 days
                                        </p>
                                    </div>
                                    <div className="flex py-2">
                                        <FaCheck className="font-extrabold pt-1 text-xl" />
                                        <p className="pl-2">
                                            Borrowed book limit {subscription.book_limit} per month
                                        </p>
                                    </div>
                                </ul>

                                <button disabled={subscription.price === "free"} className=" p-3 hover:p-2 hover:text-lg font-bold my-6 mx-8 md:mx-4 lg:mx-8 xl:mx-7 border-white hover:border-lightBtn hover:text-white border-2 rounded-tl-xl rounded-br-xl text-base bg-royalBlue hover:bg-lightBtn text-white w-64 md:w-72 lg:w-80 xl:w-64 2xl:w-64 transition-all duration-300  "
                                    onClick={() => document.getElementById(`my-modal-${subscription._id}`).showModal()}
                                >{subscription.price === "free" ? <del>Checkout</del> : "Checkout"}</button>
                                <dialog id={`my-modal-${subscription._id}`} className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <div method="dialog">
                                            <button onClick={() => document.getElementById(`my-modal-${subscription._id}`).close()} className="btn btn-sm btn-circle btn-ghost text-royalBlue font-extrabold text-2xl absolute right-6 top-6">✕</button>
                                        </div>
                                        <div className="my-6">
                                            <Elements stripe={stripePromise}>
                                                <CheckoutForm subscription={subscription}></CheckoutForm>
                                            </Elements>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Subscription;
