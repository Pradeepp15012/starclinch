// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";

// /**
//  * StarclinchHighlights
//  * - Zig-zag timeline with images along a curved path
//  * - Add after Gallery section
//  * - Replace image paths as needed
//  */

// export default function StarclinchHighlights() {
//   const highlights = [
//     {
//       title: "Late Night picture shoot",
//       subtitle: "Party for the boost",
//       img: "/assets/pic1.webp",
//     },
//     {
//       title: "Brainstorm Bash",
//       subtitle: "Ideas flowing nonstop",
//       img: "/assets/pic1.webp",
//     },
//     {
//       title: "Coffee Chronicles",
//       subtitle: "Midnight caffeine fuel",
//       img: "/assets/pic1.webp",
//     },
//     {
//       title: "Office Fun Friday",
//       subtitle: "Smiles & stories shared",
//       img: "/assets/pic1.webp",
//     },
//   ];

//   return (
//     <section className="relative w-full bg-[#090913] text-white py-32 overflow-hidden">
//       {/* Curvy background path */}
//       <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1.5 h-full bg-linear-to-b from-transparent via-[#1a1a22] to-transparent rounded-full opacity-50"></div>

//       {/* Decorative SVG curved path */}
//       <svg
//         className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-full opacity-10"
//         viewBox="0 0 1000 1600"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M500 0 C700 200 300 400 500 600 C700 800 300 1000 500 1200 C700 1400 300 1600 500 1800"
//           stroke="url(#grad)"
//           strokeWidth="6"
//           fill="none"
//         />
//         <defs>
//           <linearGradient
//             id="grad"
//             x1="500"
//             y1="0"
//             x2="500"
//             y2="1800"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop stopColor="#4B0082" />
//             <stop offset="1" stopColor="#EC4899" />
//           </linearGradient>
//         </defs>
//       </svg>

//       {/* Highlights */}
//       <div className="relative flex flex-col items-center gap-32">
//         {highlights.map((item, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7, delay: i * 0.2 }}
//             className={`relative flex items-center gap-6 ${
//               i % 2 === 0 ? "flex-row" : "flex-row-reverse"
//             }`}
//           >
//             {/* Text */}
//             <div className="w-56 text-right md:w-72 md:text-xl text-gray-300">
//               <p className="font-medium">{item.title}</p>
//               <p className="text-gray-400 text-sm">{item.subtitle}</p>
//             </div>

//             {/* Image with tilt */}
//             <motion.div
//               whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? -5 : 5 }}
//               className="relative w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.5)]"
//               style={{
//                 rotate: i % 2 === 0 ? "-10deg" : "10deg",
//               }}
//             >
//               <Image
//                 src={item.img}
//                 alt={item.title}
//                 fill
//                 className="object-cover"
//               />
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


// "use client";

// import Image from "next/image";
// import { motion } from "framer-motion";
// import { useState } from "react";

// /**
//  * StarclinchHighlights
//  * - Zig-zag timeline with clickable, highlightable images
//  * - Add after Gallery section
//  */

// export default function StarclinchHighlights() {
//   const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

//   const highlights = [
//     {
//       title: "Late Night picture shoot",
//       subtitle: "Party for the boost",
//       img: "/assets/pic1.webp",
//     },
//     {
//       title: "Brainstorm Bash",
//       subtitle: "Ideas flowing nonstop",
//       img: "/assets/pic1.webp",
//     },
//     {
//       title: "Coffee Chronicles",
//       subtitle: "Midnight caffeine fuel",
//       img: "/assets/pic1.webp",
//     },
//     {
//       title: "Office Fun Friday",
//       subtitle: "Smiles & stories shared",
//       img: "/assets/pic1.webp",
//     },
//   ];

//   return (
//     <section className="relative w-full bg-[#090913] text-white py-32 overflow-hidden">
//       {/* Curvy background path */}
//       <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1.5 h-full bg-linear-to-b from-transparent via-[#1a1a22] to-transparent rounded-full opacity-50"></div>

//       {/* Decorative SVG curved path */}
//       <svg
//         className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-full opacity-10"
//         viewBox="0 0 1000 1600"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <path
//           d="M500 0 C700 200 300 400 500 600 C700 800 300 1000 500 1200 C700 1400 300 1600 500 1800"
//           stroke="url(#grad)"
//           strokeWidth="6"
//           fill="none"
//         />
//         <defs>
//           <linearGradient
//             id="grad"
//             x1="500"
//             y1="0"
//             x2="500"
//             y2="1800"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop stopColor="#4B0082" />
//             <stop offset="1" stopColor="#EC4899" />
//           </linearGradient>
//         </defs>
//       </svg>

