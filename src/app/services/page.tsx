"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Video, Image, Mic, Camera, Layers, ArrowLeft, ArrowRight, Play, Eye, Clock } from "lucide-react";
import NavBar from "../components/Navbar";

const services = [
  {
    title: "Audio Jingles",
    description: "Catchy, branded, and made to stick. Perfect for radio, TV, or online campaigns.",
    icon: <Mic className="w-6 h-6 text-white" />,
    color: "from-red-500 to-orange-700",
    stats: { projects: "150+", avgDuration: "30sec", satisfaction: "98%" },
    image: "/images/services/audio-jingles.jpg",
    category: "Audio Production"
  },
  {
    title: "Billboard Advertising",
    description: "Massive outdoor visibility in major Nigerian cities — Lagos, Abuja, PH, and more.",
    icon: <Lightbulb className="w-6 h-6 text-white" />,
    color: "from-yellow-500 to-orange-600",
    stats: { projects: "200+", locations: "50+", reach: "2M+" },
    image: "/images/services/billboard.jpg",
    category: "Outdoor Advertising"
  },
  {
    title: "Video & News Coverage",
    description: "Event coverage, promos, documentaries, and newsroom-grade storytelling.",
    icon: <Video className="w-6 h-6 text-white" />,
    color: "from-red-500 to-red-700",
    stats: { projects: "300+", hours: "1000+", quality: "4K+" },
    image: "/images/services/video-coverage.jpg",
    category: "Video Production"
  },
  {
    title: "Graphics Design",
    description: "Bold, clean, and brand-driven visuals for digital and print media.",
    icon: <Image className="w-6 h-6 text-white" />,
    color: "from-blue-500 to-blue-700",
    stats: { designs: "500+", brands: "100+", revisions: "24hr" },
    image: "/images/services/graphics.jpg",
    category: "Design"
  },
  {
    title: "Photography",
    description: "Studio-quality portraits, commercial product shots, and more.",
    icon: <Camera className="w-6 h-6 text-white" />,
    color: "from-green-500 to-green-700",
    stats: { shoots: "400+", clients: "150+", delivery: "48hr" },
    image: "/images/services/photography.jpg",
    category: "Photography"
  },
  {
    title: "Media Strategy",
    description: "We plan and execute campaigns that get results — on air and online.",
    icon: <Layers className="w-6 h-6 text-white" />,
    color: "from-indigo-500 to-indigo-700",
    stats: { campaigns: "250+", roi: "300%", success: "95%" },
    image: "/images/services/strategy.jpg",
    category: "Strategy"
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

const cardVariants = {
  offscreen: { opacity: 0, y: 40 },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.3, duration: 0.7 },
  },
};

// Enhanced Intro Paragraph Component
const EnhancedIntroParagraph = () => {
  const StyledLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-500 hover:from-red-500 hover:to-orange-600 transition-all duration-300 font-semibold"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-600 to-red-500 transform scale-x-0 transition-transform duration-300 hover:scale-x-100"></span>
    </a>
  );

  return (
    <div

      className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-3xl shadow-lg border border-gray-100 mb-12"
    >
      <p className="text-lg md:text-xl leading-relaxed text-gray-700">
        Discover the{" "}
        <StyledLink href="https://your-new-webpage.com">services</StyledLink>{" "}
        we offer to digitally transform our{" "}
        <StyledLink href="https://your-new-webpage.com">clients</StyledLink>{" "}
        businesses. Our core agency offerings include{" "}
        <StyledLink href="https://your-new-webpage.com">audio production</StyledLink>,{" "}
        <StyledLink href="https://your-new-webpage.com">video coverage</StyledLink>,{" "}
        <StyledLink href="https://your-new-webpage.com">billboard advertising</StyledLink>, and{" "}
        <StyledLink href="https://your-new-webpage.com">creative design</StyledLink>,
        along with several{" "}
        <StyledLink href="https://your-new-webpage.com">additional services</StyledLink>{" "}
        to meet your business needs.
      </p>
    </div>
  );
};

