import React from "react";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-white px-5 py-8 sm:px-10 md:px-16 lg:px-24 xl:px-40 flex flex-col gap-5">
      {/* Top row: Logo + Social icons */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-5 sm:gap-0">
        <Logo />
        <div className="flex gap-3 sm:gap-3.5">
          {[
            "/twitter.png",
            "/facebook.png",
            "/instagram.png",
            "/linkedin.png",
          ].map((icon, i) => (
            <img
              src={icon}
              key={i}
              className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 cursor-pointer"
              alt={`Social icon ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom row: Copyright + Links */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0 pt-5 border-t border-[#f0f0f0]">
        <p className="text-[14px] sm:text-[16px] text-[#A3A3A3] font-['Outfit'] text-center sm:text-left">
          © Rightaway. All Rights Reserved.
        </p>
        <div className="flex gap-5 sm:gap-6">
          <span className="text-[14px] sm:text-[16px] text-[#A3A3A3] cursor-pointer font-['Outfit'] hover:text-black transition-colors">
            Privacy Policy
          </span>
          <span className="text-[14px] sm:text-[16px] text-[#A3A3A3] cursor-pointer font-['Outfit'] hover:text-black transition-colors">
            Terms & condition
          </span>
        </div>
      </div>
    </footer>
  );
}
