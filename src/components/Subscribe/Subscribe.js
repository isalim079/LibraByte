
const Subscribe = () => {
    return (
        <div className="text-[#312B21] bg-[#FDFCF7] text-center px-8 md:px-20 lg:px-[140px] py-36">
            <h1 className="text-3xl md:text-4xl font-medium">Stay Informed, Stay Inspired!</h1>
            <p className="text-xl md:text-2xl py-6 md:px-20 ">Subscribe to Our Newsletter for Exclusive Updates, Insights, and Exciting Content.</p>
            <form className="mt-8 ">
            <input type="text" placeholder="Type Your Email" className="input input-bordered border-[#E855DE] text-xl text-center md:text-left rounded-b-none md:rounded-md  input-md " />
            <button className="btn bg-[#312B21] rounded-t-none md:rounded-md px-24 md:px-12 mx-4 md: text-2xl text-white font-medium">Subscribe</button>
            </form>
        </div>
    );
};

export default Subscribe;