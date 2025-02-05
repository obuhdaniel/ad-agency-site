"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  
  {
    quote: "Their innovative approach to advertising our School made a huge impact on our new Students Admissions.",
    name: "Angela Omordi",
    title: "Founder",
    company: "Royal Kiddies Academy",
    image: "/testimonial2.jpg",
  },
  {
    quote: "Professional, creative, and results-driven – Golden Media delivers every time!",
    name: "Sarah Okojie",
    title: "Brand Manager",
    company: "Prime Suites Apartments",
    image: "/testimonial3.jpg",
  },
  {
    quote: "We experience Great Business Improvements after our Campaign with Golden Mwdia",
    name: "Jude Efokodi",
    title: "Operations Head",
    company: "D Shield Studios",
    image: "/testimonial4.jpg",
  },
];

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-white max-w-7xl mx-auto dark:bg-gray-950 relative overflow-hidden py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
          What Our <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">Clients Say</span>
        </h2>

        <div className="relative max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8"
            >
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">{testimonials[current].quote}</p>
              <div className="flex items-center justify-center">
                {/* <img
                  src={testimonials[current].image}
                  alt={testimonials[current].name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                /> */}
                <div>
                  <div className="font-bold text-gray-900 dark:text-white">{testimonials[current].name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonials[current].title} at {testimonials[current].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
             <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current ? "w-6 bg-gray-900 dark:bg-white" : "bg-gray-300 dark:bg-gray-700"
                }`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          >
             <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
