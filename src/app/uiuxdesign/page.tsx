import React, { JSX } from "react";
import UiUxHero from "./UiUxHero";
import { FaLightbulb, FaSearch } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { StaticImageData } from "next/image";
import accumitt from "@/assets/image.png";
import ProjectCard from "../projects/ProjectCard";
import { UiUxDesignCard } from "./UiUxDesignCard";
import RetroGrid from "@/components/ui/retro-grid";

// Define the type for items in the data array
// interface DesignBenefit {
//   icon: JSX.Element;
//   heading: string;
//   description: string;
// }

// Define the data with the correct type
// const data: DesignBenefit[] = [
//   {
//     icon: <FaLightbulb size={30} />,
//     heading: "Intuitive Designs",
//     description:
//       "Throughout her career, Srishti has successfully completed over 40 projects, showcasing her ability to create scalable web applications that meet diverse user needs.",
//   },
//   {
//     icon: <FaSearch size={30} />,
//     heading: "Research & Testing",
//     description:
//       "Her innovative approach has earned her 15 awards in design and development, reflecting her commitment to excellence and creativity.",
//   },
//   {
//     icon: <MdGroups size={30} />,
//     heading: "Client Collaboration",
//     description:
//       "Srishti has dedicated over 300 hours to volunteer work, helping others learn about technology and coding, which aligns with her values of collaboration and continuous learning.",
//   },
// ];

// Type definition for the project items
interface Project {
  name: string;
  imageUrl: string | StaticImageData; // Can be a string (URL) or StaticImageData from Next.js
  description: string;
}

// Sample projects array with type
const projects: Project[] = [
  {
    name: "Accumitt",
    imageUrl: accumitt,
    description:
      "Accumitt is an AI-powered accupressure glove that targets specific points based on symptoms.",
  },
  {
    name: "Sahayak",
    imageUrl: accumitt,
    description:
      "Sahayak is a public grievances redressal portal for villagers that connects people directly to local authorities.",
  },
  {
    name: "Google Meet Summarizer",
    imageUrl: accumitt,
    description:
      "This is an AI-powered meeting summarizer Chrome extension that summarizes your meetings into note format.",
  },
  {
    name: "RestoreHealth",
    imageUrl: accumitt,
    description:
      "A desktop application for comprehensive patient data management, including patient history and more.",
  },
  {
    name: "RestoreHealth",
    imageUrl: accumitt,
    description:
      "A desktop application for comprehensive patient data management, including patient history and more.",
  },
];

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
