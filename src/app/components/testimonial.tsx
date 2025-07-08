"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight, Play, Award } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    quote: "Their innovative approach to advertising our School made a huge impact on our new Students Admissions.",
    name: "Angela Omordi",
    title: "Founder",
    company: "Royal Kiddies Academy",
    image: "/testimonial2.jpg",
    rating: 5,
    impact: "300% increase in admissions",
    category: "Education",
  },
  {
    quote: "Professional, creative, and results-driven – Golden Media delivers every time!",
    name: "Sarah Okojie",
    title: "Brand Manager",
    company: "Prime Suites Apartments",
    image: "/testimonial3.jpg",
    rating: 5,
    impact: "150% booking increase",
    category: "Hospitality",
  },
  {
    quote: "We experience Great Business Improvements after our Campaign with Golden Media",
    name: "Jude Efokodi",
    title: "Operations Head",
    company: "D Shield Studios",
    image: "/testimonial4.jpg",
    rating: 5,
    impact: "200% client growth",
    category: "Creative",
  },
];

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const current = testimonials[index];

  const nextTestimonial = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const toggleAutoplay = () => setIsPlaying(!isPlaying);

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-[700px] py-20 overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-red-200/30 via-yellow-200/30 to-orange-200/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gradient-to-br from-yellow-200/30 via-orange-200/30 to-red-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-200/20 via-orange-200/20 to-red-200/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center bg-gradient-to-r from-red-100 via-yellow-100 to-orange-100 rounded-full px-6 py-3 mb-6">
            <Quote className="w-5 h-5 mr-2 text-orange-600" />
            <span className="text-orange-800 font-semibold">Client Success Stories</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results from real businesses across Nigeria
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16">

          <div className="lg:w-1/2 flex flex-col items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6 }}
                className="relative mb-8"
              >
                <div className="relative w-48 h-48 mx-auto mb-6"></div>

                <div className="text-center space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900">{current.name}</h3>
                  <p className="text-lg text-gray-600">{current.title}</p>
                  <p className="text-orange-600 font-semibold">{current.company}</p>

                  <div className="flex items-center justify-center space-x-1 py-2">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <div className="inline-flex items-center bg-gradient-to-r from-green-100 to-emerald-100 rounded-full px-4 py-2">
                    <span className="text-green-700 font-semibold text-sm">{current.impact}</span>
                  </div>

                  <div className="inline-flex items-center bg-gradient-to-r from-red-100 via-yellow-100 to-orange-100 rounded-full px-3 py-1 ml-2">
                    <span className="text-orange-700 font-medium text-xs">{current.category}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="lg:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="absolute -top-4 -left-4 text-orange-200 opacity-50">
                  <Quote className="w-24 h-24" />
                </div>

                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-gray-200">
                  <blockquote className="text-2xl md:text-3xl font-bold text-gray-900 leading-relaxed mb-6">
                    "{current.quote}"
                  </blockquote>

                  <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500 rounded-full animate-pulse"></div>
                      <span className="text-gray-600 font-medium">Verified Client</span>
                    </div>
                    <div className="text-right text-gray-500 text-sm">
                      <span>Campaign Success</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="flex items-center justify-center mt-16 space-x-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-orange-600 hover:shadow-xl transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <div className="flex space-x-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === index
                    ? "bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-orange-600 hover:shadow-xl transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleAutoplay}
            className={`w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
              isPlaying
                ? "bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500 text-white"
                : "bg-white text-gray-600 hover:text-orange-600"
            }`}
          >
            <Play className={`w-5 h-5 ${isPlaying ? "animate-pulse" : ""}`} />
          </motion.button>
        </div>

        <div className="mt-8 max-w-md mx-auto">
          <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              key={index}
              className="h-full bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: isPlaying ? "100%" : "0%" }}
              transition={{ duration: 6, ease: "linear" }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Progress</span>
            <span>{isPlaying ? "Auto-playing" : "Paused"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
