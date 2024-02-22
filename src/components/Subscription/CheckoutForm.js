"use client";
import { AuthContext } from "@/app/Context/AuthProvider";
import useAxiosSecure from "@/lib/hooks/useAxiosSecure";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import { useContext } from "react";
import toast from "react-hot-toast";


export default function CheckoutForm(close) {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure()
  const { user } = useContext(AuthContext);
  // const name = await user?.displayName

  const onSubmit = async (e) => {
    e.preventDefault();
    const cardElement = elements?.getElement("card");

    try {
      if (!stripe || !cardElement) return null;
      const { data } = await axiosSecure.post("/create-payment-intent/v1", { amount: 89 });
      const clientSecret = data.clientSecret;


      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, { payment_method: { card: cardElement } });

      if (paymentIntent.status === "succeeded") {
        console.log(paymentIntent.id)
        toast.success('Payment successful')
        document.getElementById(`my-modal-524433`).close();
        await axios.post("http://localhost:5000/payment/v1", {
          paymentId: paymentIntent.id,
          paymentAmount:paymentIntent.amount,
          userEmail: user?.email
        });
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmit} className="mx-8 text-oliveGreen ">
      <div className="form-control ">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input type="text" name="name" placeholder={user?.displayName} className="input input-bordered border-oliveGreen w-full max-w-sm" />
      </div>
      <div className="form-control ">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input type="text" name="email" placeholder={user?.email} className="input input-bordered border-oliveGreen w-full max-w-sm" />
      </div>
      <CardElement className="text-white pt-8" />
      <button type="submit" className="mt-6 btn  bg-oliveGreen text-base text-lightWhite px-6">Submit</button>
    </form>
  );
}
