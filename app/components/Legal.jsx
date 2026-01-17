"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Cancer from "../../public/assets/cancer.jpeg";
import Farming from "../../public/assets/farming.jpeg";
import Heart from "../../public/assets/heart.jpeg";
import Lawsuit from "../../public/assets/lawsuit.jpeg";

const Legal = () => {
  const [activeTab, setActiveTab] = useState("Toxic Exposure");
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const isMounted = useRef(true);

  const tabs = ["Toxic Exposure", "Group Litigation", "Wound"];

  const cards = [
    { image: Cancer, title: "Pantac Cancer", subtitle: "Lawsuit" },
    { image: Lawsuit, title: "Faraquat", subtitle: "Lawsuit" },
    { image: Farming, title: "Bernia", subtitle: "Mesh Lawsuit" },
    { image: Heart, title: "IVC Filter", subtitle: "Lawsuit" },
  ];

  useEffect(() => {
    isMounted.current = true;
    let intervalId = null;

    const autoScroll = () => {
      if (!sliderRef.current || typeof window === "undefined") return;
      if (window.innerWidth >= 768) return;

      const slider = sliderRef.current;
      const cardWidth = slider.offsetWidth * 0.8 + 16; // 80% width + gap
      const maxScroll = slider.scrollWidth - slider.offsetWidth;

      let newScrollLeft = slider.scrollLeft + cardWidth;

      // Loop back to start
      if (newScrollLeft >= maxScroll) {
        newScrollLeft = 0;
      }

      slider.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      // Update current slide indicator
      const newSlide = Math.round(newScrollLeft / cardWidth);
      setCurrentSlide(newSlide >= cards.length ? 0 : newSlide);
    };

    const startInterval = () => {
      if (intervalId) clearInterval(intervalId);
      if (typeof window !== "undefined" && window.innerWidth < 768) {
        intervalId = setInterval(autoScroll, 3000);
      }
    };

    // Start after a short delay to ensure DOM is ready
    const timeoutId = setTimeout(startInterval, 500);

    const handleResize = () => {
      if (intervalId) clearInterval(intervalId);
      if (typeof window !== "undefined" && window.innerWidth < 768) {
        startInterval();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      isMounted.current = false;
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
    };
  }, [cards.length]);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;
    const cardWidth = slider.offsetWidth * 0.8 + 16;
    const newSlide = Math.round(slider.scrollLeft / cardWidth);
    if (newSlide !== currentSlide && newSlide >= 0 && newSlide < cards.length) {
      setCurrentSlide(newSlide);
    }
  };

  const handleDotClick = (index) => {
    if (!sliderRef.current) return;
    const slider = sliderRef.current;
    const cardWidth = slider.offsetWidth * 0.8 + 16;
    slider.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });
    setCurrentSlide(index);
  };

  return (
    <div className="bg-[#1a4b7c] py-12 px-4 md:px-16 rounded-3xl">
      {/* Header */}
      <h2 className="text-white text-4xl md:text-5xl font-serif italic mb-6 ">
        <span>Legal Solutions</span>
      </h2>

      {/* Tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto
    border border-white/40
    p-1 sm:p-2
    rounded-xl sm:rounded-2xl
    w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
        {tabs.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
              activeTab === tab
                ? "bg-amber-400 text-[#1a4b7c]"
                : "bg-transparent text-white border border-white/30 hover:bg-white/10"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Mobile Slider */}
      <div className="md:hidden overflow-visible">
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 pt-6 px-1"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {cards.map((card, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[80%] snap-start"
            >
              {/* Arrow Icon - positioned outside */}
              <div className="absolute border border-white -top-4 -right-3 z-20 w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg">
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

              {/* Card */}
              <div className="relative rounded-2xl rounded-tr-[60px] overflow-hidden cursor-pointer h-[280px]">
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-[#d4a853] font-semibold text-lg leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-white font-semibold text-lg">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {cards.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleDotClick(index)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                currentSlide === index ? "w-6 bg-[#d4a853]" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Grid - side by side */}
      <div className="hidden md:grid grid-cols-4 gap-6 pt-6">
        {cards.map((card, index) => (
          <div key={index} className="relative">
            {/* Arrow Icon */}
            <div className="absolute border border-white -top-4 -right-1 z-10 w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center shadow-lg">
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

            {/* Card */}
            <div className="relative rounded-2xl rounded-tr-[50px] overflow-hidden group cursor-pointer h-[280px]">
              <Image
                src={card.image || "/placeholder.svg"}
                alt={card.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <h3 className="text-white font-semibold text-lg leading-tight">
                  {card.title}
                </h3>
                <p className="text-white font-semibold text-lg">
                  {card.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Legal;
