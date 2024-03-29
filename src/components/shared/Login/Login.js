"use client";

import { AuthContext } from "@/app/Context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import logo from "@/assets/logo/LibraByte.png";
import Image from "next/image";
import useAxiosPublic from "@/lib/hooks/useAxiosPublic";
import animation from "../../../assets/animation/registerPageAnimation";
import Lottie from "lottie-react";
import "./login.css";
import { getURL } from "next/dist/shared/lib/utils";
import "./buttonAnimation.css"

const Login = () => {
    const [email, setEmail] = useState("");
    const axiosPublic = useAxiosPublic();

    const router = useRouter();
    // import google popup function from context api
    const { googleLogInPopup, passwordLogIn, passwordReset, user, path } =
        useContext(AuthContext);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const email = data.email;
        const password = data.password;

        // console.log(email, password);
        passwordLogIn(email, password)
            .then((res) => {
                // console.log(res);
                toast.success("Login Successful");
                reset();
                // router.push('/')
                {
                    path ? router.push(path) : router.push("/");
                }
            })
            .catch((err) => {
                console.log(err);
                const errorCode = err.code;
                const errorMessage = err.message;
                console.log(errorCode, errorMessage.split("/"));
                toast.error(`${errorMessage.split("/")[1]}`);
            });
    };

    // console.log(user)
    // google popup login
    const provider = new GoogleAuthProvider();
    const handleGoogle = () => {
        googleLogInPopup(provider)
            .then((res) => {
                const date = new Date();
                const userData = {
                    name: res.user.displayName,
                    email: res.user.email,
                    role: "user",
                    subscription: "free",
                    date: date,
                };
                // console.log(date);
                // server post request
                axiosPublic.post("/users/v1", userData).then((res) => {
                    if (res.data.insertedId === null) {
                        toast.success(`Welcome back`);
                    } else {
                        toast.success(`Welcome to LibraByte`);
                    }
                    reset();
                    {
                        path ? router.push(path) : router.push("/");
                    }
                });
            })
            .catch((err) => {
                console.log(err);
                const errorCode = err.code;
                const errorMessage = err.message;
                console.log(errorCode, errorMessage.split("/"));
                toast.error(`${errorMessage.split("/")[1]}`);
            });
    };

    // reset function

    const handleReset = (e) => {
        e.preventDefault();
        // console.log(email);
        passwordReset(email)
            .then((res) => {
                // console.log(document.getElementById('my_modal_5'))
                document.getElementById("my_modal_5").close();
                toast.success("Sent Reset Link");
                setEmail("");
            })
            .catch((err) => {
                console.log(err);
                const errorCode = err.code;
                const errorMessage = err.message;
                console.log(errorCode, errorMessage.split("/"));
                toast.error(`${errorMessage.split("/")[1]}`);
            });
    };

    return (
       <div className="bg-lightBtn">
         <div className=" pt-14 md:pt-20">
            <div className="" id="loginBg">
                <section className="py-12">
                    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 flex justify-around ">
                        <div className=" md:w-2/5">
                            <div className="overflow-hidden  rounded-md shadow-lg bg-royalBlue ">
                                <div className="px-4 py-6 sm:px-8 sm:py-7">
                                    <div className=" flex items-center justify-center mb-3">
                                        {/* <Image
                                            src={logo}
                                            width={100}
                                            height={100}
                                            alt="logo"
                                        /> */}
                                        <p className="text-white text-2xl">
                                            Libra
                                            <span className="text-[#ECC21C]">
                                                Byte
                                            </span>
                                        </p>
                                    </div>
                                    <h2 className="text-2xl font-bold text-center text-white">
                                        Welcome to LibraByte
                                    </h2>
                                    <p className="mt-2 text-base text-center text-slate-200">
                                        Don’t have an account?{" "}
                                        <Link
                                            href={"/register"}
                                            className="font-medium  text-customYellow transition-all duration-200 hover:underline "
                                        >
                                            Sign up
                                        </Link>
                                    </p>
                                    <Link href="/registerAuthor">
                                       <div className="flex justify-center mt-4">
                                       <div className="animationContainer">
                                       <p className="font-medium text-center   text-customYellow transition-all duration-200 hover:underline  ">Author SignUp</p>
                                        <span className="topLeftRightBottomSpan topSpan"></span>
                                        <span className="topLeftRightBottomSpan rightSpan"></span>
                                        <span className="topLeftRightBottomSpan bottomSpan"></span>
                                        <span className="topLeftRightBottomSpan leftSpan"></span>
                                       </div>
                                       </div>
                                    </Link>

                                    <form
                                        onSubmit={handleSubmit(onSubmit)}
                                        className="mt-8"
                                    >
                                        <div className="space-y-5">
                                            <div>
                                                <label className="text-base font-medium text-white">
                                                    {" "}
                                                    Email address{" "}
                                                </label>
                                                <div className="mt-2.5">
                                                    <input
                                                        type="email"
                                                        {...register("email", {
                                                            required: true,
                                                        })}
                                                        placeholder="Enter email to get started"
                                                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-customYellow caret-customYellow"
                                                    />
                                                    {errors.email && (
                                                        <span className="text-red-600">
                                                            Email is required
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            <div>
                                                <div className="flex items-center justify-between">
                                                    <label className="text-base font-medium text-white">
                                                        {" "}
                                                        Password{" "}
                                                    </label>

                                                    <button
                                                        className="text-sm font-medium text-customYellow hover:underline  focus:text-customYellow"
                                                        onClick={() =>
                                                            document
                                                                .getElementById(
                                                                    "my_modal_5"
                                                                )
                                                                .showModal()
                                                        }
                                                    >
                                                        {" "}
                                                        Forgot password?{" "}
                                                    </button>
                                                    <dialog
                                                        id="my_modal_5"
                                                        className="modal modal-bottom sm:modal-middle "
                                                    >
                                                        <div className="modal-box">
                                                            <div className="mt-2.5">
                                                                <button
                                                                    onClick={() =>
                                                                        document
                                                                            .getElementById(
                                                                                "my_modal_5"
                                                                            )
                                                                            .close()
                                                                    }
                                                                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                                                >
                                                                    ✕
                                                                </button>
                                                                <div className=" flex items-center justify-center mb-3">
                                                                    {/* <Image
                                                                        src={
                                                                            logo
                                                                        }
                                                                        width={
                                                                            100
                                                                        }
                                                                        height={
                                                                            100
                                                                        }
                                                                        alt="logo"
                                                                    /> */}
                                                                    <p className="text-royalBlue text-2xl">
                                                                        Libra
                                                                        <span className="text-[#ECC21C]">
                                                                            Byte
                                                                        </span>
                                                                    </p>
                                                                </div>
                                                                <p className="text-sm mb-3">
                                                                    Please enter
                                                                    your email
                                                                    address and
                                                                    click
                                                                    "Send". If
                                                                    your email
                                                                    already
                                                                    appears in
                                                                    our
                                                                    database,
                                                                    you will
                                                                    receive an
                                                                    email with
                                                                    instructions
                                                                    on how to
                                                                    log in to
                                                                    your
                                                                    account.
                                                                </p>
                                                            </div>
                                                            <div className="">
                                                                <input
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        setEmail(
                                                                            e
                                                                                .target
                                                                                .value
                                                                        );
                                                                    }}
                                                                    type="email"
                                                                    placeholder="Enter email to get password reset"
                                                                    className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-customYellow caret-customYellow"
                                                                />
                                                                <div>
                                                                    <button
                                                                        type="button"
                                                                        onClick={
                                                                            handleReset
                                                                        }
                                                                        className="btn bg-lightBtn hover:bg-darkBtn text-white mt-2"
                                                                    >
                                                                        Submit
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </dialog>
                                                </div>
                                                <div className="mt-2.5">
                                                    <input
                                                        type="password"
                                                        {...register(
                                                            "password",
                                                            {
                                                                required: true,
                                                                minLength: 6,
                                                                maxLength: 20,
                                                                pattern:
                                                                    /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                                                            }
                                                        )}
                                                        placeholder="Enter your password"
                                                        className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-customYellow caret-customYellow"
                                                    />
                                                    {errors.password?.type ===
                                                        "required" && (
                                                        <p className="text-red-600">
                                                            Password is required
                                                        </p>
                                                    )}
                                                    {errors.password?.type ===
                                                        "minLength" && (
                                                        <p className="text-red-600">
                                                            Password must be 6
                                                            characters
                                                        </p>
                                                    )}
                                                    {errors.password?.type ===
                                                        "maxLength" && (
                                                        <p className="text-red-600">
                                                            Password must be
                                                            less than 20
                                                            characters
                                                        </p>
                                                    )}
                                                    {errors.password?.type ===
                                                        "pattern" && (
                                                        <p className="text-red-600">
                                                            Password must have
                                                            one Uppercase one
                                                            lower case, one
                                                            number and one
                                                            special character.
                                                        </p>
                                                    )}
                                                </div>
                                            </div>

                                            <div>
                                                <button
                                                    type="submit"
                                                    className="inline-flex items-center justify-center w-full  py-4 text-base font-semibold text-white  transition-all duration-200 bg-lightBtn hover:bg-darkBtn  rounded-md  hover:bg-navy "
                                                >
                                                    Log in
                                                </button>
                                            </div>
                                        </div>
                                    </form>

                                    <div className="mt-3 space-y-3">
                                        <button
                                            onClick={handleGoogle}
                                            type="button"
                                            className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none"
                                        >
                                            <div className="absolute z-30 inset-y-0 left-0 p-4">
                                                <svg
                                                    className="w-6 h-6 text-royalBlue"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 24 24"
                                                    fill="black"
                                                >
                                                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                                                </svg>
                                            </div>
                                            Sign in with Google
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Animation */}

                        <div className="hidden md:flex ">
                            <Lottie
                                className="w-[420px] mb-12"
                                animationData={animation}
                                loop={true}
                            />
                        </div>
                    </div>
                </section>
            </div>
        </div>
       </div>
    );
};

export default Login;
