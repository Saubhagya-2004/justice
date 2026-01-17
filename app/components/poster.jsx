// app/components/MovingBar.jsx
'use client'

import React from 'react'

const MovingBar = () => {
  return (
    <div className="relative w-full overflow-hidden bg-blue-800 py-3">
      <div className="flex">
        {/* First set */}
        <div className="flex flex-shrink-0 min-w-full animate-scroll">
          <div className="flex items-center justify-around w-full">
            {[...Array(3)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="mx-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-amber-300 rounded-full " />
                  <span className="text-lg font-bold text-amber-300 whitespace-nowrap">
                    Fast, Private Claim Assessments
                  </span>
                </div>
                <div className="mx-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-amber-300 rounded-full " />
                  <span className="text-lg font-bold text-amber-300 whitespace-nowrap">
                    Fast, Private Claim Assessments
                  </span>
                </div>
                <div className="mx-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-amber-300 rounded-full " />
                  <span className="text-lg font-bold text-white whitespace-nowrap">
                    Connect2Attorney Links People With Premier Lawyers, Offering commited Advocacy And Tailored legacy
                  </span>
                </div>
                
              </React.Fragment>
            ))}
          </div>
        </div>
        
        {/* Second identical set */}
        <div className="flex flex-shrink-0 min-w-full animate-scroll">
          <div className="flex items-center justify-around w-full">
            {[...Array(3)].map((_, i) => (
              <React.Fragment key={i}>
                <div className="mx-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-amber-300 rounded-full" />
                  <span className="text-lg font-bold text-amber-300 whitespace-nowrap">
                    Fast, Private Claim Assessments
                  </span>
                </div>
                <div className="mx-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-amber-300 rounded-full " />
                  <span className="text-lg font-bold text-white whitespace-nowrap">
                    Connect2Attorney Links People With Premier Lawyers
                  </span>
                </div>
                <div className="mx-4 flex items-center gap-2">
                   <div className="w-3 h-3 bg-amber-300 rounded-full " />
                  <span className="text-lg font-bold  whitespace-nowrap">
                    Offering Committed Advocacy And Tailored Legal
                  </span>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        /* Fix for smooth animation */
        * {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
      `}</style>
    </div>
  )
}

export default MovingBar