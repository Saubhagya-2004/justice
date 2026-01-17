This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.





















"use client";

import {
  ChevronDown,
  ArrowUpRight,
  Scale,
  Landmark,
  Handshake,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";
import Wasingtonimage from "../../public/assets/images-washington.jpeg";
import { TbMessageChatbotFilled } from "react-icons/tb";
export default function HeroSection() {
  return (
    <div className="min-h-screen bg-[#f5f7fa] relative overflow-hidden">
      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-6 py-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-5 items-start">
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

          {/* Right Column */}
          <div className="lg:col-span-5 space-y-4 relative">
            {/* Asbestos Exposure Claims Card with Chart */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 rounded-bl-[80px]">
              {/* Header */}
              <div className="px-5 py-4 flex items-center justify-between ">
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
                      {/* April Bar - ~35% height, gray */}
                      <div className="flex flex-col items-center">
                        <div
                          className="w-10 bg-[#9ca3af] rounded-t-md"
                          style={{ height: "50px" }}
                        ></div>
                      </div>

                      {/* July Bar - ~60% height, darker gray */}
                      <div className="flex flex-col items-center">
                        <div
                          className="w-10 bg-[#6b7280] rounded-t-md"
                          style={{ height: "82px" }}
                        ></div>
                      </div>

                      {/* September Bar - 100% height, dark blue */}
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

    {/* Service Cards - Added margin-bottom to prevent overlap */}
    <div className="grid grid-cols-3 gap-3 mb-16"> {/* Added mb-16 for spacing */}
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

    {/* Scroll Down Button - Moved outside of overlapping area */}
    <div className="absolute bottom-4 right-4 z-20"> {/* Changed to z-20 */}
      <button className="group flex items-center gap-3 bg-gradient-to-r from-[#0a2463] to-[#1e3a8a] hover:from-[#1e3a8a] hover:to-[#0a2463] transition-all duration-300 px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl">
        <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
          <ChevronDown className="w-3 h-3 text-white animate-bounce" />
        </div>
        <div className="text-left">
          <div className="text-white text-[10px] font-bold">Scroll</div>
          <div className="text-white text-[10px] font-bold">Down</div>
        </div>
      </button>
    </div>
  </div>
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
