"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import VehicleShowcase from "./components/VehicleShowcase";
import EVExperience from "./components/EVExperience";
import VehicleComparison from "./components/VehicleComparison";
import FinanceCalculator from "./components/FinanceCalculator";
import TradeIn from "./components/TradeIn";
import Showrooms from "./components/Showrooms";
import ServiceBooking from "./components/ServiceBooking";
import AIAssistant from "./components/AIAssistant";
import { 
  Star, 
  Award, 
  Sparkles, 
  Send, 
  MapPin, 
  Phone, 
  ArrowLeftRight, 
  Calculator, 
  RefreshCw, 
  Tag, 
  Wrench, 
  ChevronRight,
  Car,
  Building2,
  Users,
  ShieldCheck
} from "lucide-react";
import confetti from "canvas-confetti";

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
      {decimals > 0 
        ? count.toFixed(decimals) 
        : Math.floor(count).toLocaleString('en-IN')}
      {suffix}
    </span>
  );
}

export default function Home() {
  const [selectedCompareIds, setSelectedCompareIds] = useState<string[]>([]);
  const [bookingPreFillModel, setBookingPreFillModel] = useState<string>("");
  const [bookSuccess, setBookSuccess] = useState<boolean>(false);
  const [leadName, setLeadName] = useState<string>("");
  const [leadPhone, setLeadPhone] = useState<string>("");
  const [leadLocation, setLeadLocation] = useState<string>("Coimbatore (Flagship)");

  const bookingFormRef = useRef<HTMLDivElement>(null);

  const handleToggleCompare = (id: string) => {
    setSelectedCompareIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      // Max 2 for side-by-side comparison
      if (prev.length >= 2) {
        return [prev[1], id];
      }
      return [...prev, id];
    });
  };

  const handleBookClick = (modelName: string) => {
    if (modelName) {
      setBookingPreFillModel(modelName);
    }
    bookingFormRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBookSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!leadName || !leadPhone) {
      alert("Please fill in your name and phone number.");
      return;
    }

    // Confetti effect
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.8 },
      colors: ["#00A499", "#2D509F", "#FFFFFF"],
    });

    setBookSuccess(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = encodeURIComponent(
      `Hi SGA Motors, I would like to confirm my test drive booking for the ${bookingPreFillModel || "Tata Car"} at your ${leadLocation} showroom. My name is ${leadName} and phone is ${leadPhone}. Please verify slot availability.`
    );
    window.open(`https://wa.me/919943324545?text=${text}`, "_blank");
  };

  const resetBookingForm = () => {
    setLeadName("");
    setLeadPhone("");
    setBookingPreFillModel("");
    setBookSuccess(false);
  };

  return (
    <main className="min-h-screen bg-white text-deep-charcoal relative">
      
      {/* Sticky Header */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Unified section (rendered below the Hero section) */}
      <section className="relative z-20 mt-6 sm:mt-8 md:mt-12 max-w-7xl mx-auto px-4 sm:px-6 mb-8 sm:mb-12 space-y-4 sm:space-y-6">
        
        {/* Statistics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="bg-[#1F2937] rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-white/5 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {/* Stat 1 */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-[#2D509F] flex-shrink-0" />
            <div>
              <h3 className="font-display text-lg sm:text-2xl md:text-3xl font-black text-white leading-tight">
                <Counter end={15} suffix="+" />
              </h3>
              <p className="text-slate-300 text-[10px] uppercase font-bold tracking-wider leading-tight">Showrooms</p>
              <span className="text-[9px] text-neutral-grey/90 font-semibold leading-none">Across South India</span>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <Users className="w-6 h-6 sm:w-8 sm:h-8 text-[#2D509F] flex-shrink-0" />
            <div>
              <h3 className="font-display text-lg sm:text-2xl md:text-3xl font-black text-white leading-tight">
                <Counter end={100000} suffix="+" />
              </h3>
              <p className="text-slate-300 text-[10px] uppercase font-bold tracking-wider leading-tight">Happy Customers</p>
              <span className="text-[9px] text-neutral-grey/90 font-semibold leading-none">And Growing</span>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <Star className="w-6 h-6 sm:w-8 sm:h-8 text-[#2D509F] flex-shrink-0" />
            <div>
              <h3 className="font-display text-lg sm:text-2xl md:text-3xl font-black text-white leading-tight">
                <Counter end={4.8} decimals={1} suffix="/5" />
              </h3>
              <p className="text-slate-300 text-[10px] uppercase font-bold tracking-wider leading-tight">Google Rating</p>
              <span className="text-[9px] text-neutral-grey/90 font-semibold leading-none">From 5K+ Reviews</span>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-[#2D509F] flex-shrink-0" />
            <div>
              <h3 className="font-display text-lg sm:text-2xl md:text-3xl font-black text-white leading-tight">
                <Counter end={25} suffix="+" />
              </h3>
              <p className="text-slate-300 text-[10px] uppercase font-bold tracking-wider leading-tight">Years of Trust</p>
              <span className="text-[9px] text-neutral-grey/90 font-semibold leading-none">Driven by Values</span>
            </div>
          </div>
        </motion.div>

        {/* Quick Link Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          
          {/* Card 1: Compare */}
          <a
            href="#compare"
            className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300/80 transition-all duration-300 flex items-center justify-between gap-2 min-h-[72px] sm:min-h-[88px] group relative overflow-hidden"
          >
            <div className="flex items-center gap-2.5 min-w-0 flex-grow">
              <div className="p-2 sm:p-2.5 bg-slate-50 border border-slate-100 rounded-xl text-neutral-grey group-hover:text-[#2D509F] transition-colors flex-shrink-0">
                <Car className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-grow">
                <h4 className="text-[12px] sm:text-[13px] font-bold text-deep-charcoal leading-snug group-hover:text-[#2D509F] transition-colors truncate">Compare</h4>
                <p className="hidden sm:block text-[10px] text-neutral-grey font-medium leading-tight mt-0.5">Compare models side by side</p>
              </div>
            </div>
            <div className="w-5 h-5 rounded-full border border-[#2D509F] flex items-center justify-center text-[#2D509F] transition-all group-hover:bg-[#2D509F] group-hover:text-white flex-shrink-0">
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Card 2: EMI Calculator */}
          <a
            href="#finance"
            className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300/80 transition-all duration-300 flex items-center justify-between gap-2 min-h-[72px] sm:min-h-[88px] group relative overflow-hidden"
          >
            <div className="flex items-center gap-2.5 min-w-0 flex-grow">
              <div className="p-2 sm:p-2.5 bg-slate-50 border border-slate-100 rounded-xl text-neutral-grey group-hover:text-[#2D509F] transition-colors flex-shrink-0">
                <Calculator className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-grow">
                <h4 className="text-[12px] sm:text-[13px] font-bold text-deep-charcoal leading-snug group-hover:text-[#2D509F] transition-colors truncate">EMI Calculator</h4>
                <p className="hidden sm:block text-[10px] text-neutral-grey font-medium leading-tight mt-0.5">Calculate your perfect EMI</p>
              </div>
            </div>
            <div className="w-5 h-5 rounded-full border border-[#2D509F] flex items-center justify-center text-[#2D509F] transition-all group-hover:bg-[#2D509F] group-hover:text-white flex-shrink-0">
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Card 3: Exchange */}
          <a
            href="#trade-in"
            className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300/80 transition-all duration-300 flex items-center justify-between gap-2 min-h-[72px] sm:min-h-[88px] group relative overflow-hidden"
          >
            <div className="flex items-center gap-2.5 min-w-0 flex-grow">
              <div className="p-2 sm:p-2.5 bg-slate-50 border border-slate-100 rounded-xl text-neutral-grey group-hover:text-[#2D509F] transition-colors flex-shrink-0">
                <ArrowLeftRight className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-grow">
                <h4 className="text-[12px] sm:text-[13px] font-bold text-deep-charcoal leading-snug group-hover:text-[#2D509F] transition-colors truncate">Exchange</h4>
                <p className="hidden sm:block text-[10px] text-neutral-grey font-medium leading-tight mt-0.5">Get best value for your car</p>
              </div>
            </div>
            <div className="w-5 h-5 rounded-full border border-[#2D509F] flex items-center justify-center text-[#2D509F] transition-all group-hover:bg-[#2D509F] group-hover:text-white flex-shrink-0">
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Card 4: Latest Offers */}
          <a
            href="#offers"
            className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300/80 transition-all duration-300 flex items-center justify-between gap-2 min-h-[72px] sm:min-h-[88px] group relative overflow-hidden"
          >
            <div className="flex items-center gap-2.5 min-w-0 flex-grow">
              <div className="p-2 sm:p-2.5 bg-slate-50 border border-slate-100 rounded-xl text-neutral-grey group-hover:text-[#2D509F] transition-colors flex-shrink-0">
                <Tag className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-grow">
                <h4 className="text-[12px] sm:text-[13px] font-bold text-deep-charcoal leading-snug group-hover:text-[#2D509F] transition-colors truncate">Latest Offers</h4>
                <p className="hidden sm:block text-[10px] text-neutral-grey font-medium leading-tight mt-0.5">Check now for exciting deals</p>
              </div>
            </div>
            <div className="w-5 h-5 rounded-full border border-[#2D509F] flex items-center justify-center text-[#2D509F] transition-all group-hover:bg-[#2D509F] group-hover:text-white flex-shrink-0">
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Card 5: Book Service */}
          <a
            href="#service"
            className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300/80 transition-all duration-300 flex items-center justify-between gap-2 min-h-[72px] sm:min-h-[88px] group relative overflow-hidden"
          >
            <div className="flex items-center gap-2.5 min-w-0 flex-grow">
              <div className="p-2 sm:p-2.5 bg-slate-50 border border-slate-100 rounded-xl text-neutral-grey group-hover:text-[#2D509F] transition-colors flex-shrink-0">
                <Wrench className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-grow">
                <h4 className="text-[12px] sm:text-[13px] font-bold text-deep-charcoal leading-snug group-hover:text-[#2D509F] transition-colors truncate">Book Service</h4>
                <p className="hidden sm:block text-[10px] text-neutral-grey font-medium leading-tight mt-0.5">Hassle-free service booking</p>
              </div>
            </div>
            <div className="w-5 h-5 rounded-full border border-[#2D509F] flex items-center justify-center text-[#2D509F] transition-all group-hover:bg-[#2D509F] group-hover:text-white flex-shrink-0">
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </a>

          {/* Card 6: Find Showroom */}
          <a
            href="#showrooms"
            className="bg-white rounded-2xl p-3 sm:p-4 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-slate-300/80 transition-all duration-300 flex items-center justify-between gap-2 min-h-[72px] sm:min-h-[88px] group relative overflow-hidden"
          >
            <div className="flex items-center gap-2.5 min-w-0 flex-grow">
              <div className="p-2 sm:p-2.5 bg-slate-50 border border-slate-100 rounded-xl text-neutral-grey group-hover:text-[#2D509F] transition-colors flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="min-w-0 flex-grow">
                <h4 className="text-[12px] sm:text-[13px] font-bold text-deep-charcoal leading-snug group-hover:text-[#2D509F] transition-colors truncate">Find Showroom</h4>
                <p className="hidden sm:block text-[10px] text-neutral-grey font-medium leading-tight mt-0.5">Locate nearest SGA showroom</p>
              </div>
            </div>
            <div className="w-5 h-5 rounded-full border border-[#2D509F] flex items-center justify-center text-[#2D509F] transition-all group-hover:bg-[#2D509F] group-hover:text-white flex-shrink-0">
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </a>

        </div>
      </section>

      {/* Vehicle Showcase */}
      <VehicleShowcase
        selectedCars={selectedCompareIds}
        onToggleCompare={handleToggleCompare}
        onBookClick={handleBookClick}
      />

      {/* EV Experience */}
      <EVExperience />

      {/* Vehicle Comparison */}
      <VehicleComparison
        initialCompareIds={selectedCompareIds}
        onBookClick={handleBookClick}
      />

      {/* Book Test Drive Form Section */}
      <section id="book" ref={bookingFormRef} className="py-16 md:py-24 bg-white border-t border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Context Left (7 columns) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-tata-teal font-sans text-xs uppercase tracking-widest font-semibold block">
                Reserve Your Experience
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-deep-charcoal leading-tight">
                Schedule A Premium <br />
                Test Drive Today
              </h2>
              <p className="text-neutral-grey text-base leading-relaxed max-w-xl">
                Take the wheel of Tata's next-generation EV or SUV. We offer doorstep test drives or VIP showroom tracks at your convenience.
              </p>

              <div className="space-y-4 pt-4 max-w-md">
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-xl bg-slate-50 text-tata-teal border border-slate-200/60 shadow-sm">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-deep-charcoal text-sm font-bold">Personal Advisor Assisted</h4>
                    <p className="text-neutral-grey text-xs mt-1">Get paired with a dedicated specialist to explain connected safety and ADAS features.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="p-3 rounded-xl bg-slate-50 text-tata-teal border border-slate-200/60 shadow-sm">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-deep-charcoal text-sm font-bold">Doorstep Service Option</h4>
                    <p className="text-neutral-grey text-xs mt-1">We can bring the Curvv EV or Nexon EV directly to your home or office track.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form Card (5 columns) */}
            <div className="lg:col-span-5">
              <div className="glassmorphism rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative overflow-hidden bg-white border border-slate-200 shadow-md">
                
                {!bookSuccess ? (
                  <form onSubmit={handleBookSubmit} className="space-y-5">
                    <h3 className="font-display text-xl font-bold text-deep-charcoal mb-2">Book Test Drive</h3>
                    
                    <div>
                      <label className="text-deep-charcoal text-xs font-semibold mb-1 block">Full Name</label>
                      <input
                        type="text"
                        placeholder="Rajesh Kumar"
                        value={leadName}
                        onChange={(e) => setLeadName(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs text-deep-charcoal focus:outline-none focus:border-tata-teal"
                        required
                      />
                    </div>

                    <div>
                      <label className="text-deep-charcoal text-xs font-semibold mb-1 block">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="99433 24545"
                        value={leadPhone}
                        onChange={(e) => setLeadPhone(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5 text-xs text-deep-charcoal focus:outline-none focus:border-tata-teal"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-deep-charcoal text-xs font-semibold mb-1 block">Select Model</label>
                        <select
                          value={bookingPreFillModel}
                          onChange={(e) => setBookingPreFillModel(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-xs text-deep-charcoal focus:outline-none focus:border-tata-teal cursor-pointer shadow-sm"
                        >
                          <option value="">Choose Model</option>
                          <option value="Harrier EV">Harrier EV</option>
                          <option value="Curvv EV">Curvv EV</option>
                          <option value="Nexon EV">Nexon EV</option>
                          <option value="Safari">Safari SUV</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-deep-charcoal text-xs font-semibold mb-1 block">Preferred Showroom</label>
                        <select
                          value={leadLocation}
                          onChange={(e) => setLeadLocation(e.target.value)}
                          className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3.5 text-xs text-deep-charcoal focus:outline-none focus:border-tata-teal cursor-pointer shadow-sm"
                        >
                          <option value="Coimbatore (Flagship)">Coimbatore</option>
                          <option value="Salem">Salem</option>
                          <option value="Namakkal">Namakkal</option>
                          <option value="Ooty">Ooty</option>
                          <option value="Udumalpet">Udumalpet</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-accent-red hover:bg-accent-red/90 text-white font-semibold py-4 rounded-xl transition-all duration-300 text-xs shadow-lg shadow-accent-red/25 mt-4"
                    >
                      Book Now
                    </button>
                  </form>
                ) : (
                  <div className="text-center space-y-6 py-6 animate-fade-in">
                    <div className="inline-flex p-4 rounded-full bg-tata-teal/10 border border-tata-teal/20 text-tata-teal mb-1">
                      <Sparkles className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-display text-xl font-bold text-deep-charcoal mb-2">Drive Scheduled!</h4>
                      <p className="text-neutral-grey text-xs max-w-xs mx-auto leading-relaxed">
                        Thank you {leadName}. Your VIP test drive reservation is created. Your booking reference is:
                      </p>
                      <div className="text-lg font-mono font-bold text-tata-teal mt-3 bg-slate-50 px-4 py-2 rounded-lg border border-slate-200 inline-block">
                        SGA-TD-4019
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 max-w-xs mx-auto">
                      <button
                        onClick={handleWhatsAppRedirect}
                        className="w-full flex items-center justify-center gap-2 bg-tata-teal hover:bg-tata-teal/90 text-white font-semibold py-3 rounded-xl transition-all duration-300 text-xs shadow-md"
                      >
                        <Send className="w-4 h-4" />
                        <span>Confirm on WhatsApp</span>
                      </button>
                      <button
                        onClick={resetBookingForm}
                        className="text-xs text-neutral-grey hover:text-deep-charcoal transition-colors duration-200"
                      >
                        Book Another Drive
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Finance Calculator */}
      <FinanceCalculator />

      {/* Trade-In Evaluation */}
      <TradeIn />

      {/* Latest Offers Section */}
      <section id="offers" className="py-16 md:py-24 bg-slate-50 border-t border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-tata-teal font-sans text-xs uppercase tracking-widest font-semibold block mb-3">
              Limited Period Deals
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-deep-charcoal tracking-tight mb-4 md:mb-6">
              Latest Offers
            </h2>
            <p className="text-neutral-grey text-base">
              Maximize your savings with our exclusive dealer incentives, financing discounts, and exchange programs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Offer 1 */}
            <div className="glassmorphism rounded-2xl p-6 relative overflow-hidden bg-white border border-slate-200/80 shadow-sm hover:scale-[1.02] transition-all duration-300">
              <span className="text-[10px] bg-tata-teal/10 text-tata-teal border border-tata-teal/20 px-2 py-0.5 rounded font-bold uppercase tracking-wider mb-4 inline-block">
                Finance Special
              </span>
              <h3 className="font-display text-lg font-bold text-deep-charcoal mb-2">Zero Down Payment</h3>
              <p className="text-neutral-grey text-xs leading-relaxed mb-4">
                Drive home a Tata EV with 100% on-road funding options through key banking partnerships.
              </p>
              <a href="#finance" className="text-xs font-bold text-tata-teal hover:underline inline-flex items-center gap-1">
                Calculate EMI →
              </a>
            </div>

            {/* Offer 2 */}
            <div className="glassmorphism rounded-2xl p-6 relative overflow-hidden bg-white border border-slate-200/80 shadow-sm hover:scale-[1.02] transition-all duration-300">
              <span className="text-[10px] bg-tata-teal/10 text-tata-teal border border-tata-teal/20 px-2 py-0.5 rounded font-bold uppercase tracking-wider mb-4 inline-block">
                Exchange Deal
              </span>
              <h3 className="font-display text-lg font-bold text-deep-charcoal mb-2">Exchange Bonus</h3>
              <p className="text-neutral-grey text-xs leading-relaxed mb-4">
                Get up to ₹50,000 additional exchange bonus when upgrading from your old car to a Tata SUV.
              </p>
              <a href="#trade-in" className="text-xs font-bold text-tata-teal hover:underline inline-flex items-center gap-1">
                Value Car →
              </a>
            </div>

            {/* Offer 3 */}
            <div className="glassmorphism rounded-2xl p-6 relative overflow-hidden bg-white border border-slate-200/80 shadow-sm hover:scale-[1.02] transition-all duration-300">
              <span className="text-[10px] bg-tata-teal/10 text-tata-teal border border-tata-teal/20 px-2 py-0.5 rounded font-bold uppercase tracking-wider mb-4 inline-block">
                Corporate Exclusive
              </span>
              <h3 className="font-display text-lg font-bold text-deep-charcoal mb-2">Corporate Discount</h3>
              <p className="text-neutral-grey text-xs leading-relaxed mb-4">
                Special savings up to ₹15,000 for verified corporate employees, MNCs, and government staff.
              </p>
              <a href="#book" className="text-xs font-bold text-tata-teal hover:underline inline-flex items-center gap-1">
                Enquire Now →
              </a>
            </div>

            {/* Offer 4 */}
            <div className="glassmorphism rounded-2xl p-6 relative overflow-hidden bg-white border border-slate-200/80 shadow-sm hover:scale-[1.02] transition-all duration-300">
              <span className="text-[10px] bg-accent-red/10 text-accent-red border border-accent-red/20 px-2 py-0.5 rounded font-bold uppercase tracking-wider mb-4 inline-block">
                Limited Time
              </span>
              <h3 className="font-display text-lg font-bold text-deep-charcoal mb-2">Festival Offer</h3>
              <p className="text-neutral-grey text-xs leading-relaxed mb-4">
                Enjoy free insurance for 1st year and complimentary 3-year charging subscription on EVs.
              </p>
              <a href="#book" className="text-xs font-bold text-accent-red hover:underline inline-flex items-center gap-1">
                Claim Offer →
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <span className="text-tata-teal font-sans text-xs uppercase tracking-widest font-semibold block mb-3">
              Stories of Trust
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-deep-charcoal tracking-tight mb-4 md:mb-6">
              Customer Reviews
            </h2>
            <p className="text-neutral-grey text-base">
              Here is what South India's premium drivers say about buying from SGA Motors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            
            {/* Review 1 */}
            <div className="glassmorphism rounded-2xl p-8 space-y-4 bg-white border border-slate-200 shadow-sm">
              <div className="flex text-yellow-500 gap-1">
                <Star className="w-4 h-4 fill-yellow-500" />
                <Star className="w-4 h-4 fill-yellow-500" />
                <Star className="w-4 h-4 fill-yellow-500" />
                <Star className="w-4 h-4 fill-yellow-500" />
                <Star className="w-4 h-4 fill-yellow-500" />
              </div>
              <h4 className="font-display font-bold text-deep-charcoal text-base">"Excellent experience"</h4>
              <p className="text-neutral-grey text-xs leading-relaxed">
                Purchased my Curvv EV from the Coimbatore showroom. The sales executive explained the battery specs and ADAS features perfectly. Fast delivery within 10 days!
              </p>
              <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-[11px]">
                <span className="text-deep-charcoal font-bold">- Rajesh Kumar</span>
                <span className="text-tata-teal font-bold font-sans">Bought Curvv EV</span>
              </div>
            </div>

            {/* Review 2 */}
            <div className="glassmorphism rounded-2xl p-8 space-y-4 bg-white border border-slate-200 shadow-sm">
              <div className="flex text-yellow-500 gap-1">
                <Star className="w-4 h-4 fill-yellow-500" />
                <Star className="w-4 h-4 fill-yellow-500" />
                <Star className="w-4 h-4 fill-yellow-500" />
                <Star className="w-4 h-4 fill-yellow-500" />
                <Star className="w-4 h-4 fill-yellow-500" />
              </div>
              <h4 className="font-display font-bold text-deep-charcoal text-base">"Seamless EV Transition"</h4>
              <p className="text-neutral-grey text-xs leading-relaxed">
                Upgraded from my old petrol hatchback. The online trade-in evaluation tool gave me an exact estimate, and they set up the free home EV charger charger the next day. Great service.
              </p>
              <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-[11px]">
                <span className="text-deep-charcoal font-bold">- Priya R.</span>
                <span className="text-tata-teal font-bold font-sans">Bought Nexon EV</span>
              </div>
            </div>

            {/* Review 3 */}
            <div className="glassmorphism rounded-2xl p-8 space-y-4 bg-white border border-slate-200 shadow-sm">
              <div className="flex text-yellow-500 gap-1">
                <Star className="w-4 h-4 fill-yellow-500" />
                <Star className="w-4 h-4 fill-yellow-500" />
                <Star className="w-4 h-4 fill-yellow-500" />
                <Star className="w-4 h-4 fill-yellow-500" />
                <Star className="w-4 h-4 fill-yellow-500" />
              </div>
              <h4 className="font-display font-bold text-deep-charcoal text-base">"Aspirational SUV Deal"</h4>
              <p className="text-neutral-grey text-xs leading-relaxed">
                Visited their Namakkal showroom for the Tata Safari. The staff was incredibly courteous, helped customize a monthly EMI tenure that fit my budget, and completed paperwork in 1 hour.
              </p>
              <div className="border-t border-slate-100 pt-4 flex justify-between items-center text-[11px]">
                <span className="text-deep-charcoal font-bold">- Karthikeyan</span>
                <span className="text-tata-teal font-bold font-sans">Bought Safari Diesel</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Showrooms Section */}
      <Showrooms onBookClick={handleBookClick} />

      {/* Service Booking Section */}
      <ServiceBooking />

      {/* Footer */}
      <footer className="bg-slate-100 border-t border-slate-200 py-10 md:py-16 text-xs text-neutral-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
          
          <div className="space-y-4 col-span-2 md:col-span-1">
            <a href="#" className="flex items-center select-none py-1">
              <img 
                src="/Logo/logo.png" 
                alt="SGA Motors TATA Logo" 
                className="h-10 w-auto object-contain" 
              />
            </a>
            <p className="leading-relaxed">
              Authorized Tata Motors dealer in Tamil Nadu. Bringing the latest in high-performance EVs and rugged premium SUVs to the region with certified services.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-deep-charcoal font-bold uppercase tracking-wider">Showrooms</h4>
            <ul className="space-y-2">
              <li><a href="#showrooms" className="hover:text-deep-charcoal transition-colors">Coimbatore Mettupalayam Rd</a></li>
              <li><a href="#showrooms" className="hover:text-deep-charcoal transition-colors">Salem Bypass Highway</a></li>
              <li><a href="#showrooms" className="hover:text-deep-charcoal transition-colors">Namakkal Trichy Rd</a></li>
              <li><a href="#showrooms" className="hover:text-deep-charcoal transition-colors">Ooty Charring Cross</a></li>
              <li><a href="#showrooms" className="hover:text-deep-charcoal transition-colors">Udumalpet Palani Highway</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-deep-charcoal font-bold uppercase tracking-wider">Quick Actions</h4>
            <ul className="space-y-2">
              <li><a href="#cars" className="hover:text-deep-charcoal transition-colors">Browse Tata Fleet</a></li>
              <li><a href="#compare" className="hover:text-deep-charcoal transition-colors">Compare Models</a></li>
              <li><a href="#finance" className="hover:text-deep-charcoal transition-colors">EMI Calculator</a></li>
              <li><a href="#trade-in" className="hover:text-deep-charcoal transition-colors">Sell Old Vehicle</a></li>
              <li><a href="#service" className="hover:text-deep-charcoal transition-colors">Book Service Slot</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-deep-charcoal font-bold uppercase tracking-wider">Contact Desk</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-tata-teal" /> Coimbatore, Tamil Nadu</li>
              <li className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-tata-teal" /> +91 99433 24545</li>
              <li>Support hours: 9:00 AM - 8:00 PM</li>
            </ul>
          </div>

        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 border-t border-slate-200 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} SGA Motors Tata. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-deep-charcoal">Privacy Policy</a>
            <a href="#" className="hover:text-deep-charcoal">Terms & Conditions</a>
            <a href="#" className="hover:text-deep-charcoal">Disclaimers</a>
          </div>
        </div>
      </footer>

      {/* Floating AI Sales Assistant */}
      <AIAssistant />

    </main>
  );
}
