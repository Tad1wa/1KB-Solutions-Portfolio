import React from "react";
import { MapPin } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="pt-24 md:pt-32" data-testid="section-about">
      <div className="about-grid grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column */}
        <div className="about-portrait lg:col-span-5 reveal">
          <div className="glass-card p-6 aspect-[4/5] flex flex-col justify-end relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10" />
            
            {/* Abstract geometric art replacing plain placeholder */}
            <svg className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-1000" viewBox="0 0 400 500" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
              <circle cx="200" cy="250" r="120" fill="none" stroke="url(#avatarGrad)" strokeWidth="1" className="animate-spin-slow" style={{ animationDuration: '20s' }} />
              <circle cx="200" cy="250" r="80" fill="none" stroke="#00e5ff" strokeWidth="2" strokeDasharray="4 4" className="animate-spin-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
              <path d="M100 250 L300 250 M200 150 L200 350" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            </svg>

            <div className="relative z-20 flex items-end justify-between w-full">
              <div>
                <h3 className="font-display font-bold text-2xl text-white">Tadiwa Marimo</h3>
                <div className="flex items-center gap-1.5 mt-1 text-primary">
                  <MapPin size={14} />
                  <span className="text-sm font-medium">Harare, Zimbabwe</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="about-body lg:col-span-7 flex flex-col justify-center gap-8 reveal-stagger">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight text-white" style={{ "--i": 1 } as React.CSSProperties}>
            Developer and designer — building things that work, then making them feel good to use.
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground" style={{ "--i": 2 } as React.CSSProperties}>
            <p>
              I'm currently completing an NCC Level 4 Diploma in Computing with Business Management at Speciss College, covering everything from computer networks and systems to object-oriented programming and software engineering. Alongside my studies, I build real products — most recently Acadex, a school management platform built on the PERN stack with Refine.js, Drizzle ORM, and shadcn/ui.
            </p>
            <p>
              I taught myself to code progressively, learning by building — debugging environment configs, wiring up authentication, designing database schemas, and shipping interfaces that don't feel like afterthoughts. I care about software that's useful for people around me: students, small clinics, local businesses.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}