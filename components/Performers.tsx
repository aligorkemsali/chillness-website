import Image from "next/image";

type Performer = {
  name: string;
  role: string;
  image: string;
  instagram: string;
};

const performers: Performer[] = [
  {
    name: "Berkutay Öztürk",
    role: "DJ — Performer",
    image: "/img/performer/3.svg",
    instagram: "https://www.instagram.com/berkutayozturk07",
  },
  {
    name: "Salih Çabuk",
    role: "DJ — Performer",
    image: "/img/performer/4.svg",
    instagram: "https://www.instagram.com/salihcabuuk",
  },
];

export default function Performers() {
  return (
    <section
      id="performers"
      className="relative py-24 md:py-40 px-6 md:px-10 bg-gradient-to-b from-[#166954] to-[#2f5233] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-sunset font-mono mb-6">
              [ 02 / Lineup ]
            </div>
            <h2 className="font-display italic text-6xl md:text-8xl leading-[0.9]">
              The
              <br />
              <span className="text-sunset">Performers</span>
            </h2>
          </div>
          <p className="text-sand/60 text-lg max-w-sm md:text-right">
            Live DJ sets featuring electronic dance, techno, reggaeton and
            R&B. Dance the night away.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-14">
          {performers.map((p, i) => (
            <PerformerCard key={p.name} performer={p} index={i} />
          ))}
        </div>

        <div className="mt-16 md:mt-24 text-center">
          <p className="font-display italic text-3xl md:text-5xl text-sand/40">
            More to be announced...
          </p>
        </div>
      </div>
    </section>
  );
}

function PerformerCard({
  performer,
  index,
}: {
  performer: Performer;
  index: number;
}) {
  return (
    <a
      href={performer.instagram}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sea">
        <Image
          src={performer.image}
          alt={performer.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deep via-deep/30 to-transparent" />
        <div className="absolute top-6 left-6 right-6 flex justify-between items-start text-sand/80 font-mono text-xs uppercase tracking-[0.2em]">
          <span>0{index + 1}</span>
          <span className="opacity-0 group-hover:opacity-100 transition-opacity">
            ↗ instagram
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="text-xs uppercase tracking-[0.25em] text-sunset mb-2 font-mono">
            {performer.role}
          </div>
          <h3 className="font-display italic text-3xl md:text-5xl leading-tight">
            {performer.name}
          </h3>
        </div>
      </div>
    </a>
  );
}
