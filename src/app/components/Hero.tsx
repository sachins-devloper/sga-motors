"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, MapPin } from "lucide-react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}

function Counter({ end, duration = 2000, suffix = "", decimals = 0 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressPercentage = Math.min(progress / duration, 1);
      const currentCount = progressPercentage * end;
      setCount(currentCount);

      if (progressPercentage < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration]);

  return (
    <span>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      {/* Background Cinematic Image with light overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-[1.05]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=2070')`,
        }}
      />
      {/* Gradients blending into white background */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/60 to-transparent" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-32 pb-20 flex flex-col justify-between min-h-[calc(100vh-80px)]">
        
        {/* Main Header Text */}
        <div className="max-w-3xl mt-12 md:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-[12px] uppercase bg-tata-teal/15 text-tata-teal border border-tata-teal/20 px-3 py-1.5 rounded-full font-sans tracking-widest font-semibold inline-flex items-center gap-1.5 mb-6 backdrop-blur-sm">
              <ShieldCheck className="w-3.5 h-3.5 text-tata-teal" />
              South India's Most Trusted Dealership
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="font-display text-5xl md:text-7xl font-bold tracking-tight text-deep-charcoal leading-[1.1] mb-6"
          >
            Experience <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-deep-charcoal via-deep-charcoal/80 to-tata-teal">
              The Future
            </span> <br />
            of Driving.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-neutral-grey mb-10 max-w-xl font-sans"
          >
            Discover Tata's latest premium EVs & SUVs. Engineered for safety, built for luxury, and delivered with trust.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#cars"
              className="group flex items-center justify-center space-x-2 bg-deep-charcoal text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:bg-neutral-800 hover:scale-[1.03] text-center"
            >
              <span>Explore Showcase</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#book"
              className="flex items-center justify-center bg-white/40 border border-slate-300 text-deep-charcoal font-semibold px-8 py-4 rounded-full backdrop-blur-md transition-all duration-300 hover:bg-white/80 text-center"
            >
              Book Test Drive
            </a>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16"
        >
          {/* Stat 1 */}
          <div className="glassmorphism rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-tata-teal to-transparent opacity-50" />
            <p className="text-neutral-grey text-sm uppercase tracking-wider mb-1 font-semibold">Showrooms</p>
            <h3 className="font-display text-4xl font-bold text-deep-charcoal mb-1">
              <Counter end={15} suffix="+" />
            </h3>
            <p className="text-xs text-neutral-grey flex items-center gap-1">
              <MapPin className="w-3 h-3 text-tata-teal" /> Coimbatore, Salem, Ooty & more
            </p>
          </div>

          {/* Stat 2 */}
          <div className="glassmorphism rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-accent-red to-transparent opacity-50" />
            <p className="text-neutral-grey text-sm uppercase tracking-wider mb-1 font-semibold">Happy Customers</p>
            <h3 className="font-display text-4xl font-bold text-deep-charcoal mb-1">
              <Counter end={100} suffix="K+" />
            </h3>
            <p className="text-xs text-neutral-grey">Providing premium services since 1998</p>
          </div>

          {/* Stat 3 */}
          <div className="glassmorphism rounded-2xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-neutral-grey to-transparent opacity-50" />
            <p className="text-neutral-grey text-sm uppercase tracking-wider mb-1 font-semibold">Google Rating</p>
            <h3 className="font-display text-4xl font-bold text-tata-teal mb-1 flex items-center gap-1">
              <Counter end={4.8} decimals={1} />
              <span className="text-2xl text-yellow-500">★</span>
            </h3>
            <p className="text-xs text-neutral-grey">Over 10,000+ verified customer reviews</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
