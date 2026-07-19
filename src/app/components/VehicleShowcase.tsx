"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Eye, HelpCircle, Shield, Zap } from "lucide-react";

export interface Vehicle {
  id: string;
  name: string;
  tagline: string;
  price: string;
  rawPrice: number; // in lakhs
  image: string;
  isEV: boolean;
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
    id: "harrier-ev",
    name: "Harrier EV",
    tagline: "Premium Electric Adventure SUV",
    price: "Starting ₹21.49 L*",
    rawPrice: 21.49,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=600",
    isEV: true,
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
    id: "curvv-ev",
    name: "Curvv EV",
    tagline: "India's First Electric SUV Coupe",
    price: "Starting ₹17.49 L*",
    rawPrice: 17.49,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=600",
    isEV: true,
    specs: {
      rangeOrMileage: "585 km (ARAI)",
      batteryOrEngine: "55 kWh",
      safety: "5 Star (BNCAP)",
      power: "167 PS",
      bootSpace: "500 Litres",
      chargingTime: "40 mins (Fast)",
    },
  },
  {
    id: "nexon-ev",
    name: "Nexon EV",
    tagline: "India's Best Selling Electric SUV",
    price: "Starting ₹12.49 L*",
    rawPrice: 12.49,
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=600",
    isEV: true,
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
    id: "safari",
    name: "Safari",
    tagline: "Premium Flagship 3-Row SUV",
    price: "Starting ₹16.19 L*",
    rawPrice: 16.19,
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=600",
    isEV: false,
    specs: {
      rangeOrMileage: "16.3 kmpl (ARAI)",
      batteryOrEngine: "2.0L Kryotec Diesel",
      safety: "5 Star (GNCAP)",
      power: "170 PS",
      bootSpace: "420 Litres",
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
  const [filter, setFilter] = useState<"all" | "ev" | "suv">("all");
  const [activeSpecsId, setActiveSpecsId] = useState<string | null>(null);

  const filteredVehicles = vehiclesData.filter((vehicle) => {
    if (filter === "ev") return vehicle.isEV;
    if (filter === "suv") return !vehicle.isEV || vehicle.id === "harrier-ev" || vehicle.id === "safari";
    return true;
  });

  return (
    <section id="cars" className="py-24 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-tata-teal font-sans text-xs uppercase tracking-widest font-semibold block mb-3">
              Explore Our Fleet
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-charcoal tracking-tight">
              Flagship Vehicles
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex bg-slate-100 p-1 rounded-full border border-slate-200 mt-6 md:mt-0 max-w-sm">
            {(["all", "ev", "suv"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  filter === tab
                    ? "bg-white text-deep-charcoal shadow-sm border border-slate-200/40"
                    : "text-neutral-grey hover:text-deep-charcoal"
                }`}
              >
                {tab === "all" ? "All Models" : tab === "ev" ? "Tata EV" : "SUVs"}
              </button>
            ))}
          </div>
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  className="glassmorphism rounded-3xl overflow-hidden group flex flex-col relative"
                >
                  {/* Top tags */}
                  <div className="absolute top-6 left-6 z-10 flex gap-2">
                    {vehicle.isEV && (
                      <span className="flex items-center gap-1 bg-tata-teal text-white text-[10px] font-bold px-3 py-1 rounded-full tracking-wider uppercase">
                        <Zap className="w-3 h-3 fill-white" /> EV
                      </span>
                    )}
                    <span className="flex items-center gap-1 bg-slate-900/80 text-white backdrop-blur-sm border border-white/10 text-[10px] font-bold px-3 py-1 rounded-full tracking-wider uppercase">
                      <Shield className="w-3 h-3 text-tata-teal" /> 5-Star Safety
                    </span>
                  </div>

                  {/* Image container */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
                  </div>

                  {/* Vehicle Details */}
                  <div className="p-8 flex flex-col flex-grow relative bg-white">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-display text-2xl font-bold text-deep-charcoal">
                        {vehicle.name}
                      </h3>
                      <span className="text-xl font-bold text-tata-teal">
                        {vehicle.price}
                      </span>
                    </div>
                    <p className="text-neutral-grey text-sm mb-6">{vehicle.tagline}</p>

                    {/* Specs Grid */}
                    <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-6 mb-8">
                      <div>
                        <p className="text-neutral-grey text-[10px] uppercase font-bold mb-1">
                          {vehicle.isEV ? "Max Range" : "Mileage"}
                        </p>
                        <p className="text-deep-charcoal text-sm font-bold">
                          {vehicle.specs.rangeOrMileage}
                        </p>
                      </div>
                      <div>
                        <p className="text-neutral-grey text-[10px] uppercase font-bold mb-1">
                          {vehicle.isEV ? "Battery Cap" : "Engine"}
                        </p>
                        <p className="text-deep-charcoal text-sm font-bold">
                          {vehicle.specs.batteryOrEngine}
                        </p>
                      </div>
                      <div>
                        <p className="text-neutral-grey text-[10px] uppercase font-bold mb-1">
                          Power
                        </p>
                        <p className="text-deep-charcoal text-sm font-bold">
                          {vehicle.specs.power}
                        </p>
                      </div>
                    </div>

                    {/* Quick Specs Drawer Toggle Button */}
                    <button
                      onClick={() => setActiveSpecsId(showSpecs ? null : vehicle.id)}
                      className="absolute top-8 right-8 text-neutral-grey hover:text-deep-charcoal p-2 border border-slate-200 rounded-full transition-all duration-300 hover:bg-slate-100"
                      aria-label="View specifications"
                    >
                      <Eye className="w-4 h-4" />
                    </button>

                    {/* Action Panel */}
                    <div className="mt-auto flex gap-4">
                      <button
                        onClick={() => onBookClick(vehicle.name)}
                        className="flex-1 bg-deep-charcoal text-white font-semibold py-3.5 px-6 rounded-xl hover:bg-neutral-800 transition-all duration-300 text-center text-sm shadow-md"
                      >
                        Book Test Drive
                      </button>

                      {/* Compare Toggle */}
                      <button
                        onClick={() => onToggleCompare(vehicle.id)}
                        className={`flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border text-sm font-semibold transition-all duration-300 ${
                          isComparing
                            ? "bg-tata-teal/10 border-tata-teal text-tata-teal"
                            : "border-slate-200 text-deep-charcoal hover:bg-slate-50"
                        }`}
                      >
                        {isComparing ? (
                          <>
                            <Check className="w-4 h-4" />
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
                        className="absolute inset-0 bg-white/98 p-8 flex flex-col justify-between z-20"
                      >
                        <div>
                          <div className="flex justify-between items-center mb-6">
                            <h4 className="font-display text-xl font-bold text-deep-charcoal">
                              {vehicle.name} Specifications
                            </h4>
                            <button
                              onClick={() => setActiveSpecsId(null)}
                              className="text-neutral-grey hover:text-deep-charcoal text-xs uppercase font-bold tracking-widest border border-slate-350 px-3.5 py-2 rounded-full"
                            >
                              Close
                            </button>
                          </div>

                          <div className="space-y-4">
                            <div className="flex justify-between border-b border-slate-100 pb-2.5">
                              <span className="text-neutral-grey text-sm">Range/Mileage</span>
                              <span className="text-deep-charcoal text-sm font-bold">{vehicle.specs.rangeOrMileage}</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-100 pb-2.5">
                              <span className="text-neutral-grey text-sm">Battery/Engine Size</span>
                              <span className="text-deep-charcoal text-sm font-bold">{vehicle.specs.batteryOrEngine}</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-100 pb-2.5">
                              <span className="text-neutral-grey text-sm">Max Power Output</span>
                              <span className="text-deep-charcoal text-sm font-bold">{vehicle.specs.power}</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-100 pb-2.5">
                              <span className="text-neutral-grey text-sm">Safety Rating</span>
                              <span className="text-tata-teal text-sm font-bold">{vehicle.specs.safety}</span>
                            </div>
                            <div className="flex justify-between border-b border-slate-100 pb-2.5">
                              <span className="text-neutral-grey text-sm">Boot Capacity</span>
                              <span className="text-deep-charcoal text-sm font-bold">{vehicle.specs.bootSpace}</span>
                            </div>
                            {vehicle.isEV && (
                              <div className="flex justify-between border-b border-slate-100 pb-2.5">
                                <span className="text-neutral-grey text-sm">DC Fast Charge (10-80%)</span>
                                <span className="text-deep-charcoal text-sm font-bold">{vehicle.specs.chargingTime}</span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-xl flex items-center gap-3 border border-slate-200/50">
                          <HelpCircle className="w-5 h-5 text-tata-teal flex-shrink-0" />
                          <p className="text-xs text-neutral-grey leading-relaxed">
                            Need a custom offer or corporate discount detail for this model? Chat with our AI Sales Assistant or click WhatsApp.
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
