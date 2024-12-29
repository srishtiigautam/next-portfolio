import React from "react";
import TestimonialCard from "./TestimonialCard";
import image from "@/assets/image.png";
import { StaticImageData } from "next/image"; // Import StaticImageData from next/image
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

// Define the type for a testimonial, allowing avatar to be either a string (URL) or StaticImageData
interface Testimonial {
  rating: number;
  comment: string;
  avatar: string | StaticImageData; // Update here to allow both types
}

// The testimonials array with the proper typing
const testimonials: Testimonial[] = [
  {
    rating: 5,
    comment:
      "Srishti's attention to details and creativity transformed our project. Her designs are not only beautiful but also highly functional.",
    avatar: image, // StaticImageData type
  },
  {
    rating: 5,
    comment:
      "Srishti's attention to details and creativity transformed our project. Her designs are not only beautiful but also highly functional.",
    avatar: image,
  },
  {
    rating: 5,
    comment:
      "Srishti's attention to details and creativity transformed our project. Her designs are not only beautiful but also highly functional.",
    avatar: image,
  },
  {
    rating: 5,
    comment:
      "Srishti's attention to details and creativity transformed our project. Her designs are not only beautiful but also highly functional.",
    avatar: image,
  },
  {
    rating: 5,
    comment:
      "Srishti's attention to details and creativity transformed our project. Her designs are not only beautiful but also highly functional.",
    avatar: image,
  },
  {
    rating: 5,
    comment:
      "Srishti's attention to details and creativity transformed our project. Her designs are not only beautiful but also highly functional.",
    avatar: image,
  },
];

const Testimonials: React.FC = () => {
  return (
    <div className="relative flex flex-col justify-center items-center gap-5">
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-20%] h-[100%] w-full skew-y-12"
        )}
      />
      <div className="text-center mb-10">
        <h1 className="font-semibold text-4xl">What Clients Say</h1>
        <p className="max-w-xl mt-5">
          Discover how Srishti Gautam's expertise in Full Stack Development and
          UI/UX Design has impressed clients. Her dedication to creating
          intuitive and scalable solutions is reflected in their feedback.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-semibold text-3xl">Client Testimonials</h2>
        <p className="text-center max-w-xl mt-5">
          Discover what clients say about Srishti's exceptional work in software
          design and development.
        </p>
        <div className="max-w-7xl my-5 flex justify-center flex-wrap gap-5">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              rating={testimonial.rating}
              comment={testimonial.comment}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
