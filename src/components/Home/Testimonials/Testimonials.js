"use client";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import StarRatingComponent from "react-star-rating-component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const sliderRef = useRef(null);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768); // Set initial state based on screen width

    useEffect(() => {
        axios
            .get("http://localhost:5000/reviews/v1")
            .then((res) => {
                setReviews(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log("error getting reviews", error);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth < 768); // Update isMobileView state based on screen width
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToScroll: 1, // Change slidesToScroll to 1
        centerMode: true,
        centerPadding: "70px",
        // slidesToShow: isMobileView ? 1 : 2, // Conditionally set slidesToShow based on isMobileView
        slidesToShow: 1,
    };

    return (
        <div className="bg-bgTexture px-8 md:px-28 lg:px-[180px] pt-16">
            <h1 className="text-4xl font-bold text-center mb-16">Our Client's Testimonials</h1>
            {loading ? (
                <div className="text-center">Loading testimonials...</div>
            ) : (
                <Slider ref={sliderRef} {...settings}>
                    {reviews.map((review) => (
                        <div key={review._id} className="slick-slide flex items-center">
                            <div className="card mx-4 px-4 bg-slate-200 rounded-box overflow-hidden">
                                <div>
                                    <img
                                        className="rounded-full mx-auto w-32 h-32 flex items-center justify-center my-4"
                                        src={review.image}
                                        alt="userPhoto"
                                    />
                                </div>
                                <h2 className="text-xl font-semibold text-center ">{review.name}</h2>
                                <StarRatingComponent
                                    name="rating"
                                    value={review.rating}
                                    starCount={5}
                                    editing={false} // Set to true if you want users to be able to edit the rating
                                    className="text-2xl text-center mx-auto py-3"
                                />
                                <h1 className=" font-medium text-base px-10 mx-auto pb-10">{review.review}</h1>
                            </div>
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    );
};

export default Testimonials;
