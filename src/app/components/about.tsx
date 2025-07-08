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
      title: "Brand Revolution Campaign",
      description: "A stunning transformation story that boosted client engagement by 400%",
      thumbnail: "/video-thumb-1.jpg",
      videoUrl: "https://youtu.be/sS8Fy_ponNA",
      category: "Brand Strategy",
      views: "125K",
      duration: "3:45"
    },
    {
      id: 2,
      title: "Social Media Mastery",
      description: "How we turned a startup into a viral sensation overnight",
      thumbnail: "/video-thumb-2.jpg",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: "Social Media",
      views: "89K",
      duration: "5:22"
    },
    {
      id: 3,
      title: "E-commerce Excellence",
      description: "Converting visitors to customers with psychology-driven design",
      thumbnail: "/video-thumb-3.jpg",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: "E-commerce",
      views: "203K",
      duration: "4:18"
    },
    {
      id: 4,
      title: "Digital Innovation Lab",
      description: "Behind the scenes of our most creative campaigns",
      thumbnail: "/video-thumb-4.jpg",
      videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      category: "Innovation",
      views: "156K",
      duration: "6:12"
    }
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
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gradient-to-r from-gray-100 to-gray-200 rounded-full py-3 px-6 text-sm text-gray-600 mb-8 shadow-lg">
              <svg className="w-5 h-5 mr-2 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              Our Latest Work
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Creative
              <span className="block mt-2 bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
                Showcase
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most impactful campaigns and creative solutions that have transformed brands and driven exceptional results.
            </p>
          </div>

          {/* Featured Video */}
          <div className="mb-20">
            <div className="relative group cursor-pointer" onClick={() => handleVideoClick(latestWork[activeVideo].videoUrl)}>
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105">
                <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="relative z-10 text-center text-white">
                    <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{latestWork[activeVideo].title}</h3>
                    <p className="text-gray-300 mb-4">{latestWork[activeVideo].description}</p>
                    <div className="flex items-center justify-center space-x-4 text-sm">
                      <span className="bg-red-500 px-3 py-1 rounded-full">{latestWork[activeVideo].category}</span>
                      <span>{latestWork[activeVideo].views} views</span>
                      <span>{latestWork[activeVideo].duration}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {latestWork.map((video, index) => (
              <div 
                key={video.id} 
                className={`relative group cursor-pointer transition-all duration-300 ${
                  index === activeVideo ? 'ring-4 ring-red-500 ring-opacity-50' : ''
                }`}
                onClick={() => setActiveVideo(index)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <div className="absolute inset-0 bg-black/30"></div>
                    <div className="relative z-10 text-center text-white p-4">
                      <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <h4 className="text-sm font-semibold mb-1">{video.title}</h4>
                      <p className="text-xs text-gray-300">{video.views} views</p>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    {video.category}
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>

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