import React from "react";
import { MapPin, ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 relative" id="hero" data-testid="section-hero">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center h-full">
        
        <div className="flex flex-col gap-6 order-2 lg:order-1 reveal-stagger">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/20 bg-primary/10 w-fit" style={{ "--i": 1 } as React.CSSProperties}>
            <MapPin size={14} className="text-primary" />
            <span className="text-xs font-medium text-primary tracking-wide uppercase">Harare, Zimbabwe</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold leading-[1.1] tracking-tight" style={{ "--i": 2 } as React.CSSProperties}>
            <span className="block text-foreground">Full-Stack Developer</span>
            <span className="block gradient-text">& UI/UX Designer</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed" style={{ "--i": 3 } as React.CSSProperties}>
            I build real software for real people. Creating cinematic interfaces and robust backend systems with a focus on purposeful design.
          </p>
        </div>

        <div className="flex justify-center lg:justify-end order-1 lg:order-2 reveal" style={{ "--i": 4 } as React.CSSProperties}>
          <div className="portrait-frame relative w-[280px] h-[340px] md:w-[380px] md:h-[460px] rounded-2xl overflow-hidden glass-card group flex items-center justify-center">
            {/* SVG Avatar Placeholder */}
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-4/5 h-4/5 opacity-80 group-hover:scale-105 transition-transform duration-700">
              <defs>
                <linearGradient id="avatarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00e5ff" />
                  <stop offset="100%" stopColor="#7c3aed" />
                </linearGradient>
              </defs>
              <path fill="url(#avatarGrad)" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.5,90,-16.3,87.6,-1.4C85.2,13.5,77.8,27,69.5,39.3C61.2,51.6,52,62.7,40.1,69.8C28.2,76.9,14.1,80,-0.6,81C-15.3,82,-30.6,80.9,-43.3,74.3C-56,67.7,-66.1,55.6,-74.6,42.4C-83.1,29.2,-90,14.6,-91.1,-0.6C-92.2,-15.8,-87.5,-31.6,-78.4,-44.5C-69.3,-57.4,-55.8,-67.4,-41.8,-74.8C-27.8,-82.2,-13.9,-87,0.7,-88.2C15.3,-89.4,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
            </svg>
            <div className="absolute bottom-4 left-4 right-4 p-4 glass-card bg-background/40 backdrop-blur-md flex items-center justify-between rounded-xl border border-white/10">
              <div>
                <p className="font-display font-bold text-white text-sm">Tadiwa Marimo</p>
                <p className="text-xs text-muted-foreground">Available for work</p>
              </div>
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </div>
          </div>
        </div>

      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 reveal animate-bounce" style={{ "--i": 5 } as React.CSSProperties}>
        <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
        <ChevronDown size={16} className="text-primary" />
      </div>
    </section>
  );
}