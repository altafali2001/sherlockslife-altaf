const perks = [
  {
    number: "01",
    title: "All-Access Badge",
    description:
      "Backstage, VIP zones, creator lounge, and all event areas throughout the three days.",
  },
  {
    number: "02",
    title: "Complimentary Accommodation",
    description:
      "Hotel stay covered for the full duration of the event for verified creators.",
  },
  {
    number: "03",
    title: "Dedicated Creator Stage",
    description:
      "Your own scheduled time slot on the creator main stage or breakout rooms.",
  },
  {
    number: "04",
    title: "Professional Content Crew",
    description:
      "On-site videographers and photographers available to document your FanFest moments.",
  },
  {
    number: "05",
    title: "Promotion Package",
    description:
      "Featured on all official FanFest 2026 social media, website, and email marketing to 500K+ subscribers.",
  },
  {
    number: "06",
    title: "Exclusive Merch Kit",
    description:
      "Limited-edition FanFest 2026 creator merchandise kit sent to you before the event.",
  },
];

export default function CreatorPerks() {
  return (
    <section className="bg-[#111113] py-28">
      <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24">

        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
          CREATOR PERKS
        </p>

        <h2 className="font-[var(--font-anton)] text-[46px] uppercase leading-none text-white md:text-[72px]">
          WHAT YOU GET
        </h2>

        <p className="mt-4 max-w-3xl text-lg leading-9 text-zinc-400">
          Every creator who joins FanFest 2026 gets a full support package
          designed to help you shine.
        </p>

        <div className="mt-16 flex flex-wrap gap-6 ">

          {perks.map((perk) => (
            <div
              key={perk.number}
             className="flex w-[300px] gap-5 rounded-3xl border border-white/10 bg-[#18181c] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40"
            >
              <span className="font-[var(--font-anton)] text-5xl text-red-500">
                {perk.number}
              </span>

              <div>
                <h3 className="text-2xl font-bold text-white">
                  {perk.title}
                </h3>

                <p className="mt-3 text-base leading-8 text-zinc-400">
                  {perk.description}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}