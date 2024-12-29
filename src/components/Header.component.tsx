import React from "react";
import Button from "./Button.component";
import NavItem from "./NavItem.component";
import SparklesText from "@/components/ui/sparkles-text";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-6">
      <div>
        <h1 className="font-name text-4xl">
          <SparklesText
            text="Srishti Gautam"
            sparklesCount={7}
            className="text-4xl"
          />
        </h1>
      </div>
      <div className="flex justify-between items-center gap-5 text-xl">
        <nav className="flex gap-5">
          <NavItem to="/" label="About Me" />
          <NavItem to="/projects" label="Projects" />
          <NavItem to="/uiuxdesign" label="UI/UX Design" />
          <NavItem to="/testimonials" label="Testimonials" />
        </nav>
        <Button label="View Projects" />
      </div>
    </header>
  );
};

export default Header;
