"use client";

import useAxiosSecure from "@/lib/hooks/useAxiosSecure";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import toast from "react-hot-toast";


export default function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure()

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
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <CardElement />
      <button type="submit">Submit</button>
    </form>
  );
}
