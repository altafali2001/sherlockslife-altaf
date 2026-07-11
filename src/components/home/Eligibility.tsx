import {
  Video,
  Music2,
  Camera,
  Mic,
  Gamepad2,
  PenTool,
  Palette,
  Dumbbell,
  UtensilsCrossed,
  Shirt,
} from "lucide-react";

const creators = [
  { icon: Video, title: "YouTubers" },
  { icon: Music2, title: "TikTokers" },
  { icon: Camera, title: "Instagrammers" },
  { icon: Mic, title: "Podcasters" },
  { icon: Gamepad2, title: "Streamers" },
  { icon: PenTool, title: "Bloggers" },
  { icon: Palette, title: "Digital Artists" },
  { icon: Dumbbell, title: "Fitness Creators" },
  { icon: UtensilsCrossed, title: "Food Creators" },
  { icon: Shirt, title: "Fashion Creators" },
];

export default function Eligibility() {
  return (
    <section className="bg-[#111113] py-28">
      <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24">

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-red-500">
          ELIGIBILITY
        </p>

        <h2 className="font-[var(--font-anton)] text-[48px] leading-[0.9] uppercase text-white md:text-[78px]">
          WHO CAN APPLY?
        </h2>

        <p className="mt-5 max-w-2xl text-lg leading-9 text-zinc-400">
          We welcome creators across every niche, platform, and audience size.
          If you create — this is for you.
        </p>

        <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">

          {creators.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="flex h-[180px] flex-col items-center justify-center rounded-3xl border border-white/10 bg-[#18181c] transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-900/10">
                  <Icon className="h-9 w-9 text-red-400" />
                </div>

                <h3 className="text-xl font-semibold text-white text-center">
                  {item.title}
                </h3>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}