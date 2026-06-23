import { Github, Linkedin, Mail, Phone, MapPin, ArrowUpRight, Clock } from "lucide-react";
import PageLayout from "@/components/PageLayout";

export default function ContactPage() {
  return (
    <PageLayout>
      {/* Page header */}
      <div className="mb-16 reveal" style={{ "--i": 0 } as React.CSSProperties}>
        <span className="text-xs font-semibold text-primary tracking-widest uppercase">
          04 / Contact
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-extrabold text-white mt-3 leading-tight">
          Let's build something
          <br />
          <span className="gradient-text">that matters.</span>
        </h1>
        <div className="h-px w-24 bg-gradient-to-r from-primary to-transparent mt-6" />
        <p className="text-muted-foreground mt-4 max-w-xl text-base leading-relaxed">
          Got a project, a question, or just want to say hello? My inbox is open.
          I respond to every message.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">

        {/* Left: Big CTA card */}
        <div className="flex flex-col gap-6 reveal" style={{ "--i": 1 } as React.CSSProperties}>
          <div className="glass-card p-8 flex flex-col gap-6 rounded-2xl cta-glow-card">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(0,255,204,0.9)]" />
              <span className="text-sm text-primary font-medium">
                Available for freelance &amp; collaboration
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl text-white leading-tight">
              Let's work together
            </h2>

            <p className="text-muted-foreground leading-relaxed text-sm">
              Whether you need a full-stack web application, a polished UI, or a
              database-backed system — I build things end to end. Based in Harare,
              working with clients globally.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:rnmarimo@gmail.com"
                className="magnetic-cta text-sm"
                data-testid="link-email-cta"
              >
                Email me &rarr;
              </a>
              <a
                href="tel:+263771763611"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-white/15 bg-white/4 text-white font-semibold text-sm hover:border-primary/40 hover:bg-primary/8 transition-all duration-300"
                data-testid="link-call-cta"
              >
                <Phone size={14} />
                Call me
              </a>
            </div>
          </div>

          {/* Location + timezone */}
          <div className="grid grid-cols-2 gap-4">
            <div className="glass-card px-5 py-4 flex items-center gap-3 rounded-xl reveal" style={{ "--i": 2 } as React.CSSProperties}>
              <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/25 flex items-center justify-center shrink-0">
                <MapPin size={16} className="text-primary" />
              </div>
              <div>
                <p className="text-white font-semibold text-xs">Location</p>
                <p className="text-muted-foreground text-xs mt-0.5">Harare, Zimbabwe</p>
              </div>
            </div>

            <div className="glass-card px-5 py-4 flex items-center gap-3 rounded-xl reveal" style={{ "--i": 3 } as React.CSSProperties}>
              <div className="w-9 h-9 rounded-full bg-secondary/10 border border-secondary/25 flex items-center justify-center shrink-0">
                <Clock size={16} className="text-secondary" />
              </div>
              <div>
                <p className="text-white font-semibold text-xs">Timezone</p>
                <p className="text-muted-foreground text-xs mt-0.5">CAT (UTC+2)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Contact channels */}
        <div className="flex flex-col gap-4 reveal" style={{ "--i": 2 } as React.CSSProperties}>
          <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-2">
            Direct channels
          </p>

          {[
            {
              icon: Mail,
              label: "Email",
              value: "rnmarimo@gmail.com",
              href: "mailto:rnmarimo@gmail.com",
              desc: "Best for project briefs and detailed inquiries",
              color: "#00ffcc",
            },
            {
              icon: Phone,
              label: "WhatsApp / Call",
              value: "+263 77 176 3611",
              href: "tel:+263771763611",
              desc: "Quick questions and real-time coordination",
              color: "#25d366",
            },
            {
              icon: Github,
              label: "GitHub",
              value: "github.com/Tad1wa",
              href: "https://github.com/Tad1wa",
              desc: "Browse my open-source work and code",
              color: "#ffffff",
            },
            {
              icon: Linkedin,
              label: "LinkedIn",
              value: "Tadiwa Marimo",
              href: "https://www.linkedin.com/in/tadiwa-marimo-964930417/",
              desc: "Professional profile and endorsements",
              color: "#0a66c2",
            },
          ].map(({ icon: Icon, label, value, href, desc, color }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="glass-card px-5 py-4 flex items-center gap-4 group rounded-xl contact-link-card"
              data-testid={`link-contact-${label.toLowerCase().replace(/\s/g, "-")}`}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                style={{ background: `${color}12`, border: `1px solid ${color}25` }}
              >
                <Icon size={20} style={{ color }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-display font-bold text-white text-sm group-hover:text-primary transition-colors duration-200">
                    {label}
                  </span>
                </div>
                <p className="text-xs font-mono text-primary/70 truncate mt-0.5">{value}</p>
                <p className="text-xs text-muted-foreground mt-0.5">{desc}</p>
              </div>
              <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
            </a>
          ))}
        </div>
      </div>

      {/* Bottom message card */}
      <div className="glass-card p-8 rounded-2xl text-center reveal" style={{ "--i": 5 } as React.CSSProperties}>
        <p className="text-muted-foreground text-base leading-relaxed max-w-2xl mx-auto">
          I'm a builder who cares — about the work, the people it serves, and the
          craft behind it. If you have something worth building, let's talk.
        </p>
        <p className="text-primary font-display font-bold mt-4 text-lg">
          rnmarimo@gmail.com
        </p>
      </div>
    </PageLayout>
  );
}
