"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, CheckCircle, ArrowRight, ShieldCheck, Image as ImageIcon, Send } from "lucide-react";

export default function TradeIn() {
  const [step, setStep] = useState<number>(1);
  const [make, setMake] = useState<string>("");
  const [model, setModel] = useState<string>("");
  const [year, setYear] = useState<string>("2020");
  const [kms, setKms] = useState<string>("");
  const [condition, setCondition] = useState<"excellent" | "good" | "fair">("good");
  const [photoSelected, setPhotoSelected] = useState<boolean>(false);
  const [calculatedValue, setCalculatedValue] = useState<{ min: number; max: number } | null>(null);

  const handleNextStep = () => {
    if (step === 1 && (!make || !model || !kms)) {
      alert("Please fill in all vehicle details");
      return;
    }
    setStep(step + 1);
  };

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple valuation calculation logic
    const kmFactor = Math.max(0.4, 1 - Number(kms) / 200000);
    const ageFactor = Math.max(0.3, 1 - (2026 - Number(year)) * 0.08);
    const conditionFactor = condition === "excellent" ? 1.15 : condition === "good" ? 1.0 : 0.8;

    // Estimate base price range
    const baseValue = 800000 * kmFactor * ageFactor * conditionFactor;
    const min = Math.max(120000, Math.round(baseValue * 0.9));
    const max = Math.max(150000, Math.round(baseValue * 1.1));

    setCalculatedValue({ min, max });
    setStep(3);
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleSendWhatsApp = () => {
    if (!calculatedValue) return;
    const text = encodeURIComponent(
      `Hi SGA Motors Sales Team, I evaluated my old ${year} ${make} ${model} (${kms} km, ${condition} condition) on your site. My valuation is ${formatCurrency(
        calculatedValue.min
      )} - ${formatCurrency(calculatedValue.max)}. I want to trade it in for a new Tata EV. Let's arrange physical inspection.`
    );
    window.open(`https://wa.me/919943324545?text=${text}`, "_blank");
  };

  const resetForm = () => {
    setMake("");
    setModel("");
    setYear("2020");
    setKms("");
    setCondition("good");
    setPhotoSelected(false);
    setCalculatedValue(null);
    setStep(1);
  };

  return (
    <section id="trade-in" className="py-16 md:py-24 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-tata-teal font-sans text-xs uppercase tracking-widest font-semibold block mb-3">
            Upgrade Today
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-deep-charcoal tracking-tight mb-4 md:mb-6">
            Sell Your Old Car
          </h2>
          <p className="text-neutral-grey text-base">
            Get instant market-reflective evaluation online. Trade in your older vehicle of any brand for a brand-new Tata EV or SUV.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="max-w-2xl mx-auto glassmorphism rounded-2xl sm:rounded-3xl overflow-hidden p-5 sm:p-8 md:p-10 relative bg-white border border-slate-200 shadow-md">
          
          {/* Steps Indicator */}
          <div className="flex justify-between items-center mb-8 border-b border-slate-100 pb-5">
            <span className="text-xs uppercase tracking-wider text-neutral-grey font-bold">
              Step {step} of 3
            </span>
            <div className="flex gap-2">
              <span className={`w-8 h-1 rounded-full ${step >= 1 ? "bg-tata-teal" : "bg-slate-200"}`} />
              <span className={`w-8 h-1 rounded-full ${step >= 2 ? "bg-tata-teal" : "bg-slate-200"}`} />
              <span className={`w-8 h-1 rounded-full ${step >= 3 ? "bg-tata-teal" : "bg-slate-200"}`} />
            </div>
          </div>

          <AnimatePresence mode="wait">
            
            {/* Step 1: Car Details */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-deep-charcoal text-xs font-semibold mb-2 block">Brand/Make</label>
                    <input
                      type="text"
                      placeholder="e.g. Maruti Suzuki, Hyundai"
                      value={make}
                      onChange={(e) => setMake(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-deep-charcoal focus:outline-none focus:border-tata-teal"
                    />
                  </div>
                  <div>
                    <label className="text-deep-charcoal text-xs font-semibold mb-2 block">Model Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Swift, i20"
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-deep-charcoal focus:outline-none focus:border-tata-teal"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="text-deep-charcoal text-xs font-semibold mb-2 block">Manufacturing Year</label>
                    <select
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-deep-charcoal focus:outline-none focus:border-tata-teal cursor-pointer shadow-sm"
                    >
                      {Array.from({ length: 15 }, (_, i) => 2026 - i).map((y) => (
                        <option key={y} value={y}>
                          {y}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-deep-charcoal text-xs font-semibold mb-2 block">Kilometers Driven</label>
                    <input
                      type="number"
                      placeholder="e.g. 45000"
                      value={kms}
                      onChange={(e) => setKms(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-deep-charcoal focus:outline-none focus:border-tata-teal"
                    />
                  </div>
                </div>

                <button
                  onClick={handleNextStep}
                  className="w-full flex items-center justify-center gap-2 bg-deep-charcoal text-white hover:bg-neutral-800 font-semibold py-4 rounded-xl transition-all duration-300 text-sm mt-8 shadow-sm"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            )}

            {/* Step 2: Condition & Uploads */}
            {step === 2 && (
              <motion.form
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                onSubmit={handleCalculate}
                className="space-y-6"
              >
                <div>
                  <label className="text-deep-charcoal text-xs font-semibold mb-3 block">Overall Vehicle Condition</label>
                  <div className="grid grid-cols-3 gap-2 sm:gap-4">
                    {(["excellent", "good", "fair"] as const).map((cond) => (
                      <button
                        key={cond}
                        type="button"
                        onClick={() => setCondition(cond)}
                        className={`py-2 px-1 sm:py-3.5 sm:px-4 rounded-xl border text-[10px] sm:text-xs uppercase font-bold tracking-wider transition-all duration-300 ${
                          condition === cond
                            ? "bg-tata-teal/10 border-tata-teal text-tata-teal font-bold"
                            : "bg-transparent border-slate-200 text-neutral-grey hover:border-slate-350"
                        }`}
                      >
                        {cond}
                      </button>
                    ))}
                  </div>
                  <p className="text-[11px] text-neutral-grey mt-2">
                    Excellent: No dents, full history. Good: Minor scratches. Fair: Needs bodywork/service.
                  </p>
                </div>

                {/* Simulated Photo Upload */}
                <div>
                  <label className="text-deep-charcoal text-xs font-semibold mb-2 block">Upload Vehicle Photos (Optional)</label>
                  <div
                    onClick={() => setPhotoSelected(true)}
                    className={`border-2 border-dashed rounded-xl p-8 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 ${
                      photoSelected
                        ? "border-tata-teal bg-tata-teal/5"
                        : "border-slate-200 hover:border-slate-300 bg-slate-50/50"
                    }`}
                  >
                    {photoSelected ? (
                      <>
                        <CheckCircle className="w-8 h-8 text-tata-teal mb-2 animate-bounce" />
                        <p className="text-sm font-semibold text-deep-charcoal">4 Photos Selected Successfully</p>
                        <p className="text-xs text-neutral-grey mt-1">Click to re-select</p>
                      </>
                    ) : (
                      <>
                        <ImageIcon className="w-8 h-8 text-neutral-grey mb-2" />
                        <p className="text-sm font-semibold text-deep-charcoal">Click or Drag Car Images Here</p>
                        <p className="text-xs text-neutral-grey mt-1">Supports PNG, JPG (Max 5MB)</p>
                      </>
                    )}
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 bg-slate-100 border border-slate-200 hover:bg-slate-200 text-deep-charcoal font-semibold py-4 rounded-xl transition-all duration-300 text-sm"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-grow flex items-center justify-center gap-2 bg-tata-teal hover:bg-tata-teal/90 text-white font-semibold py-4 rounded-xl transition-all duration-300 text-sm shadow-sm"
                  >
                    <span>Get Valuation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.form>
            )}

            {/* Step 3: Valuation Result */}
            {step === 3 && calculatedValue && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center space-y-6 py-4"
              >
                <div className="inline-flex p-4 rounded-full bg-tata-teal/10 border border-tata-teal/20 text-tata-teal mb-2">
                  <Car className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-neutral-grey text-xs uppercase tracking-widest font-bold block mb-1">Estimated Trade-In Range</span>
                  <h3 className="font-display text-4xl md:text-5xl font-bold text-deep-charcoal tracking-tight">
                    {formatCurrency(calculatedValue.min)} - {formatCurrency(calculatedValue.max)}
                  </h3>
                  <p className="text-neutral-grey text-sm mt-3">
                    Based on market valuations for a {year} {make} {model} ({kms} km).
                  </p>
                </div>

                <div className="bg-slate-50 p-4 rounded-xl max-w-md mx-auto flex items-center gap-3 border border-slate-200/50">
                  <ShieldCheck className="w-5 h-5 text-tata-teal flex-shrink-0" />
                  <p className="text-xs text-neutral-grey leading-relaxed text-left">
                    Our sales executive will do a physical evaluation at your home or showroom to finalize the offer. Values are subject to check.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6 max-w-md mx-auto">
                  <button
                    onClick={resetForm}
                    className="flex-1 bg-slate-100 border border-slate-200 hover:bg-slate-200 text-deep-charcoal font-semibold py-3.5 rounded-xl transition-all duration-300 text-sm"
                  >
                    Evaluate Another
                  </button>
                  <button
                    onClick={handleSendWhatsApp}
                    className="flex-grow flex items-center justify-center gap-2 bg-tata-teal hover:bg-tata-teal/90 text-white font-semibold py-3.5 rounded-xl transition-all duration-300 text-sm shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>WhatsApp Deal</span>
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

        </div>

      </div>
    </section>
  );
}
