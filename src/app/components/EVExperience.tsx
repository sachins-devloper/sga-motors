"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, ShieldCheck, Cpu, Coins, Gauge } from "lucide-react";

interface FeatureDetail {
  id: string;
  icon: any;
  title: string;
  shortDesc: string;
  highlight: string;
  stats: { label: string; value: string }[];
  points: string[];
  color: string;
}

const evFeatures: FeatureDetail[] = [
  {
    id: "charging",
    icon: Zap,
    title: "Ultra Fast Charging",
    shortDesc: "Power up your drive in minutes with cutting-edge high-speed DC charging.",
    highlight: "10% to 80% in 45 Minutes",
    stats: [
      { label: "Public Chargers", value: "10,000+" },
      { label: "Home Charger Setup", value: "Free Installation" },
      { label: "Emergency Charge", value: "ZConnect App Help" },
    ],
    points: [
      "Access to Tata Power EZ Charge network, India's largest EV charging ecosystem.",
      "High-power CCS2 protocol compatible with all major public DC fast chargers.",
      "Smart home charger included with every car, scheduling charging off-peak.",
    ],
    color: "from-tata-teal to-cyan-500",
  },
  {
    id: "range",
    icon: Gauge,
    title: "High Real-World Range",
    shortDesc: "Go the distance without range anxiety. Tata cars are engineered for maximum battery efficiency.",
    highlight: "Up to 585 km Range",
    stats: [
      { label: "ARAI Certified Range", value: "450-585 km" },
      { label: "Multi-Mode Regen", value: "4 Levels" },
      { label: "Efficiency Rating", value: "98% Battery Health" },
    ],
    points: [
      "Advanced regenerative braking returns power to the battery when slowing down.",
      "Eco mode optimizes torque and climate control to extend range by up to 15%.",
      "Real-time range prediction adjusts based on your driving style and terrain.",
    ],
    color: "from-emerald-500 to-tata-teal",
  },
  {
    id: "tech",
    icon: Cpu,
    title: "Connected Tech Ecosystem",
    shortDesc: "Your car is a smart device. Stay connected, monitor vitals, and control settings remotely.",
    highlight: "ZConnect App & 70+ Features",
    stats: [
      { label: "Smart Controls", value: "Mobile + Wearable" },
      { label: "Over-the-Air", value: "OTA Updates" },
      { label: "Infotainment Screen", value: "12.3 inch Cinematic" },
    ],
    points: [
      "Remote climate pre-conditioning - cool your car down before you get inside.",
      "Live vehicle tracking, geofencing, and charge status alerts on your phone.",
      "Harman audio system with immersive surround sound tuned specifically for EV cabins.",
    ],
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "cost",
    icon: Coins,
    title: "Lowest Running Cost",
    shortDesc: "Save more every kilometer. Say goodbye to volatile fuel costs and expensive mechanical service.",
    highlight: "₹1.00 / km Running Cost",
    stats: [
      { label: "Monthly Fuel Savings", value: "Approx. 85%" },
      { label: "Maintenance Cost", value: "30% of ICE Cars" },
      { label: "Road Tax Subsidy", value: "Up to 100%" },
    ],
    points: [
      "Fewer moving parts means no oil changes, spark plugs, or engine belts to replace.",
      "Charge at home using standard residential rates for incredibly cheap operations.",
      "Special green license plate benefits, including toll discounts and parking priorities.",
    ],
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "safety",
    icon: ShieldCheck,
    title: "Uncompromising Safety",
    shortDesc: "Built on high-strength architectures and loaded with passive & active safety systems.",
    highlight: "GNCAP & BNCAP 5-Star Rating",
    stats: [
      { label: "Airbags Standard", value: "6 Airbags" },
      { label: "Battery Safety", value: "IP67 Rated" },
      { label: "ADAS Capabilities", value: "Level 2 Autonomous" },
    ],
    points: [
      "Liquid-cooled battery pack protected by high-strength steel casing against impacts.",
      "Level 2 ADAS: Adaptive Cruise Control, Lane Keep Assist, and Collision Mitigation.",
      "Comprehensive Electronic Stability Program (ESP) with i-dms rollover mitigation.",
    ],
    color: "from-accent-red to-pink-500",
  },
];

