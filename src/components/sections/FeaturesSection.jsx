"use client";
import { useRef, useEffect } from "react";
import {
  motion,
  useTransform,
  useMotionValue,
} from "framer-motion";

const features = [
  {
    bg: "#F5F5F5",
    textColor: "#014837",
    title: "Turpis vitae quis nunc pulvinar vel adipiscing.",
    desc: "Pellentesque auctor diam ullamcorper eget mi euismod eget est. Viverra mauris netus cursus erat. Viverra sapien turpis blandit nullam feugiat morbi aliquam felis.",
    imgSrc: "/future-products.png",
    imgStyle: {
      width: 450,
      height: 350,
      position: "absolute",
      top: -64,
      right: 40,
    },
  },
  {
    bg: "#63EAAD",
    textColor: "#014837",
    title: "Turpis vitae quis nunc pulvinar vel adipiscing.",
    desc: "Pellentesque auctor diam ullamcorper eget mi euismod eget est. Viverra mauris netus cursus erat. Viverra sapien turpis blandit nullam feugiat morbi aliquam felis.",
    imgSrc: "/future-hand.png",
    imgStyle: {
      width: 700,
      height: 450,
      position: "absolute",
      bottom: 0,
      right: 0,
    },
  },
  {
    bg: "#CEFFE9",
    textColor: "#014837",
    title: "Turpis vitae quis nunc pulvinar vel adipiscing.",
    desc: "Pellentesque auctor diam ullamcorper eget mi euismod eget est. Viverra mauris netus cursus erat. Viverra sapien turpis blandit nullam feugiat morbi aliquam felis.",
    imgSrc: "/future-app.png",
    imgStyle: {
      width: 700,
      height: 450,
      position: "absolute",
      bottom: 0,
      right: 0,
    },
  },
];

// How much scroll per card (px)
const CARD_SCROLL_HEIGHT = 600;
// Top offset where cards stick (px from viewport top)
const STICKY_TOP = 160;
// How much each subsequent card is offset down when stacking
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
    // When does card i+1 start sliding in?
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

    if (i === 0) return "0%"; // first card is always visible

    const progress = (y - cardStart) / (cardEnd - cardStart);
    const clamped = Math.min(1, Math.max(0, progress));
    // slide from 80% down to 0%
    return `${(1 - clamped) * 80}%`;
  });

  const stickyTop = STICKY_TOP + i * STACK_OFFSET;

  return (
    <div
      style={{
        position: "sticky",
        top: stickyTop,
        height: CARD_SCROLL_HEIGHT,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: 0,
        zIndex: i + 1,
      }}
    >
      <motion.div
        style={{
          scale: scaleStart,
          y: cardY,
          transformOrigin: "top center",
          borderRadius: 48,
          padding: "60px 50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: feature.bg,
          willChange: "transform",
          // overflow: "hidden",
          width: "100%",
          maxWidth: 1100,
          minHeight: 420,
          position: "relative",
          boxShadow: "0 8px 40px rgba(0,0,0,0.10)",
        }}
      >
        {/* Text */}
        <div style={{ maxWidth: 520, position: "relative", zIndex: 1 }}>
          <h3
            style={{
              fontFamily: "Outfit, sans-serif",
              fontSize: 40,
              fontWeight: 400,
              color: feature.textColor,
              lineHeight: 1.2,
              margin: "0 0 20px 0",
            }}
          >
            {feature.title}
          </h3>
          <p
            style={{
              fontFamily: "Outfit, sans-serif",
              fontSize: 18,
              color: feature.textColor,
              lineHeight: 1.6,
              opacity: 0.8,
              margin: 0,
            }}
          >
            {feature.desc}
          </p>
        </div>

        {/* Image */}
        <img
          src={feature.imgSrc}
          alt={`Feature ${i + 1}`}
          style={{
            objectFit: "contain",
            pointerEvents: "none",
            ...feature.imgStyle,
          }}
        />
      </motion.div>
    </div>
  );
}

export default function FeaturesSection() {
  const containerRef = useRef(null);

  return (
    <div style={{ background: "#fff" }}>
      <div
        style={{
          textAlign: "center",
          padding: "72px 90px 44px",
          background: "#fff",
        }}
        
      >
        <h2
          style={{
            fontFamily: "Outfit, sans-serif",
            fontSize: 30,
            fontWeight: 900,
            textTransform: "uppercase",
            letterSpacing: "-0.02em",
            color: "#181818",
            margin: "0 0 10px 0",
          }}
        >
          Discover What We Offer
        </h2>
        <p
          style={{
            fontFamily: "Outfit, sans-serif",
            fontSize: 17,
            color: "#181818",
            opacity: 0.7,
            margin: 0,
          }}
        >
          Streamline your construction projects with local suppliers using
          Rightaway.
        </p>
      </div>

      {/* Scroll container */}
      <div
        ref={containerRef}
        style={{
          padding: "0 90px",
          boxSizing: "border-box",
          height: CARD_SCROLL_HEIGHT * features.length,
          position: "relative",
        }}
        className="mt-20"
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
