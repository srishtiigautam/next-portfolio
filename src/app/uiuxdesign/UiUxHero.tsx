import React from "react";
import Button from "@/components/Button.component";

const UiUxHero: React.FC = () => {
  return (
    <div className="relative flex justify-center items-center w-screen h-screen">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://res.cloudinary.com/dzu1gaoqo/video/upload/f_auto:video,q_auto/eqnburrpskthjgsdplbr"
        autoPlay
        loop
        muted
        aria-label="Background video showcasing UI/UX design work"
      ></video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white mb-10 max-w-xl">
        <h1 className="font-semibold text-4xl">
          Crafting Intuitive User Experiences
        </h1>
        <p className="my-5 font-semibold">
          Srishti Gautam specializes in UI/UX Design, focusing on creating
          visually appealing and user-centric designs. Her approach involves
          thorough research, prototyping, and testing to ensure that every
          design meets user expectations and enhances usability.
        </p>
        <div className="flex justify-center gap-5">
          <Button
            label="Explore Designs"
            targetId="designs"
            className="border-2 border-white hover:bg-white hover:text-black"
          />
        </div>
      </div>
    </div>
  );
};

export default UiUxHero;
