import { useEffect, useRef, useState } from "react";
import { useLocation } from "wouter";

const PAGE_LABELS: Record<string, string> = {
  "/": "HOME",
  "/about": "ABOUT",
  "/skills": "SKILLS",
  "/journey": "JOURNEY",
  "/contact": "CONTACT",
};

type Phase = "idle" | "in" | "hold" | "out";

export default function PageTransitionOverlay() {
  const [location] = useLocation();
  const [phase, setPhase] = useState<Phase>("idle");
  const [label, setLabel] = useState("");
  const prevLocation = useRef<string | null>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    // Skip the very first mount
    if (prevLocation.current === null) {
      prevLocation.current = location;
      return;
    }
    if (location === prevLocation.current) return;

    const destination = location;
    prevLocation.current = location;

    // Clear any running timers from a previous transition
    timers.current.forEach(clearTimeout);
    timers.current = [];

    const add = (fn: () => void, ms: number) => {
      const t = setTimeout(fn, ms);
      timers.current.push(t);
    };

    setLabel((PAGE_LABELS[destination] ?? destination.replace("/", "").toUpperCase()) || "HOME");

    // Phase sequence:
    // 0ms    → "in"   (scan bar sweeps down, overlay covers screen)
    // 280ms  → "hold" (static for a beat while new page renders)
    // 420ms  → "out"  (scan bar sweeps up, overlay fades)
    // 720ms  → "idle" (overlay removed from DOM)
    setPhase("in");
    add(() => setPhase("hold"), 280);
    add(() => setPhase("out"), 420);
    add(() => setPhase("idle"), 720);

    return () => timers.current.forEach(clearTimeout);
  }, [location]);

  if (phase === "idle") return null;

  return (
    <div className={`pt-overlay pt-overlay-${phase}`} aria-hidden="true">
      {/* Scan bar */}
      <div className={`pt-scan-bar pt-scan-bar-${phase}`} />

      {/* Centre HUD content — visible only during hold */}
      <div className={`pt-hud ${phase === "hold" ? "pt-hud-visible" : ""}`}>
        <div className="pt-hud-corners">
          <span className="pt-hud-corner pt-hud-tl" />
          <span className="pt-hud-corner pt-hud-tr" />
          <span className="pt-hud-corner pt-hud-bl" />
          <span className="pt-hud-corner pt-hud-br" />
        </div>
        <p className="pt-hud-prefix">// NAVIGATING TO</p>
        <p className="pt-hud-label">{label}</p>
        <div className="pt-hud-bar-wrap">
          <div className="pt-hud-bar-fill" />
        </div>
      </div>
    </div>
  );
}
