import React from "react";
import Logo from "../layout/Logo";

export default function CTABanner() {
  return (
    <section className="bg-white px-5 py-12 sm:px-8 md:px-12 lg:px-16 xl:px-20">
      <div className="bg-[#22B573] rounded-[32px] sm:rounded-[48px] lg:rounded-[64px] flex flex-col lg:flex-row justify-between items-center overflow-hidden min-h-auto lg:min-h-[500px] px-6 sm:px-10 lg:pl-[80px] lg:pr-0 py-12 lg:py-0 gap-10 lg:gap-0">
        {/* Left content */}
        <div className="max-w-full lg:max-w-[600px] py-0 lg:py-[60px] z-10 w-full">
          <Logo white />

          <h2 className="font-['Outfit'] text-[36px] sm:text-[46px] lg:text-[60px] font-bold text-white leading-[1.25] mt-6 mb-4">
            Fringilla tellus tortor ipsum enim sagittis a.
          </h2>

          <p className="text-[15px] sm:text-[17px] text-white/60 leading-[1.5] mb-8 max-w-full lg:max-w-[560px]">
            Fermentum neque facilisis commodo id porttitor lobortis ornare.
            Mauris turpis diam massa felis at lorem. Posuere nunc interdum.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <button className="bg-[#63EAAD] text-white cursor-pointer rounded-xl px-5 py-[14px] font-bold text-[15px] flex items-center gap-2 font-['Outfit'] hover:opacity-90 transition">
              <img src="/white-apple.png" className="w-4 h-4" alt="App Store" />
              App Store
            </button>

            <button className="bg-transparent text-white cursor-pointer border-[1.5px] border-white rounded-xl px-5 py-[14px] font-bold text-[15px] flex items-center gap-2 font-['Outfit'] hover:bg-[#014837] hover:text-white transition">
              <img src="/white-play.png" className="w-4 h-4" alt="Play Store" />
              Playstore
            </button>
          </div>
        </div>

        {/* Right: Decorative circles */}
        <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] lg:w-[500px] lg:h-[500px] shrink-0 self-end lg:self-auto">
          {[
            { leftPct: "-40%", topPct: "18%" },
            { leftPct: "64%", topPct: "18%" },
            { leftPct: "18%", topPct: "-40%" },
            { leftPct: "18%", topPct: "76%" },
          ].map((pos, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: pos.leftPct,
                top: pos.topPct,
                width: "60%",
                height: "60%",
                background:
                  "linear-gradient(159.76deg, #22B573 5.35%, #014837 88.34%)",
                boxShadow: "inset 10px 5px 36px rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
