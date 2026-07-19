"use client";

import { useState, useEffect } from "react";
import { vehiclesData, Vehicle } from "./VehicleShowcase";
import { Scale, Zap, Info, ShieldCheck, ArrowRight } from "lucide-react";

interface CompareProps {
  initialCompareIds: string[];
  onBookClick: (modelName: string) => void;
}

export default function VehicleComparison({ initialCompareIds, onBookClick }: CompareProps) {
  const [carAId, setCarAId] = useState<string>("harrier-ev");
  const [carBId, setCarBId] = useState<string>("curvv-ev");

  // Keep state sync with parent comparisons selection
  useEffect(() => {
    if (initialCompareIds.length > 0) {
      setCarAId(initialCompareIds[0]);
      if (initialCompareIds.length > 1) {
        setCarBId(initialCompareIds[1]);
      }
    }
  }, [initialCompareIds]);

  const carA = vehiclesData.find((v) => v.id === carAId) || vehiclesData[0];
  const carB = vehiclesData.find((v) => v.id === carBId) || vehiclesData[1];

  const specsToCompare = [
    { label: "Segment / Model Type", key: "tagline" },
    { label: "Price Range", key: "price" },
    { label: "Electric / Engine Fuel", value: (car: Vehicle) => car.isEV ? "Electric (Ziptron)" : "Diesel (Kryotec)" },
    { label: "Power Output", value: (car: Vehicle) => car.specs.power },
    { label: "Range / Mileage", value: (car: Vehicle) => car.specs.rangeOrMileage },
    { label: "Battery / Engine Size", value: (car: Vehicle) => car.specs.batteryOrEngine },
    { label: "Safety Rating", value: (car: Vehicle) => car.specs.safety, highlight: true },
    { label: "Boot Capacity", value: (car: Vehicle) => car.specs.bootSpace },
    { label: "Fast Charging (DC)", value: (car: Vehicle) => car.isEV ? car.specs.chargingTime : "Not Applicable" },
  ];

  return (
    <section id="compare" className="py-24 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-tata-teal font-sans text-xs uppercase tracking-widest font-semibold block mb-3">
            Match Spec-for-Spec
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-charcoal tracking-tight mb-6">
            Compare Models
          </h2>
          <p className="text-neutral-grey text-base">
            Can't decide between an EV coupe, premium electric SUV, or flagship Safari diesel? Select models below to see details.
          </p>
        </div>

        {/* Matrix Container */}
        <div className="glassmorphism rounded-3xl overflow-hidden bg-white border border-slate-200">
          
          {/* Header Row (Selectors) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-b border-slate-200 bg-slate-50">
            <div className="p-6 md:p-8 flex items-center gap-3 border-b md:border-b-0 md:border-r border-slate-200">
              <Scale className="w-5 h-5 text-tata-teal" />
              <span className="font-display font-bold text-lg text-deep-charcoal">Compare Tata Fleet</span>
            </div>

            {/* Car A Selector */}
            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col justify-between">
              <label className="text-neutral-grey text-[10px] uppercase font-bold tracking-widest mb-2 block">
                Vehicle A
              </label>
              <select
                value={carAId}
                onChange={(e) => setCarAId(e.target.value)}
                className="bg-white border border-slate-200 text-deep-charcoal rounded-xl px-4 py-3 text-sm font-semibold w-full focus:outline-none focus:border-tata-teal transition-all cursor-pointer shadow-sm"
              >
                {vehiclesData.map((car) => (
                  <option key={car.id} value={car.id} disabled={car.id === carBId}>
                    {car.name} {car.isEV ? "(EV)" : ""}
                  </option>
                ))}
              </select>
            </div>

            {/* Car B Selector */}
            <div className="p-6 md:p-8 flex flex-col justify-between">
              <label className="text-neutral-grey text-[10px] uppercase font-bold tracking-widest mb-2 block">
                Vehicle B
              </label>
              <select
                value={carBId}
                onChange={(e) => setCarBId(e.target.value)}
                className="bg-white border border-slate-200 text-deep-charcoal rounded-xl px-4 py-3 text-sm font-semibold w-full focus:outline-none focus:border-tata-teal transition-all cursor-pointer shadow-sm"
              >
                {vehiclesData.map((car) => (
                  <option key={car.id} value={car.id} disabled={car.id === carAId}>
                    {car.name} {car.isEV ? "(EV)" : ""}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Info / Image Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-b border-slate-200 items-stretch bg-slate-50/50">
            <div className="hidden md:flex p-8 flex-col justify-center border-r border-slate-200">
              <div className="bg-white p-4 rounded-xl flex gap-3 border border-slate-200/60 shadow-sm">
                <Info className="w-5 h-5 text-tata-teal flex-shrink-0" />
                <p className="text-xs text-neutral-grey leading-relaxed">
                  Tata's Gen2 EV architecture delivers greater thermal management and increased floor space.
                </p>
              </div>
            </div>

            {/* Car A Info */}
            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-slate-200 flex flex-col items-center justify-center text-center">
              <img
                src={carA.image}
                alt={carA.name}
                className="w-32 h-20 md:w-44 md:h-28 object-cover rounded-lg mb-4 shadow-sm border border-slate-100"
              />
              <h4 className="font-display font-bold text-deep-charcoal text-lg">{carA.name}</h4>
              <p className="text-tata-teal text-sm font-bold mt-1">{carA.price}</p>
            </div>

            {/* Car B Info */}
            <div className="p-6 md:p-8 flex flex-col items-center justify-center text-center">
              <img
                src={carB.image}
                alt={carB.name}
                className="w-32 h-20 md:w-44 md:h-28 object-cover rounded-lg mb-4 shadow-sm border border-slate-100"
              />
              <h4 className="font-display font-bold text-deep-charcoal text-lg">{carB.name}</h4>
              <p className="text-tata-teal text-sm font-bold mt-1">{carB.price}</p>
            </div>
          </div>

          {/* Comparison Rows */}
          <div className="divide-y divide-slate-150 bg-white">
            {specsToCompare.map((spec, index) => {
              const valA = spec.value ? spec.value(carA) : (carA as any)[spec.key!];
              const valB = spec.value ? spec.value(carB) : (carB as any)[spec.key!];
              const isHighlightedRow = spec.highlight;

              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 md:grid-cols-3 gap-0 text-sm transition-colors duration-200 hover:bg-slate-50/50 ${
                    isHighlightedRow ? "bg-tata-teal/[0.03]" : ""
                  }`}
                >
                  {/* Label */}
                  <div className="p-4 md:p-6 text-zinc-650 font-bold border-b md:border-b-0 md:border-r border-slate-200 flex items-center">
                    {isHighlightedRow && <ShieldCheck className="w-4 h-4 text-tata-teal mr-2" />}
                    {spec.label}
                  </div>

                  {/* Value A */}
                  <div className="p-4 md:p-6 text-deep-charcoal border-b md:border-b-0 md:border-r border-slate-200 font-semibold flex items-center">
                    {valA}
                  </div>

                  {/* Value B */}
                  <div className="p-4 md:p-6 text-deep-charcoal font-semibold flex items-center">
                    {valB}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action Footer Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-slate-200 bg-slate-50">
            <div className="hidden md:block p-8 border-r border-slate-200"></div>

            {/* Book A */}
            <div className="p-6 md:p-8 border-b md:border-b-0 md:border-r border-slate-200">
              <button
                onClick={() => onBookClick(carA.name)}
                className="w-full flex items-center justify-center gap-2 bg-deep-charcoal hover:bg-neutral-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 text-sm shadow-sm"
              >
                <span>Book {carA.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Book B */}
            <div className="p-6 md:p-8">
              <button
                onClick={() => onBookClick(carB.name)}
                className="w-full flex items-center justify-center gap-2 bg-deep-charcoal hover:bg-neutral-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 text-sm shadow-sm"
              >
                <span>Book {carB.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
