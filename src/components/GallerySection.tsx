"use client";

import Image from "next/image";
import { useState } from "react";

export default function GallerySection() {
  const [tab, setTab] = useState("photos");

  return (
    <section className="relative mt-20 w-full max-w-4xl flex flex-col items-center px-4 overflow-hidden">
      {/* Semi-Circle Border Background */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-[900px] h-[450px] rounded-t-full border-t-2 border-[#3c0a79] opacity-60"></div>

      {/* Tabs */}
      <div className="flex gap-4 bg-[#120022] p-2 rounded-full shadow-inner mb-8 relative z-10">
        <button
          onClick={() => setTab("photos")}
          className={`px-6 py-2 rounded-full font-medium ${
            tab === "photos"
              ? "bg-white text-black"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Photos
        </button>
        <button
          onClick={() => setTab("videos")}
          className={`px-6 py-2 rounded-full font-medium ${
            tab === "videos"
              ? "bg-white text-black"
              : "text-gray-400 hover:text-white"
          }`}
        >
          Videos
        </button>
      </div>

      {/* Photo Grid */}
      {tab === "photos" && (
        <div className="grid grid-cols-3 gap-6 relative z-10">
          {[
            "/assets/pic1.webp",
            "/assets/pic2.webp",
            "/assets/pic3.webp",
            "/assets/pic4.jpg",
            "/assets/pic5.webp",
            "/assets/pic6.jpeg",
          ].map((src, i) => (
            <div
              key={i}
              className="relative w-28 h-28 md:w-36 md:h-36 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300"
            >
              <Image
                src={src}
                alt={`photo-${i}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}

      {/* Video Grid */}
      {tab === "videos" && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4 relative z-10">
          {[
            "/assets/video1.mp4",
            "/assets/video2.mp4",
            "/assets/video3.mp4",
          ].map((src, i) => (
            <div
              key={i}
              className="relative w-32 h-24 md:w-44 md:h-28 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300"
            >
              <video
                src={src}
                controls
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
