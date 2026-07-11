"use client";

import { useState } from "react";
import { Plus, X } from "lucide-react";

const faqData = [
  {
    question: "Is there a minimum follower count to apply?",
    answer:
      "No. We review creators based on content quality, creativity, and engagement rather than follower count.",
  },
  {
    question: "Is travel reimbursement provided?",
    answer:
      "We cover accommodation for all selected creators. Travel reimbursement is offered on a case-by-case basis for international creators. Details are shared in your acceptance letter.",
  },
  {
    question: "Can I apply as a team or co-creators?",
    answer:
      "Yes. Teams and co-creators are welcome to apply together.",
  },
  {
    question: "What is the Creator Code of Conduct?",
    answer:
      "Creators are expected to follow our community guidelines and maintain professional behavior during the event.",
  },
  {
    question: "Will I be paid to participate?",
    answer:
      "Selected creators may receive compensation depending on the campaign and partnership agreement.",
  },
];

export default function FaqSection() {
  const [active, setActive] = useState(1);

  return (
    <section className="bg-[#111111] py-24">
      <div className="w-full px-6 md:px-10 lg:px-20 xl:px-24">
        <p className="mb-8 text-sm font-semibold uppercase tracking-[0.35em] text-[#ff4a4a]">
         Frequently Asked Questions
        </p>

        <h2 className="font-[var(--font-anton)] uppercase leading-[0.9] text-white text-2xl">
              <span className="block text-[30px] sm:text-[50px] md:text-[60px] lg:text-[70px]">
                GOT QUESTION
              </span>
            </h2>

        <div>
          {faqData.map((item, index) => {
            const open = active === index;

            return (
              <div
                key={index}
                className="border-b border-white/10 py-8"
              >
                <button
                  onClick={() =>
                    setActive(open ? -1 : index)
                  }
                  className="w-full flex items-center justify-between text-left"
                >
                  <span className="text-white text-2xl font-semibold">
                    {item.question}
                  </span>

                  {open ? (
                    <X
                      size={22}
                      className="text-red-500 flex-shrink-0"
                    />
                  ) : (
                    <Plus
                      size={22}
                      className="text-red-500 flex-shrink-0"
                    />
                  )}
                </button>

                <div
                  className={`grid transition-all duration-500 overflow-hidden ${
                    open
                      ? "grid-rows-[1fr] mt-6"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-gray-400 text-lg leading-9 max-w-4xl">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}