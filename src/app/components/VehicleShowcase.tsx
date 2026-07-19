"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Eye, HelpCircle, Shield, Zap, ArrowRight } from "lucide-react";

export interface Vehicle {
  id: string;
  name: string;
  tagline: string;
  price: string;
  rawPrice: number; // in lakhs
  image: string;
  isEV: boolean;
  isNew?: boolean;
  specs: {
    rangeOrMileage: string;
    batteryOrEngine: string;
    safety: string;
    power: string;
    bootSpace: string;
    chargingTime?: string;
  };
}

export const vehiclesData: Vehicle[] = [
  {
    id: "nexon-ev",
    name: "Nexon EV",
    tagline: "India's Best Selling Electric SUV",
    price: "Rs. 12.49 - 17.29 Lakh*",
    rawPrice: 12.49,
    image: "/cars/nexon_ev.webp",
    isEV: true,
    isNew: false,
    specs: {
      rangeOrMileage: "465 km (ARAI)",
      batteryOrEngine: "40.5 kWh",
      safety: "5 Star (GNCAP)",
      power: "145 PS",
      bootSpace: "350 Litres",
      chargingTime: "56 mins (Fast)",
    },
  },
  {
    id: "curvv",
    name: "Curvv",
    tagline: "India's First Coupe SUV",
    price: "Rs. 10 - 19.48 Lakh*",
    rawPrice: 10.00,
    image: "/cars/curvv.webp",
    isEV: false,
    isNew: true,
    specs: {
      rangeOrMileage: "15.0 km/l",
      batteryOrEngine: "1.2L Turbo Petrol / 1.5L Diesel",
      safety: "5 Star (BNCAP)",
      power: "125 PS",
      bootSpace: "447 Litres",
      chargingTime: "N/A",
    },
  },
  {
    id: "sierra",
    name: "Sierra",
    tagline: "The Legendary Reborn SUV",
    price: "Rs. 11.49 - 21.29 Lakh*",
    rawPrice: 11.49,
    image: "/cars/sierra.webp",
    isEV: true,
    isNew: true,
    specs: {
      rangeOrMileage: "500 km (Est)",
      batteryOrEngine: "80 kWh (Est)",
      safety: "5 Star (GNCAP)",
      power: "197 PS",
      bootSpace: "450 Litres",
      chargingTime: "40 mins (Fast)",
    },
  },
  {
    id: "harrier-ev",
    name: "Harrier EV",
    tagline: "Premium Electric Adventure SUV",
    price: "Rs. 21.49 - 27.98 Lakh*",
    rawPrice: 21.49,
    image: "/cars/harrier_ev.webp",
    isEV: true,
    isNew: true,
    specs: {
      rangeOrMileage: "500 km (Est)",
      batteryOrEngine: "60 kWh",
      safety: "5 Star (GNCAP)",
      power: "197 PS",
      bootSpace: "445 Litres",
      chargingTime: "45 mins (Fast)",
    },
  },
  {
    id: "safari",
    name: "Safari",
    tagline: "Premium Flagship 3-Row SUV",
    price: "Rs. 15.50 - 27.04 Lakh*",
    rawPrice: 15.50,
    image: "/cars/safari.webp",
    isEV: false,
    isNew: true,
    specs: {
      rangeOrMileage: "16.30 km/l",
      batteryOrEngine: "2.0L Kryotec Diesel",
      safety: "5 Star (GNCAP)",
      power: "170 PS",
      bootSpace: "420 Litres",
      chargingTime: "N/A",
    },
  },
  {
    id: "tigor",
    name: "Tigor",
    tagline: "The Premium Compact Family Sedan",
    price: "Rs. 6 - 9.55 Lakh*",
    rawPrice: 6.00,
    image: "/cars/tigor.webp",
    isEV: false,
    isNew: false,
    specs: {
      rangeOrMileage: "19.28 km/l",
      batteryOrEngine: "1.2L Revotron Petrol",
      safety: "4 Star (GNCAP)",
      power: "86 PS",
      bootSpace: "419 Litres",
      chargingTime: "N/A",
    },
  },
  {
    id: "altroz",
    name: "Altroz",
    tagline: "The Premium Gold Standard Hatchback",
    price: "Rs. 6.89 - 11.49 Lakh*",
    rawPrice: 6.89,
    image: "/cars/altroz.webp",
    isEV: false,
    isNew: false,
    specs: {
      rangeOrMileage: "19.33 km/l",
      batteryOrEngine: "1.2L Revotron Petrol",
      safety: "5 Star (GNCAP)",
      power: "88 PS",
      bootSpace: "345 Litres",
      chargingTime: "N/A",
    },
  },
  {
    id: "tigor-ev",
    name: "Tigor EV",
    tagline: "The Safe and Smart Electric Sedan",
    price: "Rs. 12.49 - 13.75 Lakh*",
    rawPrice: 12.49,
    image: "/cars/tigor_ev.webp",
    isEV: true,
    isNew: false,
    specs: {
      rangeOrMileage: "315 km (ARAI)",
      batteryOrEngine: "26 kWh Ziptron",
      safety: "4 Star (GNCAP)",
      power: "75 PS",
      bootSpace: "316 Litres",
      chargingTime: "59 mins (Fast)",
    },
  },
  {
    id: "nexon",
    name: "Nexon",
    tagline: "India's Premier Compact SUV",
    price: "Rs. 8 - 15.60 Lakh*",
    rawPrice: 8.00,
    image: "/cars/nexon.webp",
    isEV: false,
    isNew: false,
    specs: {
      rangeOrMileage: "17.44 km/l",
      batteryOrEngine: "1.2L Turbo Petrol",
      safety: "5 Star (GNCAP)",
      power: "120 PS",
      bootSpace: "382 Litres",
      chargingTime: "N/A",
    },
  },
  {
    id: "harrier",
    name: "Harrier",
    tagline: "The Domineering Premium SUV",
    price: "Rs. 15 - 26.69 Lakh*",
    rawPrice: 15.00,
    image: "/cars/harrier.webp",
    isEV: false,
    isNew: false,
    specs: {
      rangeOrMileage: "16.80 km/l",
      batteryOrEngine: "2.0L Kryotec Diesel",
      safety: "5 Star (GNCAP)",
      power: "170 PS",
      bootSpace: "445 Litres",
      chargingTime: "N/A",
    },
  },
];

