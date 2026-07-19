"use client";

import { useState, useEffect, useRef } from "react";
import { X, Send, User, Bot, Loader2, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  sender: "user" | "bot";
  text: string;
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

  const handleSendMessage = async (text: string) => {
    if (!text.trim()) return;

    // Append user message
    const userMsg: Message = { sender: "user", text };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: text,
          history: [...messages, userMsg],
        }),
      });

      const data = await response.json();
      const botMsg: Message = {
        sender: "bot",
        text: data.reply || "I couldn't process that. Could you rephrase?",
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Sorry, I'm having trouble connecting. Please try again or reach us on WhatsApp at +91 99433 24545.",
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      
      {/* Floating Action Trigger (Circular Icon Only) */}
      {!isOpen && (
        <button
          onClick={handleToggle}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#2D509F] hover:bg-[#1e3a75] text-white flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative select-none"
          aria-label="Open sales assistant"
        >
          <Bot className="w-6 h-6 sm:w-7 sm:h-7" />
          
          {/* Unread indicator */}
          {unread && (
            <span className="absolute top-0 right-0 flex h-3 w-3 sm:h-3.5 sm:w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00A499] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 sm:h-3.5 sm:w-3.5 bg-[#00A499]"></span>
            </span>
          )}
        </button>
      )}

      {/* Expandable Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="w-[calc(100vw-32px)] sm:w-[380px] h-[450px] sm:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col justify-between mb-2 sm:mb-4 bg-white"
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
                  {/* <span className="text-[10px] text-neutral-grey font-semibold uppercase tracking-wider">Powered by Gemini • Online</span> */}
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
                        className={`rounded-2xl px-4 py-3 text-xs leading-relaxed whitespace-pre-line ${
                          isBot
                            ? "bg-slate-100 text-deep-charcoal border border-slate-200/50"
                            : "bg-tata-teal text-white shadow-sm"
                        }`}
                      >
                        {msg.text}
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-tata-teal flex items-center justify-center text-white flex-shrink-0">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-slate-50 text-neutral-grey rounded-2xl px-4 py-3 text-xs flex items-center gap-1 border border-slate-200">
                    <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    <span>Thinking...</span>
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
                disabled={isTyping}
                className="bg-tata-teal text-white p-3 rounded-xl hover:bg-tata-teal/90 transition-all duration-300 disabled:opacity-50"
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
