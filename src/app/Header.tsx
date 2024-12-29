import React from "react";
import Button from "../components/Button.component";
import NavItem from "../components/NavItem.component";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-6">
      <div>
        <h1 className="font-name text-4xl">Srishti Gautam</h1>
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
