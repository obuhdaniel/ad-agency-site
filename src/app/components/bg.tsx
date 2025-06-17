"use client";
import React from "react";

import { ReactNode } from "react";

interface BackgroundVideoHeroProps {
  videoSrc?: string;
  poster?: string;
  children?: ReactNode;
}

const BackgroundVideoHero = ({
  videoSrc = "/images/bgVid.mp4",
  poster = "/images/bgDark.png",
  children,
}: BackgroundVideoHeroProps) => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={poster}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center  h-full text-white text-center pb-4">
        {children}
      </div>

      {/* Optional: Overlay tint for readability */}
      {/* <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-5"></div> */}
    </div>
  );
};

export default BackgroundVideoHero;
