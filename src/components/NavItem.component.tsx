"use client"
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  to: string;
  label: string;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, label, className = "px-4 py-2" }) => {
  const pathname = usePathname(); // Get the current route path
  const isActive = pathname === to; // Check if the link is active

  return (
    <Link
      href={to}
      className={`${
        isActive ? "text-pink-600 font-bold" : "text-black hover:text-pink-400"
      } ${className}`}
    >
      {label}
    </Link>
  );
};

export default NavItem;
