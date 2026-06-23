import { Link } from "wouter";
import { ArrowRight, ChevronDown, Code2, Layers, Zap, Github, Linkedin, Mail } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PortraitFrame from "@/components/PortraitFrame";

const featuredProjects = [
  {
    title: "Acadex",
    tag: "SaaS · In Progress",
    tagColor: "primary",
    desc: "A full school management platform built on the PERN stack. Handles students, teachers, timetables and records — built with Refine.js, Drizzle ORM, and shadcn/ui.",
    tech: ["React", "Node.js", "PostgreSQL", "Drizzle ORM"],
    accent: "#00ffcc",
  },
  {
    title: "EUNNAH24 Clinic",
    tag: "Healthcare · Prototype",
    tagColor: "secondary",
    desc: "A maternity clinic management prototype for a real clinic in Epworth, Harare. Focused on patient records and appointment flow.",
    tech: ["React", "Express", "PostgreSQL"],
    accent: "#a855f7",
  },
  {
    title: "This Portfolio",
    tag: "Personal · Live",
    tagColor: "accent",
    desc: "A liquid-glass portfolio with cursor-driven interactions, multi-page routing, and a futuristic aesthetic built entirely in React.",
    tech: ["React", "Tailwind CSS", "TypeScript"],
    accent: "#f97316",
  },
];

export default function HomePage() {
  return (
    <PageLayout>
      {/* ── Hero ─────────────────────────────────────── */}
      <section className="min-h-[calc(100vh-7rem)] flex flex-col justify-center relative" id="hero" data-testid="section-hero">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

          {/* Left: Text */}
          <div className="flex flex-col gap-7 order-2 lg:order-1">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-primary/25 bg-primary/8 w-fit reveal" style={{ "--i": 0 } as React.CSSProperties}>
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_6px_rgba(0,255,204,0.9)]" />
              <span className="text-xs font-semibold text-primary tracking-widest uppercase">
                Harare, Zimbabwe
              </span>
            </div>

            <div className="reveal" style={{ "--i": 1 } as React.CSSProperties}>
              <h1 className="text-5xl md:text-6xl lg:text-[4.5rem] font-display font-extrabold leading-[1.06] tracking-tight">
                <span className="block text-white">Full-Stack</span>
                <span className="block text-white">Developer</span>
                <span className="block gradient-text">&amp; UI/UX Designer</span>
              </h1>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed reveal" style={{ "--i": 2 } as React.CSSProperties}>
              I build real software for real people — from robust backend systems
              to cinematic interfaces that feel alive. Based in Harare, building
              globally.
            </p>

            <div className="flex flex-wrap gap-4 reveal" style={{ "--i": 3 } as React.CSSProperties}>
              <Link href="/about" className="magnetic-cta" data-testid="button-hero-about">
                About me
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/12 bg-white/3 text-white font-display font-semibold text-base hover:border-primary/40 hover:bg-primary/8 transition-all duration-300"
                data-testid="button-hero-contact"
              >
                Let's talk <ArrowRight size={15} />
              </Link>
            </div>

            {/* Social quick-links */}
            <div className="flex gap-3 reveal" style={{ "--i": 4 } as React.CSSProperties}>
              {[
                { icon: Github, href: "https://github.com/Tad1wa", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/tadiwa-marimo-964930417/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:rnmarimo@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_16px_rgba(0,255,204,0.15)] rounded-xl"
                  aria-label={label}
                  data-testid={`link-hero-${label.toLowerCase()}`}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Right: Portrait */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2 reveal" style={{ "--i": 2 } as React.CSSProperties}>
            <PortraitFrame />
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 reveal opacity-50" style={{ "--i": 5 } as React.CSSProperties}>
          <span className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">Scroll</span>
          <ChevronDown size={13} className="text-primary animate-bounce" />
        </div>
      </section>

      {/* ── What I do ────────────────────────────────── */}
      <section className="pt-24 md:pt-32" data-testid="section-what-i-do">
        <div className="mb-12 reveal" style={{ "--i": 0 } as React.CSSProperties}>
          <span className="text-xs font-semibold text-primary tracking-widest uppercase">What I do</span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white mt-2">
            End-to-end product thinking.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 reveal-stagger">
          {[
            {
              icon: Code2,
              title: "Full-Stack Engineering",
              desc: "REST APIs, auth flows, relational databases, and reactive UIs — built and shipped end to end. I own the whole stack.",
              color: "#00ffcc",
              i: 0,
            },
            {
              icon: Layers,
              title: "UI/UX Design",
              desc: "From wireframe to final pixel — component systems, accessibility, micro-interactions, and interfaces people actually enjoy using.",
              color: "#a855f7",
              i: 1,
            },
            {
              icon: Zap,
              title: "Purposeful Software",
              desc: "Software for students, clinics, small businesses. I build things that solve real problems for the people around me.",
              color: "#f97316",
              i: 2,
            },
          ].map(({ icon: Icon, title, desc, color, i }) => (
            <div key={title} className="glass-card p-7 flex flex-col gap-5 group service-card" style={{ "--i": i } as React.CSSProperties}>
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: `${color}12`, border: `1px solid ${color}25` }}
              >
                <Icon size={22} style={{ color }} />
              </div>
              <div>
                <h3 className="font-display font-bold text-white text-lg mb-2 group-hover:text-primary transition-colors duration-300">
                  {title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Featured Projects ─────────────────────────── */}
      <section className="pt-24 md:pt-32" data-testid="section-featured">
        <div className="flex items-end justify-between mb-12 reveal" style={{ "--i": 0 } as React.CSSProperties}>
          <div>
            <span className="text-xs font-semibold text-primary tracking-widest uppercase">Featured work</span>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-white mt-2">
              Things I've shipped.
            </h2>
          </div>
          <Link
            href="/journey"
            className="hidden md:inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors font-medium"
          >
            Full journey <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 reveal-stagger">
          {featuredProjects.map((project, i) => (
            <div
              key={project.title}
              className="glass-card p-7 flex flex-col gap-5 group project-card"
              style={{ "--i": i, "--accent": project.accent } as React.CSSProperties}
              data-testid={`card-project-${i}`}
            >
              <div className="flex items-start justify-between">
                <span
                  className="text-xs font-bold px-2.5 py-1 rounded-full border"
                  style={{
                    color: project.accent,
                    background: `${project.accent}12`,
                    borderColor: `${project.accent}30`,
                  }}
                >
                  {project.tag}
                </span>
              </div>

              <div>
                <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{project.desc}</p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto pt-2 border-t border-white/5">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs text-muted-foreground/70 font-mono">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA strip ────────────────────────────────── */}
      <section className="pt-24 md:pt-32 pb-8" data-testid="section-cta-strip">
        <div className="glass-card p-10 md:p-14 rounded-2xl cta-glow-card flex flex-col md:flex-row items-center justify-between gap-8 reveal" style={{ "--i": 0 } as React.CSSProperties}>
          <div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-white leading-tight">
              Got a project in mind?
            </h2>
            <p className="text-muted-foreground mt-2 max-w-md text-sm leading-relaxed">
              I'm available for freelance work, collab, and open-source contributions. Let's build something great.
            </p>
          </div>
          <Link href="/contact" className="magnetic-cta shrink-0" data-testid="button-strip-cta">
            Get in touch &rarr;
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
