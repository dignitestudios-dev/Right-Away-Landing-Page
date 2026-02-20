"use client";
import { Mail, Phone } from "lucide-react";
import React, { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: "Jonnie",
    lastName: "Dawson",
    email: "hello@rightaway",
    message: "I'd love to learn more about your services",
  });
  const [agreed, setAgreed] = useState(true);

  return (
    <section id="contact" className="bg-white px-5 py-12 sm:px-8 md:px-12 lg:px-16 lg:py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-[60px] items-stretch">
        {/* LEFT SIDE */}
        <div className="w-full lg:w-[300px] xl:w-[320px] shrink-0 flex flex-col gap-8 lg:gap-0 lg:justify-between">
          <div>
            <p className="text-[15px] text-black mb-2">Connect with us</p>
            <h2 className="text-[36px] sm:text-[48px] lg:text-[60px] font-bold text-black leading-[1.15] mb-2">
              Contact us
            </h2>
            <p className="text-[15px] sm:text-[16px] text-black/40">
              We're here to help – Reach out anytime
            </p>
          </div>

          {/* Contact Info Card */}
          <div className="bg-[#F8F8F8] rounded-3xl p-5 sm:p-6 flex flex-col gap-5 sm:gap-6">
            {/* Email */}
            <div className="flex gap-3.5 items-start">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
                <Mail size={18} />
              </div>
              <div>
                <div className="text-[15px] sm:text-[16px] font-semibold text-black">
                  Email
                </div>
                <div className="text-[13px] sm:text-[14px] text-black/40 break-all">
                  Office: rambos@rightawayapp.com
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-3.5 items-start">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shrink-0">
                <Phone size={18} />
              </div>
              <div>
                <div className="text-[15px] sm:text-[16px] font-semibold text-black">
                  Phone
                </div>
                <div className="text-[13px] sm:text-[14px] text-black/40">
                  Office: (201) 206-2451
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="flex-1 bg-[#F5F5F5] rounded-3xl p-5 sm:p-8 lg:p-[50px] flex flex-col gap-5 sm:gap-6">
          {/* Name Row */}
          <div className="flex flex-col sm:flex-row gap-5 sm:gap-6">
            {[
              { label: "FIRST NAME", val: "firstName", placeholder: "Jonnie" },
              { label: "LAST NAME", val: "lastName", placeholder: "Dawson" },
            ].map((f) => (
              <div key={f.val} className="flex-1">
                <label className="block text-[13px] sm:text-[14px] font-medium text-black/40 mb-2">
                  {f.label}
                </label>
                <input
                  placeholder={f.placeholder}
                  className="w-full px-4 py-3 sm:py-[13px] border border-[#E3E3E3] rounded-xl text-[15px] sm:text-[16px] bg-white outline-none text-black"
                />
              </div>
            ))}
          </div>

          {/* Email */}
          <div>
            <label className="block text-[13px] sm:text-[14px] font-medium text-black/40 mb-2">
              EMAIL
            </label>
            <input className="w-full px-4 py-3 sm:py-[13px] border border-[#E3E3E3] rounded-xl text-[15px] sm:text-[16px] bg-white outline-none text-black" />
          </div>

          {/* Message */}
          <div>
            <label className="block text-[13px] sm:text-[14px] font-medium text-black/40 mb-2">
              MESSAGE
            </label>
            <textarea
              rows={5}
              className="w-full px-4 py-3 sm:py-[13px] border border-[#E3E3E3] rounded-xl text-[15px] sm:text-[16px] bg-white outline-none text-black resize-none"
            />
          </div>

          {/* Agree + Button */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                defaultChecked={agreed}
                className="w-5 h-5 accent-[#22B573] shrink-0"
              />
              <span className="text-[14px] sm:text-[16px] text-black">
                I agree to the Terms and Condition
              </span>
            </label> */}
            <button className="w-full sm:w-auto bg-[#22B573] text-white rounded-full px-6 py-3 font-semibold text-[15px] sm:text-[16px] hover:opacity-90 transition">
              Send now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
