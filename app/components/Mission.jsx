"use client"
import Image from "next/image"
import { MdArrowOutward } from "react-icons/md"

const Mission = () => {
  return (
    <div className="relative w-full    overflow-hidden bg-gradient-to-br from-gray-300 via-gray-200 to-gray-100 rounded-bl-[30px] rounded-tr-[40px] md:rounded-bl-[50px]">
      {/* Background Image with Overlay - Hidden on mobile */}
      <div className="absolute inset-0 hidden md:block">
        <Image
          src="/assets/couplejustice.jpg"
          alt="Couple representing justice"
          fill
          className="object-cover opacity-10"
          priority
        />
        <div className="absolute inset-0 bg-gradiento-r from-white/98 via-white/90 to-white/60"></div>
      </div>

      <div className="absolute right-3 top-6 bottom-6 flex gap-2 md:hidden">
        {/* First column of bars */}
        <div className="flex flex-col gap-2">
          <div className="w-[8px] h-[60px] bg-[#FFBB00] rounded-full"></div>
          <div className="w-[8px] h-[100px] bg-[#00529B] rounded-full"></div>
          <div className="w-[8px] h-[80px] bg-[#FFBB00] rounded-full"></div>
          <div className="w-[8px] h-[120px] bg-[#00529B] rounded-full"></div>
          <div className="w-[8px] h-[60px] bg-[#FFBB00] rounded-full"></div>
        </div>
        {/* Second column of bars */}
        <div className="flex flex-col gap-2 mt-8">
          <div className="w-[8px] h-[80px] bg-[#00529B] rounded-full"></div>
          <div className="w-[8px] h-[100px] bg-[#FFBB00] rounded-full"></div>
          <div className="w-[8px] h-[60px] bg-[#00529B] rounded-full"></div>
          <div className="w-[8px] h-[120px] bg-[#FFBB00] rounded-full"></div>
          <div className="w-[8px] h-[70px] bg-[#00529B] rounded-full"></div>
        </div>
      </div>

      {/* Desktop Decorative Blocks - Right Side (hidden on mobile) */}
      <div className="absolute right-0 top-0 bottom-0 w-[200px] hidden md:flex items-center justify-end pr-4">
        <div className="relative w-[160px] h-[500px]">
          {/* Row 1 - Top: Large Blue Square + Small Blue Square */}
          <div className="absolute top-0 left-0 w-[90px] h-[80px] bg-[#00529B] rounded-2xl"></div>
          <div className="absolute top-0 right-0 w-[55px] h-[45px] bg-[#00529B] rounded-xl"></div>

          {/* Row 2 - Yellow large rectangle overlapping */}
          <div className="absolute top-[50px] left-0 w-[90px] h-[190px] bg-[#FFBB00] rounded-2xl"></div>
          <div className="absolute top-[60px] right-0 w-[55px] h-[180px] bg-[#FFBB00] rounded-2xl"></div>

          {/* Row 3 - Blue large rectangle */}
          <div className="absolute top-[250px] left-0 w-[90px] h-[160px] bg-[#00529B] rounded-2xl"></div>
          <div className="absolute top-[200px] right-0 w-[55px] h-[150px] bg-[#00529B] rounded-2xl"></div>

          {/* Row 4 - Bottom Yellow small square */}
          <div className="absolute bottom-0 right-0 w-[55px] h-[50px] bg-[#FFBB00] rounded-xl"></div>
        </div>
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-[3px] hidden md:block"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-8 md:py-32 pr-16 md:pr-12">
        {/* Mission Header */}
        <h1
          className="text-3xl md:text-6xl font-bold italic text-[#00529B] mb-4 md:mb-6"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Our Mission
        </h1>

        <p
          className="text-[#00529B] text-sm md:text-lg leading-relaxed max-w-[280px] md:max-w-xl mb-6 md:mb-10"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Free, confidential case reviews. Serving all 35 states. No fees unless you win. Your Path To Justice Starts
          Here. C2P connects victims with the legal support they need. We provide tailored connections, empower client
          voices, and transform legal challenges into clear paths toward resolution.
        </p>

        <p
          className="text-[#00529B] text-sm leading-relaxed max-w-[280px] mb-8 md:hidden"
          style={{ fontFamily: "Arial, sans-serif" }}
        >
          Free, confidential case reviews. Serving all 35 states. No fees unless you win. Your Path To Justice Starts
          Here. C2P connects victims with the legal support they need. We provide tailored connections, empower
        </p>

        <div className="inline-block">
          <button className="bg-[#FFBB00] hover:bg-[#E5A711] text-[#00529B] font-semibold px-5 md:px-6 py-2.5 md:py-3 rounded-full flex items-center gap-2 md:gap-3 shadow-md hover:shadow-lg transition-all duration-300">
            <span className="text-sm md:text-base md:hidden">Know more About Us</span>
            <span className="text-base hidden md:inline">About Us</span>
            <MdArrowOutward size={24} className="bg-[#00529B] p-1 rounded-lg text-[#FFBB00] md:w-7 md:h-7" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Mission
