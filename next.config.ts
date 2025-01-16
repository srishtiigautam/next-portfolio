import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["res.cloudinary.com", "example.com"],
    unoptimized: true,
  },
};

export default nextConfig;
