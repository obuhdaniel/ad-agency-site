"use client";
import HeroSection from "./components/heroSection";
import AboutUs from "./components/about";
import WhatWeOffer from "./components/wwo";
import TestimonialCarousel from "./components/testimonial";
import HowWeWork from "./components/howWeWork";
export default function Home() {
  return (
    <>
      <HeroSection />

      <div id="about"></div>
      <AboutUs />
      <div id="wwo"></div>
      <WhatWeOffer />
      <HowWeWork />

      <TestimonialCarousel />
    </>
  );
}
