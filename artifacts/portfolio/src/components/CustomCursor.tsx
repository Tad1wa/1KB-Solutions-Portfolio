import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const reticleRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: -200, y: -200 });
  const trail = useRef({ x: -200, y: -200 });
  const rafId = useRef<number>(0);

  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };

    const onDown = () => setClicking(true);
    const onUp   = () => setClicking(false);

    const onOver = (e: MouseEvent) => {
      const t = e.target as Element;
      setHovering(
        !!t.closest('a, button, [role="button"], input, textarea, select, label, .magnetic-cta, .glass-card, .nav-cta, .timeline-card, .skill-pill, .service-card, .project-card')
      );
    };

    const tick = () => {
      // Spring lerp — trail lags ~8 frames behind
      trail.current.x += (mouse.current.x - trail.current.x) * 0.11;
      trail.current.y += (mouse.current.y - trail.current.y) * 0.11;

      if (reticleRef.current) {
        reticleRef.current.style.transform =
          `translate(${mouse.current.x}px, ${mouse.current.y}px)`;
      }
      if (trailRef.current) {
        trailRef.current.style.transform =
          `translate(${trail.current.x}px, ${trail.current.y}px)`;
      }
      rafId.current = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseover", onOver, { passive: true });
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <>
      {/* ── Ghost trail ring ─────────────────── */}
      <div
        ref={trailRef}
        className={[
          "cc-trail",
          visible  ? "cc-visible"       : "",
          hovering ? "cc-trail-hover"   : "",
          clicking ? "cc-trail-click"   : "",
        ].join(" ")}
        aria-hidden="true"
      />

      {/* ── Main reticle ─────────────────────── */}
      <div
        ref={reticleRef}
        className={[
          "cc-reticle",
          visible  ? "cc-visible"      : "",
          hovering ? "cc-reticle-hover": "",
          clicking ? "cc-reticle-click": "",
        ].join(" ")}
        aria-hidden="true"
      >
        {/* Outer ring */}
        <div className="cc-ring" />
        {/* Corner tick marks — rotated square HUD corners */}
        <div className="cc-tick cc-tick-tl" />
        <div className="cc-tick cc-tick-tr" />
        <div className="cc-tick cc-tick-bl" />
        <div className="cc-tick cc-tick-br" />
        {/* Cross hair lines */}
        <div className="cc-cross cc-cross-h" />
        <div className="cc-cross cc-cross-v" />
        {/* Centre dot */}
        <div className="cc-dot" />
      </div>
    </>
  );
}
