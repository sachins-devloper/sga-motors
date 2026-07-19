"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Calendar } from "lucide-react";

const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.413 9.863-9.83.001-2.624-1.017-5.091-2.868-6.944-1.851-1.854-4.312-2.875-6.932-2.876-5.44 0-9.865 4.413-9.869 9.832-.001 1.721.455 3.399 1.32 4.877L1.93 21.085l4.717-1.931zm11.233-7.662c-.3-.15-1.774-.875-2.026-.967-.253-.092-.437-.139-.62.139-.183.277-.708.875-.868 1.059-.16.185-.32.208-.62.058-.3-.15-1.267-.467-2.414-1.488-.893-.795-1.496-1.777-1.671-2.078-.176-.3-.019-.462.131-.611.135-.134.3-.349.45-.523.15-.175.2-.299.3-.499.1-.2.05-.375-.025-.524-.075-.15-.62-1.492-.85-2.042-.224-.539-.452-.466-.62-.474-.16-.008-.343-.01-.527-.01-.184 0-.483.069-.736.344-.253.277-.967.945-.967 2.302 0 1.357.987 2.668 1.125 2.853.138.185 1.942 2.966 4.704 4.156.657.283 1.17.452 1.57.579.66.21 1.26.181 1.733.11.528-.079 1.774-.725 2.026-1.393.253-.668.253-1.241.177-1.357-.076-.115-.253-.185-.554-.336z"/>
  </svg>
);

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Cars", href: "#cars", hasDropdown: true },
    { name: "EV Experience", href: "#ev-experience" },
    { name: "Compare", href: "#compare" },
    { name: "Finance", href: "#finance" },
    { name: "Service", href: "#service" },
    { name: "Showrooms", href: "#showrooms" },
    { name: "About Us", href: "#offers" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b ${
        isScrolled ? "border-slate-200/80 shadow-sm py-3" : "border-slate-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Block */}
        <a href="#" className="flex items-center select-none py-1">
          <img 
            src="/Logo/logo.png" 
            alt="SGA Motors TATA Logo" 
            className="h-10 md:h-11 w-auto object-contain" 
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[13px] font-bold text-zinc-700 hover:text-accent-red transition-colors duration-200 flex items-center gap-0.5"
            >
              <span>{link.name}</span>
              {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-3.5">
          <a
            href="https://wa.me/919943324545"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-[13px] font-bold text-emerald-600 border border-emerald-500/35 px-4.5 py-2.5 rounded-full hover:bg-emerald-50/50 transition-all duration-200"
          >
            <WhatsAppIcon className="w-4 h-4 fill-emerald-500 text-emerald-500" />
            <span>WhatsApp Sales</span>
          </a>
          <a
            href="#book"
            className="flex items-center space-x-2 text-[13px] font-bold bg-[#2D509F] hover:bg-[#1e3a75] text-white px-5 py-2.5 rounded-full shadow-sm shadow-blue-500/10 transition-all duration-200"
          >
            <Calendar className="w-3.5 h-3.5 text-white" />
            <span>Book Test Drive</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-deep-charcoal focus:outline-none"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? (
            <span className="text-xl font-bold font-sans">✕</span>
          ) : (
            <span className="text-xl font-bold font-sans">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 px-6 py-6 flex flex-col space-y-4 shadow-lg absolute left-0 right-0 top-full">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold text-zinc-700 hover:text-accent-red border-b border-slate-50 pb-2 flex justify-between items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{link.name}</span>
              {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-60" />}
            </a>
          ))}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <a
              href="https://wa.me/919943324545"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center space-x-2 text-sm font-bold text-emerald-600 border border-emerald-500/30 py-3 rounded-full hover:bg-emerald-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              <WhatsAppIcon className="w-4 h-4 fill-emerald-500 text-emerald-500" />
              <span>WhatsApp Sales</span>
            </a>
            <a
              href="#book"
              className="flex-1 flex items-center justify-center space-x-2 text-sm font-bold bg-[#2D509F] text-white py-3 rounded-full shadow-md shadow-blue-500/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Calendar className="w-4 h-4" />
              <span>Book Test Drive</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
