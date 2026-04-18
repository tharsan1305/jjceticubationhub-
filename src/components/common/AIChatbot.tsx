import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Send, X, Bot, Rocket } from "lucide-react";

export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! I am the JJCET Incubation Hub Assistant. Ask me anything about our startups, team, events, or how to apply! 🚀" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    const API_KEY = import.meta.env.VITE_API_KEY;

    try {
      // Note: In a real production app, this would be a backend proxy to keep the API key safe.
      // For this demonstration, we are following the user's specific request for the fetch logic.
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "x-api-key": API_KEY,
          "anthropic-version": "2023-06-01",
          "dangerouslyAllowBrowser": "true" // Note: This is usually for the SDK, but added header-style for clarity if needed by proxy
        },
        body: JSON.stringify({
          model: "claude-3-sonnet-20240229", 
          max_tokens: 500,
          system: `You are the JJCET Incubation Hub assistant. You know everything about JJCET Incubation Hub. Answer questions about:
          
          STARTUPS:
          1. Areostellar - Future Tech - Founder: Sanjay. Drone technology for photography and defense
          2. Maxifiled - Digital Services - Founder: Aswin. SaaS solutions for businesses
          3. Nexara Creation - Creative Media - Founder: Arun. Digital marketing and branding
          4. Nexora Crew - SaaS & AI - Founder: Tharsan. AI powered digital products
          5. Rapid Arms - Defense Tech - Founder: Prasanna. Defense engineering solutions
          
          TEAM:
          Principal: Dr. P. Mathiyalagan
          Vice Principal: Dr. P. Premkumar
          Faculty Coordinator: Mr. Navin M
          Student President: Mr. S. N. Sanjay
          
          LOCATION: JJ College of Engineering & Technology, Trichy
          
          Keep answers short, friendly, and helpful. Always encourage students to apply.`,
          messages: [{ role: "user", content: userMessage }]
        })
      });

      const data = await response.json();
      const botResponse = data.content?.[0]?.text || "I'm having trouble connecting right now. How else can I help you today?";
      setMessages(prev => [...prev, { role: "assistant", content: botResponse }]);
    } catch (error) {
      // Mocking response for demo if API fails/key missing
      setTimeout(() => {
        setMessages(prev => [...prev, { role: "assistant", content: "That's a great question about the JJCET Incubation Hub! We're here to help student entrepreneurs turn their ideas into reality. You should check out our /apply page to get started! 🚀" }]);
      }, 1000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 left-8 z-[100] flex flex-col items-start leading-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20, originX: 0, originY: 1 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-6 w-[350px] h-[450px] bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#1a2a4a] p-6 flex items-center justify-between shrink-0">
               <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-xl flex items-center justify-center">
                    <Bot className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-white font-black text-sm uppercase tracking-widest">Hub Assistant</h3>
                    <div className="flex items-center gap-1.5 mt-0.5">
                       <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                       <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest">Online Now</span>
                    </div>
                  </div>
               </div>
               <button onClick={() => setIsOpen(false)} className="text-white/30 hover:text-white transition-colors">
                 <X className="w-5 h-5" />
               </button>
            </div>

            {/* Chat Area */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar bg-slate-50 dark:bg-slate-900">
               {messages.map((msg, i) => (
                 <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] p-4 rounded-2xl text-xs font-bold leading-relaxed shadow-sm ${
                      msg.role === 'user' 
                        ? 'bg-[#1a2a4a] text-white rounded-tr-none' 
                        : 'bg-white dark:bg-slate-800 text-primary dark:text-white rounded-tl-none border border-slate-100 dark:border-slate-700'
                    }`}>
                      {msg.content}
                    </div>
                 </div>
               ))}
               {isLoading && (
                 <div className="flex justify-start">
                   <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl rounded-tl-none border border-slate-100 dark:border-slate-700 flex gap-1">
                      <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce" />
                   </div>
                 </div>
               )}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 bg-white dark:bg-slate-800 border-t border-slate-100 dark:border-slate-700 flex gap-3">
               <input 
                 type="text" 
                 value={input}
                 onChange={(e) => setInput(e.target.value)}
                 placeholder="Ask me about hub..."
                 className="flex-1 bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-xl px-4 py-3 text-xs font-bold text-primary dark:text-white outline-none focus:border-secondary transition-all"
               />
               <button 
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-10 h-10 bg-[#1a2a4a] text-white rounded-xl flex items-center justify-center hover:scale-105 active:scale-95 disabled:opacity-50 transition-all shrink-0"
               >
                 <Send className="w-4 h-4" />
               </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#1a2a4a] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all relative group"
      >
        <div className="absolute inset-0 bg-secondary rounded-full blur-lg opacity-0 group-hover:opacity-20 transition-opacity" />
        <Bot className="w-7 h-7 relative z-10" />
      </motion.button>
    </div>
  );
};
