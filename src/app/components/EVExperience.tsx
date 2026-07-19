"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Coins, 
  Gauge, 
  ChevronRight, 
  Check, 
  VolumeX, 
  Leaf, 
  RefreshCw, 
  Award, 
  MapPin, 
  Home, 
  Smartphone 
} from "lucide-react";

interface FeatureDetail {
  id: string;
  icon: any;
  title: string;
  shortDesc: string;
  highlight: string;
  stats: { label: string; value: string; icon: any }[];
  points: string[];
  color: string;
  image: string;
}

const evFeatures: FeatureDetail[] = [
  {
    id: "charging",
    icon: Zap,
    title: "Ultra Fast Charging",
    shortDesc: "Power up your drive in minutes with cutting-edge high-speed DC charging.",
    highlight: "10% to 80% in 45 Minutes",
    stats: [
      { label: "Public Chargers", value: "10,000+ Across India", icon: MapPin },
      { label: "Home Charger Setup", value: "Free Installation", icon: Home },
      { label: "Emergency Charge", value: "ZConnect App Help", icon: Smartphone },
    ],
    points: [
      "Access to Tata Power EZ Charge network, India's largest EV charging ecosystem.",
      "High-power CCS2 protocol compatible with all major public DC fast chargers.",
      "Smart home charger included with every car, scheduling charging off-peak.",
    ],
    color: "from-[#00A499] to-[#005F56]",
    image: "/features/charging.webp",
  },
  {
    id: "range",
    icon: Gauge,
    title: "High Real-World Range",
    shortDesc: "Go the distance without range anxiety. Tata cars are engineered for real roads.",
    highlight: "Up to 585 km Range",
    stats: [
      { label: "ARAI Certified Range", value: "450-585 km", icon: MapPin },
      { label: "Multi-Mode Regen", value: "4 Levels", icon: RefreshCw },
      { label: "Battery Warranty", value: "8 Years / 1.6L km", icon: ShieldCheck },
    ],
    points: [
      "Advanced regenerative braking returns power to the battery when slowing down.",
      "Eco mode optimizes torque and climate control to extend range by up to 15%.",
      "Real-time range prediction adjusts based on your driving style and terrain.",
    ],
    color: "from-emerald-500 to-tata-teal",
    image: "/features/range.webp",
  },
  {
    id: "tech",
    icon: Cpu,
    title: "Connected Tech Ecosystem",
    shortDesc: "Your car is a smart device. Stay connected, monitor vitals, and more — all in real time.",
    highlight: "ZConnect App & 70+ Features",
    stats: [
      { label: "Smart Controls", value: "Mobile + Wearable", icon: Smartphone },
      { label: "Over-the-Air", value: "OTA Updates Available", icon: Cpu },
      { label: "Infotainment Screen", value: "12.3 inch Cinematic", icon: Zap },
    ],
    points: [
      "Remote climate pre-conditioning - cool your car down before you get inside.",
      "Live vehicle tracking, geofencing, and charge status alerts on your phone.",
      "Harman audio system with immersive surround sound tuned specifically for EV cabins.",
    ],
    color: "from-blue-500 to-indigo-500",
    image: "/features/tech.webp",
  },
  {
    id: "cost",
    icon: Coins,
    title: "Lowest Running Cost",
    shortDesc: "Save more every kilometer. Say goodbye to volatile fuel costs and frequent visits.",
    highlight: "₹1.00 / km Running Cost",
    stats: [
      { label: "Monthly Fuel Savings", value: "Approx. 85% Off", icon: Coins },
      { label: "Maintenance Cost", value: "30% of Petrol Cars", icon: Home },
      { label: "Road Tax Subsidy", value: "Up to 100% Free", icon: ShieldCheck },
    ],
    points: [
      "Fewer moving parts means no oil changes, spark plugs, or engine belts to replace.",
      "Charge at home using standard residential rates for incredibly cheap operations.",
      "Special green license plate benefits, including toll discounts and parking priorities.",
    ],
    color: "from-yellow-500 to-orange-500",
    image: "/cars/tigor.webp",
  },
  {
    id: "safety",
    icon: ShieldCheck,
    title: "Uncompromising Safety",
    shortDesc: "Built on high-strength architectures and loaded with passive & active safety tech.",
    highlight: "GNCAP & BNCAP 5-Star Rated",
    stats: [
      { label: "Airbags Standard", value: "6 Airbags Standard", icon: ShieldCheck },
      { label: "Battery Safety", value: "IP67 Waterproof", icon: Cpu },
      { label: "ADAS Capabilities", value: "Level 2 Autonomous", icon: Zap },
    ],
    points: [
      "Liquid-cooled battery pack protected by high-strength steel casing against impacts.",
      "Level 2 ADAS: Adaptive Cruise Control, Lane Keep Assist, and Collision Mitigation.",
      "Comprehensive Electronic Stability Program (ESP) with i-dms rollover mitigation.",
    ],
    color: "from-accent-red to-blue-400",
    image: "/cars/safari.webp",
  },
];

