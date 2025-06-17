"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  
  {
    quote: "Their innovative approach to advertising our School made a huge impact on our new Students Admissions.",
    name: "Angela Omordi",
    title: "Founder Royal Kiddies Academy",
    company: "Royal Kiddies Academy",
    image: "/testimonial2.jpg",
  },
  {
    quote: "Professional, creative, and results-driven – Golden Media delivers every time!",
    name: "Sarah Okojie",
    title: "Brand Manager Prime Suites Apartments",
    company: "Prime Suites Apartments",
    image: "/testimonial3.jpg",
  },
  {
    quote: "We experience Great Business Improvements after our Campaign with Golden Mwdia",
    name: "Jude Efokodi",
    title: "Operations Head D Shield Studios",
    company: "D Shield Studios",
    image: "/testimonial4.jpg",
  },
];

export default function TestimonialCarousel() {
   const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const current = testimonials[index];

  return (
    <div className="relative bg-[#f7f7f0] min-h-[500px] flex items-center justify-center text-center overflow-hidden px-4">
      {/* Background Image
      <img
        src={current.image}
        alt="brush stroke"
        className="absolute opacity-30 w-96 h-96 object-contain"
        style={{ zIndex: 0 }}
      /> */}

      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="max-w-4xl mx-auto z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {current.quote}
          </p>
          <p className="italic font-medium text-gray-800">
            {current.name}
          </p>
          <p className="text-sm text-gray-700">{current.title} at {current.company}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
