"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import CurrentTimeDisplay from "./displayTime";
import { usePathname } from "next/navigation";

const EbytesLogo = ({ className = "" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="relative">
      <div className="absolute -inset-1" />
      {/* Light mode logo */}
      <img
      src="/images/new-logo2.png"
      alt="Golden Media Nigeria Logo"
      className="relative w-14 h-auto rounded-full block dark:hidden"
      />
      {/* Dark mode logo */}
      <img
      src="/images/new-logo.png"
      alt="Golden Media Nigeria Logo (Dark)"
      className="relative w-14 h-auto rounded-full hidden dark:block"
      />
    </div>
    <span className="text-xl font-bold text-gray-900 dark:text-white">
      Golden Media
      <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
        {" "}
        NG
      </span>
    </span>
  </div>
);

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const pathname = usePathname();

  // Detect system preference and localStorage on mount
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  // Toggle and persist theme
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  const isActive = (path: string) => pathname === path;

  const navigationLinks = [
    { path: "/", label: "Home" },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/blog', label: 'Blog' }

  ];

  return (
<div className="sticky top-5 z-50 w-full ">
      {/* Main Navigation Bar */}
      <nav className="">
        <div className="max-w-full mx-auto px-2 sm:px-2 lg:px-8">
          <div className="flex  h-16 lg:h-20 gap-2 ">
            
            {/* Main Section - 90% width */}
            <div className="flex justify-between items-center flex-1 pr-4 bg-white/95 dark:bg-black backdrop-blur-lg border-b border-gray-200 dark:border-gray-700 rounded-lg shadow-sm">
              {/* Logo Section */}
              <div className="flex-shrink-0 z-10">
                <Link href="/" className="flex items-center">
                  <EbytesLogo />
                </Link>
              </div>

              {/* Desktop Navigation - Hidden on mobile */}
              <div className="hidden lg:flex items-center justify-center flex-1 px-8">
                <div className="flex items-center space-x-1">
                  {navigationLinks.map(({ path, label }) => (
                    <Link
                      key={path}
                      href={path}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 ${
                        isActive(path)
                          ? "bg-gray-900 text-white dark:bg-white dark:text-black shadow-md"
                          : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Button - Hidden on small screens, visible on desktop */}
              <Link
                href="mailto:daniel0292016@gmail.com"
                className="hidden lg:inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg hover:from-gray-800 hover:to-gray-600 dark:from-white dark:to-gray-100 dark:text-black transition-all duration-200 hover:scale-105 shadow-md"
              >
                Contact
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>

              {/* Mobile menu button - Now in main section */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                aria-label="Toggle mobile menu"
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${menuOpen ? 'rotate-45 top-3' : 'top-1'}`} />
                  <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 top-3 ${menuOpen ? 'opacity-0' : 'opacity-100'}`} />
                  <span className={`absolute h-0.5 w-6 bg-current transform transition-all duration-300 ${menuOpen ? '-rotate-45 top-3' : 'top-5'}`} />
                </div>
              </button>
            </div>

            <div className="flex flex-col items-center gap-1   w-[5%] min-w-fit ">

              <div className="block">
                <div className="bg-white dark:bg-black px-2 py-1 w-full text-black dark:text-white rounded-lg text-xs">
                  <CurrentTimeDisplay />
                </div>
              </div>


              <div className="block bg-red h-full w-full ">

                <button
                onClick={toggleTheme}
                className="px-2 rounded-lg h-full dark:bg-black bg-white w-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 hover:scale-105 flex items-center justify-center"
                aria-label="Toggle Theme"
                >
                {theme === "dark" ? (
                  <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  >
                  <path
                    d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"
                    className="text-white dark:text-white"
                  />
                  </svg>
                ) : (
                  <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  >
                  <path
                    fillRule="evenodd"
                    d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
                    clipRule="evenodd"
                    className="text-black dark:text-black"
                  />
                  </svg>
                )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200 dark:border-gray-700">
            <div className="px-4 py-6 space-y-3">
              
              {/* Mobile Time Display */}
              <div className="sm:hidden flex justify-center mb-4">
                <div className="bg-gray-50 dark:bg-gray-800 px-4 py-3 rounded-lg border">
                  <CurrentTimeDisplay />
                </div>
              </div>

              {/* Mobile Navigation Links */}
              {navigationLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  href={path}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${
                    isActive(path)
                      ? "bg-gray-900 text-white dark:bg-white dark:text-black shadow-md"
                      : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {label}
                </Link>
              ))}
              
              {/* Mobile Contact Button */}
              <Link
                href="mailto:daniel0292016@gmail.com"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center px-4 py-3 text-base font-medium text-white bg-gradient-to-r from-gray-900 to-gray-700 rounded-lg hover:from-gray-800 hover:to-gray-600 dark:from-white dark:to-gray-100 dark:text-black transition-all duration-200 shadow-md mt-4"
              >
                Contact Us
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
