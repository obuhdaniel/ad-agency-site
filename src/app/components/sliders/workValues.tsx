"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const VALUES = [
  {
    id: 1,
    title: "Trusted by brands in Asaba, Warri, and beyond",
    description: "We're the go-to media partner for businesses across Nigeria, known for delivering results that resonate with diverse audiences.",
    image: "/images/services/1.png",
  },
  {
    id: 2,
    title: "Full in-house production team",
    description:
      "From concept to completion, our dedicated experts handle every aspect of your project, ensuring seamless execution and consistent quality without outsourcing.",
    image: "/images/services/1.png",
  },
  {
    id: 3,
    title: "Quick turnaround",
    description:
      "We understand the pace of business. Our efficient processes guarantee your high-quality media is ready when you need it, helping you meet tight deadlines.",
    image: "/images/services/1.png",
  },
  {
    id: 4,
    title: "Affordable, scalable packages",
    description:
      "Whether you're a startup or an established brand, we offer flexible media solutions that fit your budget and grow with your business needs.",
    image: "/images/services/1.png",
  },
];

const duration = 7_000; // 7 seconds

export default function CoreValues() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % VALUES.length);
    }, duration);
    
    return () => clearInterval(interval);
  }, []);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-20 flex flex-col md:flex-row gap-10 items-start">
      {/* LEFT LIST */}
      <div className="w-full md:w-1/2 space-y-8">
        <h2 className="text-4xl font-bold leading-tight">
          Not just media. 
          <span className="font-black">Media that works</span>
        </h2>

        <div className="space-y-4">
          {VALUES.map((item, i) => {
            const isActive = i === activeIndex;
            return (
              <div key={item.id} onClick={() => handleClick(i)} className="cursor-pointer">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-8 h-8 rounded-full text-sm flex items-center justify-center font-semibold ${
                      isActive ? "bg-black text-white" : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {String(item.id).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <h3
                      className={`text-lg font-semibold ${
                        isActive ? "text-black" : "text-gray-400"
                      }`}
                    >
                      {item.title}
                    </h3>
                    {isActive && (
                      <motion.p
                        className="text-gray-600 mt-2"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        {item.description}
                      </motion.p>
                    )}

                    {/* Progress Bar */}
                    {isActive && (
                      <motion.div
                        className="h-[3px] bg-yellow-400 mt-3 rounded-full"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: duration / 1000, ease: "linear" }}
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full md:w-1/2 aspect-video relative rounded-xl overflow-hidden border shadow-md">
        <AnimatePresence mode="wait">
          <motion.div
            key={VALUES[activeIndex].image}
            initial={{ opacity: 0.3, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0"
          >
            <Image
              src={VALUES[activeIndex].image}
              alt={VALUES[activeIndex].title}
              fill
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
