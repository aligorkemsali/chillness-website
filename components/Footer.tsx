import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-[#166954] border-t border-sand/10 px-6 md:px-10 py-16 md:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Image
            src="/img/photos/ChillNessWhite.png"
            alt="Chill'Ness logo"
            width={200}
            height={80}
            className="object-contain mb-3"
          />
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-sand/60">
            The Tenth Wave · ESN Türkiye
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-[0.25em] text-sand/40 font-mono mb-3">
            When
          </div>
          <div className="font-display italic text-2xl md:text-3xl">
            21-24 May, 2026
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="text-xs uppercase tracking-[0.25em] text-sand/40 font-mono mb-3">
            Where
          </div>
          <div className="font-display italic text-2xl md:text-3xl">
            İzmir, Türkiye
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="text-xs uppercase tracking-[0.25em] text-sand/40 font-mono mb-3">
            Follow
          </div>
          <a
            href="https://www.instagram.com/esnturkiye.events/"
            target="_blank"
            rel="noopener noreferrer"
            className="block font-display italic text-xl md:text-2xl hover:text-sunset transition-colors"
          >
            @esnturkiye.events ↗
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-10 border-t border-sand/10 flex flex-col md:flex-row gap-6 md:items-end md:justify-between">
        <a
          href="mailto:chillness@esnturkey.org"
          className="group inline-flex items-center gap-3 text-sand hover:text-sunset transition-colors"
        >
          <span className="font-display italic text-3xl md:text-4xl">
            Reach Us
          </span>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-sand/60 group-hover:text-sunset">
            chillness@esnturkey.org →
          </span>
        </a>
        <div className="text-xs font-mono text-sand/40 uppercase tracking-[0.2em]">
          © {new Date().getFullYear()} ESN Türkiye. All rights reserved.
        </div>
      </div>

      {/* Giant background numeral */}
      <div className="absolute -bottom-20 -right-10 select-none pointer-events-none opacity-[0.04]">
        <span className="font-display italic font-black text-[20rem] md:text-[32rem] leading-none text-sunset">
          X
        </span>
      </div>
    </footer>
  );
}
