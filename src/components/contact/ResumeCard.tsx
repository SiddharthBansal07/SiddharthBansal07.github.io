import React from "react";
import { BentoCard } from "../bento/BentoCard";
import { FaFileDownload } from "react-icons/fa";

export function ResumeCard() {
  return (
    <BentoCard
      rowSpan={3}
      className="relative group overflow-hidden flex flex-col"
    >
      {/* Resume Preview */}
      <div className="relative flex-1 overflow-hidden rounded-xl border border-white/10">
        <img
            src="/resume-preview.jpg"
            alt="Resume preview"
            className="w-full h-full object-contain object-top"
        />
        {/* Subtle fade */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Download Button */}
      <a
        href="/Siddharth_Bansal_Resume.pdf"
        download="Siddharth_Bansal_Resume.pdf"
        aria-label="Download resume"
        className="mt-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 rounded-xl"
      >
        <div className="w-full bg-orange-600/20 hover:bg-orange-600/40 
          border border-orange-500/30 p-4 rounded-xl 
          flex items-center justify-center gap-3 
          transition-colors backdrop-blur-sm"
        >
          <FaFileDownload className="text-orange-400 text-xl" />
          <span className="text-orange-100 font-bold text-lg">
            Download Resume
          </span>
        </div>
      </a>
    </BentoCard>
  );
}
