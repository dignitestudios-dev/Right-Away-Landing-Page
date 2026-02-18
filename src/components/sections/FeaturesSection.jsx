"use client";
import { useRef, useEffect } from "react";
import { motion, useTransform, useMotionValue } from "framer-motion";

const features = [
  {
    bg: "#F5F5F5",
    textColor: "#014837",
    title: "Turpis vitae quis nunc pulvinar vel adipiscing.",
    desc: "Pellentesque auctor diam ullamcorper eget mi euismod eget est. Viverra mauris netus cursus erat. Viverra sapien turpis blandit nullam feugiat morbi aliquam felis.",
    imgSrc: "/future-products.png",
    imgClass:
      "lg:absolute lg:w-[250px] lg:h-[200px] lg:w-[450px] lg:h-[350px] lg:top-[-64px] lg:right-10 lg:object-contain pointer-events-none",
  },
  {
    bg: "#63EAAD",
    textColor: "#014837",
    title: "Turpis vitae quis nunc pulvinar vel adipiscing.",
    desc: "Pellentesque auctor diam ullamcorper eget mi euismod eget est. Viverra mauris netus cursus erat. Viverra sapien turpis blandit nullam feugiat morbi aliquam felis.",
    imgSrc: "/future-hand.png",
    imgClass:
      "lg:absolute lg:w-[300px] lg:h-[200px] lg:w-[700px] lg:h-[450px] lg:top-[-30px] lg:right-0 lg:object-contain pointer-events-none",
  },
  {
    bg: "#CEFFE9",
    textColor: "#014837",
    title: "Turpis vitae quis nunc pulvinar vel adipiscing.",
    desc: "Pellentesque auctor diam ullamcorper eget mi euismod eget est. Viverra mauris netus cursus erat. Viverra sapien turpis blandit nullam feugiat morbi aliquam felis.",
    imgSrc: "/future-app.png",
    imgClass:
      "lg:absolute lg:w-[300px] lg:h-[200px] lg:w-[700px] lg:h-[450px] lg:right-0 lg:top-[0px] lg:object-contain pointer-events-none",
  },
];

const CARD_SCROLL_HEIGHT = 600;
const STICKY_TOP = 160;
const STACK_OFFSET = 24;

function FeatureCard({ i, feature, containerRef }) {
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const onScroll = () => {
      scrollY.set(window.scrollY);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollY]);

  const scaleStart = useTransform(scrollY, (y) => {
    if (!containerRef.current) return 1;
    const containerTop =
      containerRef.current.getBoundingClientRect().top + window.scrollY;
    const cardIPlusOneStart =
      containerTop + (i + 1) * CARD_SCROLL_HEIGHT - window.innerHeight / 2;
    const cardIPlusOneEnd =
      containerTop + (i + 2) * CARD_SCROLL_HEIGHT - window.innerHeight / 2;

    if (i === features.length - 1) return 1;

    const progress =
      (y - cardIPlusOneStart) / (cardIPlusOneEnd - cardIPlusOneStart);
    const clamped = Math.min(1, Math.max(0, progress));
    return 1 - clamped * 0.05;
  });

  const cardY = useTransform(scrollY, (y) => {
    if (!containerRef.current) return "100%";
    const containerTop =
      containerRef.current.getBoundingClientRect().top + window.scrollY;
    const cardStart =
      containerTop + i * CARD_SCROLL_HEIGHT - window.innerHeight / 2;
    const cardEnd = containerTop + i * CARD_SCROLL_HEIGHT;

    if (i === 0) return "0%";

    const progress = (y - cardStart) / (cardEnd - cardStart);
    const clamped = Math.min(1, Math.max(0, progress));
    return `${(1 - clamped) * 80}%`;
  });

  const stickyTop = STICKY_TOP + i * STACK_OFFSET;

  return (
    <div
      style={{ top: stickyTop, height: CARD_SCROLL_HEIGHT, zIndex: i + 1 }}
      className="sticky flex items-start justify-center pt-0"
    >
      <motion.div
        style={{
          scale: scaleStart,
          y: cardY,
          transformOrigin: "top center",
          background: feature.bg,
          willChange: "transform",
          minHeight: 420,
          position: "relative",
        }}
        className="flex flex-col rounded-[48px] p-[60px_50px] w-full max-w-[1100px] shadow-[0_8px_40px_rgba(0,0,0,0.1)]"
      >
        {/* Text */}
        <div className="relative z-10 max-w-[520px]">
          <h3
            style={{ color: feature.textColor }}
            className="font-outfit text-[24px] lg:text-[40px] font-normal leading-[1.2] mb-5"
          >
            {feature.title}
          </h3>
          <p
            style={{ color: feature.textColor }}
            className="font-outfit text-[14px] lg:text-[18px] leading-[1.6] opacity-80 m-0"
          >
            {feature.desc}
          </p>
        </div>

        {/* Image */}
        <img
          src={feature.imgSrc}
          alt={`Feature ${i + 1}`}
          className={`${feature.imgClass} object-contain `}
        />
      </motion.div>
    </div>
  );
}

export default function FeaturesSection() {
  const containerRef = useRef(null);

  return (
    <div className="bg-white">
      <div className="text-center py-[72px] px-[90px] pb-[44px] bg-white">
        <h2 className="font-outfit text-[30px] font-black uppercase tracking-[-0.02em] text-[#181818] mb-[10px]">
          Discover What We Offer
        </h2>
        <p className="font-outfit text-[17px] text-[#181818] opacity-70 m-0">
          Streamline your construction projects with local suppliers using
          Rightaway.
        </p>
      </div>

      {/* Scroll container */}
      <div
        ref={containerRef}
        className="mt-20 relative px-[90px] box-border"
        style={{ height: CARD_SCROLL_HEIGHT * features.length }}
      >
        {features.map((feature, i) => (
          <FeatureCard
            key={i}
            i={i}
            feature={feature}
            containerRef={containerRef}
          />
        ))}
      </div>
    </div>
  );
}
