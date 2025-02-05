"use client"
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="font-aeonik max-w-7xl mx-auto bg-gray-50 relative overflow-hidden" style={{ backgroundImage: 'url(/gridbg1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="absolute inset-0 bg-white opacity-65" />

      <div className="container mx-auto px-4 py-16 md:py-24 relative">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
      {/* Content Section */}
      <div className="flex-1 space-y-8">
     
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="inline-flex items-center bg-gray-100 rounded-full py-2 px-4 text-sm text-gray-600"
      >
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"></svg>
          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          Trusted by 100+ Brands
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
        >
          Beyond Ads –
          <span className="block mt-2 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          We Build Brand Legacies
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl text-gray-600 max-w-2xl"
        >
          At Golden Media, we specialize in cutting-edge advertising solutions designed to help businesses reach their target audience, boost brand visibility, and drive sales.
        </motion.p>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 pt-4"
        >
          <button className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition-colors">
          Let&apos;s Talk
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
          </button>

          {/* Stats */}
          <div className="flex items-center gap-8 mt-4 sm:mt-0 sm:ml-8">
          <div>
            <div className="text-2xl font-bold text-gray-900">100+</div>
            <div className="text-sm text-gray-500">Projects</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gray-900">95%</div>
            <div className="text-sm text-gray-500">Success Rate</div>
          </div>
          </div>
        </motion.div>
        </div>

        {/* Image Section */}
        <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="flex-1 relative"
        >
        <div className="absolute -inset-4" />
        <img
          src="/hero.png"
          alt="Golden Media NG Hero Image"
          className="relative w-full h-auto max-h-[600px] object-cover rounded-2xl"
        />
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;