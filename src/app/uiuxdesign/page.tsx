import React, { JSX } from "react";
import UiUxHero from "./UiUxHero";
import { FaLightbulb, FaSearch } from "react-icons/fa";
import { MdGroups } from "react-icons/md";

// Define the type for items in the data array
interface DesignBenefit {
  icon: JSX.Element;
  heading: string;
  description: string;
}

// Define the data with the correct type
const data: DesignBenefit[] = [
  {
    icon: <FaLightbulb size={30} />,
    heading: "Intuitive Designs",
    description:
      "Throughout her career, Srishti has successfully completed over 40 projects, showcasing her ability to create scalable web applications that meet diverse user needs.",
  },
  {
    icon: <FaSearch size={30} />,
    heading: "Research & Testing",
    description:
      "Her innovative approach has earned her 15 awards in design and development, reflecting her commitment to excellence and creativity.",
  },
  {
    icon: <MdGroups size={30} />,
    heading: "Client Collaboration",
    description:
      "Srishti has dedicated over 300 hours to volunteer work, helping others learn about technology and coding, which aligns with her values of collaboration and continuous learning.",
  },
];

const UiUxDesign: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      {/* Hero Section */}
      <UiUxHero />

      {/* Benefits Section */}
      <div className="text-center my-10">
        <h1 className="font-semibold text-4xl">Benefits of UI/UX Design</h1>
        <p className="max-w-xl mt-5">
          Enhance your user experience with our tailored UI/UX services that
          focus on user satisfaction and engagement. We ensure that every design
          decision is backed by thorough research and testing.
        </p>
      </div>

      {/* UI/UX Design Benefits */}
      <div className="flex flex-wrap justify-between gap-8">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-justify mb-10 max-w-sm"
          >
            {item.icon}
            <h1 className="font-semibold text-xl mt-3">{item.heading}</h1>
            <p className="max-w-3xl text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UiUxDesign;
