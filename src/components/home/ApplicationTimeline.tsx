const timeline = [
  {
    step: "1",
    date: "MAY 15 – JUN 30, 2026",
    title: "Applications Open",
    description:
      "Submit your creator application form with your details and profile links.",
  },
  {
    step: "2",
    date: "JULY 1 – JULY 15, 2026",
    title: "Review & Selection",
    description:
      "Our team reviews all submissions. Shortlisted creators are contacted directly.",
  },
  {
    step: "3",
    date: "JULY 20, 2026",
    title: "Confirmation & Onboarding",
    description:
      "Selected creators receive official confirmation, event details, and onboarding kit.",
  },
  {
    step: "4",
    date: "AUGUST 14–16, 2026",
    title: "FanFest 2026 — LIVE",
    description:
      "Three days of content, connection, and unforgettable fan experiences.",
  },
];

export default function ApplicationTimeline() {
  return (
    <section className="bg-[#111113] py-28">
      <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24">

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
          KEY DATES
        </p>

        <h2 className="font-[var(--font-anton)] text-[50px] uppercase leading-[0.9] text-white md:text-[84px]">
          APPLICATION TIMELINE
        </h2>
        <div className="relative mt-20 ml-6 border-l-2 border-orange-500">

          {timeline.map((item, index) => (
            <div
              key={item.step}
              className={`relative pl-16 ${
                index !== timeline.length - 1 ? "pb-16" : ""
              }`}
            >

              <div className="absolute -left-[22px] top-0 flex h-11 w-11 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">
                {item.step}
              </div>

              <p className="text-sm font-bold uppercase tracking-wide text-orange-400">
                {item.date}
              </p>

              <h3 className="mt-2 text-[32px] font-bold text-white">
                {item.title}
              </h3>

              <p className="mt-2 max-w-3xl text-lg leading-8 text-zinc-400">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}