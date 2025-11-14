"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function StarclinchSquadSection() {
  const squads = [
    {
      name: "Design Dynamos",
      img: "/assets/pic1.webp",
      members: 5,
      desc: "The artists behind the visuals. These design superheroes bring ideas to life, painting our projects with creativity and imagination.",
    },
    {
      name: "Tech Titans",
      img: "/assets/pic3.webp",
      members: 7,
      desc: "Our brilliant developers and engineers who turn ideas into digital reality, writing code that powers everything we build.",
    },
    {
      name: "Marketing Mavericks",
      img: "/assets/pic4.jpg",
      members: 6,
      desc: "The minds behind the magic. This team crafts stories and strategies that bring StarClinch closer to its audience.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [angle, setAngle] = useState(0);

  const handleNext = () => {
    const nextIndex = (index + 1) % squads.length;
    setIndex(nextIndex);

    // Rotate only if NOT Tech Titans
    if (squads[nextIndex].name !== "Tech Titans") {
      setAngle((a) => a + 360);
    } else {
      setAngle(0); // Reset to default (no rotation)
    }
  };

  const handlePrev = () => {
    const prevIndex = index === 0 ? squads.length - 1 : index - 1;
    setIndex(prevIndex);

    // Rotate only if NOT Tech Titans
    if (squads[prevIndex].name !== "Tech Titans") {
      setAngle((a) => a - 360);
    } else {
      setAngle(0); // Reset to default (no rotation)
    }
  };

  const current = squads[index];

  return (
    <section className="relative w-full bg-[#090913] text-white py-24 flex flex-col items-center overflow-hidden">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
        Meet Our <span className="text-pink-400">Starclinch Squads</span>
      </h2>

      {/* Arc Background */}
      <div className="absolute top-28 left-1/2 -translate-x-1/2 w-[880px] h-[440px] pointer-events-none">
        <svg viewBox="0 0 880 440" className="w-full h-full">
          <path
            d="M40,380 C220,120 660,120 840,380"
            stroke="#1f2330"
            strokeWidth="3"
            fill="none"
            strokeOpacity="0.5"
          />
        </svg>
      </div>

      {/* Team Section */}
      <div className="relative w-full max-w-4xl flex items-center justify-center">
        {/* Left Circles */}
        <div className="absolute left-8 top-[140px] w-20 h-20 rounded-full overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.6)]">
          <Image
            src="/assets/dancer.jpg"
            alt="side-left-1"
            width={80}
            height={80}
            className="object-cover"
          />
        </div>
        <div className="absolute left-36 top-[72px] w-20 h-20 rounded-full overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.6)]">
          <Image
            src="/assets/pic5.webp"
            alt="side-left-2"
            width={80}
            height={80}
            className="object-cover"
          />
        </div>

        {/* Right Circles */}
        <div className="absolute right-36 top-[72px] w-20 h-20 rounded-full overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.6)]">
          <Image
            src="/assets/arijit.jpeg"
            alt="side-right-1"
            width={80}
            height={80}
            className="object-cover"
          />
        </div>
        <div className="absolute right-8 top-[140px] w-20 h-20 rounded-full overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.6)]">
          <Image
            src="/assets/pic4.jpg"
            alt="side-right-2"
            width={80}
            height={80}
            className="object-cover"
          />
        </div>

        {/* Main Center Content */}
        <div className="flex flex-col items-center gap-6">
          {/* Arrows + Image */}
          <div className="flex items-center gap-8">
            <button
              aria-label="previous squad"
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-[#1b1c22] hover:bg-[#2a2b33] flex items-center justify-center shadow-md transition"
            >
              <ChevronLeft className="w-5 h-5 text-gray-300" />
            </button>

            {/* Animated Center Image */}
            <motion.div
              animate={{ rotate: current.name === "Tech Titans" ? 0 : angle }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.6)]"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.img}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.6 }}
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
            </motion.div>

            <button
              aria-label="next squad"
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-[#1b1c22] hover:bg-[#2a2b33] flex items-center justify-center shadow-md transition"
            >
              <ChevronRight className="w-5 h-5 text-gray-300" />
            </button>
          </div>

          {/* Members */}
          <div className="bg-linear-to-b from-[#0f2b18] to-[#05200f] px-4 py-1 rounded-full text-sm text-green-100 border border-green-900">
            {current.members} Members
          </div>

          {/* Name */}
          <h3 className="text-2xl md:text-3xl font-semibold">{current.name}</h3>

          {/* Description */}
          <p className="text-gray-400 max-w-xl text-center px-4">
            {current.desc}
          </p>

          {/* CTA */}
          <a
            href="#"
            className="text-teal-300 hover:text-teal-200 mt-2 flex items-center gap-2"
          >
            Our {current.name.toLowerCase()} team is growing. Apply Now ►
          </a>
        </div>
      </div>
    </section>
  );
}
