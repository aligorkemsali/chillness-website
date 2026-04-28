import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-40 px-6 md:px-10 bg-[#166954] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-5">
          <div className="sticky top-28">
            <div className="text-xs uppercase tracking-[0.3em] text-sunset font-mono mb-6">
              [ 01 / About ]
            </div>
            <h2 className="font-display italic text-5xl md:text-7xl leading-[0.9] mb-8">
              Escape
              <br />
              the
              <br />
              <span className="text-sunset">Ordinary.</span>
            </h2>
            <div className="hidden md:block aspect-[4/5] w-full rounded-2xl overflow-hidden relative">
              <Image
                src="/img/about/photo1.jpeg"
                alt="About Chill'Ness"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-7 space-y-8 md:pt-10">
          <p className="text-2xl md:text-3xl font-display leading-[1.3] text-sand/95">
            Picture yourself surrounded by sandy beaches, starlit skies, and
            the company of kindred spirits. From beachside bonfires to
            captivating live performances, every moment promises to be a
            treasure.
          </p>
          <p className="text-lg md:text-xl text-sand/70 leading-relaxed max-w-xl">
            Whether you're seeking adventure or simply craving some chill
            time, Chill'Ness has it all. This year we're celebrating ten
            editions — a decade of summers, friendships, and waves we've
            been chasing together.
          </p>

          <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-sand/10">
            <Stat number="500+" label="Participants" />
            <Stat number="∞" label="Memories" />
          </div>

          <div className="pt-10">
            <div className="text-xs uppercase tracking-[0.3em] text-sand/50 font-mono mb-3">
              It's time to book your seat
            </div>
            <p className="text-sand/80 mb-6 max-w-md">
              Reserve your spot today and let the countdown to an
              unforgettable experience begin. ☀️ 🏖️
            </p>
            <a
              href="mailto:chillness@esnturkey.org"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-sunset text-deep font-semibold uppercase tracking-[0.2em] text-sm hover:bg-sand transition-colors"
            >
              Reach Us
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="font-display italic text-5xl md:text-6xl text-sunset numeral">
        {number}
      </div>
      <div className="text-xs uppercase tracking-[0.2em] text-sand/60 mt-2 font-mono">
        {label}
      </div>
    </div>
  );
}
