import React from 'react';

interface ButtonProps {
  label: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, className = "bg-pink-600 text-white" }) => {
  return (
    <button className={`py-2 px-4 rounded-md ${className}`}>
      {label}
    </button>
  );
};

export default Button;
