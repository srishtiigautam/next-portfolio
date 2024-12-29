import React from "react";
import ProjectCard from "./ProjectCard";
import accumitt from "@/assets/image.png";
import { StaticImageData } from "next/image";
import Particles from "@/components/ui/particles";

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
];

const Projects: React.FC = () => {
  return (
    <div className="relative flex flex-col justify-center items-center gap-5 ">
      <Particles
        className="absolute inset-0 z-0 inset-y-[-20%]"
        quantity={150}
        ease={80}
        color="#000"
        refresh
      />
      {/* Heading Section */}
      <div className="text-center mb-10">
        <h1 className="font-semibold text-4xl">Explore My Projects</h1>
        <p className="max-w-xl mt-5">
          Dive into a collection of my work where technology meets design.
          Discover how I create seamless digital experiences.
        </p>
      </div>

      {/* Project Showcase Section */}
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-semibold text-3xl">Project Showcase</h2>
        <p className="max-w-xl mt-5">
          Explore my diverse projects that blend technology and design.
        </p>
        <div className="max-w-6xl my-5 flex justify-center flex-wrap gap-5">
          {/* Mapping through the projects array */}
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              imageUrl={project.imageUrl}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
