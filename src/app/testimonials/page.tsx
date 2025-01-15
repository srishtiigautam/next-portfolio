"use client";

import React, { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard";
import { StaticImageData } from "next/image";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";

interface Testimonial {
  rating: number;
  comment: string;
  clientAvatarLink: string | StaticImageData;
}

const Testimonials: React.FC = () => {
  const [testimonialData, setTestimonialData] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // Add loading state

  useEffect(() => {
    const fetchTestimonialData = async () => {
      try {
        const response = await fetch("/api/testimonials");
        if (response.ok) {
          const data: Testimonial[] = await response.json();
          setTestimonialData(data);
        } else {
          console.error("Failed to fetch testimonial data");
        }
      } catch (error) {
        console.error("Error fetching testimonial data:", error);
      } finally {
        setLoading(false); // Set loading to false once fetching is done
      }
    };

    fetchTestimonialData();
  }, []);

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
          Discover how Srishti Gautam&apos;s expertise in Full Stack Development
          and UI/UX Design has impressed clients. Her dedication to creating
          intuitive and scalable solutions is reflected in their feedback.
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-semibold text-3xl">Client Testimonials</h2>
        <p className="text-center max-w-xl mt-5">
          Discover what clients say about Srishti&apos;s exceptional work in
          software design and development.
        </p>
        <div className="max-w-7xl my-5 flex justify-center flex-wrap gap-5">
          {loading ? ( // Show loading text while fetching
            <p>Loading testimonials...</p>
          ) : (
            testimonialData.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                rating={testimonial.rating}
                comment={testimonial.comment}
                avatar={testimonial.clientAvatarLink}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
