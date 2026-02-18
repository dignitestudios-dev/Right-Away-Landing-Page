"use client";
import React, { useState } from "react";
import FAQItem from "../ui/FAQItem";

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState(1);
  const faqs = [
    {
      q: "Id sit non lectus",
      a: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      q: "Magna velit morbi vitae facilisi ut. Enim sed.",
      a: "Proin lacus consequat auctor ligula pulvinar eu consequat. Fermentum senectus arcu sit sem vel enim eros in laoreet. Ut laoreet sit neque lacus tortor.",
    },
    {
      q: "Metus felis eu etiam fringilla cras in",
      a: "Consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.",
    },
    {
      q: "Sem sit amet est metus risus",
      a: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.",
    },
    {
      q: "Elit sed neque tellus semper",
      a: "Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <section className="mb-20 bg-white px-5 py-12 sm:px-10 md:px-16 lg:px-20 lg:py-20 flex flex-col lg:flex-row gap-10 lg:gap-16">
      {/* Left */}
      <div className="w-full lg:w-[520px] lg:flex-shrink-0">
        <div>
          <img
            src="/faq-tag.png"
            className="w-[72px] h-[42px] sm:w-[96px] sm:h-[56px]"
            alt=""
          />
        </div>
        <h2 className="font-bold text-[40px] sm:text-[52px] lg:text-[64px] leading-tight mt-3">
          Frequently{"\u00A0"}Asked
          <br />
          <span className="text-gray-500">Questions</span>
        </h2>
      </div>

      {/* Right: FAQ list */}
      <div className="flex-1 w-full">
        {faqs.map((faq, i) => (
          <FAQItem
            key={i}
            question={faq}
            isOpen={openFaq === i}
            onClick={() => setOpenFaq(openFaq === i ? null : i)}
          />
        ))}
      </div>
    </section>
  );
}
