import { ArrowRight } from "lucide-react";
import Navbar from "../layout/Navbar";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col bg-white overflow-hidden">
      {/* Green gradient bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-white/10 to-[#22B573] rounded-b-[64px]" />

      <Navbar />

      {/* Hero content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center px-5 sm:px-10 md:px-20 lg:px-24 pt-8 md:pt-20 pb-12 w-full flex-1">
        {/* Left content */}
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full md:max-w-lg lg:max-w-xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gray-100 rounded-[20px] px-3 py-1 w-max">
            <div className="bg-white rounded-lg h-6 sm:h-7 flex items-center justify-center w-10 font-normal text-[13px] sm:text-[15px]">
              New
            </div>
            <span className="font-normal text-[12px] sm:text-[15px]">
              App Available to Download
            </span>
            <ArrowRight className="w-3 h-3 shrink-0" />
          </div>

          {/* Headline */}
          <div className="flex flex-col gap-1 sm:gap-2 md:gap-3">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight sm:leading-snug md:leading-[1.1] uppercase">
              <span className="text-[#22B573]">Rightaway:</span> Your
              Construction Supply Solution
            </h1>
            <p className="text-[#181818] font-normal text-sm sm:text-base md:text-lg lg:text-[20px]">
              Order construction materials from local vendors with Rightaway
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-2.5 flex-wrap mt-3 sm:mt-5">
            {/* App Store Button */}
            <button className="bg-[#63EAAD] cursor-pointer text-[#014837] rounded-xl px-4 sm:px-5 py-2 sm:py-3 font-bold text-[12px] sm:text-[15px] flex items-center gap-2 hover:opacity-90 transition">
              <img
                src="/apple-icon.png"
                className="w-3 sm:w-4 h-3 sm:h-4"
                alt="App Store"
              />
              App Store
            </button>

            {/* Play Store Button */}
            <button className="bg-transparent cursor-pointer text-[#014837] border-[1.5px] border-[#014837] rounded-xl px-4 sm:px-5 py-2 sm:py-3 font-bold text-[12px] sm:text-[15px] flex items-center gap-2 hover:bg-[#014837] hover:text-white transition">
              <img
                src="/play-store-icon.png"
                className="w-3 sm:w-4 h-3 sm:h-4"
                alt="Play Store"
              />
              Playstore
            </button>
          </div>
        </div>

        {/* Right: Phone mockup */}
        <div className="relative bottom-0 md:mt-0 flex justify-center w-full md:w-auto md:absolute md:right-0 lg:right-16">
          <img
            className="w-[180px] sm:w-[240px] md:w-[300px] lg:w-[338px] object-contain"
            src="/hero-section-mobile.png"
            alt="App Preview"
          />
        </div>
      </div>
    </section>
  );
}
