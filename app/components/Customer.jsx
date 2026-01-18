"use client"
import Image from "next/image"

const Customer = () => {
  return (
    <section className="py-12 md:py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
          {/* Left side - Image with badges */}
          <div className="relative w-full lg:w-1/2 hidden lg:block">
            {/* No Win, No Fees Badge */}
            <div className="absolute top-0 left-0 z-10 bg-[#F5A623] rounded-2xl px-4 py-3 shadow-lg">
              <p className="text-[#003366] font-bold text-lg leading-tight">
                No Win,
                <br />
                No Fees
              </p>
            </div>

            {/* Main Image Container with notch */}
            <div className="relative ml-8 mt-8">
              {/* White notch overlay at top-left */}
             
              {/* Customer service image */}
              <div className="relative rounded-tl-[60px] rounded-br-[60px] overflow-hidden">
                <Image
                  src="/assets/customer.jpeg"
                  alt="Customer service representative"
                  width={500}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>

              {/* Headphone Icon Badge */}
              <div className="absolute -bottom-6 right-8 z-10">
                <div className="relative">
                  {/* Yellow speech bubble background */}
                  <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M50 5C25.147 5 5 25.147 5 50C5 74.853 25.147 95 50 95C56.5 95 62.7 93.7 68.3 91.3L85 95L81.5 78C88.5 70.5 95 61 95 50C95 25.147 74.853 5 50 5Z"
                      fill="#F5A623"
                    />
                  </svg>
                  {/* Headphone icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      {/* Headband */}
                      <path
                        d="M10 28C10 18.059 18.059 10 28 10H22C12.059 10 6 18.059 6 28"
                        stroke="#003366"
                        strokeWidth="4"
                        strokeLinecap="round"
                        fill="none"
                      />
                      <path
                        d="M8 25C8 16.716 14.716 10 23 10H27C35.284 10 42 16.716 42 25"
                        stroke="#5B8DBF"
                        strokeWidth="3"
                        strokeLinecap="round"
                        fill="none"
                      />
                      {/* Left ear cup */}
                      <rect x="5" y="24" width="10" height="16" rx="4" fill="#003366" />
                      {/* Right ear cup */}
                      <rect x="35" y="24" width="10" height="16" rx="4" fill="#003366" />
                      {/* Left ear cushion */}
                      <rect x="7" y="26" width="6" height="12" rx="3" fill="#5B8DBF" />
                      {/* Right ear cushion */}
                      <rect x="37" y="26" width="6" height="12" rx="3" fill="#5B8DBF" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-[#003366] text-3xl md:text-4xl lg:text-5xl font-serif italic mb-8 text-center">
              Begin Your Journey
            </h2>

            <form className="space-y-4">
              {/* First Name - full width on mobile */}
              <input
              required
                type="text"
                placeholder="First Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent lg:hidden text-[#003366]"
              />
              {/* Last Name - full width on mobile */}
              <input
              required
                type="text"
                placeholder="Last Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent lg:hidden text-[#003366]"
              />
              {/* Email - full width on mobile */}
              <input
              required
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent lg:hidden text-[#003366]"
              />
              {/* Phone - full width on mobile */}
              <input
              required
                type="tel"
                placeholder="Phone number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent lg:hidden text-[#003366]"
              />

              {/* Desktop: Name row - 2 columns */}
              <div className="hidden lg:grid grid-cols-2 gap-4">
                <input
                  required
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent text-[#003366]"
                />
                <input
                  required
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent text-[#003366]"
                />
              </div>

              {/* Desktop: Email and Phone row - 2 columns */}
              <div className="hidden lg:grid grid-cols-2 gap-4">
                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent text-[#003366]"
                />
                <input
                  
                  type="tel"
                  placeholder="Phone number ex-12539752"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent text-[#003366]"
                />
              </div>

              {/* Message textarea */}
              <textarea
                placeholder="How can we help?"
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366] text-[#003366] focus:border-transparent resize-none"
              />

              {/* Submit button */}
              <button
                type="submit"
                className="w-full bg-[#003366] text-white py-4 rounded-full text-lg font-medium hover:bg-[#002244] transition-colors "
              >
                Get started
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Customer
