import React from "react";
import FooterItem from "./FooterItem.component";
import FlickeringGrid from "@/components/ui/flickering-grid";
import SocialMediaLinks from "./SocialMediaLinks.component";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col py-6 pb-2 ">
      {/* Top Section */}
      <div className="relative flex flex-wrap justify-between text-lg p-6 py-5 gap-6">
        <FlickeringGrid
          className="-z-10 absolute inset-0 size-full"
          squareSize={4}
          gridGap={6}
          color="#6B7280"
          maxOpacity={0.3}
          flickerChance={0.3}
        />

        {/* Logo */}
        <div className="flex items-center w-full md:w-auto">
          <h2 className="font-name text-4xl">Srishti Gautam</h2>
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-between gap-6 w-full md:w-auto">
          <FooterItem
            label="Explore"
            items={[
              { path: "/", label: "About Me" },
              { path: "/projects", label: "Projects" },
            ]}
          />
          <FooterItem
            label="Design"
            items={[{ path: "/uiuxdesign", label: "UI/UX Design" }]}
          />
          <FooterItem
            label="Contact"
            items={[{ path: "/testimonials", label: "Testimonials" }]}
          />
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-5 md:w-auto max-w-md">
          <h4 className="text-xl font-semibold">Stay Updated</h4>
          <SocialMediaLinks />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6">
        <div className="border-t border-gray-600"></div>
        <p className="mt-4 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Srishti Gautam. All Rights Reserved.
          Crafting seamless experiences through technology and design.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
