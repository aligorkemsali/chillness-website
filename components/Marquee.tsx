export default function Marquee() {
  const items = [
    "• the tenth wave",
    "• escape the ordinary",
    "• ESN Türkiye",
    "• chill'ness",
    "• games and workshops",
    "• live performances",
  ];
  return (
    <div className="relative bg-sunset text-deep py-4 overflow-hidden border-y border-deep/20">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...items, ...items, ...items].map((t, i) => (
          <span
            key={i}
            className="font-display italic text-2xl md:text-3xl px-6"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
