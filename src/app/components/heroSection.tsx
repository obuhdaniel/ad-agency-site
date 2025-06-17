"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import BackgroundVideoHero from "./bg";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section
      className="w-full relative overflow-hidden font-aeonik"
      style={{
        backgroundImage:
          typeof window !== "undefined" &&
          !window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "url(/gridbg1.jpg)"
            : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <BackgroundVideoHero>
        {/* Overlay */}
        <div className="absolute inset-0  bg-black/70 z-10" />

        {/* Navbar (centered container) */}
        <div className="relative z-20 w-full">
          <div className="container py-10 mx-auto px-4">
            <Navbar />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 w-full">
          <div className="container mx-auto px-4 py-28 md:py-32">
            <div className="flex flex-col items-start justify-center text-start gap-8">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center bg-gray-100 rounded-full py-2 px-4 text-sm text-gray-600"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                A rising digital marketing agency in Delta State, Nigeria
              </motion.div>

              {/* Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-5xl md:text-7xl font-bold leading-tight text-white"
              >
                The Only Business
                <span className="block mt-2 bg-gradient-to-l from-gray-100 to-white-100 bg-clip-text dark:bg-clip-text text-transparent">
                   We're In Is Yours
                </span>
              </motion.h1>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl md:text-2xl text-gray-300 max-w-2xl"
              >
               We create impactful media experiences — from captivating audio jingles to compelling billboard designs and high-definition news coverage
              </motion.p>

              {/* CTA + Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex flex-col sm:flex-row items-center gap-6 pt-4"
              >
                <Link
                  href="mailto:daniel0292016@gmail.com"
                  className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Get a Quote Now
                    <svg
                    className="ml-2 w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ transform: "rotate(-45deg)" }}
                    >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                    </svg>
                </Link>

                
              </motion.div>
            </div>
          </div>
        </div>
      </BackgroundVideoHero>
    </section>
  );
};

export default HeroSection;
