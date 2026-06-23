import { Link } from "wouter";
import { ArrowRight, GraduationCap, Laptop } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const timeline = [
  {
    badge: "Ongoing",
    accentColor: "#00ffcc",
    title: "NCC Level 5 Diploma in Computing with Business Management",
    place: "Speciss College, Harare",
    note: "Focusing on modules like Information Systems, Data Analysis with Python and IT Project Management and more.",
    type: "education",
    i: 0,
  },
  {
    badge: "2025 — 2026",
    accentColor: "#a855f7",
    title: "NCC Level 4 Diploma in Computing with Business Management",
    place: "Speciss College, Harare",
    note: "Modules completed: Computer Systems, Computer Networks, eBusiness, Front End Web Development, Database Systems, Software Engineering, and Understanding Business Organisations.",
    type: "education",
    i: 1,
  },
  {
    badge: "2025",
    accentColor: "#a855f7",
    title: "NCC Level 3 Diploma in Computing",
    place: "Speciss College, Harare",
    note: "Modules: Introduction to Computer Science, Introduction to Programming with Python, Digital Skills, Mathematical Skills for Computing, and Study & Presentation Skills.",
    type: "education",
    i: 2,
  },
  {
    badge: "In progress",
    accentColor: "#00ffcc",
    title: "Acadex — School Management SaaS",
    note: "Full PERN-stack application built with Refine.js, Drizzle ORM, and shadcn/ui. Designed for schools to manage students, teachers, timetables, and records.",
    type: "project",
    i: 3,
  },
  {
    badge: "Ongoing",
    accentColor: "#f97316",
    title: "This Portfolio",
    note: "Liquid-glass interface with cursor-driven photo reveal, animated mesh blobs, and multi-page routing. A living document of everything I'm learning.",
    type: "project",
    i: 4,
  },
  {
    badge: "Earlier",
    accentColor: "#a855f7",
    title: "EUNNAH24 Clinic Project",
    note: "Epworth, Harare maternity clinic prototype. Built to help clinic staff manage patient records and appointment scheduling.",
    type: "project",
    i: 5,
  },
];

export default function JourneyPage() {
  return (
    <PageLayout>
      {/* ── Header ───────────────────────────────────── */}
      <div className="mb-16 reveal" style={{ "--i": 0 } as React.CSSProperties}>
        <span className="text-xs font-semibold text-primary tracking-widest uppercase">03 / Journey</span>
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mt-3 leading-tight">
          Education and projects —
          <br />
          <span className="gradient-text">the story so far.</span>
        </h1>
        <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent mt-6" />
        <p className="text-muted-foreground mt-4 max-w-xl text-sm leading-relaxed">
          Every entry here is a real thing — completed, in progress, or shipped.
          I learn by doing and I document as I go.
        </p>
      </div>

      {/* ── Legend ───────────────────────────────────── */}
      <div className="flex gap-6 mb-12 reveal" style={{ "--i": 1 } as React.CSSProperties}>
        <div className="flex items-center gap-2">
          <GraduationCap size={14} className="text-primary" />
          <span className="text-xs text-muted-foreground">Education</span>
        </div>
        <div className="flex items-center gap-2">
          <Laptop size={14} className="text-secondary" />
          <span className="text-xs text-muted-foreground">Project</span>
        </div>
      </div>

      {/* ── Timeline ─────────────────────────────────── */}
      <div className="relative pl-7 md:pl-11 timeline-line space-y-10 reveal-stagger mb-24">
        {timeline.map((item) => (
          <div
            key={item.title}
            className="relative"
            style={{ "--i": item.i } as React.CSSProperties}
          >
            {/* Dot */}
            <div
              className="absolute -left-[30px] md:-left-[38px] top-6 w-4 h-4 rounded-full border-2 border-background z-10 flex items-center justify-center"
              style={{
                backgroundColor: item.accentColor,
                boxShadow: `0 0 16px ${item.accentColor}70`,
              }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-background" />
            </div>

            {/* Card */}
            <div className="glass-card p-6 md:p-7 ml-4 group timeline-card" data-testid={`timeline-item-${item.i}`}>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className="px-3 py-1 text-xs font-bold rounded-full border"
                  style={{
                    color: item.accentColor,
                    background: `${item.accentColor}12`,
                    borderColor: `${item.accentColor}30`,
                  }}
                >
                  {item.badge}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground/60">
                  {item.type === "education"
                    ? <><GraduationCap size={11} /> Education</>
                    : <><Laptop size={11} /> Project</>
                  }
                </span>
              </div>

              <h3
                className="text-lg md:text-xl font-display font-bold text-white mb-2 group-hover:transition-colors duration-300"
                style={{ ["--hover-color" as string]: item.accentColor }}
              >
                {item.title}
              </h3>

              {item.place && (
                <p className="text-sm font-medium mb-3" style={{ color: item.accentColor, opacity: 0.8 }}>
                  {item.place}
                </p>
              )}

              <p className="text-sm text-muted-foreground leading-relaxed">{item.note}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── CTA ──────────────────────────────────────── */}
      <div className="glass-card p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 reveal" style={{ "--i": 0 } as React.CSSProperties}>
        <div>
          <p className="font-display font-bold text-white text-xl">
            Want to add to this story together?
          </p>
          <p className="text-muted-foreground text-sm mt-1">
            I'm open to projects, collaboration, and new challenges.
          </p>
        </div>
        <Link href="/contact" className="magnetic-cta shrink-0 flex items-center gap-2" data-testid="button-journey-cta">
          Say hello <ArrowRight size={15} />
        </Link>
      </div>
    </PageLayout>
  );
}
