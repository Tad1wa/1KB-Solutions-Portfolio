import { Link } from "wouter";
import { Github, Linkedin, Mail } from "lucide-react";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Journey", href: "/journey" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/5 relative z-10" data-testid="footer">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <Link href="/" className="flex items-center gap-3 group" data-testid="footer-logo">
            <img
              src={`${import.meta.env.BASE_URL}1kb-logo-transparent.png`}
              alt="1KB Solutions"
              className="h-10 w-auto object-contain opacity-75 group-hover:opacity-100 transition-opacity duration-300"
            />
            <div>
              <p className="font-display font-bold text-sm text-white leading-none">1KB Solutions</p>
              <p className="text-[10px] text-muted-foreground tracking-widest uppercase leading-none mt-0.5">Portfolio</p>
            </div>
          </Link>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-white transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex gap-3">
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
                className="w-9 h-9 glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-all duration-300 hover:border-primary/30 rounded-xl"
                aria-label={label}
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground/50">
            &copy; 2026 1KB Solutions · Tadiwa Marimo. Built in Harare.
          </p>
          <p className="text-xs text-muted-foreground/30 font-mono">
            EST. 2026 · ZWE
          </p>
        </div>
      </div>
    </footer>
  );
}
