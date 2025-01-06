"use client";

import React, { useState } from "react";
import Button from "./Button.component";
import NavItem from "./NavItem.component";
import SkillsModal from "./SkillsModal.component";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="flex justify-between items-center p-6 relative">
      <div>
        <h1 className="font-name text-3xl md:text-4xl">
          Srishti Gautam
        </h1>
      </div>

      {/* Hamburger Icon */}
      <div className="custom-lg:hidden">
        <button
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          className="focus:outline-none"
        >
          {isMenuOpen ? (
            // Close Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            // Hamburger Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden custom-lg:flex justify-between items-center gap-5 text-xl">
        <nav className="flex gap-5">
          <NavItem to="/" label="About Me" />
          <NavItem to="/projects" label="Projects" />
          <NavItem to="/uiuxdesign" label="UI/UX Design" />
          <NavItem to="/testimonials" label="Testimonials" />
          <SkillsModal/>
        </nav>
        <Button label="Resume" redirectUrl="https://drive.google.com/file/d/1tlx7EqH8RLow241rQC1-Tsla9Uwl8CjA/view?usp=sharing"/>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full right-0 bg-white shadow-md rounded-lg p-4 z-50 flex flex-col items-center gap-2 custom-lg:hidden">
          <nav className="flex flex-col w-full">
            <NavItem to="/" label="About Me" className="block px-4 py-2" onClick={closeMenu} />
            <NavItem to="/projects" label="Projects" className="block px-4 py-2" onClick={closeMenu} />
            <NavItem to="/uiuxdesign" label="UI/UX Design" className="block px-4 py-2" onClick={closeMenu} />
            <NavItem to="/testimonials" label="Testimonials" className="block px-4 py-2" onClick={closeMenu} />
          </nav>
          <Button label="Resume" redirectUrl="https://drive.google.com/file/d/1tlx7EqH8RLow241rQC1-Tsla9Uwl8CjA/view?usp=sharing"/>
        </div>
      )}
    </header>
  );
};

export default Header;
