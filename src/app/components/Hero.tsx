"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Star, Gauge } from "lucide-react";

// Removed Counter (moved to page.tsx)

export default function Hero() {
  return (
    <div className="relative h-screen bg-white flex flex-col justify-between pt-20 overflow-hidden">
      
      {/* Background Graphic Elements - Mockup Skyline Banner */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat pointer-events-none opacity-100"
        style={{
          backgroundImage: `url('/Banners/banner-1.png')`,
        }}
      />

      {/* Left side gradient overlay to improve text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-transparent lg:bg-gradient-to-r lg:from-white lg:via-white/95 lg:to-transparent lg:w-[55%] pointer-events-none" />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-grow grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2 md:pt-6 pb-20 lg:pb-28">
        
        {/* Left Side Content (6 columns) */}
        <div className="lg:col-span-6 space-y-6">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2"
          >
            <span className="w-8 h-[2px] bg-[#2D509F]" />
            <span className="text-[11px] uppercase tracking-widest font-black text-[#2D509F] font-sans">
              Drive The Change
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-[68px] font-extrabold tracking-tight text-[#0B0D12] leading-[1.1]"
          >
            Move Ahead. <br />
            With Confidence. <br />
            <span className="font-caveat text-[46px] md:text-[56px] text-[#2D509F] relative inline-block mt-3 font-normal select-none pr-4">
              With SGA Motors.
              <svg 
                className="absolute left-0 bottom-[-4px] w-full h-[12px] text-[#2D509F]/80 pointer-events-none" 
                viewBox="0 0 100 10" 
                preserveAspectRatio="none"
              >
                <path 
                  d="M3,7 Q50,2 97,7" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  fill="none" 
                />
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-neutral-grey text-base md:text-lg max-w-xl leading-relaxed font-medium"
          >
            Explore Tata's advanced range of SUVs and EVs. Engineered for performance. Built for India.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-2"
          >
            <a
              href="#cars"
              className="flex items-center justify-center gap-2 bg-[#2D509F] hover:bg-[#1e3a75] text-white font-bold px-7 py-3.5 rounded-full transition-all duration-200 shadow-md shadow-blue-500/10"
            >
              <span>Explore Cars</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#book"
              className="flex items-center justify-center gap-2 bg-white border border-[#2D509F] text-[#0B0D12] font-bold px-7 py-3.5 rounded-full hover:bg-blue-50/20 transition-all duration-200 shadow-sm"
            >
              <Calendar className="w-4 h-4 text-deep-charcoal" />
              <span>Book Test Drive</span>
            </a>
          </motion.div>
        </div>

        {/* Right Side Content (6 columns) */}
        <div className="lg:col-span-6 relative min-h-[300px] md:min-h-[400px] flex items-center justify-center lg:justify-end">
          
        </div>

      </div>

      {/* Statistics Bar removed (moved to page.tsx) */}

    </div>
  );
}
