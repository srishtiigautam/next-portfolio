"use client"
import React, { useState } from "react";
import Button from "../components/Button.component";
import FooterItem from "../components/FooterItem.component";

interface FooterItemType {
  path: string;
  label: string;
}

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>("");

  return (
    <footer className="flex flex-col p-6">
      <div className="flex justify-between text-lg">
        <div className="flex items-center">
          <h2 className="font-name text-4xl">Srishti Gautam</h2>
        </div>

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

        <div className="flex flex-col max-w-md">
          <h4 className="text-xl font-semibold">Stay Updated</h4>
          <p className="text-balance text-md">
            Subscribe to receive latest updates on my projects and design
            insights.
          </p>
          <div className="mt-4 flex items-center gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="px-4 py-2 rounded-md text-gray-700 focus:outline-none border border-pink-400 focus:border-pink-600 focus:ring focus:ring-pink-600 focus:outline-pink-600"
            />
            <Button label="Subscribe" />
          </div>
        </div>
      </div>

      <div>
        <div className="mt-8 border-t border-gray-600"></div>
        {/* Copyright Notice */}
        <p className="mt-4 text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Srishti Gautam. All Rights Reserved. Crafting seamless experience through technology and design.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
