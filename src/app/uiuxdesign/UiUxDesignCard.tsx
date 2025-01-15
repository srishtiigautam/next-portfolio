"use client";

import ProjectCard from "@/components/ProjectCard";
import React, { useEffect, useState } from "react";

interface UiUx {
  title: string;
  description: string;
  thumbnail: string;
  link: string;
}

export function UiUxDesignCard() {
  const [uiuxData, setUiUxData] = useState<UiUx[]>([]);

  useEffect(() => {
    const fetchUiUxData = async () => {
      try {
        const response = await fetch("/api/uiuxdesign");
        if (response.ok) {
          const data: UiUx[] = await response.json();
          setUiUxData(data);
          console.log(data);
        } else {
          console.error("Failed to fetch project data");
        }
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchUiUxData();
  }, []);
  return (
    <div className="max-w-6xl my-5 flex justify-center flex-wrap gap-5">
      {uiuxData.map((design, index) => (
        <ProjectCard
          key={index}
          name={design.title}
          description={design.description}
          imageUrl={design.thumbnail}
          redirectUrl={design.link}
          buttonLabel="View Designs"
        />
      ))}
    </div>
  );
}
