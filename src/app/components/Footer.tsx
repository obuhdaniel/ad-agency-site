"use client";

import {
  Facebook,
  Instagram,
  MessageCircle,
  MapPin,
  Phone,
  ArrowRight
} from "lucide-react";
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const EbytesLogo = ({ className = "" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <img src="/images/new-logo.png" alt="Golden Media Nigeria Logo" className="w-14 h-auto rounded-full" />
    <span className="text-xl font-bold text-white">
      Golden Media
      <span className="bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
        NG
      </span>
    </span>
  </div>
);

export default function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const services = ["Audio Production", "Video Production", "Event Coverage", "News Coverage", "Billboards"];
  const companyLinks = ["About", "Services", "Work", "Insights", "Contact Us"];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", color: "from-red-500 via-yellow-500 to-orange-500" },
    { icon: Instagram, label: "Instagram", color: "from-red-500 via-yellow-500 to-orange-500" },
    { icon: MessageCircle, label: "WhatsApp", color: "from-red-500 via-yellow-500 to-orange-500" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-red-500/10 via-yellow-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-red-500/10 via-yellow-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-br from-red-500/5 via-yellow-500/5 to-orange-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="relative mb-20">
          <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-yellow-500/5 to-orange-500/5"></div>
            <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-red-400/20 via-yellow-400/20 to-orange-400/20 rounded-full blur-2xl"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Have A Project In Mind?
                </motion.h2>
                <motion.p initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-lg md:text-xl text-gray-300 max-w-2xl">
                  If you feel like we're a good fit, please reach out so we can get to know each other and discuss your upcoming project.
                </motion.p>
              </div>

              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
                <motion.a href="https://wa.link/jtjpyb" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="group inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-orange-500/25">
                  <span className="text-lg">Contact Us</span>
                  <div className="flex items-center justify-center w-10 h-10 bg-white/20 rounded-full group-hover:translate-x-1">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="space-y-6">
            <EbytesLogo />
            <p className="text-gray-300 leading-relaxed">
              At Golden Media, we don't just build websites — we craft experiences that captivate, convert, and leave lasting impressions.
            </p>

            <div className="space-y-3">
              <a href="tel:+2347059805499" className="flex items-center gap-3 text-gray-300 hover:text-yellow-400">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500/20 via-yellow-500/20 to-orange-500/20 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+234 705 980 5499</span>
              </a>
              <a href="tel:+2348033266801" className="flex items-center gap-3 text-gray-300 hover:text-yellow-400">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500/20 via-yellow-500/20 to-orange-500/20 rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+234 803 326 6801</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-8 h-8 bg-gradient-to-br from-red-500/20 via-yellow-500/20 to-orange-500/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Delta State, Nigeria</span>
              </div>
            </div>
            {/* Certification Badges */}
            <div className="flex items-center gap-4 pt-4">
              <div className="relative group">
                <img
                  src="/images/reg/apcon.png"
                  alt="APCON Logo"
                  className="h-10 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
              </div>
              <div className="relative group">
                <img
                  src="/images/reg/cac.png"
                  alt="CAC Logo"
                  className="h-10 w-auto object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded opacity-0 group-hover:opacity-100 transition-opacity blur-sm"></div>
              </div>
              </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-base font-semibold mb-6 text-white">SERVICES</h3>
            <ul className="space-y-3">
              {services.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                >
                  <a
                    href="#"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-base font-semibold mb-6 text-white">COMPANY</h3>
            <ul className="space-y-3">
              {companyLinks.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <a
                    href="#"
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <div className="w-1.5 h-1.5 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Socials & Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-base font-semibold mb-6 text-white">CONNECT</h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href="#"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    // onMouseEnter={() => setHoveredSocial(index)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    className={`p-3 rounded-xl transition-all duration-300 ${
                      hoveredSocial === index
                        ? `bg-gradient-to-r ${social.color} text-white shadow-lg`
                        : 'bg-white/5 text-gray-300 hover:bg-white/10'
                    }`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.a
              href="#top"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 text-gray-300 rounded-xl hover:bg-white/10 hover:border-red-500/20/30 hover:text-white transition-all duration-300"
            >
              <span>Back to top</span>
              <div className="flex items-center justify-center w-6 h-6 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-full">
                <span className="text-white text-sm">↑</span>
              </div>
            </motion.a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-8"></div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400"
        >
          <div className="flex items-center gap-2">
            <span>&copy; 2025 Golden Media. All rights reserved.</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
            <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}