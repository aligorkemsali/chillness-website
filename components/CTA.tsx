export default function CTA() {
  return (
    <section className="relative py-24 md:py-40 px-6 md:px-10 bg-gradient-to-b from-[#94c973] to-[#166954] overflow-hidden">
      <div className="absolute inset-0 grain pointer-events-none" />
      <div className="relative max-w-7xl mx-auto text-center">
        <div className="text-xs uppercase tracking-[0.3em] font-mono mb-6 text-deep/70">

        </div>
        <h2 className="font-display italic text-7xl md:text-[10rem] leading-[0.85] mb-10">
          Dive into
          <br />
          the <span className="not-italic">Tenth</span>
          <br />
          Wave.
        </h2>
        <p className="text-lg md:text-xl max-w-xl mx-auto mb-10 text-deep/80">
          Send us a message and we'll send the details your way. Limited
          spots, unlimited stories.
        </p>
        <a
          href="https://www.instagram.com/esnturkiye.events/"
          className="group inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#2f5233] text-sunset font-semibold uppercase tracking-[0.25em] text-sm hover:bg-ink transition-colors" target="_blank" rel="noopener noreferrer"
        >
          @esnturkiye.events
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </a>
      </div>
    </section>
  );
}
