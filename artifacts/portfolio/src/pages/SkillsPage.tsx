import {
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiExpress,
  SiTailwindcss,
  SiFigma,
  SiThreedotjs,
  SiTypescript,
  SiGit,
  SiDocker,
  SiPython,
  SiNextdotjs,
  SiDrizzle,
} from "react-icons/si";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const primaryStack = [
  { name: "React", icon: SiReact, color: "#61dafb", category: "Frontend", note: "My primary UI library — hooks, context, custom components." },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6", category: "Language", note: "Everything I build is typed. No excuses." },
  { name: "Node.js", icon: SiNodedotjs, color: "#68a063", category: "Backend", note: "REST APIs, middleware, business logic." },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", category: "Database", note: "Relational schemas, joins, indexing, migrations." },
  { name: "Express", icon: SiExpress, color: "#eeeeee", category: "Backend", note: "Fast, minimal API server framework." },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38bdf8", category: "Styling", note: "Utility-first styling — consistent design systems." },
  { name: "Figma", icon: SiFigma, color: "#f24e1e", category: "Design", note: "UI design, prototypes, component libraries." },
  { name: "Drizzle ORM", icon: SiDrizzle, color: "#00ffcc", category: "Database", note: "Type-safe SQL — schema-first, no magic." },
  { name: "Three.js", icon: SiThreedotjs, color: "#ffffff", category: "3D/WebGL", note: "3D graphics and interactive particle systems." },
];

const alsoKnow = [
  { name: "Python", icon: SiPython, color: "#3776ab" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Git", icon: SiGit, color: "#f05032" },
  { name: "Docker", icon: SiDocker, color: "#2496ed" },
];

const capabilities = [
  { label: "Full-Stack Web Apps", detail: "API + DB + UI, end to end" },
  { label: "Authentication & Auth Flows", detail: "JWT, sessions, OAuth" },
  { label: "Database Design", detail: "Schema, relations, migrations" },
  { label: "REST API Design", detail: "Clean routes, validation, error handling" },
  { label: "UI Component Libraries", detail: "shadcn/ui, Radix, custom" },
  { label: "Responsive Layouts", detail: "Mobile-first, all breakpoints" },
  { label: "Design Systems", detail: "Tokens, variants, documentation" },
  { label: "3D / WebGL Scenes", detail: "Three.js, particles, shaders" },
];

export default function SkillsPage() {
  return (
    <PageLayout>
      {/* ── Header ───────────────────────────────────── */}
      <div className="mb-16 reveal" style={{ "--i": 0 } as React.CSSProperties}>
        <span className="text-xs font-semibold text-primary tracking-widest uppercase">02 / Skills</span>
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mt-3 leading-tight">
          Tools I work with
          <br />
          <span className="gradient-text">day in, day out.</span>
        </h1>
        <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent mt-6" />
        <p className="text-muted-foreground mt-4 max-w-xl text-base leading-relaxed">
          A focused stack built through real projects — not just tutorials. Every
          tool here has been used to ship something real.
        </p>
      </div>

      {/* ── Core Stack grid ──────────────────────────── */}
      <div className="mb-20">
        <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-8 reveal" style={{ "--i": 1 } as React.CSSProperties}>
          Core stack
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 reveal-stagger">
          {primaryStack.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="glass-card p-5 flex items-start gap-4 group skill-pill"
                style={{ "--i": i } as React.CSSProperties}
                data-testid={`skill-${skill.name.toLowerCase().replace(/\s/g, "-")}`}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                  style={{ background: `${skill.color}12`, boxShadow: `0 0 0 1px ${skill.color}20` }}
                >
                  <Icon size={22} style={{ color: skill.color }} />
                </div>
                <div>
                  <p className="font-display font-bold text-white text-sm group-hover:text-primary transition-colors duration-200">
                    {skill.name}
                  </p>
                  <p className="text-xs text-primary/60 mb-1">{skill.category}</p>
                  <p className="text-xs text-muted-foreground leading-snug">{skill.note}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Also know ────────────────────────────────── */}
      <div className="mb-20 reveal" style={{ "--i": 0 } as React.CSSProperties}>
        <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-6">
          Also familiar with
        </p>
        <div className="flex flex-wrap gap-3">
          {alsoKnow.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="glass-card px-5 py-3 flex items-center gap-3 group rounded-full"
                data-testid={`skill-extra-${skill.name.toLowerCase()}`}
              >
                <Icon size={16} style={{ color: skill.color }} className="group-hover:scale-110 transition-transform duration-200" />
                <span className="text-sm font-medium text-foreground group-hover:text-white transition-colors">{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* ── Capabilities checklist ────────────────────── */}
      <div className="mb-20">
        <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-8 reveal" style={{ "--i": 0 } as React.CSSProperties}>
          What I can build for you
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 reveal-stagger">
          {capabilities.map(({ label, detail }, i) => (
            <div
              key={label}
              className="glass-card px-5 py-4 flex items-center gap-4 group rounded-xl"
              style={{ "--i": i } as React.CSSProperties}
            >
              <div className="w-5 h-5 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white group-hover:text-primary transition-colors duration-200">{label}</p>
                <p className="text-xs text-muted-foreground">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────── */}
      <div className="glass-card p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 reveal" style={{ "--i": 0 } as React.CSSProperties}>
        <div>
          <p className="font-display font-bold text-white text-xl">Need these skills on your team?</p>
          <p className="text-muted-foreground text-sm mt-1">Let's talk about what you're building.</p>
        </div>
        <Link href="/contact" className="magnetic-cta shrink-0 flex items-center gap-2" data-testid="button-skills-cta">
          Get in touch <ArrowRight size={15} />
        </Link>
      </div>
    </PageLayout>
  );
}