interface ShowcaseProps {
  selectedCars: string[];
  onToggleCompare: (id: string) => void;
  onBookClick: (modelName: string) => void;
}

export default function VehicleShowcase({ selectedCars, onToggleCompare, onBookClick }: ShowcaseProps) {
  const [filter, setFilter] = useState<"all" | "ev" | "suv" | "sedan" | "hatch">("all");
  const [activeSpecsId, setActiveSpecsId] = useState<string | null>(null);

  const filteredVehicles = vehiclesData.filter((vehicle) => {
    if (filter === "ev") return vehicle.isEV;
    if (filter === "suv") return vehicle.id === "harrier-ev" || vehicle.id === "curvv" || vehicle.id === "nexon-ev" || vehicle.id === "safari" || vehicle.id === "sierra" || vehicle.id === "nexon" || vehicle.id === "harrier";
    if (filter === "sedan") return vehicle.id === "tigor" || vehicle.id === "tigor-ev";
    if (filter === "hatch") return vehicle.id === "altroz";
    return true;
  });

  return (
    <section id="cars" className="py-24 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-deep-charcoal tracking-tight">
              Explore Our Range
            </h2>
          </div>

          <div className="flex items-center gap-6 mt-4 md:mt-0">
            {/* View All Link */}
            <a
              href="#cars"
              className="text-sm font-bold text-[#2D509F] hover:text-[#1e3a75] flex items-center gap-1 transition-colors duration-200"
            >
              <span>View All Vehicles</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Filter Pills */}
            <div className="flex bg-slate-50 p-1 rounded-full border border-slate-100 max-w-md">
              {([
                { key: "all", label: "All" },
                { key: "suv", label: "SUVs" },
                { key: "ev", label: "EVs" },
                { key: "sedan", label: "Sedans" },
                { key: "hatch", label: "Hatchbacks" },
              ] as const).map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 ${
                    filter === tab.key
                      ? "bg-[#2D509F] text-white shadow-sm"
                      : "text-neutral-grey hover:text-deep-charcoal"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredVehicles.map((vehicle) => {
              const isComparing = selectedCars.includes(vehicle.id);
              const showSpecs = activeSpecsId === vehicle.id;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={vehicle.id}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col relative group"
                >
                  {/* Top tags */}
                  <div className="absolute top-4 left-4 z-10 flex gap-1.5">
                    {vehicle.isEV && (
                      <span className="flex items-center bg-[#E5F7F6] text-[#00A499] text-[9px] font-black px-2 py-0.5 rounded border border-[#00A499]/20 uppercase tracking-wide">
                        EV
                      </span>
                    )}
                    {vehicle.isNew && (
                      <span className="flex items-center bg-emerald-50 text-emerald-600 text-[9px] font-black px-2 py-0.5 rounded border border-emerald-500/20 uppercase tracking-wide">
                        NEW
                      </span>
                    )}
                  </div>

                  {/* Image container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-50 border-b border-slate-100">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
                    />
                  </div>

                  {/* Vehicle Details */}
                  <div className="p-5 flex flex-col flex-grow relative bg-white">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-display text-lg font-bold text-deep-charcoal">
                        {vehicle.name}
                      </h3>
                    </div>
                    <p className="text-neutral-grey text-[11px] font-semibold mb-4">{vehicle.tagline}</p>
                    
                    <div className="text-base font-black text-[#2D509F] mb-4">
                      {vehicle.price}
                    </div>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-4 mb-6">
                      <div>
                        <p className="text-neutral-grey text-[9px] uppercase font-bold mb-0.5">
                          {vehicle.isEV ? "Range" : "Mileage"}
                        </p>
                        <p className="text-deep-charcoal text-[11px] font-extrabold">
                          {vehicle.specs.rangeOrMileage.split(" ")[0]} {vehicle.isEV ? "km" : "km/l"}
                        </p>
                      </div>
                      <div>
                        <p className="text-neutral-grey text-[9px] uppercase font-bold mb-0.5">
                          Safety
                        </p>
                        <p className="text-deep-charcoal text-[11px] font-extrabold">
                          {vehicle.specs.safety.split(" ")[0]} Star
                        </p>
                      </div>
                      <div>
                        <p className="text-neutral-grey text-[9px] uppercase font-bold mb-0.5">
                          Power
                        </p>
                        <p className="text-deep-charcoal text-[11px] font-extrabold">
                          {vehicle.specs.power}
                        </p>
                      </div>
                    </div>

                    {/* Quick Specs Drawer Toggle Button */}
                    <button
                      onClick={() => setActiveSpecsId(showSpecs ? null : vehicle.id)}
                      className="absolute top-5 right-5 text-neutral-grey hover:text-deep-charcoal p-1.5 border border-slate-200 rounded-full transition-all duration-200 hover:bg-slate-50"
                      aria-label="View specifications"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>

                    {/* Action Panel */}
                    <div className="mt-auto flex gap-2">
                      <button
                        onClick={() => onBookClick(vehicle.name)}
                        className="flex-1 bg-deep-charcoal text-white font-bold py-2.5 rounded-xl hover:bg-neutral-800 transition-all duration-200 text-xs shadow-sm"
                      >
                        Book Drive
                      </button>

                      {/* Compare Toggle */}
                      <button
                        onClick={() => onToggleCompare(vehicle.id)}
                        className={`flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border text-xs font-bold transition-all duration-200 ${
                          isComparing
                            ? "bg-tata-teal/10 border-tata-teal text-tata-teal"
                            : "border-slate-200 text-deep-charcoal hover:bg-slate-50"
                        }`}
                      >
                        {isComparing ? (
                          <>
                            <Check className="w-3 h-3" />
                            <span>Selected</span>
                          </>
                        ) : (
                          <span>Compare</span>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Absolute Specs Drawer Overlay */}
                  <AnimatePresence>
                    {showSpecs && (
                      <motion.div
                        initial={{ opacity: 0, y: "100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="absolute inset-0 bg-white p-6 flex flex-col justify-between z-20"
                      >
                        <div>
                          <div className="flex justify-between items-center mb-4">
                            <h4 className="font-display text-sm font-bold text-deep-charcoal">
                              {vehicle.name} Specs
                            </h4>
                            <button
                              onClick={() => setActiveSpecsId(null)}
                              className="text-neutral-grey hover:text-deep-charcoal text-[10px] uppercase font-bold tracking-widest border border-slate-200 px-2.5 py-1 rounded-full"
                            >
                              Close
                            </button>
                          </div>

                          <div className="space-y-2 text-xs">
                            <div className="flex justify-between border-b border-slate-100 pb-1.5">
                              <span className="text-neutral-grey">Range/Mileage</span>
                              <span className="text-deep-charcoal font-bold">{vehicle.specs.rangeOrMileage}</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-100 pb-1.5">
                              <span className="text-neutral-grey">Engine Size</span>
                              <span className="text-deep-charcoal font-bold">{vehicle.specs.batteryOrEngine}</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-100 pb-1.5">
                              <span className="text-neutral-grey">Power Output</span>
                              <span className="text-deep-charcoal font-bold">{vehicle.specs.power}</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-100 pb-1.5">
                              <span className="text-neutral-grey">Safety Rating</span>
                              <span className="text-tata-teal font-bold">{vehicle.specs.safety}</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-100 pb-1.5">
                              <span className="text-neutral-grey">Boot Capacity</span>
                              <span className="text-deep-charcoal font-bold">{vehicle.specs.bootSpace}</span>
                            </div>
                          </div>
                        </div>

                        <div className="bg-slate-50 p-3 rounded-xl flex items-center gap-2 border border-slate-200/50">
                          <HelpCircle className="w-4 h-4 text-tata-teal flex-shrink-0" />
                          <p className="text-[10px] text-neutral-grey leading-relaxed">
                            Need a custom offer details? Chat with our AI Sales Assistant.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
