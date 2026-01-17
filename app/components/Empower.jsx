"use client";

import {
  ChevronDown,
  ArrowUpRight,
  Scale,
  Landmark,
  Handshake,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Wasingtonimage from "../../public/assets/images-washington.jpeg";
import { TbMessageChatbotFilled } from "react-icons/tb";
import { useState } from "react";

export default function HeroSection() {
  const [mobileCardIndex, setMobileCardIndex] = useState(0);

  const handlePrevCard = () => {
    setMobileCardIndex((prev) => (prev === 0 ? 1 : prev - 1));
  };

  const handleNextCard = () => {
    setMobileCardIndex((prev) => (prev === 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-[#f5f7fa] relative overflow-hidden">
      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-6 py-6 relative z-10">
        {/* Desktop Grid - Hidden on Mobile */}
        <div className="hidden lg:grid lg:grid-cols-12 gap-5 items-start">
          {/* Left Column - Main Hero Section */}
          <div className="lg:col-span-7 relative">
            <svg width="0" height="0" className="absolute">
              <defs>
                <clipPath id="heroClip" clipPathUnits="objectBoundingBox">
                  <path d="M0.04,0 H0.96 Q1,0,1,0.06 V0.53 L0.78,0.78 Q0.74,0.82,0.68,0.82 H0.17 Q0,0.82,0,0.71 V0.13 Q0,0,0.04,0 Z" />
                </clipPath>
              </defs>
            </svg>

            <div
              className="relative bg-[#0a2463] shadow-2xl"
              style={{
                minHeight: "620px",
                clipPath: "url(#heroClip)",
              }}
            >
              <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 700 620"
                preserveAspectRatio="none"
                fill="none"
              >
                {/* Base dark blue */}
                <rect width="700" height="620" fill="#0a2463" />

                {/* Main curved wave - flows from top-right to bottom-left */}
                <path
                  d="M700 0 L700 350 Q650 400 550 380 Q400 350 280 420 Q150 500 0 520 L0 620 L700 620 Z"
                  fill="#1e3a8a"
                  opacity="0.6"
                />

                {/* Secondary wave */}
                <path
                  d="M700 200 Q600 250 480 230 Q350 200 250 300 Q150 400 0 450 L0 620 L700 620 Z"
                  fill="#2563eb"
                  opacity="0.3"
                />

                {/* Bottom light blue accent curve */}
                <path
                  d="M0 450 Q100 400 200 450 Q350 520 450 480 Q550 440 650 500 L700 520 L700 620 L0 620 Z"
                  fill="#3b82f6"
                  opacity="0.2"
                />
              </svg>

              {/* Content */}
              <div className="relative z-10 p-14 pt-20">
                <h1
                  className="text-[#f5a623] leading-[1.05] mb-8"
                  style={{
                    fontFamily: 'Georgia, "Times New Roman", serif',
                    fontSize: "clamp(48px, 5vw, 68px)",
                    fontWeight: 400,
                    fontStyle: "italic",
                  }}
                >
                  Empowering
                  <br />
                  Justice,
                  <br />
                  Starting Now
                </h1>

                <p className="text-[#b8c5d6] text-base mt-8 mb-10 max-w-md leading-relaxed">
                  Talk to an experienced attorney. Available in all states. We
                  only get paid if you win.
                </p>

                <button className="inline-flex items-center gap-3 bg-[#f5a623] text-[#0a2463] font-semibold text-base px-7 py-4 rounded-full hover:bg-[#e09610] transition-all duration-300 shadow-lg">
                  Check if you Qualify
                  <div className="bg-[#0a2463] rounded-full p-2 flex items-center justify-center">
                    <ArrowUpRight className="text-[#f5a623] w-4 h-4" />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Desktop */}
          <div className="lg:col-span-5 space-y-4 relative">
            {/* Asbestos Exposure Claims Card with Chart */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 rounded-bl-[80px]">
              {/* Header */}
              <div className="px-5 py-4 flex items-center justify-between">
                <h3 className="text-[#0a2463] text-lg font-bold">
                  Asbestos Exposure Claims
                </h3>
                <div className="bg-[#f5a623] w-9 h-9 rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#e09610] transition">
                  <ChevronDown className="text-[#0a2463] w-4 h-4" />
                </div>
              </div>

              <div className="p-5">
                <div className="mb-6">
                  <div className="flex items-baseline justify-between">
                    <div className="text-sm text-gray-500 font-medium">
                      Settlement Success:
                    </div>
                    <div className="text-4xl font-black text-[#0a2463] tracking-tight">
                      2,45,200
                    </div>
                  </div>
                  <div className="w-16 h-1 bg-[#f5a623] mt-2 rounded-full"></div>
                </div>

                <div className="relative bg-white p-4 pt-2">
                  {/* Y-axis labels and dotted grid lines */}
                  <div className="relative h-[140px]">
                    {/* Dotted Grid lines with labels */}
                    <div className="absolute left-0 right-0 top-0 flex items-center">
                      <span className="text-xs text-gray-400 w-8">90K</span>
                      <div className="flex-1 border-t border-dashed border-gray-300"></div>
                    </div>
                    <div className="absolute left-0 right-0 top-[33%] flex items-center">
                      <span className="text-xs text-gray-400 w-8">60K</span>
                      <div className="flex-1 border-t border-dashed border-gray-300"></div>
                    </div>
                    <div className="absolute left-0 right-0 top-[66%] flex items-center">
                      <span className="text-xs text-gray-400 w-8">30K</span>
                      <div className="flex-1 border-t border-dashed border-gray-300"></div>
                    </div>
                    <div className="absolute left-0 right-0 bottom-0 flex items-center">
                      <span className="text-xs text-gray-400 w-8">10K</span>
                      <div className="flex-1 border-t border-dashed border-gray-300"></div>
                    </div>

                    {/* Bars */}
                    <div className="ml-10 flex items-end justify-around h-full gap-6 pb-1">
                      {/* April Bar */}
                      <div className="flex flex-col items-center">
                        <div
                          className="w-10 bg-[#9ca3af] rounded-t-md"
                          style={{ height: "50px" }}
                        ></div>
                      </div>

                      {/* July Bar */}
                      <div className="flex flex-col items-center">
                        <div
                          className="w-10 bg-[#6b7280] rounded-t-md"
                          style={{ height: "82px" }}
                        ></div>
                      </div>

                      {/* September Bar */}
                      <div className="flex flex-col items-center">
                        <div
                          className="w-10 bg-[#0a2463] rounded-t-md"
                          style={{ height: "110px" }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* X-axis labels */}
                  <div className="ml-10 flex justify-around mt-3">
                    <span className="text-sm text-[#0a2463] font-semibold">
                      Apr
                    </span>
                    <span className="text-sm text-[#0a2463] font-semibold">
                      Jul
                    </span>
                    <span className="text-sm text-[#0a2463] font-semibold">
                      Sept
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Summary Card - Desktop */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 relative rounded-tl-[70px]">
              {/* Washington DC Capitol Building Background Image */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <Image
                  src={Wasingtonimage}
                  alt=""
                  fill
                  className="object-cover object-bottom opacity-[0.12]"
                  style={{ objectPosition: "center 80%" }}
                />
              </div>

              <div className="relative z-10 p-5">
                <h3 className="text-[#0a2463] text-lg font-bold mb-5">
                  Case Summary
                </h3>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl border border-gray-200 shadow-sm">
                    <div className="text-[10px] text-gray-500 mb-1 leading-tight">
                      Average
                      <br />
                      Settlement
                    </div>
                    <div className="text-sm font-bold text-[#0a2463]">
                      $100K – $1M
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl border border-gray-200 shadow-sm">
                    <div className="text-[10px] text-gray-500 mb-1 leading-tight">
                      Time to Receive
                      <br />
                      Settlement
                    </div>
                    <div className="text-sm font-bold text-[#0a2463]">
                      18–30 Months
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm p-3 rounded-xl border border-gray-200 shadow-sm">
                    <div className="text-[10px] text-gray-500 mb-1 leading-tight">
                      Time in Court
                      <br />
                      (if not settled)
                    </div>
                    <div className="text-sm font-bold text-[#0a2463]">
                      4–5 Weeks
                    </div>
                  </div>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-3 gap-3 mb-16">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200 shadow-sm">
                    <div className="bg-[#f8fafc] w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-2 border border-gray-100">
                      <Scale className="w-5 h-5 text-[#0a2463]" />
                    </div>
                    <div className="text-xs font-semibold text-[#0a2463] leading-tight">
                      Free case
                      <br />
                      Review
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200 shadow-sm">
                    <div className="bg-[#f8fafc] w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-2 border border-gray-100">
                      <Landmark className="w-5 h-5 text-[#0a2463]" />
                    </div>
                    <div className="text-xs font-semibold text-[#0a2463] leading-tight">
                      Serving
                      <br />
                      Nationwide
                    </div>
                  </div>

                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 text-center border border-gray-200 shadow-sm">
                    <div className="bg-[#f8fafc] w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-2 border border-gray-100">
                      <Handshake className="w-5 h-5 text-[#0a2463]" />
                    </div>
                    <div className="text-xs font-semibold text-[#0a2463] leading-tight">
                      No Win,
                      <br />
                      No Fee
                    </div>
                  </div>
                </div>

                {/* Scroll Down Button */}
                <div className="absolute bottom-4 right-4 z-20">
                  <button className="group flex items-center gap-3 bg-gradient-to-r from-[#0a2463] to-[#1e3a8a] hover:from-[#1e3a8a] hover:to-[#0a2463] transition-all duration-300 px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl">
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                      <ChevronDown className="w-3 h-3 text-white animate-bounce" />
                    </div>
                    <div className="text-left">
                      <div className="text-white text-[10px] font-bold">
                        Scroll
                      </div>
                      <div className="text-white text-[10px] font-bold">
                        Down
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Visible only on Mobile */}
       <div className="lg:hidden space-y-4">
         
          {/* Hero Section - Mobile */}
          <div className="relative bg-[#0a2463] rounded-3xl rounded-br-[80px] shadow-2xl overflow-hidden">
             <svg width="0" height="0" className="absolute">
              <defs>
                <clipPath id="heroClip" clipPathUnits="objectBoundingBox">
                  <path d="M0.04,0 H0.96 Q1,0,1,0.06 V0.53 L0.78,0.78 Q0.74,0.82,0.68,0.82 H0.17 Q0,0.82,0,0.71 V0.13 Q0,0,0.04,0 Z" />
                </clipPath>
              </defs>
            </svg>
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 400 350"
              preserveAspectRatio="none"
              fill="none"
            >
              <rect width="400" height="350" fill="#0a2463" />
              <path
                d="M400 0 L400 200 Q350 250 280 230 Q200 200 120 270 L0 320 L0 350 L400 350 Z"
                fill="#1e3a8a"
                opacity="0.6"
              />
              <path
                d="M400 120 Q300 170 220 150 Q140 130 80 220 L0 280 L0 350 L400 350 Z"
                fill="#2563eb"
                opacity="0.3"
              />
            </svg>

            <div className="relative z-10 p-8 pt-10">
              <h1
                className="text-[#f5a623] leading-tight mb-4"
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif',
                  fontSize: "36px",
                  fontWeight: 400,
                  fontStyle: "italic",
                }}
              >
                Empowering
                <br />
                Justice, Starting
                <br />
                Now
              </h1>

              <p className="text-[#b8c5d6] text-sm mt-4 mb-6 leading-relaxed">
                Free, confidential case reviews.
                <br />
                Serving all 50 states. No fees unless you win.
              </p>

              <button className="inline-flex items-center gap-2 bg-[#f5a623] text-[#0a2463] font-semibold text-sm px-6 py-3 rounded-full hover:bg-[#e09610] transition-all duration-300 shadow-lg">
                Check if you Qualify
                <div className="bg-[#0a2463] rounded-full p-1.5 flex items-center justify-center">
                  <ArrowUpRight className="text-[#f5a623] w-3 h-3" />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Cards Container with Navigation */}
          <div className="relative">
            {/* Card Slider */}
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{
                  transform: `translateX(-${mobileCardIndex * 100}%)`,
                }}
              >
                {/* Card 1: Asbestos Exposure Claims */}
                <div className="w-full flex-shrink-0 px-1">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
                    {/* Header */}
                    <div className="px-4 py-3 flex items-center justify-between border-b border-gray-100">
                      <h3 className="text-[#0a2463] text-base font-bold">
                        Asbestos Exposure Claims
                      </h3>
                      <div className="bg-[#f5a623] w-8 h-8 rounded-lg flex items-center justify-center">
                        <ChevronDown className="text-[#0a2463] w-4 h-4" />
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="mb-4">
                        <div className="text-xs text-gray-500 font-medium mb-1">
                          Settlement Success:
                        </div>
                        <div className="text-3xl font-black text-[#0a2463] tracking-tight">
                          2,45,200
                        </div>
                        <div className="w-12 h-1 bg-[#f5a623] mt-2 rounded-full"></div>
                      </div>

                      {/* Chart */}
                      <div className="relative bg-white p-3">
                        <div className="relative h-[120px]">
                          {/* Grid lines */}
                          <div className="absolute left-0 right-0 top-0 flex items-center">
                            <span className="text-[10px] text-gray-400 w-8">
                              90K
                            </span>
                            <div className="flex-1 border-t border-dashed border-gray-300"></div>
                          </div>
                          <div className="absolute left-0 right-0 top-[33%] flex items-center">
                            <span className="text-[10px] text-gray-400 w-8">
                              60K
                            </span>
                            <div className="flex-1 border-t border-dashed border-gray-300"></div>
                          </div>
                          <div className="absolute left-0 right-0 top-[66%] flex items-center">
                            <span className="text-[10px] text-gray-400 w-8">
                              30K
                            </span>
                            <div className="flex-1 border-t border-dashed border-gray-300"></div>
                          </div>
                          <div className="absolute left-0 right-0 bottom-0 flex items-center">
                            <span className="text-[10px] text-gray-400 w-8">
                              10K
                            </span>
                            <div className="flex-1 border-t border-dashed border-gray-300"></div>
                          </div>

                          {/* Bars */}
                          <div className="ml-10 flex items-end justify-around h-full gap-4 pb-1">
                            <div className="flex flex-col items-center">
                              <div
                                className="w-8 bg-[#d1d5db] rounded-t-md"
                                style={{ height: "42px" }}
                              ></div>
                            </div>
                            <div className="flex flex-col items-center">
                              <div
                                className="w-8 bg-[#9ca3af] rounded-t-md"
                                style={{ height: "70px" }}
                              ></div>
                            </div>
                            <div className="flex flex-col items-center">
                              <div
                                className="w-8 bg-[#0a2463] rounded-t-md"
                                style={{ height: "95px" }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        {/* X-axis labels */}
                        <div className="ml-10 flex justify-around mt-2">
                          <span className="text-xs text-[#0a2463] font-semibold">
                            Apr
                          </span>
                          <span className="text-xs text-[#0a2463] font-semibold">
                            Jul
                          </span>
                          <span className="text-xs text-[#0a2463] font-semibold">
                            Sept
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2: Case Summary - SAME HEIGHT AS CARD 1 */}
                <div className="w-full flex-shrink-0 px-1">
                  <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 relative h-full">
                    {/* Same height container as first card */}
                    <div className="h-full flex flex-col">
                      {/* Header - matches first card header height */}
                      <div className="px-4 py-3 border-b border-gray-100">
                        <h3 className="text-[#0a2463] text-base font-bold">
                          Case Summary
                        </h3>
                      </div>

                      {/* Content area */}
                      <div className="flex-1 p-4 flex flex-col">
                        {/* Stats Grid - compact to fit */}
                        <div className="grid grid-cols-3 gap-2 mb-3">
                          <div className="bg-gray-50 p-2 rounded-lg border border-gray-200">
                            <div className="text-[9px] text-gray-500 mb-1 leading-tight">
                              Average
                              <br />
                              Settlement
                            </div>
                            <div className="text-xs font-bold text-[#0a2463]">
                              $100K–$1M
                            </div>
                          </div>
                          <div className="bg-gray-50 p-2 rounded-lg border border-gray-200">
                            <div className="text-[9px] text-gray-500 mb-1 leading-tight">
                              Time to
                              <br />
                              Settle
                            </div>
                            <div className="text-xs font-bold text-[#0a2463]">
                              18–30 Mo
                            </div>
                          </div>
                          <div className="bg-gray-50 p-2 rounded-lg border border-gray-200">
                            <div className="text-[9px] text-gray-500 mb-1 leading-tight">
                              Court
                              <br />
                              Time
                            </div>
                            <div className="text-xs font-bold text-[#0a2463]">
                              4–5 Wks
                            </div>
                          </div>
                        </div>

                        {/* Service Cards - compact to maintain height */}
                        <div className="grid grid-cols-3 gap-2 flex-1">
                          <div className="bg-gray-50 rounded-lg p-2 text-center border border-gray-200 flex flex-col items-center justify-center">
                            <div className="bg-white w-9 h-9 rounded-lg flex items-center justify-center mb-1 border border-gray-100">
                              <Scale className="w-4 h-4 text-[#0a2463]" />
                            </div>
                            <div className="text-[9px] font-semibold text-[#0a2463] leading-tight">
                              Free case
                              <br />
                              Review
                            </div>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-2 text-center border border-gray-200 flex flex-col items-center justify-center">
                            <div className="bg-white w-9 h-9 rounded-lg flex items-center justify-center mb-1 border border-gray-100">
                              <Landmark className="w-4 h-4 text-[#0a2463]" />
                            </div>
                            <div className="text-[9px] font-semibold text-[#0a2463] leading-tight">
                              Serving
                              <br />
                              Nationwide
                            </div>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-2 text-center border border-gray-200 flex flex-col items-center justify-center">
                            <div className="bg-white w-9 h-9 rounded-lg flex items-center justify-center mb-1 border border-gray-100">
                              <Handshake className="w-4 h-4 text-[#0a2463]" />
                            </div>
                            <div className="text-[9px] font-semibold text-[#0a2463] leading-tight">
                              No Win,
                              <br />
                              No Fee
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Arrows and Scroll Down Button */}
            <div className="flex items-center justify-between mt-4 px-2">
              {/* Left Arrow */}
              <button
                onClick={handlePrevCard}
                className="w-12 h-12 rounded-full bg-[#f5a623] flex items-center justify-center shadow-lg hover:bg-[#e09610] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={mobileCardIndex === 0}
              >
                <ChevronLeft className="w-5 h-5 text-[#0a2463]" />
              </button>

              {/* Page Indicator */}
              <div className="flex gap-2">
                <div
                  className={`h-1 rounded-full transition-all duration-300 ${
                    mobileCardIndex === 0
                      ? "w-8 bg-[#0a2463]"
                      : "w-4 bg-gray-300"
                  }`}
                ></div>
                <div
                  className={`h-1 rounded-full transition-all duration-300 ${
                    mobileCardIndex === 1
                      ? "w-8 bg-[#0a2463]"
                      : "w-4 bg-gray-300"
                  }`}
                ></div>
              </div>

              {/* Right Arrow */}
              <button
                onClick={handleNextCard}
                className="w-12 h-12 rounded-full bg-[#f5a623] flex items-center justify-center shadow-lg hover:bg-[#e09610] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={mobileCardIndex === 1}
              >
                <ChevronRight className="w-5 h-5 text-[#0a2463]" />
              </button>
            </div>

            {/* Scroll Down Button - Mobile */}
            <div className="flex justify-end mt-4">
              <button className="group flex items-center gap-2 bg-gradient-to-r from-[#0a2463] to-[#1e3a8a] px-4 py-2 rounded-full shadow-lg">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                  <ChevronDown className="w-3 h-3 text-white animate-bounce" />
                </div>
                <div className="text-white text-[10px] font-bold leading-tight">
                  Scroll
                  <br />
                  Down
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Tab - Fixed on right side */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <div
          className="bg-yellow-500 text-blue-900 font-bold py-2 px-3 flex rounded-bl-3xl shadow-lg cursor-pointer"
          style={{ writingMode: "vertical-rl" }}
        >
          <span className="rotate-180 block mb-2">Enquiry</span>
          <TbMessageChatbotFilled size={22} />
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-[#f5a623]"></div>
    </div>
  );
}