import React from "react";
import StarRating from "@/components/StarRating.component";
import Image, { StaticImageData } from "next/image"; // Import Image and StaticImageData from next/image

// Define the interface for the props
interface TestimonialCardProps {
  rating: number;
  comment: string;
  avatar: string | StaticImageData; // Updated avatar type
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ rating, comment, avatar }) => {
  return (
    <div className="flex flex-col gap-3 border border-black p-4 max-w-sm">
      <StarRating rating={rating} />
      <p className="text-sm">{comment}</p>
      
      {/* Render the avatar image */}
      {typeof avatar === "string" ? (
        <img
          src={avatar}
          alt="avatar"
          className="h-12 w-12 rounded-full object-center object-contain"
        />
      ) : (
        <Image
          src={avatar}
          alt="avatar"
          width={48} // Specify width and height for images
          height={48}
          className="rounded-full object-center object-contain"
        />
      )}
    </div>
  );
};

export default TestimonialCard;
