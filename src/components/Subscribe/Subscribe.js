import Link from "next/link";

const Subscribe = () => {
    return (
        <div className="text-[#312B21] bg-lightWhite text-center px-4 md:px-20 lg:px-[140px] py-8 md:py-16 lg:py-12 h-screen lg:h-96 ">
            <h1 className="text-3xl md:text-4xl font-semibold">Become A Friend of Librabyte!</h1>
            <p className="text-base md:text-lg py-8 text-justify">Unlock a World of Knowledge! Subscribe to our Library Management System today and open the gateway to endless learning. With a variety of membership tiers to choose from, you can tailor your subscription to match your reading preferences. Dive into a diverse collection of books, enjoy a seamless digital experience, and access exclusive content and features. Whether you opt for the Basic, Premium, or Ultimate membership, subscribing is the key to a personalized and enriching reading journey. Visit our website, choose your plan, create your account, and immerse yourself in the joy of unlimited reading. Subscribe now and let your exploration of knowledge begin!</p>
            <Link href="/subscription">
                <button className="mt-6 lg:mt-0 btn btn-outline uppercase text-xl  font-semibold hover:font-extrabold border-oliveGreen border-2 px-10 bg-oliveGreen text-lightWhite hover:bg-lightWhite hover:shadow-oliveGreen hover:shadow-2xl hover:h-12 hover:text-oliveGreen transition-all duration-500">Subscribe Now!</button>
            </Link>
        </div>
    );
};

export default Subscribe;