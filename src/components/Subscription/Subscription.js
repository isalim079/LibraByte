"use client";
import { FaCheck } from "react-icons/fa";
import { Checkout } from "./Checkout";

const Subscription = () => {
    
    return (
        <div className="bg-slate-100">
            <div className="max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-xl mx-auto py-16 ">
            <h1 className="text-oliveGreen text-4xl font-bold text-center">Subscription</h1>
            <p className="text-center text-lg mx-6 md:mx-10 lg:mx-20 mt-4 mb-16">Don't just manage your library, empower it! Our subscription is your key to a seamless, modern, and user-friendly library experience. Because your collection deserves the best.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
            <div className="rounded-tl-3xl rounded-br-3xl border-2 bg-white pt-8 mx-6 md:mx-0 hover:bg-oliveGreen border-oliveGreen hover:text-lightWhite hover:shadow-2xl hover:shadow-oliveGreen transition-all duration-500">
                    <h4 className="text-center text-2xl py-6 uppercase font-bold">Premium</h4>
                    <h1 className="text-center text-3xl font-extrabold ">$150</h1>
                    <h2 className="text-center font-semibold text-base ">/Monthly</h2>
                    <ul className="text-base pt-6 px-12">
                        <div className="flex py-2"><FaCheck className="font-extrabold pt-1 text-xl"/><p className="pl-2">Borrow maximum 5 books at a time</p></div>
                        <div className="flex py-2"><FaCheck className="font-extrabold pt-1 text-2xl"/><p className="pl-2">Borrow each books for maximum 1 month</p></div>
                        <div className="flex py-2"><FaCheck className="font-extrabold pt-1 text-xl"/><p className="pl-2">Borrowed book limit 15 per month</p></div>
                    </ul>

                    {/* to be solved */}
                    {/* <Checkout stripe={stripePromise}></Checkout> */}

                    <button className=" p-3 hover:p-2 hover:text-lg font-bold my-6 mx-8 md:mx-4 lg:mx-8 xl:mx-7 border-lightWhite hover:text-oliveGreen border-2 rounded-tl-xl rounded-br-xl text-base bg-oliveGreen hover:bg-lightWhite text-white w-72 md:w-72 lg:w-80 xl:w-64 2xl:w-64 transition-all duration-300" >Checkout</button>

                </div>
                <div className="rounded-tl-3xl rounded-br-3xl border-2 bg-white pt-8 mx-6 md:mx-0 hover:bg-oliveGreen border-oliveGreen hover:text-lightWhite hover:shadow-2xl hover:shadow-oliveGreen transition-all duration-500">
                    <h4 className="text-center text-2xl py-6 uppercase font-bold">Basic</h4>
                    <h1 className="text-center text-3xl font-extrabold ">$100</h1>
                    <h2 className="text-center font-semibold text-base ">/Monthly</h2>
                    <ul className="text-base pt-6 px-12">
                        <div className="flex py-2"><FaCheck className="font-extrabold pt-1 text-xl"/><p className="pl-2">Borrow maximum 4 books at a time</p></div>
                        <div className="flex py-2"><FaCheck className="font-extrabold pt-1 text-2xl"/><p className="pl-2">Borrow each books for maximum 3 weeks</p></div>
                        <div className="flex py-2"><FaCheck className="font-extrabold pt-1 text-xl"/><p className="pl-2">Borrowed book limit 12 per month</p></div>
                    </ul>
                    <button className=" p-3 hover:p-2 hover:text-lg font-bold my-6 mx-8 md:mx-4 lg:mx-8 xl:mx-7 border-lightWhite hover:text-oliveGreen border-2 rounded-tl-xl rounded-br-xl text-base bg-oliveGreen hover:bg-lightWhite text-white w-72 md:w-72 lg:w-80 xl:w-64 2xl:w-64 transition-all duration-300">Checkout</button>

                </div>
                <div className="rounded-tl-3xl rounded-br-3xl border-2 bg-white pt-8 mx-6 md:mx-0 hover:bg-oliveGreen border-oliveGreen hover:text-lightWhite hover:shadow-2xl hover:shadow-oliveGreen transition-all duration-500">
                    <h4 className="text-center text-2xl py-6 uppercase font-bold">Starter</h4>
                    <h1 className="text-center text-3xl font-extrabold ">$50</h1>
                    <h2 className="text-center font-semibold text-base ">/Monthly</h2>
                    <ul className="text-base pt-6 px-12">
                        <div className="flex py-2"><FaCheck className="font-extrabold pt-1 text-xl"/><p className="pl-2">Borrow maximum 3 books at a time</p></div>
                        <div className="flex py-2"><FaCheck className="font-extrabold pt-1 text-2xl"/><p className="pl-2">Borrow each books for maximum 2 weeks</p></div>
                        <div className="flex py-2"><FaCheck className="font-extrabold pt-1 text-xl"/><p className="pl-2">Borrowed book limit 8 per month</p></div>

                    </ul>
                    <button className=" p-3 hover:p-2 hover:text-lg font-bold my-6 mx-8 md:mx-4 lg:mx-8 xl:mx-7 border-lightWhite hover:text-oliveGreen border-2 rounded-tl-xl rounded-br-xl text-base bg-oliveGreen hover:bg-lightWhite text-white  w-72 md:w-72 lg:w-80 xl:w-64 2xl:w-64 transition-all duration-300">Checkout</button>

                </div>
                <div className="rounded-tl-3xl rounded-br-3xl border-2 bg-white pt-8 mx-6 md:mx-0 hover:bg-oliveGreen border-oliveGreen hover:text-lightWhite hover:shadow-2xl hover:shadow-oliveGreen transition-all duration-500">
                    <h4 className="text-center text-2xl py-6 uppercase font-bold">Small</h4>
                    <h1 className="text-center text-3xl font-extrabold ">$10</h1>
                    <h2 className="text-center font-semibold text-base ">/Monthly</h2>
                    <ul className="text-base pt-6 px-12">
                        <div className="flex py-2"><FaCheck className="font-extrabold pt-1 text-xl"/><p className="pl-2">Borrow maximum 2 books at a time</p></div>
                        <div className="flex py-2"><FaCheck className="font-extrabold pt-1 text-2xl"/><p className="pl-2">Borrow each books for maximum a week</p></div>
                        <div className="flex py-2"><FaCheck className="font-extrabold pt-1 text-xl"/><p className="pl-2">Borrowed book limit 5 per month</p></div>
                    </ul>
                    <button className=" p-3 hover:p-2 hover:text-lg font-bold my-6 mx-8 md:mx-4 lg:mx-8 xl:mx-7 border-lightWhite hover:text-oliveGreen border-2 rounded-tl-xl rounded-br-xl text-base bg-oliveGreen hover:bg-lightWhite text-white w-72 md:w-72 lg:w-80 xl:w-64 2xl:w-64 transition-all duration-300">Checkout</button>

                </div>
                
            </div>
        </div>
        </div>
    );
};

export default Subscription;