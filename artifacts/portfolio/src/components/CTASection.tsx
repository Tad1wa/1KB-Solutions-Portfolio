import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function CTASection() {
  return (
    <section id="contact" className="pt-32 pb-16 flex flex-col items-center justify-center text-center reveal-stagger" data-testid="section-contact">
      <h2 className="font-display font-bold text-4xl md:text-6xl text-white mb-6" style={{ "--i": 0 } as React.CSSProperties}>
        Let's work together
      </h2>
      
      <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl" style={{ "--i": 1 } as React.CSSProperties}>
        Building something meaningful? I'd love to help bring your vision to life.
      </p>
      
      <div style={{ "--i": 2 } as React.CSSProperties}>
        <a href="mailto:hello@example.com" className="magnetic-cta" data-testid="link-cta">
          Get in touch &rarr;
        </a>
      </div>

      <div className="flex gap-6 mt-16" style={{ "--i": 3 } as React.CSSProperties}>
        <a href="#" className="p-4 glass-card text-muted-foreground hover:text-white transition-colors group" aria-label="GitHub">
          <Github size={24} className="group-hover:scale-110 transition-transform" />
        </a>
        <a href="#" className="p-4 glass-card text-muted-foreground hover:text-[#0077b5] transition-colors group" aria-label="LinkedIn">
          <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
        </a>
        <a href="mailto:hello@example.com" className="p-4 glass-card text-muted-foreground hover:text-primary transition-colors group" aria-label="Email">
          <Mail size={24} className="group-hover:scale-110 transition-transform" />
        </a>
      </div>
    </section>
  );
}