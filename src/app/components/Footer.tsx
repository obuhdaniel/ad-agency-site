import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import Logo from "./logo";
import Link from "next/link";

const EbytesLogo = ({ className = "" }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="relative">
      <div className="absolute -inset-1" />
      {/* Light mode logo */}
      <img
        src="/images/new-logo2.png"
        alt="Golden Media Nigeria Logo"
        className="relative w-14 h-auto rounded-full block dark:block"
      />
      {/* Dark mode logo */}
      <img
        src="/images/new-logo2.png"
        alt="Golden Media Nigeria Logo (Dark)"
        className="relative w-14 h-auto rounded-full hidden dark:hidden"
      />
    </div>
    <span className="text-xl font-bold dark:text-gray-900 text-white">
      Golden Media
      <span className="bg-gradient-to-r dark:from-gray-900 dark:to-gray-600 from-white to-gray-400 bg-clip-text text-transparent">
        {" "}
        NG
      </span>
    </span>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-black dark:bg-white text-white dark:text-black px-6 py-12">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Call to Action */}
        <div className="bg-white dark:bg-black text-black dark:text-white rounded-lg px-8 py-12 flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-bold">Have A Project In Mind?</h2>
          <p className="text-lg md:text-xl max-w-2xl">
            If you feel like we're a good fit, please reach out so we can get to know each other and discuss your upcoming project.
          </p>
          <a href="/contact" aria-label="Contact Us">
            <button className="group inline-flex items-center gap-3 px-6 py-3 text-sm font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-800 transition">
              Contact Us
              <span className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-full transition-transform group-hover:translate-x-1">
                <ArrowRight className="w-5 h-5 -rotate-45 text-white" />
              </span>
            </button>
          </a>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-sm">
          {/* Company Info */}
          <div className="space-y-4">
            <EbytesLogo />
            <p>
              At Golden Media, we don’t just build websites — we craft experiences
              that captivate, convert, and leave lasting impressions.
            </p>
            <p>
              Give us a call:{" "}
              <a href="tel:+2348070649854" className="underline">
                +234 807 064 9854
              </a>
            </p>
            <div className="flex items-center gap-4 mt-4">
              <img src="/images/reg/apcon.png" alt="APCON Logo" className="h-10 w-auto object-contain" />
              <img src="/images/reg/cac.png" alt="CAC Logo" className="h-10 w-auto object-contain" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold mb-4">SERVICES</h3>
            <ul className="space-y-2">
              {[
                "Audio Production",
                "Video Production",
                "Event Coverage",
                "News Coverage",
                "Billboards",
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-base font-semibold mb-4">COMPANY</h3>
            <ul className="space-y-2">
              {["About", "Services", "Work", "Insights", "Contact Us"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:underline">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Navigation */}
          <div className="space-y-4">
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-gray-800 text-white rounded hover:bg-gray-700">
                <Facebook size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 text-white rounded hover:bg-gray-700">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-gray-800 text-white rounded hover:bg-gray-700">
                <MessageCircle size={18} />
              </a>
            </div>

            <a
              href="#top"
              className="inline-flex items-center px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
            >
              Back to top <span className="ml-2">👆</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 dark:border-gray-300" />

        {/* Bottom Note */}
        <div className="text-center text-xs space-y-1">
          <p>&copy; 2025 Golden Media</p>
          <p>All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
