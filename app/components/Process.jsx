import React from 'react'
import Image from 'next/image'
import Processcourt from '../../public/assets/processcourt.jpeg'
import Processdoctor from '../../public/assets/processdoctor.jpeg'
import Processjudge from '../../public/assets/processjudge.jpeg'
import Processpaper from '../../public/assets/processpaper.jpeg'
import Processscales from '../../public/assets/processscales.jpeg'
import Processhandshake from '../../public/assets/processhandshake.jpeg'

const Process = () => {
  return (
    <div className="py-12 px-4 md:px-8 lg:px-16 bg-white">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12">
        <div className="mb-6 md:mb-0 w-full md:w-1/2">
          <h2 className="text-[#004a99] text-3xl md:text-5xl font-bold mb-3">
            Our Process
          </h2>
          <p className="text-[#004a99] text-sm md:text-lg leading-relaxed">
            Get your free, no-obligation case review today. We serve all states, and you pay only if you win.
          </p>
        </div>
        
        {/* CTA Button - Desktop Only */}
        <button className="hidden md:flex bg-[#f5a623] hover:bg-[#e09615] text-[#004a99] px-8 py-4 rounded-full font-semibold text-lg items-center gap-3 shadow-lg transition-all">
          Start My Free Case Review
          <div className="w-10 h-10 bg-[#004a99] rounded-lg flex items-center justify-center">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#f5a623"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
        </button>
      </div>

      {/* CTA Button - Mobile Only */}
      <button className="md:hidden w-full bg-[#f5a623] text-[#004a99] px-6 py-3.5 rounded-full font-semibold text-base flex items-center justify-between shadow-lg mb-8">
        <span>Start My Free Case Review</span>
        <div className="w-8 h-8 bg-[#004a99] rounded-lg flex items-center justify-center flex-shrink-0">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#f5a623"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </div>
      </button>

      {/* Mobile Layout */}
      <div className="md:hidden space-y-4">
        {/* Row 1: Start Here + Judge Image (side by side) */}
        <div className="grid grid-cols-2 gap-4">
          {/* Start Here */}
          <div className="bg-[#004a99] rounded-2xl p-4 flex items-center justify-center">
            <div className="border-2 border-white/30 rounded-xl p-3 w-full">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 bg-[#f5a623] rounded-full flex items-center justify-center mb-2">
                  <span className="text-[#004a99] text-lg font-bold">01</span>
                </div>
                <div>
                  <h3 className="text-white text-base font-bold leading-tight">Start Here</h3>
                  <p className="text-white text-xs mt-0.5">Quick and easy.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Judge Image */}
          <div className="relative rounded-2xl overflow-hidden h-[140px]">
            <Image 
              src={Processjudge}
              alt="Legal consultation"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Row 2: Doctor Image + Expert Attorney (side by side) */}
        <div className="grid grid-cols-2 gap-4">
          {/* Doctor Image */}
          <div className="relative rounded-2xl overflow-hidden h-[140px]">
            <Image 
              src={Processdoctor}
              alt="Medical professionals"
              fill
              className="object-cover"
            />
          </div>

          {/* Expert Attorney */}
          <div className="bg-[#004a99] rounded-2xl p-4 flex items-center justify-center">
            <div className="border-2 border-white/30 rounded-xl p-3 w-full">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 bg-[#f5a623] rounded-full flex items-center justify-center mb-2">
                  <span className="text-[#004a99] text-lg font-bold">02</span>
                </div>
                <div>
                  <h3 className="text-white text-base font-bold leading-tight">Expert Attorney</h3>
                  <p className="text-white text-xs mt-0.5">A specialist in your type of claim.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3: File Your Claim + Scales Image (side by side) */}
        <div className="grid grid-cols-2 gap-4">
          {/* File Your Claim */}
          <div className="bg-[#004a99] rounded-2xl p-4 flex items-center justify-center">
            <div className="border-2 border-white/30 rounded-xl p-3 w-full">
              <div className="flex flex-col items-start">
                <div className="w-12 h-12 bg-[#f5a623] rounded-full flex items-center justify-center mb-2">
                  <span className="text-[#004a99] text-lg font-bold">03</span>
                </div>
                <div>
                  <h3 className="text-white text-base font-bold leading-tight">File Your Claim</h3>
                  <p className="text-white text-xs mt-0.5">You only pay if you win.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Scales Image */}
          <div className="relative rounded-2xl overflow-hidden h-[140px]">
            <Image 
              src={Processscales}
              alt="Justice scales"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Desktop Grid - Hidden on Mobile */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Row 1 - Card 1: Start Here */}
        <div className="bg-[#004a99] rounded-3xl p-8 flex items-center justify-center min-h-[200px]">
          <div className="border-2 border-white/30 rounded-2xl p-6 w-full">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-[#f5a623] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#004a99] text-3xl font-bold">01</span>
              </div>
              <div>
                <h3 className="text-white text-2xl font-bold mb-1">Start Here</h3>
                <p className="text-white text-base">Quick and easy.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Row 1 - Card 2: Judge Image */}
        <div className="relative rounded-3xl overflow-hidden min-h-[200px]">
          <Image 
            src={Processjudge}
            alt="Courtroom"
            fill
            className="object-cover"
          />
        </div>

        {/* Row 1 - Card 3: Handshake Image */}
        <div className="relative rounded-3xl overflow-hidden min-h-[200px]">
          <Image 
            src={Processhandshake}
            alt="Handshake"
            fill
            className="object-cover"
          />
        </div>

        {/* Row 2 - Card 1: Doctor Image */}
        <div className="relative rounded-3xl overflow-hidden min-h-[200px]">
          <Image 
            src={Processdoctor}
            alt="Medical professionals"
            fill
            className="object-cover"
          />
        </div>

        {/* Row 2 - Card 2: Expert Attorney */}
        <div className="bg-[#004a99] rounded-3xl p-8 flex items-center justify-center min-h-[200px]">
          <div className="border-2 border-white/30 rounded-2xl p-6 w-full">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-[#f5a623] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#004a99] text-3xl font-bold">02</span>
              </div>
              <div>
                <h3 className="text-white text-2xl font-bold mb-1">Expert Attorney</h3>
                <p className="text-white text-base">A specialist in your type of clai</p>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 - Card 3: Court Image */}
        <div className="relative rounded-3xl overflow-hidden min-h-[200px]">
          <Image 
            src={Processcourt}
            alt="Legal books and gavel"
            fill
            className="object-cover"
          />
        </div>

        {/* Row 3 - Card 1: Scales Image */}
        <div className="relative rounded-3xl overflow-hidden min-h-[200px]">
          <Image 
            src={Processscales}
            alt="Justice scales"
            fill
            className="object-cover"
          />
        </div>

        {/* Row 3 - Card 2: Paper Image */}
        <div className="relative rounded-3xl overflow-hidden min-h-[200px]">
          <Image 
            src={Processpaper}
            alt="Legal documents"
            fill
            className="object-cover"
          />
        </div>

        {/* Row 3 - Card 3: File Your Claim */}
        <div className="bg-[#004a99] rounded-3xl p-8 flex items-center justify-center min-h-[200px]">
          <div className="border-2 border-white/30 rounded-2xl p-6 w-full">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-[#f5a623] rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[#004a99] text-3xl font-bold">03</span>
              </div>
              <div>
                <h3 className="text-white text-2xl font-bold mb-1">File Your Claim</h3>
                <p className="text-white text-base">You only pay if you win.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Process