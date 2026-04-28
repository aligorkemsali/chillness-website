"use client";

import Countdown from "./Countdown";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen overflow-hidden grain flex items-end pt-18 pb-12"
      style={{
        background:
          "radial-gradient(ellipse at top, #166954 0%, #106b54 55%, #03182a 100%)",
      }}
    >
      {/* Countdown */}
      <Countdown />

      {/* Sun disc */}
      <div className="absolute left-[8%] top-[18%] w-40 h-40 md:w-64 md:h-64 rounded-full bg-gradient-to-b from-sunset to-coral opacity-90 blur-[1px] shadow-[0_0_120px_40px_rgba(255,122,61,0.45)]" />

      {/* SVG waves */}
      <svg
        className="absolute bottom-0 left-0 w-[200%] wave-svg animate-wave-slow"
        viewBox="0 0 2400 200"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0,100 C300,160 600,40 1200,100 C1800,160 2100,40 2400,100 L2400,200 L0,200 Z" />
      </svg>
      <svg
        className="absolute bottom-0 left-0 w-[200%] wave-svg animate-wave-fast opacity-70"
        viewBox="0 0 2400 200"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0,120 C400,60 800,180 1200,120 C1600,60 2000,180 2400,120 L2400,200 L0,200 Z" />
      </svg>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 md:px-10">
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="flex items-center gap-4 text-xs md:text-xs uppercase tracking-[0.3em] text-sand/70 font-mono animate-fade-up">
            <span className="w-10 h-px bg-sand/40" />
            ESN Türkiye presents
          </div>

          <h1
            className="font-display italic font-black tracking-[-0.02em] leading-[0.85] animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="block text-[18vw] md:text-[12vw] lg:text-[9rem]">
              Chill<span className="text-sunset">'</span>Ness
            </span>
            <span className="block text-[8vw] md:text-[5.5vw] lg:text-5xl text-sand/90 mt-2">
              The Tenth Wave
            </span>
          </h1>

          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mt-6 md:mt-10 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-sand/50 mb-1 font-mono">
                Dates
              </div>
              <div className="font-display italic text-2xl md:text-3xl numeral">
                21-24 May 2026
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-sand/50 mb-1 font-mono">
                Location
              </div>
              <div className="font-display italic text-2xl md:text-3xl">
                İzmir/Türkiye
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.2em] text-sand/50 mb-1 font-mono">
                Spirit
              </div>
              <div className="font-display italic text-2xl md:text-3xl">
                We Are One
              </div>
            </div>
          </div>

          <div
            className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >

            <a
              href="mailto:chillness@esnturkey.org"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-sunset text-deep font-semibold uppercase tracking-[0.2em] text-sm hover:bg-sand transition-colors"
            >
              Reach Us
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="#about"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-sand/30 text-sand hover:border-sand transition-colors uppercase tracking-[0.2em] text-sm"
            >
              Discover the Wave
            </a>
          </div>
        </div>
      </div >
    </section >
  );
}