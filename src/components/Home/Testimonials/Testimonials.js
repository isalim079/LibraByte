"use client";
import axios from "axios";
import { useEffect, useState, useRef } from "react";

import StarRatingComponent from "react-star-rating-component";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const sliderRef = useRef(null);

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
        const slider = sliderRef.current;
        if (slider && reviews.length > 0) {
            const interval = setInterval(() => {
                slider.slickNext();
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [reviews]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 2,
        centerMode: true,
        centerPadding: "70px",
    };
    
    
    
    

    return (
        <div className="bg-bgTexture px-8 md:px-28 lg:px-[180px] pt-16">
            <h1 className="text-4xl font-bold text-center mb-16">Our Client's Testimonials</h1>
            {loading ? (
                <div className="text-center">Loading testimonials...</div>
            ) : (
                <Slider ref={sliderRef} {...settings} className="">
                    {reviews.map((review) => (
                        <div key={review._id} className="slick-slide ">
                            <div className="card overflow-y-auto mx-4 px-4 bg-slate-200 rounded-box py-10">
                                <div>
                                <div className="">
                                <img
                                    className="rounded-full mx-auto w-28 h-28 flex items-center justify-center"
                                    src={review?.image}
                                    alt="userPhoto"
                                />
                                </div>
                                </div>
                                <h2 className="text-xl font-semibold text-center pt-3">{review?.name}</h2>
                                <StarRatingComponent
                                    name="rating"
                                    value={review?.rating}
                                    starCount={5}
                                    editing={false} // Set to true if you want users to be able to edit the rating
                                    className="text-2xl text-center mx-auto py-3"
                                />
                                <h1 className=" text-base px-10 mx-auto pb-10">{review?.review}</h1>
                            </div>
                        </div>
                    ))}
                </Slider>
            )}
        </div>
    );
};

export default Testimonials;
