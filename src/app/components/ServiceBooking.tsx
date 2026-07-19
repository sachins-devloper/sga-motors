"use client";

import { useState } from "react";
import { Wrench, Truck, AlertOctagon, CheckCircle2, Phone } from "lucide-react";
import confetti from "canvas-confetti";

export default function ServiceBooking() {
  const [activeTab, setActiveTab] = useState<"book" | "track" | "sos">("book");
  const [bookingIdInput, setBookingIdInput] = useState<string>("SGA-EV-8824");
  const [showStatus, setShowStatus] = useState<boolean>(false);
  const [bookSubmitted, setBookSubmitted] = useState<boolean>(false);

  // Form states
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [carNumber, setCarNumber] = useState<string>("");
  const [serviceType, setServiceType] = useState<string>("Periodic Maintenance");
  const [pickupRequired, setPickupRequired] = useState<boolean>(false);
  const [date, setDate] = useState<string>("");

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !carNumber || !date) {
      alert("Please fill in all details");
      return;
    }
    
    // Trigger confetti for premium touch
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#00A499", "#2D509F", "#FFFFFF"],
    });

    setBookSubmitted(true);
  };

  const handleSOSWhatsApp = () => {
    const text = encodeURIComponent(
      "EMERGENCY ASSISTANCE REQUEST: Hi SGA Motors Roadside Assistance, my vehicle has broken down. Please send emergency support immediately."
    );
    window.open(`https://wa.me/919943324545?text=${text}`, "_blank");
  };

  return (
    <section id="service" className="py-16 md:py-24 bg-white border-t border-slate-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="text-tata-teal font-sans text-xs uppercase tracking-widest font-semibold block mb-3">
            Owning Made Seamless
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-deep-charcoal tracking-tight mb-4 md:mb-6">
            Service Booking
          </h2>
          <p className="text-neutral-grey text-base">
            From quick periodic checks to pick-up and drop options and emergency roadside assist, manage everything digitally.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="max-w-4xl mx-auto glassmorphism rounded-2xl sm:rounded-3xl overflow-hidden shadow-md flex flex-col md:flex-row items-stretch bg-white border border-slate-200">
          
          {/* Left Navigation bar (tabs) */}
          <div className="md:w-1/3 bg-slate-50 border-b md:border-b-0 md:border-r border-slate-200 p-4 sm:p-6 flex flex-row md:flex-col gap-2 justify-between md:justify-start">
            <button
              onClick={() => {
                setActiveTab("book");
                setBookSubmitted(false);
              }}
              className={`flex-1 md:flex-initial flex items-center justify-center md:justify-start gap-2.5 sm:gap-3 px-3 py-2.5 sm:px-4 sm:py-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "book" ? "bg-tata-teal text-white shadow-sm" : "text-neutral-grey hover:bg-slate-100 hover:text-deep-charcoal"
              }`}
            >
              <Wrench className="w-4 h-4" />
              <span className="hidden sm:inline">Book Appointment</span>
            </button>

            <button
              onClick={() => setActiveTab("track")}
              className={`flex-1 md:flex-initial flex items-center justify-center md:justify-start gap-2.5 sm:gap-3 px-3 py-2.5 sm:px-4 sm:py-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "track" ? "bg-tata-teal text-white shadow-sm" : "text-neutral-grey hover:bg-slate-100 hover:text-deep-charcoal"
              }`}
            >
              <Truck className="w-4 h-4" />
              <span className="hidden sm:inline">Track Live Status</span>
            </button>

            <button
              onClick={() => setActiveTab("sos")}
              className={`flex-1 md:flex-initial flex items-center justify-center md:justify-start gap-2.5 sm:gap-3 px-3 py-2.5 sm:px-4 sm:py-3.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === "sos" ? "bg-accent-red text-white shadow-lg shadow-accent-red/10" : "text-neutral-grey hover:bg-slate-100 hover:text-deep-charcoal"
              }`}
            >
              <AlertOctagon className="w-4 h-4" />
              <span className="hidden sm:inline">Roadside SOS</span>
            </button>
          </div>

          {/* Right Panel Container */}
          <div className="md:w-2/3 p-5 sm:p-8 flex flex-col justify-center bg-white">
            
            {/* BOOK SERVICE TAB */}
            {activeTab === "book" && !bookSubmitted && (
              <form onSubmit={handleBooking} className="space-y-5">
                <h3 className="font-display text-xl font-bold text-deep-charcoal mb-2">Schedule Service</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-deep-charcoal text-xs font-semibold mb-1 block">Full Name</label>
                    <input
                      type="text"
                      placeholder="Rajesh Kumar"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-deep-charcoal focus:outline-none focus:border-tata-teal"
                    />
                  </div>
                  <div>
                    <label className="text-deep-charcoal text-xs font-semibold mb-1 block">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="99433 24545"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-deep-charcoal focus:outline-none focus:border-tata-teal"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-deep-charcoal text-xs font-semibold mb-1 block">Vehicle Reg. Number</label>
                    <input
                      type="text"
                      placeholder="TN-37-BY-1234"
                      value={carNumber}
                      onChange={(e) => setCarNumber(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-deep-charcoal focus:outline-none focus:border-tata-teal uppercase"
                    />
                  </div>
                  <div>
                    <label className="text-deep-charcoal text-xs font-semibold mb-1 block">Service Type</label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm text-deep-charcoal focus:outline-none focus:border-tata-teal cursor-pointer shadow-sm"
                    >
                      <option value="Periodic Maintenance">Periodic Maintenance</option>
                      <option value="EV Battery Diagnostics">EV Battery Diagnostics</option>
                      <option value="Wheel Alignment & Balancing">Wheel Alignment & Balancing</option>
                      <option value="Bodywork & Detailing">Bodywork & Paint Repair</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-deep-charcoal text-xs font-semibold mb-1 block">Preferred Date</label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-deep-charcoal cursor-pointer focus:outline-none focus:border-tata-teal"
                  />
                </div>

                {/* Pickup Toggle */}
                <div className="flex items-center gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="pickup"
                    checked={pickupRequired}
                    onChange={(e) => setPickupRequired(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-200 text-tata-teal accent-tata-teal cursor-pointer"
                  />
                  <label htmlFor="pickup" className="text-sm text-neutral-grey select-none cursor-pointer">
                    Request Pickup & Drop service (Complimentary for EVs)
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-tata-teal hover:bg-tata-teal/90 text-white font-semibold py-4 rounded-xl transition-all duration-300 text-sm mt-6 shadow-md shadow-tata-teal/10"
                >
                  Book Service Appointment
                </button>
              </form>
            )}

            {/* BOOK SUCCESS STATE */}
            {activeTab === "book" && bookSubmitted && (
              <div className="text-center space-y-6 py-6 animate-fade-in">
                <div className="inline-flex p-4 rounded-full bg-tata-teal/10 border border-tata-teal/20 text-tata-teal mb-2">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="font-display text-xl font-bold text-deep-charcoal mb-2">Appointment Scheduled</h4>
                  <p className="text-neutral-grey text-sm max-w-sm mx-auto">
                    Your request has been registered. Your dynamic service tracking ID is:
                  </p>
                  <div className="text-lg font-mono font-bold text-tata-teal mt-3 bg-slate-50 px-4 py-2.5 rounded-lg border border-slate-200 inline-block">
                    SGA-EV-8824
                  </div>
                </div>
                <p className="text-xs text-neutral-grey">
                  We will contact you within 2 hours to confirm your scheduled slot. Copy this ID to track live updates.
                </p>
                <button
                  onClick={() => {
                    setActiveTab("track");
                    setBookingIdInput("SGA-EV-8824");
                    setShowStatus(true);
                  }}
                  className="bg-deep-charcoal text-white font-semibold py-2.5 px-6 rounded-xl hover:bg-neutral-800 transition-all duration-300 text-xs"
                >
                  Track Live Status →
                </button>
              </div>
            )}

            {/* TRACK SERVICE TAB */}
            {activeTab === "track" && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-deep-charcoal mb-2">Service Tracker</h3>
                  <p className="text-neutral-grey text-sm">
                    Enter your 10-digit SGA Booking ID to check real-time workshop floor status.
                  </p>
                </div>

                <div className="flex gap-4">
                  <input
                    type="text"
                    value={bookingIdInput}
                    onChange={(e) => setBookingIdInput(e.target.value)}
                    placeholder="e.g. SGA-EV-8824"
                    className="flex-grow bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-deep-charcoal focus:outline-none focus:border-tata-teal font-mono uppercase"
                  />
                  <button
                    onClick={() => setShowStatus(true)}
                    className="bg-deep-charcoal text-white font-semibold px-6 py-3 rounded-xl hover:bg-neutral-800 transition-all duration-300 text-sm shadow-sm"
                  >
                    Track
                  </button>
                </div>

                {showStatus && (
                  <div className="border border-slate-200 bg-slate-50/50 p-6 rounded-2xl space-y-6 mt-4 shadow-sm">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-neutral-grey font-mono">ID: {bookingIdInput.toUpperCase()}</span>
                      <span className="text-tata-teal font-semibold">EST. DELIVERY: TODAY 5:30 PM</span>
                    </div>

                    {/* Horizontal Visual Stepper */}
                    <div className="relative flex flex-col space-y-4">
                      
                      {/* Step 1: Checked */}
                      <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-tata-teal flex items-center justify-center text-white text-[10px] font-bold">
                          ✓
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-deep-charcoal">Scheduled & Checked-In</p>
                          <p className="text-xs text-neutral-grey">Completed at 9:30 AM</p>
                        </div>
                      </div>

                      {/* Step 2: Checked */}
                      <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-tata-teal flex items-center justify-center text-white text-[10px] font-bold">
                          ✓
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-deep-charcoal">Periodic Service Work</p>
                          <p className="text-xs text-neutral-grey">Completed at 11:45 AM</p>
                        </div>
                      </div>

                      {/* Step 3: Active Pulsing */}
                      <div className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-tata-teal flex items-center justify-center text-white text-[10px] font-bold relative">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tata-teal opacity-75"></span>
                          ●
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-deep-charcoal">EV Diagnostic & Battery Health Run</p>
                          <p className="text-xs text-tata-teal font-bold animate-pulse">In Progress (Workshop Floor 2)</p>
                        </div>
                      </div>

                      {/* Step 4: Pending */}
                      <div className="flex items-center gap-4 opacity-40">
                        <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-neutral-grey text-[10px] font-bold">
                          4
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-deep-charcoal">Road Testing & Quality Check</p>
                          <p className="text-xs text-neutral-grey">Pending</p>
                        </div>
                      </div>

                      {/* Step 5: Pending */}
                      <div className="flex items-center gap-4 opacity-40">
                        <div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-neutral-grey text-[10px] font-bold">
                          5
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-deep-charcoal">Ready for Delivery / Wash</p>
                          <p className="text-xs text-neutral-grey">Pending</p>
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            )}

            {/* ROADSIDE SOS TAB */}
            {activeTab === "sos" && (
              <div className="space-y-6 text-center">
                <div className="inline-flex p-4 rounded-full bg-accent-red/10 border border-accent-red/20 text-accent-red mb-2 animate-pulse">
                  <AlertOctagon className="w-10 h-10" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-deep-charcoal mb-2">24/7 Roadside Assistance</h3>
                  <p className="text-neutral-grey text-sm max-w-md mx-auto leading-relaxed">
                    Experiencing a breakdown, flat tire, or charging lockout? Contact our immediate response team for towing, battery jump, or roadside troubleshooting.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto pt-4">
                  <a
                    href="tel:18002097979"
                    className="flex items-center justify-center gap-3 bg-slate-100 border border-slate-200 hover:bg-slate-200 text-deep-charcoal font-semibold py-4 rounded-xl transition-all duration-300 text-sm shadow-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Toll Free SOS</span>
                  </a>

                  <button
                    onClick={handleSOSWhatsApp}
                    className="flex items-center justify-center gap-3 bg-accent-red hover:bg-accent-red/90 text-white font-semibold py-4 rounded-xl transition-all duration-300 text-sm shadow-lg shadow-accent-red/20"
                  >
                    <CheckCircle2 className="w-4 h-4" />
                    <span>WhatsApp Live GPS</span>
                  </button>
                </div>

                <p className="text-xs text-neutral-grey pt-4">
                  *Standard response time under 30 minutes in Coimbatore, Salem, Namakkal, Ooty, and Udumalpet.
                </p>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
