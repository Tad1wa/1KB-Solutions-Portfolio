import React from "react";

export default function TimelineSection() {
  const timeline = [
    {
      badge: "Ongoing",
      title: "NCC Level 5 Diploma in Computing with Business Management",
      place: "Speciss College, Harare",
      note: "Focusing on modules like Information Systems, Data Analysis with Python and IT Project Management and more.",
      i: 0
    },
    {
      badge: "2025 — 2026",
      title: "NCC Level 4 Diploma in Computing with Business Management",
      place: "Speciss College, Harare",
      note: "Modules completed: Computer Systems, Computer Networks, eBusiness, Front End Web Development, Database Systems, Software Engineering, and Understanding Business Organisations.",
      i: 1
    },
    {
      badge: "2025",
      title: "NCC Level 3 Diploma in Computing",
      place: "Speciss College, Harare",
      note: "Modules: Introduction to Computer Science, Introduction to Programming with Python, Digital Skills, Mathematical Skills for Computing, and Study & Presentation Skills.",
      i: 2
    },
    {
      badge: "In progress",
      title: "Acadex — School Management SaaS",
      note: "Full PERN-stack application built with Refine.js and Drizzle ORM.",
      i: 3
    },
    {
      badge: "Ongoing",
      title: "This Portfolio",
      note: "Liquid-glass interface with custom cinematic design.",
      i: 4
    },
    {
      badge: "Earlier",
      title: "EUNNAH24 Clinic Project",
      note: "Epworth, Harare maternity clinic prototype.",
      i: 5
    }
  ];

  return (
    <section id="timeline" className="pt-24 md:pt-32" data-testid="section-timeline">
      <div className="mb-16 reveal">
        <h2 className="font-display font-bold text-3xl md:text-4xl text-white">Journey</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full" />
      </div>

      <div className="relative pl-6 md:pl-8 border-l border-white/10 space-y-12 reveal-stagger">
        {timeline.map((item) => (
          <div 
            key={item.title} 
            className="relative"
            style={{ "--i": item.i } as React.CSSProperties}
          >
            {/* Timeline Dot */}
            <div className="absolute -left-[31px] md:-left-[39px] top-1 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(0,229,255,0.5)]" />
            
            {/* Content Card */}
            <div className="glass-card p-6 md:p-8 ml-4">
              <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold text-secondary bg-secondary/10 border border-secondary/20 rounded-full">
                {item.badge}
              </span>
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-2">
                {item.title}
              </h3>
              {item.place && (
                <p className="text-primary font-medium mb-3">{item.place}</p>
              )}
              <p className="text-muted-foreground leading-relaxed">
                {item.note}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}