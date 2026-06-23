import { useRef, useState, useCallback, useEffect } from "react";
import { MapPin } from "lucide-react";

interface PortraitFrameProps {
  widthClass?: string;
  heightClass?: string;
  showCaption?: boolean;
}

export default function PortraitFrame({
  widthClass = "w-[270px] md:w-[370px]",
  heightClass = "h-[340px] md:h-[460px]",
  showCaption = true,
}: PortraitFrameProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const maskPos = useRef({ x: 50, y: 50 });
  const currentRadius = useRef(0);
  const targetRadius = useRef(0);
  const animFrameId = useRef<number>(0);
  const [displayRadius, setDisplayRadius] = useState(0);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const [imgLoaded, setImgLoaded] = useState(false);

  const runAnimation = useCallback(() => {
    const diff = targetRadius.current - currentRadius.current;
    if (Math.abs(diff) < 0.4) {
      currentRadius.current = targetRadius.current;
      setDisplayRadius(currentRadius.current);
      return;
    }
    currentRadius.current += diff * 0.10;
    setDisplayRadius(Math.round(currentRadius.current));
    animFrameId.current = requestAnimationFrame(runAnimation);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const frame = frameRef.current;
    if (!frame) return;
    const rect = frame.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    maskPos.current = { x, y };
    setPos({ x, y });
  }, []);

  const handleMouseEnter = useCallback(() => {
    cancelAnimationFrame(animFrameId.current);
    targetRadius.current = 260;
    animFrameId.current = requestAnimationFrame(runAnimation);
  }, [runAnimation]);

  const handleMouseLeave = useCallback(() => {
    cancelAnimationFrame(animFrameId.current);
    targetRadius.current = 0;
    animFrameId.current = requestAnimationFrame(runAnimation);
  }, [runAnimation]);

  useEffect(() => {
    return () => cancelAnimationFrame(animFrameId.current);
  }, []);

  return (
    <div
      ref={frameRef}
      className={`portrait-frame relative ${widthClass} ${heightClass} rounded-2xl overflow-hidden glass-card cursor-crosshair group`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-testid="portrait-frame"
    >
      {/* Geometric art layer — default visible state */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/15" />
        <svg
          viewBox="0 0 400 500"
          className="absolute inset-0 w-full h-full portrait-svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="pf-grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ffcc" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.55" />
            </linearGradient>
            <linearGradient id="pf-grad2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#00ffcc" stopOpacity="0.35" />
            </linearGradient>
            <filter id="pf-glow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>
          <circle cx="200" cy="210" r="150" fill="none" stroke="url(#pf-grad1)" strokeWidth="0.8" />
          <circle cx="200" cy="210" r="105" fill="none" stroke="#00ffcc" strokeWidth="0.5" strokeDasharray="7 5" />
          <circle cx="200" cy="210" r="65" fill="none" stroke="#7c3aed" strokeWidth="0.5" strokeDasharray="4 6" />
          <polygon points="200,80 340,280 60,280" fill="none" stroke="url(#pf-grad2)" strokeWidth="0.8" />
          <polygon points="200,340 60,140 340,140" fill="none" stroke="url(#pf-grad1)" strokeWidth="0.5" />
          <line x1="50" y1="210" x2="350" y2="210" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" />
          <line x1="200" y1="60" x2="200" y2="460" stroke="rgba(255,255,255,0.05)" strokeWidth="0.8" />
          <circle cx="200" cy="210" r="5" fill="#00ffcc" opacity="0.9" filter="url(#pf-glow)" className="portrait-dot" />
          <circle cx="350" cy="210" r="3" fill="#7c3aed" opacity="0.6" className="portrait-dot" />
          <circle cx="50" cy="210" r="3" fill="#7c3aed" opacity="0.6" className="portrait-dot" />
          <circle cx="200" cy="80" r="3" fill="#00ffcc" opacity="0.6" className="portrait-dot" />
          <circle cx="340" cy="280" r="2.5" fill="#f97316" opacity="0.7" className="portrait-dot" />
          <text x="200" y="390" textAnchor="middle" fill="rgba(255,255,255,0.09)" fontSize="10" fontFamily="Space Grotesk" letterSpacing="4">HOVER TO REVEAL</text>
        </svg>
      </div>

      {/* Real photo — revealed by cursor spotlight */}
      <img
        src={`${import.meta.env.BASE_URL}tadiwa.jpeg`}
        alt="Tadiwa Marimo"
        className={`absolute inset-0 w-full h-full object-cover object-top z-20 ${imgLoaded ? "" : "invisible"}`}
        style={{
          WebkitMaskImage: `radial-gradient(circle ${displayRadius}px at ${pos.x}% ${pos.y}%, black 0%, black 55%, rgba(0,0,0,0.1) 80%, transparent 100%)`,
          maskImage: `radial-gradient(circle ${displayRadius}px at ${pos.x}% ${pos.y}%, black 0%, black 55%, rgba(0,0,0,0.1) 80%, transparent 100%)`,
        }}
        onLoad={() => setImgLoaded(true)}
      />

      {/* Cursor glow ring */}
      {displayRadius > 5 && (
        <div
          className="absolute z-30 pointer-events-none rounded-full border border-primary/40 transition-all"
          style={{
            width: `${displayRadius * 2}px`,
            height: `${displayRadius * 2}px`,
            left: `${pos.x}%`,
            top: `${pos.y}%`,
            transform: "translate(-50%, -50%)",
            boxShadow: `0 0 ${displayRadius * 0.3}px rgba(0, 255, 204, 0.2)`,
          }}
        />
      )}

      {/* Bottom overlay gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-background/95 via-background/40 to-transparent z-40 pointer-events-none" />

      {/* Caption */}
      {showCaption && (
        <div className="absolute bottom-4 left-4 right-4 z-50 flex items-end justify-between">
          <div>
            <h3 className="font-display font-bold text-white text-base drop-shadow-lg">
              Tadiwa Marimo
            </h3>
            <div className="flex items-center gap-1.5 mt-0.5 text-primary">
              <MapPin size={12} />
              <span className="text-xs font-medium">Harare, Zimbabwe</span>
            </div>
          </div>
          <div className="flex items-center gap-2 glass-card px-2.5 py-1.5 rounded-full border border-primary/30">
            <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_6px_rgba(0,255,204,0.9)] animate-pulse" />
            <span className="text-xs text-primary font-medium">Open to work</span>
          </div>
        </div>
      )}
    </div>
  );
}
