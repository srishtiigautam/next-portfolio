"use client";

import React, { useEffect, useState } from "react";
import imageUrl from "../assets/image.png"; // Fallback image if no API image
import Counter from "../components/Counter.component";
import Image from "next/image"; // Import Image from next/image

interface AboutData {
  photo: string;
  description: string;
  bio: string;
  projectsCount: number;
  awards: number;
  hoursWorked: number;
  clientsHandled: number;
}

const AboutMe: React.FC = () => {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);

  // Fetch data from the API
  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const response = await fetch("/api/about");
        if (response.ok) {
          const data: AboutData = await response.json();
          setAboutData(data);
        } else {
          console.error("Failed to fetch about data");
        }
      } catch (error) {
        console.error("Error fetching about data:", error);
      }
    };

    fetchAboutData();
  }, []);

  // Fallback stats for when the data hasn't loaded
  // const stats = aboutData?.stats || {
  //   projects: 0,
  //   awards: 0,
  //   hours: 0,
  //   clients: 0,
  // };

  return (
    <div className="relative flex flex-col justify-center items-center gap-5">
      {/* heading */}
      <div className="text-center mb-10">
        <h1 className="font-semibold text-4xl">About Srishti Gautam</h1>
        <p className="md:max-w-2xl mt-5">
          {aboutData?.description || "Loading description..."}
        </p>
      </div>

      {/* body */}
      <div className="flex justify-around flex-wrap gap-8 md:px-16">
        {/* image at top for small screens and at side or bottom for bigger screens */}
        <div className="flex custom-lg:hidden justify-end items-center">
          <Image
            className="object-cover object-center rounded-md aspect-square"
            src={aboutData?.photo || imageUrl} // Use API image if available, else fallback
            // src="https://res.cloudinary.com/dzu1gaoqo/image/upload/v1737035871/thumbnails/i6siooh7avpxa1yx7vn7.jpg"
            alt="Profile"
            width={500} // Set width
            height={500} // Set height
          />
        </div>

        {/* left div -> contains sub sections */}
        <div className="md:max-w-3xl">
          {/* main center div */}
          <div className="text-center mb-10 ">
            <h1 className="font-semibold text-4xl">
              Srishti Gautam&apos;s Journey
            </h1>
            <p className="mt-5">
              {/* Srishti Gautam is a dedicated Software Engineering student with a
              strong foundation in Full Stack Development and UI/UX Design. Her
              journey began with a passion for technology, leading her to
              explore various projects that merge functionality with user
              experience. */}
              {aboutData?.bio || "Loading bio..."}
            </p>
          </div>

          {/* four child divs */}
          <div className="flex flex-wrap justify-evenly">
            <div className="mb-10 max-w-xs text-justify">
              <h1 className="font-semibold text-xl py-4 ">
                <Counter targetNumber={aboutData?.projectsCount || 0} duration={1000} />{" "}
                Projects
              </h1>
              <p className="md:max-w-2xl text-sm">
                Throughout her career, Srishti has successfully completed over{" "}
                {aboutData?.projectsCount} projects, showcasing her ability to create
                scalable web applications that meet diverse user needs.
              </p>
            </div>
            <div className="mb-10 max-w-xs text-justify">
              <h1 className="font-semibold text-xl py-4 ">
                <Counter targetNumber={aboutData?.awards || 0} duration={1000} /> Awards
              </h1>
              <p className="md:max-w-2xl text-sm">
                Her innovative approach has earned her {aboutData?.awards} awards in
                design and development, reflecting her commitment to excellence
                and creativity.
              </p>
            </div>
            <div className="mb-10 max-w-xs text-justify">
              <h1 className="font-semibold text-xl py-4 ">
                <Counter targetNumber={aboutData?.hoursWorked || 0} duration={1000} /> Hours
              </h1>
              <p className="md:max-w-2xl text-sm">
                Srishti has dedicated over {aboutData?.hoursWorked} hours to volunteer
                work, helping others learn about technology and coding, which
                aligns with her values of collaboration and continuous learning.
              </p>
            </div>
            <div className="mb-10 max-w-xs text-justify">
              <h1 className="font-semibold text-xl py-4 ">
                <Counter targetNumber={aboutData?.clientsHandled || 0} duration={1000} /> Clients
              </h1>
              <p className="md:max-w-2xl text-sm">
                She has collaborated with over {aboutData?.clientsHandled} clients,
                delivering tailored solutions that enhance user engagement and
                satisfaction.
              </p>
            </div>
          </div>
        </div>

        {/* right div -> contains image */}
        <div className="hidden custom-lg:flex justify-end items-center">
          <Image
            className="object-cover object-center rounded-md aspect-square"
            src={aboutData?.photo || "https://res.cloudinary.com/dzu1gaoqo/image/upload/v1737035871/thumbnails/i6siooh7avpxa1yx7vn7.jpg"} // Use API image if available, else fallback
            // src="https://res.cloudinary.com/dzu1gaoqo/image/upload/v1737035871/thumbnails/i6siooh7avpxa1yx7vn7.jpg"
            alt="Profile Photo"
            width={500} // Set width
            height={500} // Set height
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
