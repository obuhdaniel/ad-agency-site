import Link from "next/link";
import React, { useState } from "react";
import ClientsSlider from "./clientSlider";

export default function AboutUs() {
  const [activeVideo, setActiveVideo] = useState(0);

  const stats = [
    { label: "Years Experience", value: "10+" },
    { label: "Success Rate", value: "95%" },
    { label: "Team Members", value: "25+" },
  ];

  // Replace these with your actual YouTube video data
const latestWork = [
    {
        id: 1,
        title: "VIDEO PROMOTION PRODUCTION FOR TOEST TABLE WATER ASABA Golden Media Nigeria",
        description:
            "A visually engaging campaign for Toest Table Water in Asaba, highlighting the brand’s purity, freshness, and commitment to quality through creative storytelling.",
        videoUrl: "https://www.youtube.com/embed/sS8Fy_ponNA",
        category: "Promotion",
        views: "125K",
        duration: "3:45",
    },
    {
        id: 2,
        title: "VIDEO PROMOTION FOR NOCY CASTLE HOTEL",
        description:
            "A captivating promotional video that showcases the luxury, comfort, and unique hospitality experience offered by Nocy Castle Hotel.",
        videoUrl: "https://www.youtube.com/embed/xsL6WpTJenU",
        category: "Social Media",
        views: "89K",
        duration: "5:22",
    },
    {
        id: 3,
        title: "Schoolville Tech Training Audio Promo",
        description:
            "A dynamic audio promo designed to highlight Schoolville Tech’s innovative training programs and their impact on aspiring tech professionals.",
        videoUrl: "https://www.youtube.com/embed/AKuW3n5MhHU",
        category: "E-commerce",
        views: "203K",
        duration: "4:18",
    },
    {
        id: 4,
        title: "Chicools Farm Audio Promo",
        description:
            "An inspiring audio campaign for Chicools Farm, emphasizing agricultural innovation and the farm’s dedication to quality and sustainability.",
        videoUrl: "https://www.youtube.com/embed/Yj4cHK4Q8h8",
        category: "Innovation",
        views: "156K",
        duration: "6:12",
    },
];

  const handleVideoClick = (videoUrl: string | URL | undefined) => {
    window.open(videoUrl, '_blank');
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* <div className='my-5'>
        <ClientsSlider/>
      </div> */}

      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <section className="container mx-auto px-6 py-16">
          <div
           
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-gradient-to-r from-red-100 to-orange-100 rounded-full py-2 px-6 text-sm text-gray-800 mb-8 shadow-lg">
              <svg className="w-5 h-5 mr-2 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Our Latest Work
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Creative <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Showcase</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our most impactful campaigns that have redefined brand success through innovative storytelling.
            </p>
          </div>

          {/* Featured Video */}
          <div
            className="mb-20"
          >
            <div className="relative group rounded-3xl shadow-2xl overflow-hidden">
              <iframe
                className="w-full aspect-video"
                src={latestWork[activeVideo].videoUrl}
                title={latestWork[activeVideo].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <div className="p-6 bg-white dark:bg-gray-800">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{latestWork[activeVideo].title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{latestWork[activeVideo].description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full">{latestWork[activeVideo].category}</span>
                  <div className="flex gap-4">
                    <span>{latestWork[activeVideo].views} views</span>
                    <span>{latestWork[activeVideo].duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {latestWork.map((video, index) => (
              <div
                key={video.id}
                className={`relative group cursor-pointer transition-all duration-300 ${
                  index === activeVideo ? 'ring-4 ring-orange-500 ring-opacity-50 rounded-2xl' : ''
                }`}
                onClick={() => setActiveVideo(index)}
              >
                <div className="relative rounded-2xl shadow-lg overflow-hidden">
                  <iframe
                    className="w-full aspect-video"
                    src={video.videoUrl}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                    {video.category}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
                <div className="mt-3 text-center">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white">{video.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{video.views} views</p>
                </div>
              </div>
            ))}
          </div>
        </section>

          {/* Stats Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-16">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Why Choose
                  <span className="block mt-2 bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                    Golden Media?
                  </span>
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  We don't just create content—we craft experiences that resonate, engage, and convert. Our data-driven approach combined with creative excellence delivers results that speak for themselves.
                </p>
                <Link
                  href="mailto:daniel0292016@gmail.com"
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-red-500 to-orange-500 rounded-xl hover:from-red-600 hover:to-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Start Your Project
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
              
              <div className="grid grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 text-gray-600 mb-4">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>Ready to see your brand transform?</span>
            </div>
            <Link
              href="mailto:daniel0292016@gmail.com"
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-gray-900 bg-white border-2 border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Watch More on YouTube
              <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}