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

        <div className="relative z-20 w-full">
        <div className="container mx-auto px-6 py-24 md:py-32">
          <div className="flex flex-col items-start justify-center max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-orange-100/80 backdrop-blur-sm rounded-full py-2 px-5 text-sm font-medium text-gray-800 mb-8 shadow-lg"
            >
              <svg className="w-4 h-4 mr-2 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Leading Digital Marketing Agency in Delta State, Nigeria
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-6xl font-extrabold leading-tight text-white mb-6"
            >
              Your Business, <br />
              <span className="bg-gradient-to-r from-orange-200 to-white bg-clip-text text-transparent">
                Our Mission
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg md:text-xl text-orange-100 max-w-2xl mb-8"
            >
              We craft unforgettable media experiences—from vibrant audio jingles and striking billboards to high-definition video storytelling that captivates and converts.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-red-600 to-orange-500 rounded-xl hover:from-red-700 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get a Quote
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-gray-900 bg-white rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Services
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
