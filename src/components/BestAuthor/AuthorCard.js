import { IoMdStar } from "react-icons/io";



const BooksCardAuthor = () => {
    return (
        <div>
            <div className="card w-[302px] bg-oliveGreen shadow-sm ">
                <figure className="">
                    <img src="https://s3-alpha-sig.figma.com/img/16c1/5f08/b2292456962230d0eb06da1449435fc5?Expires=1706486400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RSj-HvMwgI5Z85ksEpNFg74W6tcHGn9cKR5kXjaK1NgcbobYP2NGKDZ2JimJcseCS7JFQ3s3LshNpvFgKldboYaNFVl8S9-IqC3NSEy3mIzc-Z5zPOae5cy1ctqI0kFT3SufI-uERwrxPM7wm0w~Wcm4DQvg0Cv4VQrd~d5VE9NjwpSTlZ0eR-AaAfR6mFjwWgnD~z6s-EHkxxnRTRzzH4A~To-R3nUtVlbYZ5lnUmJ6g7X2DC3MGBrl6YTkv3QX8HrO4Uxt~2u6qRBKtTJO7fXTCKFcS~leOTbXu4Pols6pIbtjCjYNW7GCfUKlojAvYmIe0vOSsVuw6qRPYjDLew__" alt="books" className="rounded-r-2xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-lightWhite">J.K. Rowling</h2>
                    <p className="text-white">Fantasy</p>

                   
                    
                        <button className="btn btn-wide rounded-full max-w-full bg-lightWhite  text-oliveGreen">All Books</button>
                    
                </div>
            </div>
        </div>
    );
};

export default BooksCardAuthor;