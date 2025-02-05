import Image from "next/image";
import HeroSection from "./components/heroSection";
import AboutUs from "./components/about";
import WhatWeOffer from "./components/wwo";
import TestimonialCarousel from "./components/testimonial";
export default function Home() {
  return (
    <div className="">

     <HeroSection/>
    <AboutUs/>
     <WhatWeOffer/>
     <TestimonialCarousel/> 
    </div>
  );
}