export default function EVExperience() {
  const [activeTab, setActiveTab] = useState<string>("charging");
  const activeFeature = evFeatures.find((f) => f.id === activeTab) || evFeatures[0];
  const ActiveIcon = activeFeature.icon;

  return (
    <section id="ev-experience" className="py-24 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
      {/* Decorative BG light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-tata-teal/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-tata-teal font-sans text-xs uppercase tracking-widest font-semibold block mb-3">
            Why Choose Tata EV?
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-charcoal tracking-tight mb-6">
            The Electric Experience
          </h2>
          <p className="text-neutral-grey text-base md:text-lg">
            Discover how driving a Tata Electric Vehicle shifts you into a world of whisper-quiet cabins, instant torque response, and zero emissions.
          </p>
        </div>

        {/* Dynamic Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Selection Menu (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-3">
            {evFeatures.map((feat) => {
              const Icon = feat.icon;
              const isActive = feat.id === activeTab;

              return (
                <button
                  key={feat.id}
                  onClick={() => setActiveTab(feat.id)}
                  className={`w-full text-left p-6 rounded-2xl flex items-center gap-5 border transition-all duration-300 ${
                    isActive
                      ? "bg-white border-slate-200/80 shadow-md shadow-slate-100"
                      : "bg-transparent border-transparent hover:bg-white hover:border-slate-200/50"
                  }`}
                >
                  <div
                    className={`p-3.5 rounded-xl transition-all duration-300 ${
                      isActive ? "bg-tata-teal text-white" : "bg-slate-100 text-neutral-grey"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3
                      className={`font-display font-bold text-base transition-colors duration-300 ${
                        isActive ? "text-deep-charcoal" : "text-neutral-grey hover:text-deep-charcoal"
                      }`}
                    >
                      {feat.title}
                    </h3>
                    <p className="text-neutral-grey text-xs mt-1 line-clamp-1">{feat.shortDesc}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Detailed Board (7 columns) */}
          <div className="lg:col-span-7">
            <div className="glassmorphism rounded-3xl p-8 md:p-10 h-full flex flex-col justify-between relative overflow-hidden bg-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeFeature.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col h-full justify-between"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className={`p-4 rounded-2xl bg-gradient-to-br ${activeFeature.color} text-white shadow-lg`}>
                        <ActiveIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-display text-2xl font-bold text-deep-charcoal">{activeFeature.title}</h4>
                        <span className="text-xs text-tata-teal font-semibold tracking-wider uppercase">Tata Motors Ecosystem</span>
                      </div>
                    </div>

                    <p className="text-neutral-grey text-base leading-relaxed mb-6">
                      {activeFeature.shortDesc}
                    </p>

                    <div className="mb-8">
                      <span className="text-xs uppercase tracking-wider text-neutral-grey font-bold block mb-3">Key Highlights</span>
                      <div className="text-2xl font-display font-bold text-deep-charcoal bg-slate-50 px-5 py-4 rounded-xl border border-slate-200/60 inline-block">
                        {activeFeature.highlight}
                      </div>
                    </div>

                    {/* Checkmarks */}
                    <div className="space-y-3.5 mb-8">
                      {activeFeature.points.map((pt, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 rounded-full bg-tata-teal mt-2 flex-shrink-0" />
                          <p className="text-sm text-neutral-grey leading-relaxed">{pt}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-8 mt-auto">
                    {activeFeature.stats.map((st, idx) => (
                      <div key={idx} className="bg-slate-50 border border-slate-200/50 p-4 rounded-xl">
                        <p className="text-[10px] text-neutral-grey uppercase font-bold tracking-wider mb-1 line-clamp-1">
                          {st.label}
                        </p>
                        <p className="text-deep-charcoal text-base font-bold font-display truncate">
                          {st.value}
                        </p>
                      </div>
                    ))}
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
