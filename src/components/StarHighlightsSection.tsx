"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";

interface HighlightItem {
  img: string;
  name: string;
  desc: string;
  date: string;
}

export default function StarHighlightsSection() {
  const highlights: HighlightItem[] = [
    {
      img: "/assets/pic3.webp",
      name: "Nora Fatehi",
      desc: "performed for an event hosted by XYZ in Pune.",
      date: "14 March 2023",
    },
    {
      img: "/assets/pic4.jpg",
      name: "Guru Randhawa",
      desc: "live concert hosted by ABC Entertainment in Mumbai.",
      date: "22 April 2023",
    },
    {
      img: "/assets/dancer.jpg",
      name: "Neha Kakkar",
      desc: "performed at a corporate event in Delhi.",
      date: "5 May 2023",
    },
  ];

  const [index, setIndex] = useState<number>(0);
  const [hover, setHover] = useState<boolean>(false);

  const handleNext = () => setIndex((prev) => (prev + 1) % highlights.length);
  const handlePrev = () =>
    setIndex((prev) => (prev === 0 ? highlights.length - 1 : prev - 1));

  const current = highlights[index];

  return (
    <section
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative w-full bg-[#090913] text-white py-24 flex flex-col items-center overflow-hidden"
    >
      {/* 🔥 Top Running Ticker */}
      <div
        className={`absolute top-10 -left-40 rotate-[-25deg] text-gray-400 text-sm px-20 py-1 tracking-widest whitespace-nowrap
          bg-linear-to-r from-[#1a1a1f] to-[#0d0d12]
          ${hover ? "animate-slide" : "opacity-60"}
        `}
      >
        ★ HIGHLIGHTS OF TODAY ★ HIGHLIGHTS OF TODAY ★ HIGHLIGHTS OF TODAY ★
      </div>

      {/* 🔥 Bottom Running Ticker */}
      <div
        className={`absolute bottom-20 -right-40 -rotate-45 text-gray-400 text-sm px-20 py-1 tracking-widest whitespace-nowrap
          bg-linear-to-r from-[#1a1a1f] to-[#0d0d12]
          ${hover ? "animate-slide" : "opacity-60"}
        `}
      >
        ★ HIGHLIGHTS OF TODAY ★ HIGHLIGHTS OF TODAY ★ HIGHLIGHTS OF TODAY ★
      </div>

      {/* ⭐ Section Title */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12 leading-snug">
        Recent shows made <br />
        star-studded via{" "}
        <span className="text-pink-400 font-bold">StarClinch</span>
      </h2>

      {/* ⭐ Main Carousel */}
      <div className="flex items-center justify-center gap-6 relative w-full max-w-5xl">
        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="p-2 bg-[#1c1c25] rounded-full hover:bg-[#2a2a35] transition"
        >
          <ChevronLeft className="w-5 h-5 text-gray-300" />
        </button>

        {/* Artist Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full md:w-auto">
          {/* Profile Image */}
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-[0_0_35px_rgba(255,255,255,0.12)]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.img}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image
                  src={current.img}
                  alt={current.name}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Information */}
          <motion.div
            key={current.name}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45 }}
            className="flex flex-col items-start max-w-sm"
          >
            <h3 className="text-2xl font-bold">{current.name}</h3>
            <p className="text-gray-400 text-sm mt-3 leading-relaxed">
              {current.desc}
            </p>

            <div className="flex items-center gap-2 mt-4 text-gray-500 text-sm">
              <Calendar className="w-4 h-4" />
              {current.date}
            </div>
          </motion.div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="p-2 bg-[#1c1c25] rounded-full hover:bg-[#2a2a35] transition"
        >
          <ChevronRight className="w-5 h-5 text-gray-300" />
        </button>
      </div>
    </section>
  );
}
