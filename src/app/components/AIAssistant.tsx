"use client";

import { useState, useEffect, useRef } from "react";
import { MessageSquare, X, Send, User, Bot, Loader2, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  sender: "user" | "bot";
  text: string;
  actions?: { label: string; href: string; actionType?: string }[];
}

const FAQ_CHIPS = [
  { label: "Curvv vs Nexon EV", query: "Compare Curvv EV and Nexon EV" },
  { label: "Locate Ooty Showroom", query: "Where is the Ooty Showroom?" },
  { label: "EMI for ₹18L Car", query: "Calculate EMI for an 18 Lakh car" },
  { label: "Book a Test Drive", query: "How do I book a test drive?" },
];

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [unread, setUnread] = useState<boolean>(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "Hi there! 👋 I am your SGA Motors Assistant. I can help you compare models, calculate EMI, find showroom hours, or book a test drive. What are you looking for today?",
    },
  ]);
  const [inputValue, setInputValue] = useState<string>("");
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setUnread(false);
  };

  const getBotResponse = (query: string): Message => {
    const q = query.toLowerCase();
    
    if (q.includes("curvv") && q.includes("nexon")) {
      return {
        sender: "bot",
        text: "The Curvv EV is Tata's new Coupe SUV starting at ₹17.49 L with a range of up to 585 km (55 kWh battery) and 167 PS. The Nexon EV starts at ₹12.49 L with a range of 465 km (40.5 kWh battery) and 145 PS. Curvv is larger with 500L boot space compared to Nexon's 350L.",
        actions: [{ label: "Compare Side-By-Side", href: "#compare" }],
      };
    }
    
    if (q.includes("ooty")) {
      return {
        sender: "bot",
        text: "SGA Motors Ooty is on Commercial Road, Near Charring Cross. Phone: +91 99433 24548. Hours: 9:30 AM - 7:00 PM (Mon-Sat). It features a specialty SUV Zone for hill driving.",
        actions: [{ label: "Get Ooty Map Location", href: "https://maps.google.com/?q=SGA+Motors+Tata+Ooty" }],
      };
    }

    if (q.includes("emi") || q.includes("calculate") || q.includes("lakh")) {
      return {
        sender: "bot",
        text: "For an ₹18 Lakh vehicle with a standard ₹3 Lakh down payment and 8.75% interest over 5 years, the estimated EMI is ₹31,102 per month. You can adjust prices and rates on our Finance dashboard.",
        actions: [{ label: "Open EMI Calculator", href: "#finance" }],
      };
    }

    if (q.includes("test drive") || q.includes("book") || q.includes("drive")) {
      return {
        sender: "bot",
        text: "Booking a test drive is simple! You can scroll to the 'Book Test Drive' floating form on our homepage and submit your details. A dealer representative will call you to confirm.",
        actions: [{ label: "Go to Booking Form", href: "#book" }],
      };
    }

    if (q.includes("price") || q.includes("harrier")) {
      return {
        sender: "bot",
        text: "The flagship Harrier EV concept starts at an estimated ₹21.49 Lakhs* featuring standard 5-star GNCAP safety, range up to 500 km, and 197 PS torque. Safari diesel starting price is ₹16.19 Lakhs*.",
        actions: [{ label: "Show Harrier EV Specs", href: "#cars" }],
      };
    }

    // Default response
    return {
      sender: "bot",
      text: "I can help check specs, showrooms, and pricing. For specific stock availability or immediate bookings, let me connect you directly to our WhatsApp Sales Desk.",
      actions: [{ label: "Chat on WhatsApp", href: "https://wa.me/919943324545" }],
    };
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Append user message
    const userMsg: Message = { sender: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing
    setTimeout(() => {
      setIsTyping(false);
      const botMsg = getBotResponse(text);
      setMessages((prev) => [...prev, botMsg]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Floating Action Trigger Bubble */}
      <button
        onClick={handleToggle}
        className={`p-4 rounded-full shadow-2xl text-white transition-all duration-300 relative flex items-center justify-center hover:scale-105 active:scale-95 ${
          isOpen ? "bg-slate-100 text-deep-charcoal border border-slate-200" : "bg-tata-teal"
        }`}
        aria-label="Ask AI Assistant"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        
        {/* Unread indicator */}
        {unread && !isOpen && (
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-red opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-accent-red"></span>
          </span>
        )}
      </button>

      {/* Expandable Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="w-[90vw] sm:w-[380px] h-[500px] glassmorphism rounded-3xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col justify-between mb-4 bg-white"
          >
            {/* Header */}
            <div className="bg-slate-50 border-b border-slate-200/60 px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 rounded-full bg-tata-teal flex items-center justify-center text-white">
                    <Bot className="w-4 h-4" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-deep-charcoal">SGA AI Sales Assistant</h4>
                  <span className="text-[10px] text-neutral-grey font-semibold uppercase tracking-wider">Dealer Bot • Online</span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-neutral-grey hover:text-deep-charcoal p-1"
                aria-label="Close assistant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat History */}
            <div className="flex-grow p-6 overflow-y-auto no-scrollbar space-y-4">
              {messages.map((msg, index) => {
                const isBot = msg.sender === "bot";
                return (
                  <div
                    key={index}
                    className={`flex items-start gap-3 ${isBot ? "" : "flex-row-reverse"}`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center text-xs flex-shrink-0 ${
                        isBot ? "bg-tata-teal text-white" : "bg-slate-200 text-deep-charcoal"
                      }`}
                    >
                      {isBot ? <Bot className="w-3.5 h-3.5" /> : <User className="w-3.5 h-3.5" />}
                    </div>

                    <div className="max-w-[75%] space-y-2">
                      <div
                        className={`rounded-2xl px-4 py-3 text-xs leading-relaxed ${
                          isBot
                            ? "bg-slate-100 text-deep-charcoal border border-slate-200/50"
                            : "bg-tata-teal text-white shadow-sm"
                        }`}
                      >
                        {msg.text}
                      </div>

                      {/* Optional Action links inside bubble */}
                      {msg.actions && msg.actions.map((act, aIdx) => (
                        <a
                          key={aIdx}
                          href={act.href}
                          onClick={() => act.href.startsWith("#") && setIsOpen(false)}
                          className="inline-flex items-center gap-1.5 bg-white border border-slate-200 hover:bg-slate-50 text-deep-charcoal text-[10px] font-bold py-2 px-3.5 rounded-xl uppercase tracking-wider transition-all duration-300 shadow-sm"
                        >
                          {act.label.includes("WhatsApp") && <PhoneCall className="w-3 h-3 text-emerald-600" />}
                          <span>{act.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* Typing simulation indicator */}
              {isTyping && (
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-tata-teal flex items-center justify-center text-white flex-shrink-0">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-slate-50 text-neutral-grey rounded-2xl px-4 py-3 text-xs flex items-center gap-1 border border-slate-200">
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Typing response...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggested FAQ Chips */}
            {messages.length === 1 && !isTyping && (
              <div className="px-6 pb-2 pt-1">
                <span className="text-[10px] text-neutral-grey uppercase tracking-widest font-bold block mb-2">Suggested queries</span>
                <div className="flex flex-wrap gap-1.5">
                  {FAQ_CHIPS.map((chip, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(chip.query)}
                      className="text-[10px] bg-slate-100 hover:bg-slate-200 text-deep-charcoal border border-slate-200 rounded-full px-3 py-1.5 transition-all duration-300 cursor-pointer font-medium"
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input area */}
            <div className="bg-slate-50 border-t border-slate-200/60 p-4 flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage(inputValue)}
                placeholder="Type your message here..."
                className="flex-grow bg-white border border-slate-200 rounded-xl px-4 py-3 text-xs text-deep-charcoal focus:outline-none focus:border-tata-teal shadow-sm"
              />
              <button
                onClick={() => handleSendMessage(inputValue)}
                className="bg-tata-teal text-white p-3 rounded-xl hover:bg-tata-teal/90 transition-all duration-300"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
