"use client";
import React, { useState } from "react";
import FAQItem from "../ui/FAQItem";

export default function FAQSection() {
  const [openFaq, setOpenFaq] = useState(1);
  const faqs = [
    {
      q: "How does Right Away work?",
      a: "Rightaway connects buyers with local construction suppliers and assigns nearby riders for delivery. Users can browse materials, place orders, track deliveries in real time, and communicate directly within the app.",
    },
    {
      q: "Are suppliers verified?",
      a: "Yes. All suppliers go through a verification and approval process before being able to list products on the platform.",
    },
    {
      q: "How are deliveries tracked?",
      a: "Deliveries are tracked using integrated GPS and Google Maps technology, allowing users to see real-time updates and estimated arrival times.",
    },
    {
      q: "What payment methods are supported?",
      a: "Users can pay through supported digital payment methods within the app. Secure transactions ensure safe and seamless checkout.",
    },
    {
      q: "Can riders choose when they work?",
      a: "Yes. Riders can toggle their availability on or off and will only receive delivery requests when marked as available.",
    },
  ];

  return (
    <section id="faq" className="mb-20 bg-white px-5 py-12 sm:px-10 md:px-16 lg:px-20 lg:py-20 flex flex-col lg:flex-row gap-10 lg:gap-16">
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
