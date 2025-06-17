"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import CoreValues from "./sliders/workValues";

const points = [
  "Trusted by brands in Lagos, Abuja, and beyond",
  "Complete in-house creative + production team",
  "Quick turnaround — we deliver fast",
  "Affordable, scalable packages for all business sizes",
];

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 60, duration: 0.6 },
  },
};

const HowWeWork = () => {
  return (
    <CoreValues/>
  );
};

export default HowWeWork;
