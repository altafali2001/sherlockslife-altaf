import {
  Mic,
  Camera,
  Handshake,
  Gamepad2,
  Globe,
  PartyPopper,
} from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Live Panels & Talks",
    description:
      "Host your own stage session, Q&A, or join a creator roundtable. Real conversations with your real fans.",
  },
  {
    icon: Camera,
    title: "Meet & Greet Booths",
    description:
      "Dedicated creator booths where fans can interact, take photos, and grab exclusive merchandise.",
  },
  {
    icon: Handshake,
    title: "Brand Collaborations",
    description:
      "Connect with top-tier sponsors looking for authentic creator partnerships during the event.",
  },
  {
    icon: Gamepad2,
    title: "Live Content Challenges",
    description:
      "Compete in cross-creator content battles, streamed live for the audience and judged by fans.",
  },
  {
    icon: Globe,
    title: "Global Streaming Reach",
    description:
      "The entire event is live-streamed to millions worldwide — your content extends far beyond the venue.",
  },
  {
    icon: PartyPopper,
    title: "Creator After-Party",
    description:
      "An exclusive closing night celebration — network, celebrate, and create memories off-camera too.",
  },
];

export default function Features() {
  return (
    <section className="bg-[#111113] py-24">
      <div className="mx-auto max-w-[1600px] px-6">

        <div className="flex flex-wrap justify-center gap-6">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="w-[310px] rounded-3xl border border-white/10 bg-[#18181c] p-5 transition-all duration-300 hover:-translate-y-2 hover:border-red-500/40"
              >
                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-red-900/20">
                  <Icon className="h-6 w-6 text-red-400" />
                </div>

                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-zinc-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}