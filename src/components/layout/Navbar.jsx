"use client";
import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Logo from "./Logo";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: "Features", id: "feature" },
    { label: "FAQ's", id: "faq" },
    { label: "Contact", id: "contact" },
  ];
  return (
    <nav className="relative z-10 w-full bg-white">
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-20 py-4 md:py-5">
        {/* Logo */}
        <Logo />

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-12">
          {menuItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="font-normal text-[16px] text-[#000000] hover:text-[#014837] transition"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div></div>
        {/* <button className="bg-[#63EAAD] hidden md:flex text-[#014837] rounded-xl px-4 py-2 font-bold text-[15px]  items-center gap-1 hover:opacity-90 transition">
          Download app <ChevronDown />
        </button> */}
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-[#014837] rounded-md hover:bg-gray-100 transition"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <div className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="font-normal text-[16px] text-[#000000]"
              >
                {item.label}
              </a>
            ))}
            {/* <button className="bg-[#63EAAD] text-[#014837] rounded-xl px-4 py-2 font-bold text-[15px] flex items-center gap-1 hover:opacity-90 transition w-full justify-center">
              Download app <ChevronDown />
            </button> */}
          </div>
        </div>
      )}
    </nav>
  );
}
