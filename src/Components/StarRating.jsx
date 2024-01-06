import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
};

function StarRating() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const stars = Array(5).fill(0);

  const handleClick = value => {
    setCurrentValue(value);
  };

  const handleMouseOver = newHoverValue => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleLogin = () => {
    // Simulate login, in a real app, use an authentication service
    setLoggedIn(true);
  };

  const handleLogout = () => {
    // Simulate logout
    setLoggedIn(false);
  };

  const handleReviewSubmit = () => {
    // Simulate submitting a review
    console.log(`User ${isLoggedIn ? "logged in" : "not logged in"} submitted a review: ${reviewText}`);
    // Clear the review text
    setReviewText("");
  };

  return (
    <div className="container">
      <h2>Customer Review</h2>
      
      {isLoggedIn ? (
        <>
          <div className="stars">
            {stars.map((_, index) => (
              <FaStar
                key={index}
                size={24}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                style={{
                  marginRight: 10,
                  cursor: "pointer"
                }}
              />
            ))}
          </div>
          <textarea
            placeholder="What's your experience on using zam-go-go?"
            className="textarea"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
          <button
            className="button"
            onClick={handleReviewSubmit}
          >
            Submit Review
          </button>
          <button
            className="button"
            onClick={handleLogout}
          >
            Logout
          </button>
        </>
      ) : (
        <button
          className="button"
          onClick={handleLogin}
        >
          Login to Leave a Review
        </button>
      )}
    </div>
  );
}

export default StarRating;
