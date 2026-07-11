export default function AboutFanFest() {
  return (
    <section className="w-full bg-[#121214] py-24">
      <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24">
        <p className="mb-8 text-sm font-semibold uppercase tracking-[0.35em] text-[#ff4a4a]">
          WHAT IS FANFEST 2026
        </p>
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-16">
          <div className="max-w-3xl">

            <h2 className="font-[var(--font-anton)] uppercase leading-[0.9] text-white text-2xl">
              <span className="block text-[30px] sm:text-[50px] md:text-[60px] lg:text-[70px]">
                WHERE CREATORS
              </span>

              <span className="block text-[30px] sm:text-[50px] md:text-[60px] lg:text-[70px]">
                MEET THEIR FANS
              </span>
            </h2>

            <p className="mt-10 max-w-2xl text-xl leading-10 text-zinc-400">
              Three days of panels, activations, live streams,
              brand collaborations, and unforgettable fan moments —
              all under one roof.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}