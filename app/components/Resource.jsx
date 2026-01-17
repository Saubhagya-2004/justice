"use client"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import processjudge from "../../public/assets/processjudge.jpeg"
const Resource = () => {
  return (
    <>
      <section className="relative w-full py-6 px-4 bg-[#f5f6f8] md:hidden">
        {/* See All Blogs Button - positioned at top right */}
        <div className="absolute top-4 right-4 z-20">
          <button className="flex items-center overflow-hidden shadow-sm">
            <span
              className="px-4 py-2 text-sm font-semibold text-[#00529B]"
              style={{
                backgroundColor: "#FFBB00",
                borderTopLeftRadius: "9999px",
                borderBottomLeftRadius: "9999px",
              }}
            >
              See All Blogs
            </span>
            <span
              className="px-1 py-2.5 flex items-center justify-center bg-blue-900 text-amber-400"
              style={{
                
                borderTopRightRadius: "12px",
                borderBottomRightRadius: "12px",
              }}
            >
              <ArrowUpRight className="w-4 h-4 text-amber-400" />
            </span>
          </button>
        </div>

        {/* Main Frame Container */}
        <div className="relative w-full mt-10">
          {/* Blue Border Frame with notch cutout at top right */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 320 180"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 20 3
                 L 200 3
                 L 200 3
                 Q 200 30 220 30
                 L 317 30
                 L 317 160
                 Q 317 177 300 177
                 L 20 177
                 Q 3 177 3 160
                 L 3 20
                 Q 3 3 20 3 Z"
              fill="white"
              stroke="#00529B"
              strokeWidth="4"
            />
          </svg>

          {/* Content Container */}
          <div className="relative z-10 min-h-[160px] flex">
            <div className="w-1/2 p-6 flex items-center">
              <h2
                className="text-2xl font-bold italic"
                style={{
                  color: "#FFBB00",
                  fontFamily: "Georgia, serif",
                }}
              >
                Resources
              </h2>
            </div>

            <div className="w-1/2 relative">
              <div className="absolute bottom-0 right-0 w-full h-full">
                <Image
                  src={processjudge}
                  alt="Gavel on law book"
                  fill
                  className="object-contain object-right-bottom"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative w-full py-12 px-4 md:px-8 lg:px-16 bg-[#f5f6f8] hidden md:block">
        {/* See All Blogs Button - positioned at top right */}
        <div className="absolute top-8 right-4 md:right-8 lg:right-16 z-20">
          <button className="flex items-center overflow-hidden shadow-sm">
            <span
              className="px-5 py-3 text-sm md:text-base font-semibold text-[#00529B]"
              style={{
                backgroundColor: "#FFBB00",
                borderTopLeftRadius: "9999px",
                borderBottomLeftRadius: "9999px",
              }}
            >
              See All Blogs
            </span>
            <span
              className="p-3 flex items-center justify-center"
              style={{
                backgroundColor: "#00529B",
                borderTopRightRadius: "15px",
                borderBottomRightRadius: "15px",
              }}
            >
              <ArrowUpRight className="w-5 h-5 text-amber-400" />
            </span>
          </button>
        </div>

        {/* Main Frame Container */}
        <div className="relative w-full max-w-5xl mx-auto mt-8">
          {/* Blue Border Frame with two notches at top */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 900 300"
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M 25 4
                 L 380 4
                 L 380 35
                 Q 380 55 400 55
                 L 500 55
                 Q 520 55 520 35
                 L 520 4
                 L 875 4
                 Q 896 4 896 25
                 L 896 275
                 Q 896 296 875 296
                 L 25 296
                 Q 4 296 4 275
                 L 4 25
                 Q 4 4 25 4 Z"
              fill="white"
              stroke="#00529B"
              strokeWidth="5"
            />
            {/* Dashed vertical center line */}
            <line x1="450" y1="60" x2="450" y2="290" stroke="#00529B" strokeWidth="1.5" strokeDasharray="6 5" />
          </svg>

          {/* Content Container */}
          <div className="relative z-10 min-h-[250px] md:min-h-[280px] flex overflow-hidden rounded-3xl m-[3px]">
            {/* Left side - Resources Heading */}
            <div className="w-1/2 p-8 md:p-12 flex items-center">
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold italic"
                style={{
                  color: "#FFBB00",
                  fontFamily: "Georgia, serif",
                }}
              >
                Resources
              </h2>
            </div>

            {/* Right side - Image Container */}
            <div className="w-1/2 -right-20 relative overflow-hidden rounded-tl-[55px]">
              <Image
                src={processjudge}
                alt="Gavel on law book"
                fill
                className="object-cover object-right-bottom"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resource
