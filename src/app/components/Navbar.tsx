"use client";

import { useState, useEffect } from "react";
import { Menu, X, PhoneCall } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Cars", href: "#cars" },
    { name: "EV Experience", href: "#ev-experience" },
    { name: "Compare", href: "#compare" },
    { name: "Finance", href: "#finance" },
    { name: "Service", href: "#service" },
    { name: "Showrooms", href: "#showrooms" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200/60 py-4 shadow-sm"
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <span className={`font-display text-2xl font-bold tracking-tight transition-colors duration-300 ${
            isScrolled ? "text-deep-charcoal" : "text-white"
          }`}>
            SGA <span className="text-accent-red">MOTORS</span>
          </span>
          <span className="text-[10px] uppercase bg-tata-teal/20 text-tata-teal border border-tata-teal/30 px-2 py-0.5 rounded font-sans tracking-widest font-semibold">
            Tata
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-semibold transition-colors duration-200 ${
                isScrolled
                  ? "text-zinc-600 hover:text-deep-charcoal"
                  : "text-zinc-300 hover:text-white"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href="https://wa.me/919943324545"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-sm font-semibold text-tata-teal border border-tata-teal/30 px-4 py-2 rounded-full hover:bg-tata-teal/10 transition-all duration-300"
          >
            <PhoneCall className="w-4 h-4" />
            <span>WhatsApp Sales</span>
          </a>
          <a
            href="#book"
            className="text-sm font-semibold bg-accent-red hover:bg-accent-red/90 text-white px-5 py-2.5 rounded-full shadow-lg shadow-accent-red/15 transition-all duration-300 hover:scale-[1.03]"
          >
            Book Test Drive
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden p-2 focus:outline-none transition-colors ${
            isScrolled ? "text-deep-charcoal" : "text-white"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed inset-0 top-[73px] bg-white z-40 transition-transform duration-300 transform px-6 py-8 flex flex-col space-y-6 shadow-xl ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl font-bold text-deep-charcoal hover:text-accent-red border-b border-slate-100 pb-3 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="pt-6 flex flex-col space-y-4 mt-auto">
          <a
            href="https://wa.me/919943324545"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center space-x-2 text-base font-semibold text-tata-teal border border-tata-teal/30 py-3.5 rounded-xl hover:bg-tata-teal/10 transition-all duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            <PhoneCall className="w-5 h-5" />
            <span>WhatsApp Sales</span>
          </a>
          <a
            href="#book"
            className="text-center text-base font-semibold bg-accent-red text-white py-3.5 rounded-xl shadow-lg shadow-accent-red/25 transition-all duration-300"
            onClick={() => setMobileMenuOpen(false)}
          >
            Book Test Drive
          </a>
        </div>
      </div>
    </nav>
  );
}
