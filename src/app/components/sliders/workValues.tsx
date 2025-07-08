"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CheckCircle, Play, Sparkles, Clock, Award, Users, TrendingUp } from "lucide-react";
import Link from "next/link";

const VALUES = [
  {
    id: 1,
    title: "Trusted by brands in Asaba, Warri, and beyond",
    description: "We're the go-to media partner for businesses across Nigeria, known for delivering results that resonate with diverse audiences.",
    image: "/images/services/1.png",
    icon: <Users className="w-5 h-5" />,
    color: "from-yellow-500 to-red-500",
    bgColor: "from-blue-50 to-orange-50",
    stats: "500+ Clients",
  },
  {
    id: 2,
    title: "Full in-house production team",
    description:
      "From concept to completion, our dedicated experts handle every aspect of your project, ensuring seamless execution and consistent quality without outsourcing.",
    image: "/images/services/1.png",
    icon: <Award className="w-5 h-5" />,
    color: "from-orange-500 to-pink-600",
    bgColor: "from-orange-50 to-pink-50",
    stats: "15 Experts",
  },
  {
    id: 3,
    title: "Quick turnaround",
    description:
      "We understand the pace of business. Our efficient processes guarantee your high-quality media is ready when you need it, helping you meet tight deadlines.",
    image: "/images/services/1.png",
    icon: <Clock className="w-5 h-5" />,
    color: "from-orange-500 to-red-600",
    bgColor: "from-orange-50 to-red-50",
    stats: "24-48 Hours",
  },
  {
    id: 4,
    title: "Affordable, scalable packages",
    description:
      "Whether you're a startup or an established brand, we offer flexible media solutions that fit your budget and grow with your business needs.",
    image: "/images/services/1.png",
    icon: <TrendingUp className="w-5 h-5" />,
    color: "from-green-500 to-emerald-600",
    bgColor: "from-green-50 to-emerald-50",
    stats: "From ₦50k",
  },
];

const duration = 7_000; // 7 seconds

export default function CoreValues() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setActiveIndex((prev) => (prev + 1) % VALUES.length);
      }
    }, duration);
    
    return () => clearInterval(interval);
  }, [isHovered]);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-orange-500/20/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-500/10 to-orange-500/20/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Section Header */}
      <div className="text-center mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center bg-gradient-to-r from-orange-100 to-pink-100 rounded-full px-6 py-3 mb-6"
        >
          <Sparkles className="w-5 h-5 mr-2 text-red-500/20" />
          <span className="text-orange-800 font-semibold">Why Choose Us</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold leading-tight mb-6"
        >
          Not just media. 
          <span className="block bg-gradient-to-r from-red-500/20 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            Media that works
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Experience the difference with our proven approach to media production and digital marketing
        </motion.p>
      </div>

      <div className="flex flex-col lg:flex-row gap-16 items-start">
        {/* LEFT LIST */}
        <div className="w-full lg:w-1/2 space-y-6">
          <div className="space-y-4">
            {VALUES.map((item, i) => {
              const isActive = i === activeIndex;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  onClick={() => handleClick(i)}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-500 border-2 ${
                    isActive
                      ? `bg-gradient-to-r ${item.bgColor} border-transparent shadow-2xl scale-105`
                      : "bg-white/50 backdrop-blur-sm border-gray-200 hover:border-gray-300 hover:shadow-lg"
                  }`}
                >
                  <div className="flex items-start gap-6">
                    {/* Icon and Number */}
                    <div className="flex flex-col items-center space-y-3">
                      <div
                        className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                          isActive
                            ? `bg-gradient-to-r ${item.color} text-white shadow-lg`
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {String(item.id).padStart(2, "0")}
                      </div>
                      
                      {/* Icon */}
                      {/* <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                          isActive
                            ? `bg-gradient-to-r ${item.color} text-white`
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {item.icon}
                      </div> */}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3
                          className={`text-xl font-bold transition-all duration-300 ${
                            isActive ? "text-gray-900" : "text-gray-600"
                          }`}
                        >
                          {item.title}
                        </h3>
                        
                        {/* Stats Badge */}
                        {/* <div
                          className={`px-3 py-1 rounded-full text-sm font-semibold transition-all duration-300 ${
                            isActive
                              ? `bg-gradient-to-r ${item.color} text-white`
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {item.stats}
                        </div> */}
                      </div>

                      <AnimatePresence mode="wait">
                        {isActive && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4 }}
                          >
                            <p className="text-gray-700 mb-4 leading-relaxed">
                              {item.description}
                            </p>

                            {/* Progress Bar */}
                            <div className="relative">
                              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                <motion.div
                                  className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                                  initial={{ width: "0%" }}
                                  animate={{ width: "100%" }}
                                  transition={{ duration: duration / 1000, ease: "linear" }}
                                />
                              </div>
                              <div className="flex justify-between text-xs text-gray-500 mt-1">
                                <span>Progress</span>
                                <span>{duration / 1000}s</span>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-200 mt-8"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-bold text-gray-900 mb-1">Ready to get started?</h4>
                <p className="text-gray-600 text-sm">Let's discuss your media needs today</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                    <Link
                href="https://wa.link/jtjpyb"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center px-4 py-2 text-sm font-medium text-white rounded-lg hover:from-gray-800 hover:to-gray-600 dark:from-white dark:to-gray-100 dark:text-black transition-all duration-200 hover:scale-105 shadow-md"
                >
                Contact
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-1/2 lg:sticky lg:top-20">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Image Container */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={VALUES[activeIndex].image}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={VALUES[activeIndex].image}
                    alt={VALUES[activeIndex].title}
                    fill
                    className="object-cover"
                  />
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${VALUES[activeIndex].color} opacity-20`} />
                </motion.div>
              </AnimatePresence>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/30 shadow-lg hover:bg-white/30 transition-all duration-300"
                >
                  <Play className="w-8 h-8 text-white ml-1" />
                </motion.button>
              </div>

              {/* Corner Badge */}
              <div className="absolute top-4 right-4">
                <div className={`bg-gradient-to-r ${VALUES[activeIndex].color} text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg`}>
                  {VALUES[activeIndex].stats}
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border-2 border-gray-100"
            >
              <div className="flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${VALUES[activeIndex].color} animate-pulse`}></div>
                <span className="text-sm font-semibold text-gray-700">Currently Active</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border-2 border-gray-100"
            >
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-sm font-semibold text-gray-700">Verified Quality</span>
              </div>
            </motion.div>

            {/* Background decoration */}
            <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${VALUES[activeIndex].color} opacity-10 rounded-3xl blur-3xl transform scale-110`}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}