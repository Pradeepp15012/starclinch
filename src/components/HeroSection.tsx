"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function HeroSection() {
  const images = [
    { src: "/assets/dancer.jpg", title: "Singers" }, // 1️⃣ Starts from here
    { src: "/assets/arijit.jpeg", title: "Influencers" }, // 2️⃣ Next
    { src: "/assets/zakir khan.webp", title: "Comedians" }, // 3️⃣ Stops here
  ];

  const [index, setIndex] = useState(0);

  // 👉 Go to next image but stop at last one
  const handleNext = () => {
    setIndex((prev) => {
      if (prev < images.length - 1) {
        return prev + 1;
      } else {
        return prev; // Stop changing when last image reached
      }
    });
  };

  return (
    <div className="relative flex flex-col md:flex-row items-center justify-center pt-24 z-10 gap-10 md:gap-20">
      {/* Left: Animated Circle */}
      <div className="flex flex-col items-center">
        <AnimatePresence mode="wait">
          {/* Image Container */}
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            onClick={handleNext}
            className="cursor-pointer relative flex items-center justify-center"
          >
            {/* Circle */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-pink-500 shadow-[0_0_40px_rgba(236,72,153,0.4)] overflow-hidden">
              <Image
                src={images[index].src}
                alt={images[index].title}
                fill
                className="object-cover rounded-full"
              />
            </div>

            {/* Rotating Title */}
            <motion.h1
              key={`title-${index}`}
              initial={{ rotate: 270, opacity: 0 }}
              animate={{ rotate: 360, opacity: 1 }}
              exit={{ rotate: 450, opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute left-[-35%] md:left-[-40%] text-4xl md:text-6xl font-bold text-white drop-shadow-lg whitespace-nowrap z-20"
            >
              {images[index].title}
            </motion.h1>
          </motion.div>
        </AnimatePresence>

        {/* Text below the image */}
        {images[index].title === "Comedians" ? (
          <p className="mt-4 text-sm text-gray-400 max-w-xs text-center">
            This slider will work on scroll, this is just a mockup. Press R to
            reload the page.
          </p>
        ) : (
          <p className="mt-4 text-sm text-gray-500">Click here to view more</p>
        )}
      </div>

      {/* Right Side Text Section */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-sm">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-100 text-2xl md:text-3xl leading-tight mb-4"
        >
          <p className="text-gray-400">Choose</p>
          <p>
            <span className="text-gray-400">from</span> 100+
          </p>
          <p>Categories</p>
        </motion.div>

        <button
          onClick={handleNext}
          className={`${
            index === images.length - 1
              ? "text-gray-600 cursor-not-allowed"
              : "text-pink-400 underline hover:text-pink-300"
          } transition text-base md:text-lg`}
          disabled={index === images.length - 1}
        >
          Explore all categories →
        </button>
      </div>
    </div>
  );
}
