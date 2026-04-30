type Card = {
  tag: string;
  title: string;
  body: string;
  icon: string;
};

const awaits: Card[] = [
  {
    tag: "Activities",
    title: "Daytime Activities",
    body: "Workshops on dance, art and more. Get active with volleyball, swimming and many more fun activities.",
    icon: "☀",
  },
  {
    tag: "Activities",
    title: "Night Activities",
    body: "Live DJ sets featuring a variety of genres — electronic dance, techno, reggaeton and R&B. Get ready to dance the night away.",
    icon: "☾",
  },
  {
    tag: "Participation",
    title: "Choose Your Arrival",
    body: "Thursday, Friday, or later — pick the day that fits your plan and the wave you want to ride.",
    icon: "✦",
  },
  {
    tag: "Participation",
    title: "Tents",
    body: "Limited tents available. Those who register will be notified about availability via email.",
    icon: "▲",
  },
  {
    tag: "Transportation",
    title: "Choose Your Bus",
    body: "Ankara · Istanbul · Izmir · Eskişehir. Pick your hometown, hop on, and meet us at the shore.",
    icon: "↔",
  },
  {
    tag: "Spirit",
    title: "The Tenth Wave",
    body: "A whole decade of Chill'Ness. This year we're not just attending — we're celebrating ten editions.",
    icon: "X",
  },
];

export default function Activities() {
  return (
    <section
      id="activities"
      className="relative py-24 md:py-40 px-6 md:px-10 bg-gradient-to-b from-[#166954] to-[#2f5233] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 max-w-2xl">
          <div className="text-xs uppercase tracking-[0.3em] text-sunset font-mono mb-6">

          </div>
          <h2 className="font-display italic text-6xl md:text-8xl leading-[0.9]">
            What
            <br />
            <span className="text-sunset">awaits</span> you
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-sand/10 border border-sand/10 rounded-2xl overflow-hidden">
          {awaits.map((c, i) => (
            <article
              key={i}
              className="group relative bg-[#166954] p-8 md:p-10 hover:bg-[#0f5443] transition-colors duration-500 flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-xs uppercase tracking-[0.25em] text-sunset font-mono">
                  {c.tag}
                </span>
                <span className="font-display italic text-4xl text-sand/30 group-hover:text-sunset transition-colors">
                  {c.icon}
                </span>
              </div>
              <h3 className="font-display italic text-3xl md:text-4xl leading-tight mb-4">
                {c.title}
              </h3>
              <p className="text-sand/70 leading-relaxed">{c.body}</p>
              <div className="mt-auto pt-6 border-t border-sand/10 text-xs font-mono text-sand/40">
                0{i + 1} / 0{awaits.length}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
