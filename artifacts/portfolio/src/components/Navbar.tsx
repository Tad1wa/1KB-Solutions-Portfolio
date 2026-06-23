import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Skills", href: "/skills" },
  { name: "Journey", href: "/journey" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <nav
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
    scrolled ? "glass-nav py-3" : "bg-transparent py-5"
  }`}
  data-testid="navbar"
>cat /Users/kb/Downloads/Marimo-Design-Hub/artifacts/portfolio/src/index.css
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" data-testid="link-home-logo">
          <img
            src={`${import.meta.env.BASE_URL}1kb-logo-transparent.png`}
            alt="1KB Solutions"
            className="h-10 w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
          />
          <div className="hidden sm:block">
            <p className="font-display font-bold text-sm text-white leading-none tracking-wide group-hover:text-primary transition-colors duration-300">
              1KB Solutions
            </p>
            <p className="text-[10px] text-muted-foreground font-medium tracking-widest uppercase leading-none mt-0.5">
              Portfolio
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex gap-1">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "text-white nav-link-active"
                      : "text-muted-foreground hover:text-white hover:bg-white/5"
                  }`}
                  data-testid={`link-${link.name.toLowerCase()}`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
                  )}
                </Link>
              );
            })}
          </div>
          <Link
            href="/contact"
            className="nav-cta px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-300"
            data-testid="button-contact"
          >
            Contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground p-2 rounded-lg hover:bg-white/5 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden mobile-menu-wrap ${mobileMenuOpen ? "mobile-menu-open" : ""}`}>
        <div className="absolute top-full left-0 w-full glass-nav border-b border-white/10 p-6 flex flex-col gap-2 shadow-2xl">
          {navLinks.map((link) => {
            const isActive = location === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-base font-medium py-3 px-4 rounded-xl transition-all duration-200 ${
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-white hover:bg-white/5"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="text-base font-semibold text-primary py-3 px-4 mt-2 rounded-xl border border-primary/30 bg-primary/10 text-center"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
