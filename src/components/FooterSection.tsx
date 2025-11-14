"use client";

import { motion } from "framer-motion";

export default function FooterSection() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center py-32 overflow-hidden bg-[#090913]">
      {/* 🔵 LEFT BIG BLUR CIRCLE */}
      <div className="absolute left-0 bottom-0 w-[450px] h-[450px] bg-pink-700 opacity-30 blur-[180px] rounded-full"></div>

      {/* 🟣 RIGHT BIG BLUR CIRCLE */}
      <div className="absolute right-0 bottom-0 w-[450px] h-[450px] bg-purple-700 opacity-30 blur-[180px] rounded-full" />

      {/* 🌙 CURVED TOP LINE */}
      <svg
        viewBox="0 0 1400 200"
        preserveAspectRatio="none"
        className="absolute top-0 left-0 w-full opacity-[0.15]"
      >
        <path
          d="M0,100 C400,200 1000,0 1400,100"
          fill="none"
          stroke="#B5179E"
          strokeWidth="3"
        />
      </svg>

      {/* ⭐ MAIN CAPSULE CARD (UPDATED) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className=" flex flex-col items-center justify-center
          relative mt-16
          w-[95%] max-w-5xl
          px-14 py-20
          bg-white/5 backdrop-blur-2xl
          border border-white
          shadow-[0_0_80px_rgba(236,72,153,0.15)]
          rounded-[300px]       /* <-- THIS MAKES CAPSULE */
        "
      >
        {/* Floating Labels (top) */}
        <div className="flex justify-center gap-4 mb-6">
          <span className="px-4 py-1 text-sm bg-white/10 rounded-full border border-white/20 text-gray-200">
            Fun
          </span>
          <span className="px-4 py-1 text-sm bg-white/10 rounded-full border border-white/20 text-gray-200">
            Inclusive
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center text-6xl md:text-5xl font-bold text-white mb-6">
          20+ Talented Folks
        </h2>

        {/* Description */}
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10">
          From passion-driven dedication to impactful contribution, we do it all
          here. We are growing and would be excited to hear from you!
        </p>

        {/* Button */}
        <div className="flex justify-center mb-10">
          <button className="px-8 py-3 rounded-full bg-linear-to-r from-pink-500 to-orange-400 text-white font-medium shadow-lg">
            Join our team →
          </button>
        </div>

        {/* Bottom Floating Tags */}
        <div className="flex justify-center gap-4">
          <span className="px-4 py-1 text-xs bg-white/10 rounded-full border border-white/20 text-gray-300">
            Focused
          </span>
          <span className="px-4 py-1 text-xs bg-white/10 rounded-full border border-white/20 text-gray-300">
            Collaborative
          </span>
          <span className="px-4 py-1 text-xs bg-white/10 rounded-full border border-white/20 text-gray-300">
            United
          </span>
        </div>
      </motion.div>
    </section>
  );
}
