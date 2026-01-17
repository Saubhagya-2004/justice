"use client";

import { FaChevronDown, FaArrowRight } from "react-icons/fa";
import { MdGavel, MdBalance, MdHandshake } from "react-icons/md";
import Image from "next/image";
import Wasingtonimage from "../../public/assets/images-washington.jpeg"
import { TbMessageChatbotFilled } from "react-icons/tb";
const HeroSectionAccurate = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 relative overflow-hidden">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column - Main Hero Section */}
          <div className="lg:col-span-7 relative">
            <div className="relative bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 rounded-3xl overflow-hidden shadow-2xl"
                 style={{ minHeight: '600px' }}>
              
              {/* Diagonal geometric overlay */}
              <div className="absolute inset-0">
                <svg viewBox="0 0 800 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <linearGradient id="diag1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: 'rgba(29, 78, 216, 0.7)', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: 'rgba(30, 58, 138, 0.9)', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <polygon points="500,0 800,0 800,600 300,600" fill="url(#diag1)" />
                  <polygon points="600,0 800,200 800,600 400,600" fill="rgba(37, 99, 235, 0.4)" />
                </svg>
              </div>

              {/* Content */}
              <div className="relative z-10 p-12">
                <h1 className="text-6xl md:text-7xl font-bold text-yellow-400 leading-tight mb-6" 
                    style={{ fontFamily: 'Georgia, "Times New Roman", serif' }}>
                  Empowering<br />
                  Justice,<br />
                  Starting Now
                </h1>
                
                <p className="text-lg text-blue-100 mt-6 mb-10 max-w-lg leading-relaxed">
                  Talk to an experienced attorney. Available in all states. We only get paid if you win.
                </p>
                
                <button className="inline-flex items-center gap-3 bg-yellow-500 text-blue-900 font-bold text-lg px-8 py-4 rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Check if you Qualify
                  <div className="bg-blue-900 rounded-full p-1.5">
                    <FaArrowRight className="text-yellow-400 text-sm" />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - With Washington Image Background and Graph */}
          <div className="lg:col-span-5 space-y-6 relative">
            {/* Washington Image Background for the entire right column */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden -z-10">
              <Image
                src={Wasingtonimage}
                alt="Washington DC Background"
                fill
                className="object-cover object-center opacity-10"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {/* Dark overlay for better contrast */}
              <div className="absolute inset-0 bg-blue-50/70"></div>
            </div>

            {/* Asbestos Exposure Claims Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-blue-100/50">
              <div className="px-6 py-4 flex items-center justify-between border-b border-blue-100">
                <h3 className="text-blue-900 text-xl font-bold">
                  Asbestos Exposure Claims
                </h3>
                <div className="bg-yellow-500 w-10 h-10 rounded-lg flex items-center justify-center cursor-pointer hover:bg-yellow-400 transition transform hover:scale-105">
                  <FaChevronDown className="text-blue-900 text-sm" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-8">
                  <div className="text-sm text-gray-600 mb-2 font-medium">Settlement Success:</div>
                  <div className="text-5xl font-black text-blue-800 tracking-tight">2,45,200</div>
                  <div className="w-16 h-1.5 bg-yellow-500 mt-3 rounded-full"></div>
                </div>
                
                {/* Bar Chart Graph */}
                <div className="relative bg-gradient-to-b from-white to-blue-50/50 p-3 rounded-xl border border-blue-100">
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-4 bottom-18 flex flex-col justify-between text-xs text-gray-600 font-medium pr-2">
                    <span>90K <span className="text-gray-400">-------------------------------------------------------------------------------------------------</span></span>
                    <span>60K -------------------------------------------------------------------------------------------------</span>
                    <span>30K -------------------------------------------------------------------------------------------------</span>
                    <span>10K -------------------------------------------------------------------------------------------------</span>
                  </div>
                  
                  {/* Chart area */}
                  <div className="ml-10">
                    <div className="flex items-end justify-around gap-4 h-40 border-b border-green-200 pb-">
                      {/* April Bar */}
                      <div className="flex-1 flex flex-col items-center justify-end group">
                        <div 
                          className="w-4 h-18 bg-gradient-to-t from-gray-400 to-gray-300 rounded-t-lg shadow-md transition-all duration-300 hover:opacity-90 cursor-pointer relative"
                        //   style={{ height: '55%' }}
                          title="April: ~50K"
                        >
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            ~50K
                          </div>
                        </div>
                      </div>
                      
                      {/* July Bar */}
                      <div className="flex-1 flex flex-col items-center justify-end group">
                        <div 
                          className="w-4 bg-gradient-to-t h-31 from-gray-500 to-gray-400 rounded-t-lg shadow-md transition-all duration-300 hover:opacity-90 cursor-pointer relative"
                        //   style={{ height: '75%' }}
                          title="July: ~68K"
                        >
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            ~68K
                          </div>
                        </div>
                      </div>
                      
                      {/* September Bar */}
                      <div className="flex-1 flex flex-col items-center justify-end group">
                        <div 
                          className="w-4 h-37 bg-gradient-to-t from-blue-700 to-blue-600 rounded-t-lg shadow-lg transition-all duration-300 hover:opacity-90 cursor-pointer relative"
                        //   style={{ height: '100%' }}
                          title="September: 90K"
                        >
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-blue-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            90K
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* X-axis labels */}
                    <div className="flex justify-around mt-4">
                      <span className="text-sm text-blue-800 font-semibold">Apr</span>
                      <span className="text-sm text-blue-800 font-semibold">Jul</span>
                      <span className="text-sm text-blue-800 font-semibold">Sept</span>
                    </div>
                    
                    {/* Chart title */}
                    <div className="text-center mt-4">
                      <div className="text-xs text-gray-600 font-medium">Monthly Settlement Distribution</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Case Summary Card */}
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-blue-100/50">
              <h3 className="text-blue-900 text-xl font-bold mb-8 pb-3 border-b border-blue-100">
                Case Summary
              </h3>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                  <div className="text-xs text-gray-600 mb-2 leading-tight font-medium">Average<br />Settlement</div>
                  <div className="text-lg font-black text-blue-700">$100K – $1M</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                  <div className="text-xs text-gray-600 mb-2 leading-tight font-medium">Time to Receive<br />Settlement</div>
                  <div className="text-lg font-black text-blue-700">18–30 Months</div>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                  <div className="text-xs text-gray-600 mb-2 leading-tight font-medium">Time in Court<br />(if not settled)</div>
                  <div className="text-lg font-black text-blue-700">4–5 Weeks</div>
                </div>
              </div>

              {/* Service Cards */}
              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-blue-100">
                <div className="bg-gradient-to-b from-yellow-50 to-white rounded-xl p-4 text-center hover:shadow-md transition-all duration-300 border border-yellow-100 hover:border-yellow-200 group cursor-pointer">
                  <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-200 transition-colors">
                    <MdGavel className="text-2xl text-yellow-600" />
                  </div>
                  <div className="text-xs font-bold text-blue-900 leading-tight">Free case<br />review</div>
                </div>
                <div className="bg-gradient-to-b from-yellow-50 to-white rounded-xl p-4 text-center hover:shadow-md transition-all duration-300 border border-yellow-100 hover:border-yellow-200 group cursor-pointer">
                  <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-200 transition-colors">
                    <MdBalance className="text-2xl text-yellow-600" />
                  </div>
                  <div className="text-xs font-bold text-blue-900 leading-tight">Serving<br />Nationwide</div>
                </div>
                <div className="bg-gradient-to-b from-yellow-50 to-white rounded-xl p-4 text-center hover:shadow-md transition-all duration-300 border border-yellow-100 hover:border-yellow-200 group cursor-pointer">
                  <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-yellow-200 transition-colors">
                    <MdHandshake className="text-2xl text-yellow-600" />
                  </div>
                  <div className="text-xs font-bold text-blue-900 leading-tight">No Win,<br />No Fee</div>
                </div>
              </div>
            </div>

            {/* Scroll Down Button */}
            <div className="flex justify-end pt-4">
              <button className="bg-gradient-to-r from-blue-700 to-blue-800 text-white rounded-full px-6 py-3 flex items-center gap-3 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 group">
                <div className="bg-white/20 rounded-full p-2 group-hover:bg-white/30 transition-colors">
                  <FaChevronDown className="text-sm animate-bounce" />
                </div>
                <span className="font-bold text-sm">Scroll<br />Down</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Enquiry Tab */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
  <div className="bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 text-blue-900 font-bold py-1 px-3 rounded-bl-3xl shadow-lg cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 group"
       style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
    <div className="flex flex-row items-center justify-center h-full space-y-3 text-center">
      <span className="transform -rotate-180 tracking-wider text-blue-700 pt-1 pb-2">Enquiry   </span>
     <div><span><TbMessageChatbotFilled size={24} className="text-blue-800"/></span></div>
    </div>
  </div>
</div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200/20 rounded-full -translate-x-32 -translate-y-32 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200/10 rounded-full translate-x-32 translate-y-32 blur-3xl"></div>
    </div>
  );
};

export default HeroSectionAccurate;