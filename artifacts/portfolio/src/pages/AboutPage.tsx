import { Link } from "wouter";
import { Code2, Layers, Cpu, BookOpen, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PortraitFrame from "@/components/PortraitFrame";

const values = [
  {
    icon: BookOpen,
    title: "Always learning",
    desc: "Computing diploma by day, building real products by night. I close the loop between theory and practice as fast as possible.",
    color: "#00ffcc",
  },
  {
    icon: Code2,
    title: "Built to ship",
    desc: "Not demo-ware. I care about auth, error handling, schema design, and things that have to work when real people use them.",
    color: "#a855f7",
  },
  {
    icon: Layers,
    title: "Local impact",
    desc: "Students, clinics, small businesses. Software that serves the people around me — that's the work that matters most.",
    color: "#f97316",
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      {/* ── Header ───────────────────────────────────── */}
      <div className="mb-16 reveal" style={{ "--i": 0 } as React.CSSProperties}>
        <span className="text-xs font-semibold text-primary tracking-widest uppercase">01 / About</span>
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mt-3 leading-tight">
          The person behind
          <br />
          <span className="gradient-text">the keyboard.</span>
        </h1>
        <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent mt-6" />
      </div>

      {/* ── Split grid ───────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24">

        {/* Portrait */}
        <div className="about-portrait lg:col-span-5 flex flex-col items-center lg:items-start gap-3 reveal" style={{ "--i": 1 } as React.CSSProperties}>
          <PortraitFrame widthClass="w-full max-w-[420px]" heightClass="h-[480px]" />
          <p className="text-center lg:text-left text-xs text-muted-foreground/50 italic">
            Move your cursor over the card to reveal the face behind the work.
          </p>
        </div>

        {/* Bio */}
        <div className="about-body lg:col-span-7 flex flex-col justify-center gap-8">
          <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl leading-tight text-white reveal" style={{ "--i": 2 } as React.CSSProperties}>
            Developer and designer — building things that work, then making them feel good to use.
          </h2>

          <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed reveal" style={{ "--i": 3 } as React.CSSProperties}>
            <p>
              I'm currently completing an NCC Level 4 Diploma in Computing with Business Management
              at Speciss College, covering everything from computer networks and systems to
              object-oriented programming and software engineering. Alongside my studies, I build
              real products — most recently Acadex, a school management platform built on the PERN
              stack with Refine.js, Drizzle ORM, and shadcn/ui.
            </p>
            <p>
              I taught myself to code progressively, learning by building — debugging environment
              configs, wiring up authentication, designing database schemas, and shipping interfaces
              that don't feel like afterthoughts. I care about software that's useful for people
              around me: students, small clinics, local businesses.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 reveal" style={{ "--i": 4 } as React.CSSProperties}>
            {[
              { icon: Code2, label: "Projects shipped", value: "3+" },
              { icon: Layers, label: "Diplomas earned", value: "2" },
              { icon: Cpu, label: "Stack depth", value: "Full" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="glass-card p-5 flex flex-col gap-2 text-center rounded-xl group hover:border-primary/25 transition-all duration-300">
                <Icon size={18} className="text-primary mx-auto group-hover:scale-110 transition-transform duration-300" />
                <span className="font-display font-bold text-2xl text-white">{value}</span>
                <span className="text-xs text-muted-foreground leading-snug">{label}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-4 reveal" style={{ "--i": 5 } as React.CSSProperties}>
            <Link href="/skills" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-white transition-colors">
              My tech stack <ArrowRight size={14} />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground hover:text-white transition-colors">
              Get in touch <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* ── Values / Approach ────────────────────────── */}
      <section className="mb-24">
        <div className="mb-10 reveal" style={{ "--i": 0 } as React.CSSProperties}>
          <span className="text-xs font-semibold text-primary tracking-widest uppercase">How I work</span>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mt-2">
            Principles, not just code.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 reveal-stagger">
          {values.map(({ icon: Icon, title, desc, color }, i) => (
            <div
              key={title}
              className="glass-card p-7 flex flex-col gap-4 group"
              style={{ "--i": i } as React.CSSProperties}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: `${color}12`, border: `1px solid ${color}25` }}
              >
                <Icon size={20} style={{ color }} />
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-white mb-1.5 group-hover:text-primary transition-colors duration-300">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Currently section ────────────────────────── */}
      <section className="mb-16">
        <div className="glass-card p-8 rounded-2xl reveal" style={{ "--i": 0 } as React.CSSProperties}>
          <div className="flex items-center gap-2.5 mb-5">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(0,255,204,0.9)]" />
            <span className="text-xs text-primary font-semibold uppercase tracking-widest">Right now</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
            <div>
              <p className="text-white font-semibold mb-1">Studying</p>
              <p>NCC Level 5 Diploma in Computing with Business Management at Speciss College — covering Information Systems, Data Analysis with Python, and IT Project Management.</p>
            </div>
            <div>
              <p className="text-white font-semibold mb-1">Building</p>
              <p>Acadex — a school management SaaS on the PERN stack. Also refining this portfolio and exploring Three.js for more immersive web experiences.</p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
