"use client";
import { FaCheck } from "react-icons/fa";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import subscriptions from "../../../public/Subscription.json";

const Subscription = () => {
    const stripePromise = loadStripe(
        process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    );

    return (
        <div className="bg-lightWhite">
            <div className="max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-xl mx-auto py-16 ">
                <h1 className="text-oliveGreen text-4xl font-bold text-center">
                    Subscription
                </h1>
                <p className="text-center text-lg mx-6 md:mx-10 lg:mx-20 mt-4 mb-16">
                    Don't just manage your library, empower it! Our subscription
                    is your key to a seamless, modern, and user-friendly library
                    experience. Because your collection deserves the best.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {subscriptions.map((subscription) => (
                        <div
                            key={subscription.id}
                            className="rounded-tl-3xl rounded-br-3xl border-2 bg-white pt-8 mx-6 md:mx-0 hover:bg-oliveGreen border-oliveGreen hover:text-lightWhite hover:shadow-2xl hover:shadow-oliveGreen transition-all duration-500"
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
                                        Borrow maximum{" "}
                                        {subscription.borrow_limit} books at a
                                        time
                                    </p>
                                </div>
                                <div className="flex py-2">
                                    <FaCheck className="font-extrabold pt-1 text-2xl" />
                                    <p className="pl-2">
                                        Borrow each books for maximum{" "}
                                        {subscription.return_limit} days
                                    </p>
                                </div>
                                <div className="flex py-2">
                                    <FaCheck className="font-extrabold pt-1 text-xl" />
                                    <p className="pl-2">
                                        Borrowed book limit{" "}
                                        {subscription.book_limit} per month
                                    </p>
                                </div>
                            </ul>

                            <button
                                className=" p-3 hover:p-2 hover:text-lg font-bold my-6 mx-8 md:mx-4 lg:mx-8 xl:mx-7 border-lightWhite hover:text-oliveGreen border-2 rounded-tl-xl rounded-br-xl text-base bg-oliveGreen hover:bg-lightWhite text-white w-64 md:w-72 lg:w-80 xl:w-64 2xl:w-64 transition-all duration-300"
                                onClick={() =>
                                    document
                                        .getElementById(
                                            `my-modal-${subscription.id}`
                                        )
                                        .showModal()
                                }
                            >
                                Checkout
                            </button>
                            <dialog
                                id={`my-modal-${subscription.id}`}
                                className="modal modal-bottom sm:modal-middle"
                            >
                                <div className="modal-box">
                                    <form method="dialog">
                                        <button className="btn btn-sm btn-circle btn-ghost text-oliveGreen font-extrabold text-2xl absolute right-6 top-6">
                                            ✕
                                        </button>
                                    </form>
                                    <form className="my-6">
                                        <Elements stripe={stripePromise}>
                                            <CheckoutForm></CheckoutForm>
                                        </Elements>
                                    </form>
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
