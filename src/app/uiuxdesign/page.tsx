import React from "react";
import UiUxHero from "./UiUxHero";
import { StaticImageData } from "next/image";
import accumitt from "@/assets/image.png";
import { UiUxDesignCard } from "./UiUxDesignCard";
import RetroGrid from "@/components/ui/retro-grid";

// Type definition for the project items
interface Project {
  name: string;
  imageUrl: string | StaticImageData; // Can be a string (URL) or StaticImageData from Next.js
  description: string;
}

const UiUxDesign: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      {/* Hero Section */}
      <UiUxHero />

      <div className="relative flex flex-col justify-center items-center gap-5">
        <RetroGrid angle={20} cellSize={30}/>
        {/* Benefits Section */}
        <div className="text-center my-10">
          <h1 className="font-semibold text-4xl">Benefits of UI/UX Design</h1>
          <p className="max-w-xl mt-5">
            Enhance your user experience with our tailored UI/UX services that
            focus on user satisfaction and engagement. We ensure that every
            design decision is backed by thorough research and testing.
          </p>
        </div>

        {/* UI/UX Designs */}
        <div className="flex flex-wrap justify-between ">
          <UiUxDesignCard />
        </div>
      </div>
    </div>
  );
};

export default UiUxDesign;
