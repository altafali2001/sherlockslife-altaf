import { Gift } from "lucide-react";
export default function Hero() {
  return (
    <section className="id=home flex min-h-[calc(100vh-80px)] items-center justify-center px-5">
      <div className="flex max-w-6xl flex-col items-center text-center">

        {/* Badge */}

        <div className="mb-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-red-400">
          <Gift size={14} />
          <span>Open Applications — Limited Spots</span>
        </div>

        {/* Heading */}

        <h1 className="leading-none font-black uppercase">
         <span className="block text-[56px] text-white sm:text-[72px] md:text-[110px] lg:text-[135px]">
            CREATE.
          </span>

         <span className="block text-[56px] text-red-500 sm:text-[72px] md:text-[110px] lg:text-[135px]">
            CONNECT.
          </span>
        <span className="block text-[56px] text-white sm:text-[72px] md:text-[110px] lg:text-[135px]">
            DOMINATE.
          </span>
        </h1>

        {/* Description */}

        <p className="mt-10 max-w-3xl text-lg leading-9 text-zinc-400 md:text-2xl">
          FanFest 2026 is calling on creators like you to be part of the
          biggest fan-powered event of the year. Share your world,
          grow your audience, and make history.
        </p>
      </div>
    </section>
  );
}