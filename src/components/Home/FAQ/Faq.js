import dynamic from "next/dynamic";


const Faq = () => {
    return (
        <div className="bg-bgTexture">
            <div className='mx-5 md:mx-28 md:py-28  lg:mx-44 py-28 '>
            <h1 className='text-4xl font-bold text-center'>Frequently Asked Questions </h1>
            <p className='text-center text-lg pb-10 pt-2'>Mostly asked question of users (FAQ) </p>
            <section className=" bg-royalBlue text-white rounded-xl">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    
                    <div className="space-y-4">
                        <details className="w-full border border-customYellow rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri  font-bold">How do I borrow books from LibraByte?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-white">To borrow books from LibraByte, log in to your account, search for the desired book using the search bar, and click on the "Borrow" button. Follow the on-screen instructions to complete the borrowing process. Remember to check the due date to return the book on time. </p>
                        </details>
                        <details className="w-full border border-customYellow rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri font-bold">Can I renew a borrowed book</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-white">Yes, you can renew a borrowed book as long as no one else has placed a hold on it. Log in to your account, go to the "My Books" section, find the book you want to renew, and click on the "Renew" button. Please note that renewal is subject to the library's renewal policies. </p>
                        </details>
                        <details className="w-full border border-customYellow rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri font-bold">How can I request a book that is currently unavailable?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-white">If the book you are looking for is currently unavailable, you can place a hold on it. Search for the book, click on the "Place Hold" button, and you will be notified when the book becomes available. Make sure your contact information is up-to-date in your account settings. </p>
                        </details>
                        <details className="w-full border border-customYellow rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ri font-bold"> What should I do if I lose a book or it gets damaged while in my possession?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-white">If you lose a book or it gets damaged, please contact the library staff immediately. You may be required to pay for the replacement cost or repair of the book. Promptly reporting lost or damaged items helps us maintain a well-functioning library for all users. </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
        </div>
    );
};

// export default Faq;

export default dynamic(() => Promise.resolve(Faq), {ssr: false})