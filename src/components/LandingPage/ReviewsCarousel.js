// ReviewSlider.js

import React from 'react';
import Slider from 'react-slick';
import reviewsData from './reviewsData'; // Import your reviews data
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ReviewSection.css'; // Import your custom CSS for styling

const ReviewSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    appendDots: dots => (
      <ul> {dots} </ul>
    ),
    prevArrow: <></>,
    nextArrow: <></>
  };

  return (
    <div className="review-slider-container">
      <Slider {...settings}>
        {reviewsData.map(review => (
          <div key={review.id} className="review-slide">
            <div className="review-content">
              <img src={review.reviewerImage} alt={review.reviewer} className="reviewer-image"/>
              <div className="reviewer-details">
                <h4 className="reviewer-name">{review.reviewer}</h4>
                <p className="reviewer-occupation">{review.occupation}</p>
                <div className="review-rating">{'⭐'.repeat(review.rating)}</div>
              </div>
              <h3 className="review-heading">{review.reviewHeading}</h3>
              <p className="review-text">{review.reviewText}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewSlider;
