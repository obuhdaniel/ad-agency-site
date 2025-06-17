"use client";
import React from "react";
import { motion } from "framer-motion";
import { Lightbulb, Video, Image, Mic, Camera, Layers } from "lucide-react";
import IntroParagraph from "./texts/servicesParagraph";
import ServiceSlider from "./sliders/AnimatedSliders";

const services = [
  {
    title: "Audio Jingles",
    description: "Catchy, branded, and made to stick. Perfect for radio, TV, or online campaigns.",
    icon: <Mic className="w-6 h-6 text-purple-600" />,
  },
  {
    title: "Billboard Advertising",
    description: "Massive outdoor visibility in major Nigerian cities — Lagos, Abuja, PH, and more.",
    icon: <Lightbulb className="w-6 h-6 text-purple-600" />,
  },
  {
    title: "Video & News Coverage",
    description: "Event coverage, promos, documentaries, and newsroom-grade storytelling.",
    icon: <Video className="w-6 h-6 text-purple-600" />,
  },
  {
    title: "Graphics Design",
    description: "Bold, clean, and brand-driven visuals for digital and print media.",
    icon: <Image className="w-6 h-6 text-purple-600" />,
  },
  {
    title: "Photography",
    description: "Studio-quality portraits, commercial product shots, and more.",
    icon: <Camera className="w-6 h-6 text-purple-600" />,
  },
  {
    title: "Media Strategy",
    description: "We plan and execute campaigns that get results — on air and online.",
    icon: <Layers className="w-6 h-6 text-purple-600" />,
  },
];

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.3, duration: 0.7 },
  },
};

const WhatWeOffer = () => {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb-12 text-gray-900">
          Our core <span className="font-black">agency services </span>
        </h2>

        <IntroParagraph/>

       <ServiceSlider/>
      </div>
    </section>
  );
};

export default WhatWeOffer;
