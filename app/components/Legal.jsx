"use client"
import { useState } from "react"
import Image from "next/image"
import Cancer from "../../public/assets/cancer.jpeg"
import Farming from "../../public/assets/farming.jpeg"
import Heart from "../../public/assets/heart.jpeg"
import Lawsuit from "../../public/assets/lawsuit.jpeg"

const Legal = () => {
  const [activeTab, setActiveTab] = useState("Toxic Exposure")

  const tabs = ["Toxic Exposure", "Group Litigation", "Wound"]

  const cards = [
    { image: Cancer, title: "Pantac Cancer", subtitle: "Lawsuit" },
    { image: Lawsuit, title: "Faraquat", subtitle: "Lawsuit" },
    { image: Farming, title: "Bernia", subtitle: "Mesh Lawsuit" },
    { image: Heart, title: "IVC Filter", subtitle: "Lawsuit" },
  ]

  return (
    <div className="bg-[#1a4b7c] py-12 px-8 md:px-16 rounded-3xl">
      {/* Header */}
      <h2 className="text-white text-4xl md:text-5xl font-serif italic mb-6">
        <span >Legal Solutions</span>
      </h2>

      {/* Tabs */}
      
      <div className="flex border border-white w-[50%] p-1 rounded-2xl gap-2 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
              activeTab === tab
                ? "bg-amber-400 text-[#1a4b7c]"
                : "bg-transparent text-white border border-white/30 hover:bg-white/10"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="relative">
            {/* Arrow Icon - positioned outside the curved corner */}
            <div className="absolute -top-2 -right-4 z-10 w-9 h-9 bg-blue-600  border border-white rounded-lg flex items-center justify-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-amber-400"
              >
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </div>

            {/* Card with curved top-right corner */}
            <div className="relative rounded-2xl rounded-tr-[60px] overflow-hidden group cursor-pointer h-[280px]">
              {/* Image */}
              <Image src={card.image || "/placeholder.svg"} alt={card.title} fill className="object-cover" />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Text */}
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white font-semibold text-lg leading-tight">{card.title}</h3>
                <p className="text-white font-semibold text-lg">{card.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Legal
