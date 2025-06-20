import Link from "next/link";
import React from "react";
import ClientsSlider from "./clientSlider";

export default function AboutUs() {
  const stats = [
    { label: "Years Experience", value: "10+" },
    { label: "Success Rate", value: "95%" },
    { label: "Team Members", value: "25+" },
  ];

  return (
    <section className="bg-white relative overflow-hidden">

      <div className='my-5'>
        <ClientsSlider/>
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="inline-flex items-center bg-gray-100 rounded-full py-2 px-4 text-sm text-gray-600 mb-8">
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>
            Our Story
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Side: Content */}
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                About
                <span className="block mt-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Golden Media
                </span>
              </h2>

              <div className="space-y-6">
                <p className="text-lg text-gray-600">
                  At{" "}
                  <span className="font-semibold text-gray-900">
                    Golden Media
                  </span>
                  , we believe in the power of innovative advertising to
                  transform brands. Our mission is to create compelling,
                  data-driven campaigns that connect businesses with their
                  target audiences, boost brand visibility, and drive real
                  sales.
                </p>

                <p className="text-lg text-gray-600">
                  With a team of creative strategists, marketing experts, and
                  digital innovators, we deliver tailored solutions that make
                  brands stand out in a competitive marketplace.
                </p>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-gray-900 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              <Link
                href="mailto:daniel0292016@gmail.com"
                className="ml-4 inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Learn More
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="absolute " />

              <div className="relative">
                <div className="absolute " />
                <img
                  src="/media1.png"
                  alt="Golden Media Team"
                  className="relative w-full h-auto rounded-2xl "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
