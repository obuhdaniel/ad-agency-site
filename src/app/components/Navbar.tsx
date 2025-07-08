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


  const isActive = (path: string) => pathname === path;

  const navigationLinks = [
    { path: "/", label: "Home" },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    // { path: '/portfolio', label: 'Portfolio' },
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
                href="https://wa.link/jtjpyb"
                target="_blank"
                rel="noopener noreferrer"
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
