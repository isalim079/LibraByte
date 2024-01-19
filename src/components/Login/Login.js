'use client'

import { AuthContext } from '@/app/Context/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import Link from 'next/link';
import React, { useContext } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const Login = () => {


    const router = useRouter();
    // import google popup function from context api
    const { googleLogInPopup, passwordLogIn } = useContext(AuthContext)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const email = data.email;
        const password = data.password;

        console.log(email, password)
        passwordLogIn(email, password)
            .then(res => {
                console.log(res)
                toast.success("Login Successful")
                reset()
                router.push('/');
            })
            .catch(err => {
                console.log(err)
                const errorCode = err.code;
                const errorMessage = err.message
                console.log(errorCode, errorMessage.split("/"));
                toast.error(`${errorMessage.split("/")[1]}`);
            })
    }


    // google popup login
    const provider = new GoogleAuthProvider();
    const handleGoogle = () => {
        googleLogInPopup(provider)
            .then(res => {
                console.log(res)
                toast.success("Login Successful")
                reset()
                router.push('/');
            })
            .catch(err => {
                console.log(err)
                const errorCode = err.code;
                const errorMessage = err.message
                console.log(errorCode, errorMessage.split("/"));
                toast.error(`${errorMessage.split("/")[1]}`);
            })
    }

    return (
        <section className="py-10">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="relative -z-10 max-w-md mx-auto ">
                    <div className="overflow-hidden  rounded-md shadow-md">
                        <div className="px-4 py-6 sm:px-8 sm:py-7">
                            <h2 className="text-2xl font-bold text-center ">Welcome to LibraByte</h2>
                            <p className="mt-2 text-base text-center text-gray-600">Don’t have an account? <Link
                                href={'/register'} className="font-medium  text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline ">Sign up</Link></p>

                            <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
                                <div className="space-y-5">
                                    <div>
                                        <label className="text-base font-medium text-gray-900"> Email address </label>
                                        <div className="mt-2.5">
                                            <input
                                                type="email"
                                                {...register("email", { required: true })}
                                                placeholder="Enter email to get started"
                                                className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                            />
                                            {errors.email && <span className="text-red-600">Email is required</span>}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label className="text-base font-medium text-gray-900"> Password </label>

                                            <a href="#" title="" className="text-sm font-medium text-blue-600 hover:underline hover:text-blue-700 focus:text-blue-700"> Forgot password? </a>
                                        </div>
                                        <div className="mt-2.5">
                                            <input
                                                type="password"
                                                {...register("password", {
                                                    required: true,
                                                    minLength: 6,
                                                    maxLength: 20,
                                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                                })}
                                                placeholder="Enter your password"
                                                className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                                            />
                                            {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                            {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                                            {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                            {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                                        </div>
                                    </div>

                                    <div>
                                        <button type="submit" className="inline-flex items-center justify-center w-full  py-4 text-base font-semibold text-white  transition-all duration-200 bg-oliveGreen  rounded-md  hover:bg-navy ">Log in</button>
                                    </div>
                                </div>
                            </form>

                            <div className="mt-3 space-y-3">
                                <button
                                    onClick={handleGoogle}
                                    type="button"
                                    className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                                >
                                    <div className="absolute inset-y-0 left-0 p-4">
                                        <svg className="w-6 h-6 text-rose-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"
                                            ></path>
                                        </svg>
                                    </div>
                                    Sign in with Google
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Login;