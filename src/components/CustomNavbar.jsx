"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu } from "feather-icons";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="p-4 bg-blue-500">
      <div className="flex items-center justify-between">
        <div className="brand">
          <h1 className="text-xl font-semibold">
            <Link href="/" className="text-white">
              Task Manager
            </Link>
          </h1>
        </div>
        <div className="hidden md:flex">
          <ul className="flex space-x-3 text-white">
            <li>
              <Link href="/" className="hover:text-blue-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/add-task" className="hover:text-blue-300">
                Add Task
              </Link>
            </li>
            <li>
              <Link href="/show-task" className="hover:text-blue-300">
                Show Task
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex">
          <ul className="flex space-x-3 text-white">
            <li>
              <Link href="/login" className="hover:text-blue-300">
                Login
              </Link>
            </li>
            <li>
              <Link href="/signup" className="hover:text-blue-300">
                Signup
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          {/* Mobile menu toggle */}
          <button
            className="text-white hover:text-blue-300"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 ">
          <ul className="flex flex-col space-y-3 text-white items-center">
            <li>
              <Link href="/" className="hover:text-blue-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/add-task" className="hover:text-blue-300">
                Add Task
              </Link>
            </li>
            <li>
              <Link href="/show-task" className="hover:text-blue-300">
                Show Task
              </Link>
            </li>
            <li>
              <Link href="/login" className="hover:text-blue-300">
                Login
              </Link>
            </li>
            <li>
              <Link href="/signup" className="hover:text-blue-300">
                Signup
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
