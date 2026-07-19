"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Clock, Navigation, CheckCircle2, Calendar } from "lucide-react";

interface Showroom {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  sundayHours: string;
  mapCoords: { x: number; y: number }; // relative position in percentage on simulated map
  services: string[];
  directionsUrl: string;
}

const showroomsData: Showroom[] = [
  {
    id: "coimbatore",
    name: "Coimbatore (Flagship)",
    address: "1024, Mettupalayam Road, Near GN Mills, Coimbatore, TN - 641029",
    phone: "+91 99433 24545",
    hours: "9:00 AM - 8:00 PM (Mon - Sat)",
    sundayHours: "10:00 AM - 5:00 PM",
    mapCoords: { x: 35, y: 55 },
    services: ["New Car Sales", "EV Experience Zone", "Tata Genuine Service", "Finance & Exchange"],
    directionsUrl: "https://maps.google.com/?q=SGA+Motors+Tata+Mettupalayam+Road+Coimbatore",
  },
  {
    id: "salem",
    name: "Salem",
    address: "Bypass Road, Kondalampatti, Salem, TN - 636010",
    phone: "+91 99433 24546",
    hours: "9:00 AM - 7:30 PM (Mon - Sat)",
    sundayHours: "10:00 AM - 4:00 PM",
    mapCoords: { x: 70, y: 35 },
    services: ["New Car Sales", "EV Charging Station", "Used Car Exchange"],
    directionsUrl: "https://maps.google.com/?q=SGA+Motors+Tata+Salem",
  },
  {
    id: "namakkal",
    name: "Namakkal",
    address: "85/2, Trichy Road, Near Collectorate, Namakkal, TN - 637001",
    phone: "+91 99433 24547",
    hours: "9:00 AM - 7:30 PM (Mon - Sat)",
    sundayHours: "Closed on Sundays",
    mapCoords: { x: 75, y: 65 },
    services: ["New Car Sales", "Exchange Point", "Instant Finance Approval"],
    directionsUrl: "https://maps.google.com/?q=SGA+Motors+Tata+Namakkal",
  },
  {
    id: "ooty",
    name: "Ooty",
    address: "Commercial Road, Near Charring Cross, Ooty, TN - 643001",
    phone: "+91 99433 24548",
    hours: "9:30 AM - 7:00 PM (Mon - Sat)",
    sundayHours: "Closed on Sundays",
    mapCoords: { x: 20, y: 25 },
    services: ["New Car Sales", "All-Wheel Drive SUV Zone", "Winter Care Service"],
    directionsUrl: "https://maps.google.com/?q=SGA+Motors+Tata+Ooty",
  },
  {
    id: "udumalpet",
    name: "Udumalpet",
    address: "Palani Highway Road, Near Bypass Junction, Udumalpet, TN - 642126",
    phone: "+91 99433 24549",
    hours: "9:00 AM - 7:30 PM (Mon - Sat)",
    sundayHours: "10:00 AM - 2:00 PM",
    mapCoords: { x: 40, y: 80 },
    services: ["New Car Sales", "EV Charging Point", "Accessories Hub"],
    directionsUrl: "https://maps.google.com/?q=SGA+Motors+Tata+Udumalpet",
  },
];

interface ShowroomsProps {
  onBookClick: (modelName: string) => void;
}

