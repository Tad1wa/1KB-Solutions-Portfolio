import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

interface PageLayoutProps {
  children: React.ReactNode;
}

let hasLoaded = false;

export default function PageLayout({ children }: PageLayoutProps) {
  const [loading, setLoading] = useState(!hasLoaded);

  const handleLoadComplete = () => {
    hasLoaded = true;
    setLoading(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
      document.documentElement.style.setProperty("--scroll-width", `${scrolled}%`);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (loading) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    const timer = setTimeout(() => {
      document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => observer.observe(el));
    }, 100);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [loading]);

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadComplete} />}

      <div className="scroll-progress" data-testid="scroll-progress" />

      <div className="bg-ambient">
        <div className="blob-1" />
        <div className="blob-2" />
        <div className="blob-3" />
        <div className="blob-4" />
      </div>
      <div className="noise-overlay" />

      <div className={`page-wrap flex flex-col min-h-screen transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`}>
        <Navbar />
        <main className="flex-grow w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-24">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
