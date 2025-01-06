"use client";

import React from "react";

interface ButtonProps {
  label: string;
  className?: string;
  redirectUrl?: string; // Optional URL for redirection
  onClick?: () => void; // Optional onClick handler for custom functionality
}

const Button: React.FC<ButtonProps> = ({
  label,
  className = "bg-pink-600 text-white",
  redirectUrl,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(); // Execute the custom function if provided
    } else if (redirectUrl) {
      window.open(redirectUrl, "_blank"); // Open the URL in a new tab
    }
  };

  return (
    <button
      className={`py-2 px-4 rounded-md ${className}`}
      onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