export default function Showrooms({ onBookClick }: ShowroomsProps) {
  const [activeId, setActiveId] = useState<string>("coimbatore");
  const activeShowroom = showroomsData.find((s) => s.id === activeId) || showroomsData[0];

  return (
    <section id="showrooms" className="py-16 md:py-24 bg-slate-50 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-tata-teal font-sans text-xs uppercase tracking-widest font-semibold block mb-3">
            Visit Us Nearby
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-deep-charcoal tracking-tight mb-4 md:mb-6">
            Our Showrooms
          </h2>
          <p className="text-neutral-grey text-base">
            With 15+ showrooms and premium touchpoints across Western Tamil Nadu, we are always near you.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Showroom list and detail (7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Showroom selector pills */}
            <div className="flex flex-wrap gap-2 pb-2">
              {showroomsData.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setActiveId(s.id)}
                  className={`px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl text-xs font-bold uppercase tracking-wider border transition-all duration-300 ${
                    activeId === s.id
                      ? "bg-deep-charcoal border-deep-charcoal text-white shadow-md font-bold"
                      : "bg-white border-slate-200 text-neutral-grey hover:bg-slate-100 hover:text-deep-charcoal"
                  }`}
                >
                  {s.name.split(" ")[0]}
                </button>
              ))}
            </div>
 
            {/* Selected Showroom Detail Box */}
            <div className="glassmorphism rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 flex-grow flex flex-col justify-between bg-white border border-slate-200 shadow-sm">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeShowroom.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {/* Title & Status */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <h3 className="font-display text-2xl font-bold text-deep-charcoal">
                      {activeShowroom.name} Showroom
                    </h3>
                    <span className="flex items-center gap-1 bg-emerald-500/10 text-emerald-600 border border-emerald-500/20 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      ● Live Booking Open
                    </span>
                  </div>

                  {/* Vitals */}
                  <div className="space-y-4 pt-2">
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-tata-teal flex-shrink-0 mt-1" />
                      <p className="text-neutral-grey text-sm leading-relaxed">{activeShowroom.address}</p>
                    </div>

                    <div className="flex items-center gap-4">
                      <Phone className="w-5 h-5 text-tata-teal flex-shrink-0" />
                      <a href={`tel:${activeShowroom.phone}`} className="text-deep-charcoal hover:text-tata-teal text-sm font-semibold transition-colors duration-200">
                        {activeShowroom.phone}
                      </a>
                    </div>

                    <div className="flex items-start gap-4">
                      <Clock className="w-5 h-5 text-tata-teal flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-deep-charcoal text-sm font-semibold">{activeShowroom.hours}</p>
                        <p className="text-neutral-grey text-xs mt-0.5">Sunday: {activeShowroom.sundayHours}</p>
                      </div>
                    </div>
                  </div>

                  {/* Services Available */}
                  <div className="border-t border-slate-100 pt-6">
                    <span className="text-deep-charcoal text-xs uppercase tracking-wider font-bold block mb-3">Dealer Services</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {activeShowroom.services.map((srv, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-neutral-grey text-sm">
                          <CheckCircle2 className="w-4 h-4 text-tata-teal flex-shrink-0" />
                          <span>{srv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-100">
                    <a
                      href={activeShowroom.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-slate-100 border border-slate-200 hover:bg-slate-200 text-deep-charcoal font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 text-sm shadow-sm"
                    >
                      <Navigation className="w-4 h-4 text-tata-teal" />
                      <span>Get Directions</span>
                    </a>
                    <button
                      onClick={() => onBookClick("")}
                      className="flex-grow flex items-center justify-center gap-2 bg-tata-teal hover:bg-tata-teal/90 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-300 text-sm shadow-sm"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Showroom Visit</span>
                    </button>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

          {/* Interactive Map Visual (5 columns) */}
          <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-0">
            <div className="glassmorphism rounded-2xl sm:rounded-3xl overflow-hidden h-full w-full relative flex flex-col justify-between p-6 bg-white border border-slate-200 shadow-sm">
              
              {/* Map Title Tag */}
              <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-slate-200 shadow-sm">
                <span className="text-[10px] uppercase text-tata-teal font-bold tracking-widest">SGA Tamil Nadu Network</span>
              </div>

              {/* Simulated Map Canvas */}
              <div className="absolute inset-0 bg-slate-50/50 flex items-center justify-center">
                
                {/* Visual grid lines to resemble a tech map */}
                <div className="w-full h-full opacity-[0.04] bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:24px_24px]" />
                
                {/* Connecting lines */}
                <svg className="absolute inset-0 w-full h-full opacity-30 stroke-slate-400 stroke-dasharray-[4,4]" style={{ strokeDasharray: "4,4" }}>
                  <line x1="35%" y1="55%" x2="70%" y2="35%" strokeWidth="1.5" />
                  <line x1="35%" y1="55%" x2="75%" y2="65%" strokeWidth="1.5" />
                  <line x1="35%" y1="55%" x2="20%" y2="25%" strokeWidth="1.5" />
                  <line x1="35%" y1="55%" x2="40%" y2="80%" strokeWidth="1.5" />
                </svg>

                {/* Showroom Hotspot Pins */}
                {showroomsData.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setActiveId(s.id)}
                    className="absolute group -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300"
                    style={{ left: `${s.mapCoords.x}%`, top: `${s.mapCoords.y}%` }}
                  >
                    <span className="relative flex h-4 w-4">
                      {activeId === s.id && (
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tata-teal opacity-75"></span>
                      )}
                      <span
                        className={`relative inline-flex rounded-full h-4 w-4 border-2 ${
                          activeId === s.id
                            ? "bg-tata-teal border-white scale-110"
                            : "bg-white border-neutral-grey group-hover:border-deep-charcoal scale-100"
                        } transition-all duration-300`}
                      />
                    </span>
                    {/* Hover text label */}
                    <span
                      className={`absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap bg-white/90 backdrop-blur-sm border px-2.5 py-1 rounded text-[9px] font-bold uppercase tracking-wider transition-all duration-300 shadow-sm ${
                        activeId === s.id
                          ? "border-tata-teal text-deep-charcoal scale-100 opacity-100"
                          : "border-slate-200 text-neutral-grey scale-95 opacity-55 group-hover:opacity-100 group-hover:scale-100"
                      }`}
                    >
                      {s.name.split(" ")[0]}
                    </span>
                  </button>
                ))}

              </div>

              {/* Map Footer Helper */}
              <div className="relative mt-auto z-10 text-[11px] text-neutral-grey bg-white/90 backdrop-blur-sm p-4 rounded-xl border border-slate-200 text-center shadow-sm leading-relaxed">
                Click map pins to jump between Coimbatore, Ooty, Salem, Namakkal, and Udumalpet dealership details.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
