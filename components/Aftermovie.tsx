export default function Aftermovie() {
  return (
    <section
      id="aftermovie"
      className="relative py-24 md:py-40 px-6 md:px-10 bg-gradient-to-b from-[#2f5233] to-[#94c973] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs uppercase tracking-[0.3em] text-sunset font-mono mb-6">

          </div>
          <h2 className="font-display italic text-6xl md:text-8xl leading-[0.9]">
            After<span className="text-sunset">movie</span>
          </h2>
        </div>

        {/* Responsive 16:9 video wrapper */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-sand/10 bg-black">
          <iframe
            src="https://www.youtube.com/embed/vr5a0GOVEFU?si=k0iwsmccgo33UdG3"
            title="Chill'Ness VII Aftermovie"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <p className="mt-6 text-center text-sm font-mono text-sand/40">
          * Aftermovie 2024 | Chill'Ness
        </p>
      </div>
    </section>
  );
}