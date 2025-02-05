import { Facebook, Instagram, Linkedin, Youtube, ArrowRight } from "lucide-react";
import Logo from "./logo";
export default function Footer() {
  return (
    <footer className="bg-black text-white text-center py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
       <Logo />

        {/* Call to Action */}
        <div className="text-center md:text-right">
          <p className="text-lg font-semibold">Optimizing the present, transforming the future</p>
          <button className="mt-4 flex items-center gap-2 bg-white text-black  px-6 py-2 rounded-full transition hover:bg-[#F5F5F5]">
            <ArrowRight className="w-5 h-5" />
            Contact Us
          </button>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex justify-center gap-6 mt-8">
        <a href="#" className="text-gray-400 hover:text-white transition"><Linkedin className="w-6 h-6" /></a>
        <a href="#" className="text-gray-400 hover:text-white transition"><Youtube className="w-6 h-6" /></a>
        <a href="#" className="text-gray-400 hover:text-white transition"><Instagram className="w-6 h-6" /></a>
        <a href="#" className="text-gray-400 hover:text-white transition"><Facebook className="w-6 h-6" /></a>
      </div>

      {/* Legal Links
      <div className="text-center text-gray-500 text-sm mt-6 space-x-4">
        <a href="#" className="hover:text-white">Legal</a>
        <a href="#" className="hover:text-white">Privacy Policy</a>
        <a href="#" className="hover:text-white">Cookie Policy</a>
        <a href="#" className="hover:text-white">Ethics</a>
        <a href="#" className="hover:text-white">Eco-Design</a>
      </div> */}

      {/* Copyright */}
      <div className="text-center text-white text-sm mt-2">
        © {new Date().getFullYear()} Golden Media. All Rights Reserved.
      </div>


      <div className="text-center text-white text-sm mt-2">
        Designed and Powered by <a href="https://www.crimpbyte.com/">Crimpbyte Technologies</a>
      </div>
    </footer>
  );
}
