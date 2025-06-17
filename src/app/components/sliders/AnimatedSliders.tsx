"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Service = {
  title: string;
  image: string;
  label: string;
};

const services: Service[] = [
  {
    title: "Video Jingle Production",
    label: "Web Design",
    image: "/images/services/videoprod.png", // Replace with your actual image path
  },
  {
    title: "Jingle Production",
    label: "Audio Production",
    image: "/images/jingle.jpg",
  },
  {
    title: "Billboard Ads",
    label: "Outdoor Ads",
    image: "/images/services/1.png",
  },
];

const slideVariants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir < 0 ? 100 : -100,
    opacity: 0,
  }),
};

export default function ServiceSlider() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const total = services.length;

  const paginate = (direction: number) => {
    setDir(direction);
    setIndex((prev) =>
      direction === 1 ? (prev + 1) % total : (prev - 1 + total) % total
    );
  };

  const current = services[index];

  return (
    <div className="w-full max-w-4xl mx-auto py-16 px-4">
      {/* Top Navigation */}
      <div className="flex items-center justify-between mb-8">
        <div className="text-4xl font-bold tracking-tight text-black flex items-baseline gap-2">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {String(index + 1).padStart(2, "0")}
          </motion.span>
          <span className="text-gray-400">/ {String(total).padStart(2, "0")}</span>
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => paginate(-1)}
            className="border p-2 rounded-md hover:bg-gray-100 transition"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="border p-2 rounded-md hover:bg-gray-100 transition"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Slide Image and Tag */}
      <div className="relative w-full h-[400px] overflow-hidden rounded-xl">
        <AnimatePresence mode="wait" custom={dir}>
          <motion.div
            key={index}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6 }}
            className="absolute w-full h-full"
          >
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="absolute top-4 left-4 bg-white text-sm font-medium text-gray-900 px-3 py-1 rounded-full shadow">
              ● {current.label}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
