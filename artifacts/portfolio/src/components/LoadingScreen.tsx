import { useState, useEffect, useRef } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

const bootLines = [
  { text: "> LOADING 1KB SOLUTIONS PORTFOLIO...", delay: 200 },
  { text: "> ESTABLISHING SECURE CONNECTION...", delay: 600 },
  { text: "> MOUNTING INTERFACE MODULES...", delay: 950 },
  { text: "> CALIBRATING GLASSMORPHIC RENDERER...", delay: 1250 },
  { text: "> PARSING ASSET MANIFEST...", delay: 1520 },
  { text: "> ALL SYSTEMS ONLINE.", delay: 1800 },
];

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);
  const [logoVisible, setLogoVisible] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [exiting, setExiting] = useState(false);
  const timerRefs = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const add = (fn: () => void, ms: number) => {
      const t = setTimeout(fn, ms);
      timerRefs.current.push(t);
      return t;
    };

    // Phase 1 — logo entrance
    add(() => setLogoVisible(true), 150);
    add(() => setGlitch(true), 400);
    add(() => setGlitch(false), 520);
    add(() => setGlitch(true), 650);
    add(() => setGlitch(false), 720);

    // Phase 1 — boot lines
    bootLines.forEach(({ delay }, i) => add(() => setVisibleLines((p) => [...p, i]), delay));

    // Phase 1 — progress bar
    const progressStart = 200;
    const progressEnd = 2300;
    let raf: number;
    let startTs: number | null = null;
    const animProgress = (ts: number) => {
      if (!startTs) startTs = ts;
      const pct = Math.min((ts - startTs) / (progressEnd - progressStart), 1);
      const eased = pct < 0.7 ? pct * 1.2 : 0.84 + (pct - 0.7) * (1 / 0.3) * 0.16;
      setProgress(Math.min(Math.round(eased * 100), 100));
      if (pct < 1) raf = requestAnimationFrame(animProgress);
    };
    add(() => { raf = requestAnimationFrame(animProgress); }, progressStart);

    // Phase 2 — welcome screen
    add(() => setShowWelcome(true), 2300);

    // Phase 3 — exit
    add(() => setExiting(true), 3600);
    add(onComplete, 4250);

    return () => {
      timerRefs.current.forEach(clearTimeout);
      cancelAnimationFrame(raf);
    };
  }, [onComplete]);

  return (
    <div className={`loading-screen ${exiting ? "loading-exit" : ""}`}>

      {/* ── Phase 1: Boot sequence ─────────────────────── */}
      <div className={`loading-boot-phase ${showWelcome ? "loading-phase-out" : ""}`}>

        {/* Grid background */}
        <div className="loading-grid" />

        {/* Scanlines */}
        <div className="loading-scanlines" />

        {/* HUD corners */}
        <div className="hud-corner hud-tl" /><div className="hud-corner hud-tr" />
        <div className="hud-corner hud-bl" /><div className="hud-corner hud-br" />

        {/* Center content */}
        <div className="loading-center">
          {/* Logo */}
          <div className={`loading-logo ${logoVisible ? "loading-logo-visible" : ""} ${glitch ? "loading-glitch" : ""}`}>
            <img src={`${import.meta.env.BASE_URL}1kb-logo-transparent.png`}
              className="w-36 h-auto mx-auto object-contain loading-logo-img" />
            <div className="mt-4 text-center">
              <p className="loading-brand-name">1KB SOLUTIONS</p>
              <p className="loading-brand-sub">PORTFOLIO v2.0</p>
            </div>
          </div>

          {/* Progress bar */}
          <div className="loading-progress-wrap">
            <div className="loading-progress-track">
              <div className="loading-progress-fill" style={{ width: `${progress}%` }} />
              <div className="loading-progress-glow" style={{ left: `${progress}%` }} />
            </div>
            <div className="loading-progress-label">
              <span className="loading-pct">{progress}%</span>
              <span className="loading-status">
                {progress < 40 ? "INITIALIZING" : progress < 75 ? "LOADING" : progress < 100 ? "FINALIZING" : "COMPLETE"}
              </span>
            </div>
          </div>

          {/* Terminal */}
          <div className="loading-terminal">
            {bootLines.map((line, i) => (
              <div key={i} className={`loading-line ${visibleLines.includes(i) ? "loading-line-visible" : ""}`}>
                {line.text}
              </div>
            ))}
          </div>
        </div>

        {/* HUD bottom bar */}
        <div className="loading-hud-bar">
          <span className="loading-hud-text">1KB SOLUTIONS © 2026</span>
          <span className="loading-hud-sep">|</span>
          <span className="loading-hud-text">HARARE, ZIMBABWE</span>
          <span className="loading-hud-sep">|</span>
          <span className="loading-hud-text blink-slow">■ SECURE</span>
        </div>
      </div>

      {/* ── Phase 2: Welcome screen ─────────────────────── */}
      <div className={`loading-welcome-phase ${showWelcome ? "loading-welcome-visible" : ""}`}>
        <div className="loading-welcome-rays" />
        <div className="loading-welcome-inner">
          <p className="loading-welcome-greeting">WELCOME TO</p>
          <h1 className="loading-welcome-title">
            <span className="loading-welcome-1kb">1KB</span>
            <span className="loading-welcome-solutions">SOLUTIONS</span>
          </h1>
          <div className="loading-welcome-divider">
            <span className="loading-welcome-line" />
            <span className="loading-welcome-diamond">◆</span>
            <span className="loading-welcome-line" />
          </div>
          <p className="loading-welcome-sub">
            The portfolio of <span className="loading-welcome-name">Tadiwa Marimo</span>
          </p>
          <p className="loading-welcome-tagline">
            Full-Stack Developer &amp; UI/UX Designer · Harare, Zimbabwe
          </p>
          <div className="loading-welcome-cta">ENTERING PORTFOLIO&nbsp;&nbsp;▶</div>
        </div>
      </div>
    </div>
  );
}
