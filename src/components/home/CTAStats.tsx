import { Button } from "@/ui/button";
import Link from "next/link";


const stats = [
  {
    value: "AUG 14-16",
    label: "EVENT DATES",
  },
  {
    value: "2026",
    label: "EDITION",
  },
  {
    value: "50K+",
    label: "EXPECTED FANS",
  },
  {
    value: "200+",
    label: "CREATOR SPOTS",
  },
];

export default function CTAStats() {
  return (
    <section className="bg-[#090909] px-6 py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-center">

        {/* Buttons */}

        <div className="flex flex-col gap-5 sm:flex-row">
          {/* <Button className="h-16 rounded-full bg-[#ff4545] px-10 text-lg font-semibold hover:bg-[#ff2f2f]">
            Apply as a Creator
          </Button> */}
          <Button className="h-16 rounded-full bg-[#ff4545] px-10 text-lg font-semibold hover:bg-[#ff2f2f]">
             <Link 
             href="#apply"
        >
          Apply as a Creator
            </Link>
          </Button>

        <Button className="h-16 rounded-full bg-[#ff4545] px-10 text-lg font-semibold hover:bg-[#ff2f2f]">
             <Link 
             href="#apply"
        >
          Learn More
            </Link>
          </Button>

           
        </div>

        {/* Stats */}

        <div className="mt-20 flex w-full flex-wrap items-center justify-center gap-14 lg:gap-20">
          {stats.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center"
            >
              <h3 className="font-[var(--font-anton)] text-5xl text-[#f5a623]">
                {item.value}
              </h3>

              <p className="mt-3 text-sm uppercase tracking-[0.25em] text-zinc-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}