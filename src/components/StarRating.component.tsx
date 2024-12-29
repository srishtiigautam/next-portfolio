import React from "react";

interface StarRatingProps {
  rating?: number; // Optional prop with a default value of 0
}

const StarRating: React.FC<StarRatingProps> = ({ rating = 0 }) => {
  // Ensure the rating is within bounds
  const clampedRating = Math.min(Math.max(rating, 0), 5);

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          fill={index < clampedRating ? "black" : "white"}
          viewBox="0 0 24 24"
          stroke="black"
          strokeWidth="2"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 17.27l5.18 3.04-1.64-5.81L20 9.24l-5.92-.05L12 3 9.92 9.19 4 9.24l4.46 5.26-1.64 5.81L12 17.27z"
          />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
