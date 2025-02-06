import { motion } from "framer-motion";
import React, { useState } from "react";
import { GoDotFill } from "react-icons/go";

function Feature() {
  const [hoveredProject, setHoveredProject] = useState<
    null | "cardboard" | "ah2"
  >(null);

  return (
    <div className="w-full h-full py-10 bg-white">
      <div>
        <h1 className="text-6xl capitalize mb-10">featured projects</h1>
      </div>

      <div className="w-full h-full border-t-[1px] border-gray-400 flex gap-5">
        {/* First Project */}
        <div className="w-1/2 h-[80vh] mt-20 px-20">
          <div className="mb-4 flex items-center">
            <h5>
              <GoDotFill />
            </h5>
            <h5>Cardboard Spaceship</h5>
          </div>
          <div
            className="w-[43vw] h-[66vh] relative"
            onMouseEnter={() => setHoveredProject("cardboard")}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {hoveredProject === "cardboard" && (
              <motion.div
                initial={{ y: "-100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "80%" }}
                transition={{ duration: 0.5, ease: [0.37, 0, 0.63, 1] }}
                className="absolute left-1/2 -translate-x-1/2 bottom-1/2 -translate-y-1/2 z-[9] text-[12vh] leading-none tracking-tighter uppercase font-semibold flex text-[#CDEA68]"
              >
                <h1>Cardboard</h1>
                <h1>Spaceship</h1>
              </motion.div>
            )}
            <img
              className="w-full h-full bg-cover rounded-2xl"
              src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
              alt=""
            />
          </div>
          <div className="flex gap-2 py-5">
            <div className="w-48 h-8 border-[2px] border-slate-800 rounded-full text-md uppercase text-center">
              <h5>branded template</h5>
            </div>
            <div className="w-36 h-8 border-[2px] border-slate-800 rounded-full text-md uppercase text-center">
              <h5>sales deck</h5>
            </div>
            <div className="w-52 h-8 border-[2px] border-slate-800 rounded-full text-md uppercase text-center">
              <h5>social media template</h5>
            </div>
          </div>
        </div>

        {/* Second Project */}
        <div className="w-1/2 h-[80vh] mt-20">
          <div className="mb-4 flex items-center">
            <h5>
              <GoDotFill />
            </h5>{" "}
            <h5>AH2 & Matt Horn</h5>
          </div>
          <div
            className="w-[43vw] h-[66vh] relative"
            onMouseEnter={() => setHoveredProject("ah2")}
            onMouseLeave={() => setHoveredProject(null)}
          >
            {hoveredProject === "ah2" && (
              <motion.div
                initial={{ y: "-100%" }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: "80%" }}
                transition={{ duration: 0.5, ease: [0.37, 0, 0.63, 1] }}
                className="absolute right-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[999] text-[12vh] leading-none tracking-tighter uppercase font-semibold flex text-[#CDEA68]"
              >
                {"AH2 & Matt Horn".split("").map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
              </motion.div>
            )}
            <img
              className="w-full h-full bg-cover rounded-2xl"
              src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png"
              alt=""
            />
          </div>
          <div className="py-5">
            <div className="w-36 h-8 border-[2px] border-slate-800 rounded-full text-md uppercase text-center">
              <h5>pitch deck</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feature;
