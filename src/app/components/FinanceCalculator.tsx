"use client";

import { useState } from "react";
import { Coins, HelpCircle, ArrowUpRight, Percent } from "lucide-react";

export default function FinanceCalculator() {
  const [vehiclePrice, setVehiclePrice] = useState<number>(1800000); // 18 Lakhs
  const [downPayment, setDownPayment] = useState<number>(300000); // 3 Lakhs
  const [tenureYears, setTenureYears] = useState<number>(5); // 5 years
  const [interestRate, setInterestRate] = useState<number>(8.75); // 8.75%

  const loanAmount = Math.max(0, vehiclePrice - downPayment);
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;

  // EMI Formula: [P x R x (1+R)^N]/[(1+R)^N-1]
  const emi =
    loanAmount > 0 && monthlyRate > 0
      ? (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1)
      : 0;

  const totalPayable = emi * totalMonths;
  const totalInterest = Math.max(0, totalPayable - loanAmount);

  // Format currency in Indian Style (Lakhs)
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  // Percent representation for SVG ring graph
  const interestRatio = totalPayable > 0 ? (totalInterest / totalPayable) * 100 : 0;
  const strokeDashoffset = 251.2 - (251.2 * interestRatio) / 100;

  const handlePreQualify = () => {
    const text = encodeURIComponent(
      `Hi SGA Motors, I calculated an EMI of ${formatCurrency(emi)}/month for a loan of ${formatCurrency(
        loanAmount
      )} with downpayment of ${formatCurrency(downPayment)}. Can you check my finance pre-qualification?`
    );
    window.open(`https://wa.me/919943324545?text=${text}`, "_blank");
  };

  return (
    <section id="finance" className="py-24 bg-slate-50 border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-tata-teal font-sans text-xs uppercase tracking-widest font-semibold block mb-3">
            Plan Your Purchase
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-deep-charcoal tracking-tight mb-6">
            Finance Calculator
          </h2>
          <p className="text-neutral-grey text-base">
            Get instant estimate for your monthly loan repayments. Adjust the down payment and tenure to match your budget.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Sliders Area (7 columns) */}
          <div className="lg:col-span-7 glassmorphism rounded-3xl p-6 md:p-8 space-y-8 flex flex-col justify-between bg-white border border-slate-200">
            
            {/* Vehicle Price */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-deep-charcoal text-sm font-semibold">Vehicle Price</span>
                <span className="text-tata-teal font-display font-bold text-lg">
                  {formatCurrency(vehiclePrice)}
                </span>
              </div>
              <input
                type="range"
                min={800000}
                max={3500000}
                step={50000}
                value={vehiclePrice}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setVehiclePrice(val);
                  if (downPayment >= val) setDownPayment(Math.floor(val * 0.1));
                }}
                className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-tata-teal border border-slate-200"
              />
              <div className="flex justify-between text-neutral-grey text-[10px] uppercase font-bold tracking-wider mt-2">
                <span>8 Lakhs</span>
                <span>35 Lakhs</span>
              </div>
            </div>

            {/* Down Payment */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-deep-charcoal text-sm font-semibold">Down Payment</span>
                <span className="text-tata-teal font-display font-bold text-lg">
                  {formatCurrency(downPayment)}
                </span>
              </div>
              <input
                type="range"
                min={Math.floor(vehiclePrice * 0.1)}
                max={Math.floor(vehiclePrice * 0.8)}
                step={20000}
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-tata-teal border border-slate-200"
              />
              <div className="flex justify-between text-neutral-grey text-[10px] uppercase font-bold tracking-wider mt-2">
                <span>Min (10%): {formatCurrency(vehiclePrice * 0.1)}</span>
                <span>Max (80%): {formatCurrency(vehiclePrice * 0.8)}</span>
              </div>
            </div>

            {/* Loan Tenure */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-deep-charcoal text-sm font-semibold">Loan Tenure</span>
                <span className="text-tata-teal font-display font-bold text-lg">
                  {tenureYears} Years
                </span>
              </div>
              <input
                type="range"
                min={1}
                max={7}
                step={1}
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-tata-teal border border-slate-200"
              />
              <div className="flex justify-between text-neutral-grey text-[10px] uppercase font-bold tracking-wider mt-2">
                <span>1 Year</span>
                <span>7 Years</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-deep-charcoal text-sm font-semibold">Interest Rate (P.A.)</span>
                <span className="text-tata-teal font-display font-bold text-lg">
                  {interestRate}%
                </span>
              </div>
              <input
                type="range"
                min={7.5}
                max={15}
                step={0.1}
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-tata-teal border border-slate-200"
              />
              <div className="flex justify-between text-neutral-grey text-[10px] uppercase font-bold tracking-wider mt-2">
                <span>7.5%</span>
                <span>15%</span>
              </div>
            </div>

          </div>

          {/* Results Summary Box (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between glassmorphism rounded-3xl p-6 md:p-8 bg-white border border-slate-200 shadow-sm">
            
            <div className="text-center pt-4">
              <span className="text-neutral-grey text-xs uppercase tracking-widest font-bold block mb-2">Estimated Monthly Payment</span>
              <h3 className="font-display text-4xl md:text-5xl font-bold text-deep-charcoal tracking-tight mb-2">
                {formatCurrency(emi)}
              </h3>
              <p className="text-tata-teal text-xs font-bold uppercase tracking-wider">Per Month EMI</p>
            </div>

            {/* Visual Ring Infographic (Simulated Chart) */}
            <div className="flex items-center justify-center py-6">
              <div className="relative w-36 h-36 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Background Circle */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="stroke-slate-100 fill-transparent"
                    strokeWidth="8"
                  />
                  {/* Foreground Circle (Interest representation) */}
                  <circle
                    cx="50"
                    cy="50"
                    r="40"
                    className="stroke-tata-teal fill-transparent transition-all duration-500 ease-out"
                    strokeWidth="8"
                    strokeDasharray="251.2"
                    strokeDashoffset={strokeDashoffset}
                  />
                </svg>
                <div className="absolute flex flex-col items-center justify-center text-center">
                  <Percent className="w-5 h-5 text-tata-teal mb-0.5" />
                  <span className="text-[10px] text-neutral-grey font-bold uppercase tracking-wider">Interest</span>
                  <span className="text-deep-charcoal text-sm font-bold">{interestRatio.toFixed(0)}%</span>
                </div>
              </div>
            </div>

            {/* Calculations breakdown list */}
            <div className="space-y-4 border-t border-slate-200/80 pt-6 mb-6 text-sm">
              <div className="flex justify-between">
                <span className="text-neutral-grey">Loan Amount</span>
                <span className="text-deep-charcoal font-semibold">{formatCurrency(loanAmount)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-grey">Total Interest</span>
                <span className="text-deep-charcoal font-semibold">{formatCurrency(totalInterest)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-grey">Total Repayment</span>
                <span className="text-deep-charcoal font-semibold">{formatCurrency(totalPayable)}</span>
              </div>
            </div>

            {/* Actions */}
            <button
              onClick={handlePreQualify}
              className="w-full flex items-center justify-center gap-2 bg-tata-teal hover:bg-tata-teal/90 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-md shadow-tata-teal/10"
            >
              <span>Get Finance Pre-Qualification</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