//       {/* Highlights */}
//       <div className="relative flex flex-col items-center gap-32">
//         {highlights.map((item, i) => {
//           const isSelected = selectedIndex === i;

//           return (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: i * 0.2 }}
//               className={`relative flex items-center gap-6 ${
//                 i % 2 === 0 ? "flex-row" : "flex-row-reverse"
//               }`}
//             >
//               {/* Text */}
//               <div className="w-56 text-right md:w-72 md:text-xl text-gray-300">
//                 <p className="font-medium">{item.title}</p>
//                 <p className="text-gray-400 text-sm">{item.subtitle}</p>
//               </div>

//               {/* Image with click highlight */}
//               <motion.div
//                 whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? -5 : 5 }}
//                 animate={{
//                   scale: isSelected ? 1.1 : 1,
//                   boxShadow: isSelected
//                     ? "0 0 30px rgba(236,72,153,0.6)"
//                     : "0 8px 30px rgba(0,0,0,0.5)",
//                 }}
//                 transition={{ type: "spring", stiffness: 200, damping: 15 }}
//                 onClick={() => setSelectedIndex(isSelected ? null : i)} // toggle selection
//                 className="relative w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden cursor-pointer"
//                 style={{
//                   rotate: i % 2 === 0 ? "-10deg" : "10deg",
//                   border: isSelected
//                     ? "2px solid rgba(236,72,153,0.8)"
//                     : "2px solid transparent",
//                 }}
//               >
//                 <Image
//                   src={item.img}
//                   alt={item.title}
//                   fill
//                   className="object-cover"
//                 />
//               </motion.div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

/**
 * StarclinchHighlights
 * - Zig-zag timeline with clickable, highlightable images
 * - Add after Gallery section
 */

export default function StarclinchHighlights() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  // ✅ Removed "Late Night Maggie / Party for the boost" item
  const highlights = [
    {
      title: "Brainstorm Bash",
      subtitle: "Ideas flowing nonstop",
      img: "/assets/pic1.webp",
    },
    {
      title: "Coffee Chronicles",
      subtitle: "Midnight caffeine fuel",
      img: "/assets/pic1.webp",
    },
    {
      title: "Office Fun Friday",
      subtitle: "Smiles & stories shared",
      img: "/assets/pic1.webp",
    },
  ];

  return (
    <section className="relative w-full bg-[#090913] text-white py-32 overflow-hidden">
      {/* Curvy background path */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-1.5 h-full bg-linear-to-b from-transparent via-[#1a1a22] to-transparent rounded-full opacity-50"></div>

      {/* Decorative SVG curved path */}
      <svg
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-full opacity-10"
        viewBox="0 0 1000 1600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M500 0 C700 200 300 400 500 600 C700 800 300 1000 500 1200 C700 1400 300 1600 500 1800"
          stroke="url(#grad)"
          strokeWidth="6"
          fill="none"
        />
        <defs>
          <linearGradient
            id="grad"
            x1="500"
            y1="0"
            x2="500"
            y2="1800"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4B0082" />
            <stop offset="1" stopColor="#EC4899" />
          </linearGradient>
        </defs>
      </svg>

      {/* Highlights */}
      <div className="relative flex flex-col items-center gap-32">
        {highlights.map((item, i) => {
          const isSelected = selectedIndex === i;

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className={`relative flex items-center gap-6 ${
                i % 2 === 0 ? "flex-row" : "flex-row-reverse"
              }`}
            >
              {/* Text */}
              <div className="w-56 text-right md:w-72 md:text-xl text-gray-300">
                <p className="font-medium">{item.title}</p>
                <p className="text-gray-400 text-sm">{item.subtitle}</p>
              </div>

              {/* Image with click highlight */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: i % 2 === 0 ? -5 : 5 }}
                animate={{
                  scale: isSelected ? 1.1 : 1,
                  boxShadow: isSelected
                    ? "0 0 30px rgba(236,72,153,0.6)"
                    : "0 8px 30px rgba(0,0,0,0.5)",
                }}
                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                onClick={() => setSelectedIndex(isSelected ? null : i)} // toggle selection
                className="relative w-40 h-40 md:w-48 md:h-48 rounded-xl overflow-hidden cursor-pointer"
                style={{
                  rotate: i % 2 === 0 ? "-10deg" : "10deg",
                  border: isSelected
                    ? "2px solid rgba(236,72,153,0.8)"
                    : "2px solid transparent",
                }}
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
