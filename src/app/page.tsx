import React from "react";
import imageUrl from "../assets/image.png"; // Importing image
import Counter from "../components/Counter.component";
import Image from "next/image"; // Import Image from next/image
import Meteors from "@/components/ui/meteors";

interface DataItem {
  heading: React.ReactNode;
  description: string;
}

const data: DataItem[] = [
  {
    heading: (
      <>
        <Counter targetNumber={50} duration={1000} /> Projects
      </>
    ),
    description:
      "Throughout her career, Srishti has successfully completed over 50 projects, showcasing her ability to create scalable web applications that meet diverse user needs.",
  },
  {
    heading: (
      <>
        <Counter targetNumber={15} duration={1000} /> Awards
      </>
    ),
    description:
      "Her innovative approach has earned her 15 awards in design and development, reflecting her commitment to excellence and creativity.",
  },
  {
    heading: (
      <>
        <Counter targetNumber={500} duration={1000} /> Hours
      </>
    ),
    description:
      "Srishti has dedicated over 500 hours to volunteer work, helping others learn about technology and coding, which aligns with her values of collaboration and continuous learning.",
  },
  {
    heading: (
      <>
        <Counter targetNumber={300} duration={1000} /> Clients
      </>
    ),
    description:
      "She has collaborated with over 300 clients, delivering tailored solutions that enhance user engagement and satisfaction.",
  },
];

const AboutMe: React.FC = () => {
  return (
    <div className="relative flex flex-col justify-center items-center gap-5 overflow-hidden">
      <Meteors number={20} />
      {/* heading */}
      <div className="text-center mb-10">
        <h1 className="font-semibold text-4xl">About Srishti Gautam</h1>
        <p className="md:max-w-2xl mt-5">
          Discover the journey of a dedicated Full Stack Developer and UI/UX
          Designer. <br /> Srishti Gautam excels in creating seamless digital
          experiences that captivate users.
        </p>
      </div>

      {/* body */}
      <div className="flex justify-around flex-wrap gap-8 md:px-16">
      
      {/* image at top for small screens and at side or bottom for bigger screens */}
      <div className="flex custom-lg:hidden justify-end items-center">
          <Image
            className="object-cover object-center rounded-md"
            src={imageUrl} // Use the imported image here
            alt="dp"
            width={500} // Set width
            height={500} // Set height
          />
        </div>

        {/* left div -> contains sub sections */}
        <div className="md:max-w-3xl">
          {/* main center div */}
          <div className="text-center mb-10 ">
            <h1 className="font-semibold text-4xl">Srishti Gautam&apos;s Journey</h1>
            <p className="mt-5">
              Srishti Gautam is a dedicated Software Engineering student with a
              strong foundation in Full Stack Development and UI/UX Design. Her
              journey began with a passion for technology&lsqo;leading her to
              explore various projects that merge functionality with user
              experience.
            </p>
          </div>

          {/* four child divs */}
          <div className="flex flex-wrap justify-evenly">
            {data.map((item, index) => (
              <div key={index} className="mb-10 max-w-xs text-justify">
                <h1 className="font-semibold text-xl py-4 ">{item.heading}</h1>
                <p className="md:max-w-2xl text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* right div -> contains image */}
        <div className="hidden custom-lg:flex justify-end items-center">
          <Image
            className="object-cover object-center rounded-md"
            src={imageUrl} // Use the imported image here
            alt="dp"
            width={500} // Set width
            height={500} // Set height
          />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