// Enhanced Service Slider Component
const EnhancedServiceSlider = () => {
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
    <div className="w-full max-w-6xl mx-auto py-16 px-4">
      {/* Enhanced Top Navigation */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="text-4xl font-bold tracking-tight text-black flex items-baseline gap-2">
            <span
              key={index}
              className="bg-gradient-to-r from-orange-600 to-red-500 bg-clip-text text-transparent"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="text-gray-400">/ {String(total).padStart(2, "0")}</span>
          </div>
          <div
            key={`category-${index}`}
            className="px-4 py-2 bg-gradient-to-r from-purple-100 to-red-100 rounded-full"
          >
            <span className="text-sm font-medium text-gray-700">{current.category}</span>
          </div>
        </div>

        {/* Enhanced Arrows */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => paginate(-1)}
            className="group relative p-3 bg-white border-2 border-gray-200 rounded-xl hover:border-purple-300 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600 group-hover:text-orange-600 transition-colors" />
          </button>
          <button
            onClick={() => paginate(1)}
            className="group relative p-3 bg-white border-2 border-gray-200 rounded-xl hover:border-purple-300 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-orange-600 transition-colors" />
          </button>
        </div>
      </div>

      {/* Enhanced Slide Content */}
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Image Section */}
        <div className="relative">
          <div className="relative w-full h-[400px] overflow-hidden rounded-3xl shadow-2xl">
            <AnimatePresence mode="wait" custom={dir}>
              <div
                key={index}
               
                className="absolute w-full h-full"
              >
                <div className={`w-full h-full bg-gradient-to-br ${current.color} flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto backdrop-blur-sm">
                      {current.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{current.title}</h3>
                    <p className="text-white/90 text-sm">{current.category}</p>
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-sm font-medium text-gray-900 px-3 py-1 rounded-full shadow">
                  ● {current.category}
                </div>
              </div>
            </AnimatePresence>
          </div>
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          <div
            key={`title-${index}`}
           
          >
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {current.title}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {current.description}
            </p>
          </div>

          {/* Stats */}
          {/* <div
            key={`stats-${index}`}
            
            className="grid grid-cols-3 gap-4"
          >
            {Object.entries(current.stats).map(([key, value], i) => (
              <div key={i} className="text-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
                <div className="text-sm text-gray-500 capitalize">{key}</div>
              </div>
            ))}
          </div> */}

          {/* CTA Button */}
          <button
            key={`cta-${index}`}
          
            className={`w-full py-4 px-6 bg-gradient-to-r ${current.color} text-white font-semibold rounded-2xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2`}
          >
            <Play className="w-5 h-5" />
            View Portfolio
          </button>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        {services.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setDir(i > index ? 1 : -1);
              setIndex(i);
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              i === index ? 'bg-orange-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const WhatWeOffer = () => {
  return (
   <>
   <NavBar/>
    <section className="w-full bg-gradient-to-br from-gray-50 to-white py-20 px-4 md:px-12 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-400/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-red-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div
            
            className="inline-flex items-center bg-gradient-to-r from-purple-100 to-red-100 rounded-full py-3 px-6 text-sm text-gray-600 mb-8 shadow-lg"
          >
            <Layers className="w-5 h-5 mr-2 text-orange-600" />
            Our Services
          </div>

          <h2
            
            className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 leading-tight"
          >
            Our core{" "}
            <span className="bg-gradient-to-r from-orange-600 via-red-500 to-orange-500 bg-clip-text text-transparent">
              agency services
            </span>
          </h2>
        </div>

        <EnhancedIntroParagraph />
        <EnhancedServiceSlider />

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative p-6 bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/0 to-red-500/0 group-hover:from-orange-600/5 group-hover:to-red-500/5 rounded-3xl transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section></>
  );
};

export default WhatWeOffer;