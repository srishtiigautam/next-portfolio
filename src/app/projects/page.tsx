"use client";

import React, { useEffect, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import Particles from "@/components/ui/particles";

// Type definition for the project items
interface Project {
  thumbnail: string;
  projectLink: string;
  projectName: string;
  description: string;
}

const Projects: React.FC = () => {
  const [projectData, setProjectData] = useState<Project[]>([]); // Initialized as an array

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const response = await fetch("/api/projects");
        if (response.ok) {
          const data: Project[] = await response.json();
          setProjectData(data);
        } else {
          console.error("Failed to fetch project data");
        }
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProjectData();
  }, []);

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
          {projectData.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.projectName}
              description={project.description}
              imageUrl={project.thumbnail}
              redirectUrl={project.projectLink}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
