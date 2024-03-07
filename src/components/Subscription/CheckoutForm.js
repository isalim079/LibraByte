"use client";
import { AuthContext } from "@/app/Context/AuthProvider";
import useAxiosSecure from "@/lib/hooks/useAxiosSecure";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext } from "react";
import toast from "react-hot-toast";


export default function CheckoutForm({ subscription }) {
  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure()
  const { user } = useContext(AuthContext);
  // const name = await user?.displayName
  // console.log(subscription);
  const onSubmit = async (e) => {
    e.preventDefault();
    const cardElement = elements?.getElement("card");
    const name = await user?.displayName;
    const email = await user?.email;
    const image = await user?.photoURL;
    const pack = subscription.pack;
    const price = subscription.price;
    const borrowLimit = subscription.borrow_limit;

    const subscriptionData = {
      name,
      email,
      image,
      pack,
      price,
      borrowLimit
    };

    // if (user) {
    //   axiosSecure
    //     .post("/subscription/v1", subscriptionData)
    //     .then((res) => {
    //       console.log(res.data);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
    // else {
    //   toast.error("login first!");
    // }



    try {
      if (!stripe || !cardElement) return null;
      const { data } = await axiosSecure.post("/create-payment-intent/v1", { amount: subscription.price });
      const clientSecret = data.clientSecret;


      const { paymentIntent } = await stripe.confirmCardPayment(clientSecret, { payment_method: { card: cardElement } });
      const paymentDate = new Date();


      if (paymentIntent.status === "succeeded") {
        // console.log(paymentIntent.id)
        toast.success('Payment successful')


        // axiosSecure.post("/subscription/v1", subscriptionData)
        document.getElementById(`my-modal-${subscription._id}`).close();


        await axiosSecure.post("/payment/v1", {
          paymentId: paymentIntent.id,
          subscriptionId: subscription._id,
          paymentAmount: paymentIntent.amount,
          paymentDate: paymentDate,
          userEmail: user?.email,
          subscription: subscription.pack,
          borrow_limit: subscription.borrow_limit
        });
      }

    } catch (error) {
      console.log(error);
    }
  };

  // const SubscriptionId = subscription._id;



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
      <h2 className="pt-4">Amount: $<span>{subscription.price}</span></h2>
      <CardElement className="text-white pt-8" />
      <button type="submit" className="mt-6 btn  bg-oliveGreen text-base text-lightWhite px-6">Submit</button>
    </form>
  );
}
