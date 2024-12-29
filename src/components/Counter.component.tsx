"use client"

import React, { useState, useEffect } from "react";

interface CounterProps {
  targetNumber: number;
  duration: number; // Duration in milliseconds
}

const Counter: React.FC<CounterProps> = ({ targetNumber, duration }) => {
  const [currentNumber, setCurrentNumber] = useState<number>(0);

  useEffect(() => {
    if (currentNumber < targetNumber) {
      const stepTime = duration / targetNumber; // Time per increment
      const timer = setTimeout(() => {
        setCurrentNumber((prevNumber) => prevNumber + 1);
      }, stepTime);

      return () => clearTimeout(timer); // Cleanup timer on unmount or change
    }
  }, [currentNumber, targetNumber, duration]);

  return <span>{currentNumber}</span>;
};

export default Counter;