export default function EVExperience() {
  const [activeTab, setActiveTab] = useState<string>("charging");
  const activeFeature = evFeatures.find((f) => f.id === activeTab) || evFeatures[0];
  const ActiveIcon = activeFeature.icon;

  return (
    <section id="ev-experience" className="py-16 md:py-24 bg-[#F8FAFC] border-t border-slate-100 relative overflow-hidden">
      {/* Decorative BG light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00A499]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Title Badge & Headers */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <div className="inline-flex items-center border border-[#00A499]/30 bg-[#00A499]/5 text-[#00A499] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4">
            Why Choose Tata EV?
          </div>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-deep-charcoal tracking-tight mb-4 md:mb-6">
            The Electric <span className="text-[#00A499]">Experience</span>
          </h2>
          <p className="text-neutral-grey text-sm md:text-base leading-relaxed font-semibold">
            Discover how driving a Tata Electric Vehicle shifts you into a world of whisper-quiet cabins, instant torque response, and zero emissions.
          </p>
        </div>

        {/* Dynamic Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Selection Menu - horizontal scroll on mobile, vertical on desktop */}
          <div className="lg:col-span-4">
            <div className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0 no-scrollbar">
            {evFeatures.map((feat) => {
              const Icon = feat.icon;
              const isActive = feat.id === activeTab;

              return (
                <button
                  key={feat.id}
                  onClick={() => setActiveTab(feat.id)}
                  className={`w-[260px] lg:w-full flex-shrink-0 text-left p-3 lg:p-4 rounded-2xl flex items-center justify-between gap-3 lg:gap-4 border transition-all duration-300 ${
                    isActive
                      ? "bg-white border-[#00A499] shadow-lg shadow-slate-100"
                      : "bg-white/60 border-slate-100 hover:bg-white hover:border-slate-200/50"
                  }`}
                >
                  <div className="flex items-center gap-3 lg:gap-4 flex-grow">
                    <div
                      className={`p-2.5 lg:p-3 rounded-xl flex-shrink-0 transition-all duration-300 ${
                        isActive ? "bg-[#005F56] text-white" : "bg-slate-50 border border-slate-100 text-neutral-grey"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3
                        className={`font-display font-extrabold text-sm md:text-base leading-tight transition-colors duration-300 ${
                          isActive ? "text-deep-charcoal" : "text-neutral-grey hover:text-deep-charcoal"
                        }`}
                      >
                        {feat.title}
                      </h3>
                      <p className="text-neutral-grey text-[11px] mt-1 line-clamp-1 font-semibold">{feat.shortDesc}</p>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-all duration-300 ${
                    isActive ? "text-[#00A499] translate-x-0.5" : "text-neutral-grey/60"
                  }`} />
                </button>
              );
            })}
            </div>
          </div>

          {/* Right Detailed Card (8 columns) */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl p-5 sm:p-6 md:p-8 h-full flex flex-col justify-between relative overflow-hidden bg-white shadow-xl border border-slate-150">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col h-full justify-between"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Info Panel */}
                    <div className="md:col-span-7 flex flex-col justify-between h-full">
                      {/* Header */}
                      <div className="flex items-center gap-3.5 mb-5">
                        <div className="w-10 h-10 rounded-xl bg-[#00A499]/10 flex items-center justify-center text-[#00A499]">
                          <ActiveIcon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-display text-xl md:text-2xl font-black text-deep-charcoal leading-none">
                            {activeFeature.title}
                          </h4>
                          <span className="text-[9px] text-[#00A499] font-extrabold uppercase tracking-widest mt-1.5 block">
                            Tata Motors Ecosystem
                          </span>
                        </div>
                      </div>

                      <p className="text-neutral-grey text-xs md:text-sm leading-relaxed mb-6 font-semibold">
                        {activeFeature.shortDesc}
                      </p>

                      {/* Key Highlights */}
                      <div className="mb-6">
                        <span className="text-[9px] uppercase tracking-widest text-[#00A499] font-extrabold block mb-2">
                          Key Highlights
                        </span>
                        <div className="inline-flex items-center gap-3 bg-slate-50 border border-slate-200/50 px-4 py-3 rounded-xl text-deep-charcoal font-display font-extrabold text-xs md:text-sm">
                          <span>{activeFeature.highlight}</span>
                          <Zap className="w-4 h-4 text-[#00A499] fill-[#00A499]/10 animate-pulse" />
                        </div>
                      </div>

                      {/* Points List */}
                      <div className="space-y-3">
                        {activeFeature.points.map((pt, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <Check className="w-3 h-3 stroke-[3]" />
                            </span>
                            <p className="text-xs md:text-sm text-neutral-grey leading-relaxed font-semibold">{pt}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Illustration Image */}
                    <div className="md:col-span-5 relative w-full h-[220px] md:h-[260px] rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex items-center justify-center bg-slate-50">
                      <img 
                        src={activeFeature.image}
                        alt={activeFeature.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Bottom Stats Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 border-t border-slate-100 pt-4 sm:pt-6 mt-6 sm:mt-8">
                    {activeFeature.stats.map((st, idx) => {
                      const StatIcon = st.icon;
                      return (
                        <div key={idx} className="flex items-center gap-3 bg-slate-50/50 border border-slate-100 p-3 rounded-xl">
                          <div className="w-9 h-9 rounded-lg bg-white shadow-sm border border-slate-100 flex items-center justify-center text-neutral-grey flex-shrink-0">
                            <StatIcon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-[9px] text-neutral-grey uppercase font-bold tracking-wider mb-0.5 truncate">
                              {st.label}
                            </p>
                            <p className="text-deep-charcoal text-xs md:text-sm font-extrabold truncate">
                              {st.value}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Bottom Horizontal Features Bar */}
        <div className="mt-10 md:mt-16 bg-white border border-slate-200/60 p-5 sm:p-6 rounded-3xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 sm:gap-4 shadow-sm">
          {[
            {
              icon: VolumeX,
              title: "Whisper Quiet",
              desc: "Enjoy a peaceful and quiet drive.",
            },
            {
              icon: Leaf,
              title: "Zero Emissions",
              desc: "Drive clean and breathe easy.",
            },
            {
              icon: Gauge,
              title: "Instant Torque",
              desc: "Feel the power right when you go.",
            },
            {
              icon: RefreshCw,
              title: "Regenerative Braking",
              desc: "Charges battery while you slow down.",
            },
            {
              icon: Award,
              title: "Future Ready",
              desc: "Advanced tech for a smarter tomorrow.",
            },
          ].map((feat, idx, arr) => {
            const Icon = feat.icon;
            return (
              <div 
                key={idx} 
                className={`flex items-start gap-4 md:gap-3.5 pr-2 ${
                  idx < arr.length - 1 ? "md:border-r md:border-slate-100 md:pr-4" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-[#00A499]/10 flex items-center justify-center text-[#00A499] flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h5 className="font-display font-extrabold text-xs md:text-sm text-[#005F56] leading-snug">
                    {feat.title}
                  </h5>
                  <p className="text-[10px] text-neutral-grey mt-1 leading-relaxed font-semibold">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
