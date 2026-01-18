'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Linkedin, Youtube, Facebook, Instagram } from 'lucide-react'
import washington from '../../public/assets/images-washington.jpeg'
import handshake from '../../public/assets/handshake.jpg'

const Footer = () => {
  return (
    <div className='w-full relative bg-white'>
      {/* Top Section - White background with Washington and overlapping cards */}
      <div className='relative w-full bg-white pb-8'>
        {/* Washington Monument Background Image - Full Width */}
        <div className='w-full h-[500px] lg:h-[500px] md:h-[400px] sm:h-[350px] relative'>
          <Image 
            src={washington} 
            alt="washington" 
            fill
            className='object-cover object-top'
            priority
          />
          
          {/* Overlapping Cards Container */}
          <div className='absolute bottom-0 left-0 right-0 translate-y-1/2 z-10'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col items-center justify-center gap-0'>
              {/* Mobile: Single Card with Background Image */}
              <div className='lg:hidden relative rounded-[25px] shadow-[0_15px_40px_rgba(0,0,0,0.25)] w-full max-w-[320px] h-[280px] overflow-hidden'>
                {/* Background Image */}
                <Image 
                  src={handshake} 
                  alt="handshake background" 
                  fill
                  className='object-cover'
                  priority
                />
                
                {/* Overlay gradient */}
                <div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50 z-10'></div>
                
                {/* Content */}
                <div className='relative z-20 flex flex-col items-center justify-center h-full p-8 text-center'>
                  <h2 className='text-white text-[24px] font-bold mb-6 leading-[1.3] drop-shadow-lg'>
                    Still Have More<br />Questions?
                  </h2>
                  <button className='bg-[#FDB714] hover:bg-[#e5a612] text-[#0052A3] font-bold px-10 py-3 rounded-full text-base transition-all shadow-lg w-full max-w-[200px]'>
                    Reach out to us
                  </button>
                </div>
              </div>

              {/* Desktop: Two Cards Side by Side */}
              <div className='hidden lg:flex flex-row items-end gap-0'>
                {/* White Card - Want To Know More */}
                <div className='bg-white rounded-l-[35px] rounded-tr-[50px] rounded-br-[50px] shadow-[0_20px_60px_rgba(0,0,0,0.3)] p-12 w-auto min-w-[400px] relative z-20'>
                  <h2 className='text-[#0052A3] text-[44px] font-bold mb-8 leading-[1.2]'>
                    Want To Know<br />More?
                  </h2>
                  <button className='bg-[#FDB714] hover:bg-[#e5a612] text-[#0052A3] font-bold px-12 py-2.5 rounded-full text-lg transition-all shadow-md'>
                    Reach out to us
                  </button>
                </div>

                {/* Handshake Image Card - with left blur overlay */}
                <div className='relative w-[650px] h-[280px] rounded-r-[35px] rounded-tl-[50px] rounded-bl-[50px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.3)] z-10'>
                  {/* Blur gradient overlay on left side */}
                  <div className='absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r  from-white via-white/50 to-transparent z-10'></div>
                  <Image 
                    src={handshake} 
                    alt="handshake" 
                    fill
                    className='object-cover'
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blue Footer Section */}
      <div className="bg-[#0052A3] text-white pt-32 sm:pt-40 lg:pt-48 pb-6 sm:pb-8 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
            
            {/* Left Section - Description & Social Icons */}
            <div className="w-full lg:w-[280px] flex-shrink-0">
              {/* Mobile: Center aligned text */}
              <p className="text-[11px] sm:text-[13px] text-white leading-[1.6] mb-6 sm:mb-8 text-center lg:text-left">
                We link those harmed with premier U.S. attorneys specializing in mass tort, class action, and injury claims for redress.
              </p>
            
              {/* Desktop Layout - 2 rows */}
              <div className="hidden lg:flex flex-col gap-3">
                {/* First row - 4 icons */}
                <div className="flex gap-3">
                  <Link href="#" className="w-12 h-12 rounded-lg border-2 text-amber-400 border-white bg-blue-600 flex items-center justify-center hover:bg-white hover:text-[#0052A3] transition-all">
                    <Linkedin className="w-5 h-5" strokeWidth={0} fill="currentColor" />
                  </Link>
                  <Link href="#" className="w-12 h-12 rounded-lg border-2 text-amber-400 border-white bg-blue-600 flex items-center justify-center hover:bg-white hover:text-[#0052A3] transition-all">
                    <TikTokIcon />
                  </Link>
                  <Link href="#" className="w-12 h-12 rounded-lg border-2 border-[#0052A3] text-amber-400 border-white bg-blue-600 flex items-center justify-center hover:bg-white hover:text-[#0052A3] transition-all">
                    <Youtube className="w-5 h-5" strokeWidth={0} fill="currentColor" />
                  </Link>
                  <Link href="#" className="w-12 h-12 rounded-lg border-2 text-amber-400 border-white bg-blue-600 flex items-center justify-center hover:bg-[#e5a612] transition-all text-[#0052A3]">
                    <ButterflyIcon />
                  </Link>
                </div>
                {/* Second row - 3 icons */}
                <div className="flex gap-3">
                  <Link href="#" className="w-12 h-12 rounded-lg border-2 text-amber-400 border-white bg-blue-600 flex items-center justify-center hover:bg-white hover:text-[#0052A3] transition-all">
                    <XIcon />
                  </Link>
                  <Link href="#" className="w-12 h-12 rounded-lg border-2 text-amber-400 border-white bg-blue-600 flex items-center justify-center hover:bg-white hover:text-[#0052A3] transition-all">
                    <Facebook className="w-5 h-5" strokeWidth={0} fill="currentColor" />
                  </Link>
                  <Link href="#" className="w-12 h-12 rounded-lg border-2 text-amber-400 border-white bg-blue-600 flex items-center justify-center hover:bg-white hover:text-[#0052A3] transition-all">
                    <Instagram className="w-5 h-5" strokeWidth={0} fill="currentColor" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Section - Navigation Links */}
            <div className="flex-1">
              {/* Mobile: 2 Column Grid Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-1 gap-5 sm:gap-6 mb-8 sm:mb-10 lg:mb-12">
                {/* Column 1 on Mobile */}
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-5 sm:gap-6">
                  {/* Explore More */}
                  <div className="lg:mb-0">
                    <h3 className="text-[#FDB714] font-bold tracking-[0.15em] text-[11px] sm:text-[12px] mb-2.5 sm:mb-3 uppercase">EXPLORE MORE</h3>
                    <div className="flex flex-col gap-y-2 lg:flex-row lg:flex-wrap lg:gap-x-12 lg:gap-y-1">
                      <Link href="#" className="text-[13px] sm:text-[14px] text-white hover:text-[#FDB714] transition-colors">Homepage</Link>
                      <Link href="#" className="text-[13px] sm:text-[14px] text-white hover:text-[#FDB714] transition-colors">Company Info</Link>
                      <Link href="#" className="text-[13px] sm:text-[14px] text-white hover:text-[#FDB714] transition-colors">Reach Out</Link>
                      <Link href="#" className="text-[13px] sm:text-[14px] text-white hover:text-[#FDB714] transition-colors">Toxic Exposure</Link>
                      <Link href="#" className="text-[13px] sm:text-[14px] text-white hover:text-[#FDB714] transition-colors">Group Litigation</Link>
                      <Link href="#" className="text-[13px] sm:text-[14px] text-white hover:text-[#FDB714] transition-colors">Wound and Accident</Link>
                    </div>
                  </div>

                  {/* Exposure */}
                  <div className="lg:mb-0">
                    <h3 className="text-[#FDB714] font-bold tracking-[0.15em] text-[11px] sm:text-[12px] mb-2.5 sm:mb-3 uppercase">EXPOSURE</h3>
                    <div className="flex flex-col gap-y-2 lg:flex-row lg:flex-wrap lg:gap-x-12 lg:gap-y-1">
                      <Link href="#" className="text-[13px] sm:text-[14px] text-white hover:text-[#FDB714] transition-colors">Semaglutide Info</Link>
                      <Link href="#" className="text-[13px] sm:text-[14px] text-white hover:text-[#FDB714] transition-colors">Asbestos Cancer</Link>
                      <Link href="#" className="text-[13px] sm:text-[14px] text-white hover:text-[#FDB714] transition-colors">Glyphosate Cases</Link>
                      <Link href="#" className="text-[13px] sm:text-[14px] text-white hover:text-[#FDB714] transition-colors">Baby Powder Claim</Link>
                      <Link href="#" className="text-[13px] sm:text-[14px] text-white hover:text-[#FDB714] transition-colors">Birth Control Harm</Link>
                    </div>
                  </div>
                </div>

                {/* Column 2 on Mobile */}
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-5 sm:gap-6">
                  {/* Litigation */}
                  <div className="lg:mb-0">
                    <h3 className="text-[#FDB714] font-bold tracking-[0.15em] text-[11px] sm:text-[12px] mb-2.5 sm:mb-3 uppercase">LITIGATION</h3>
                    <div className="flex flex-col gap-y-2 lg:flex-row lg:flex-wrap lg:gap-x-12 lg:gap-y-1">
                      <Link href="#" className="text-[13px] sm:text-[14px] text-white hover:text-[#FDB714] transition-colors">Taxi Assault Cases</Link>
                      <Link href="#" className="text-[13px] sm:text-[14px] text-white hover:text-[#FDB714] transition-colors">Pelvic Mesh Complications</Link>
                      <Link href="#" className="text-[13px] sm:text-[14px] text-white hover:text-[#FDB714] transition-colors">Digital Overuse Harm</Link>
                      <Link href="#" className="text-[13px] sm:text-[14px] text-white hover:text-[#FDB714] transition-colors">Gaming Disorder Help</Link>
                    </div>
                  </div>

                  {/* Wound and Accident */}
                  <div className="lg:mb-0">
                    <h3 className="text-[#FDB714] font-bold tracking-[0.15em] text-[11px] sm:text-[12px] mb-2.5 sm:mb-3 uppercase">WOUND AND ACCIDENT</h3>
                    <div className="flex flex-col gap-y-2 lg:flex-row lg:flex-wrap lg:gap-x-12 lg:gap-y-1">
                      <Link href="#" className="text-[13px] sm:text-[14px] text-white hover:text-[#FDB714] transition-colors">Abuse and Assault</Link>
                      <Link href="#" className="text-[13px] sm:text-[14px] text-white hover:text-[#FDB714] transition-colors">Vehicle Collisions</Link>
                      <Link href="#" className="text-[13px] sm:text-[14px] text-white hover:text-[#FDB714] transition-colors">Premises Liability</Link>
                      <Link href="#" className="text-[13px] sm:text-[14px] text-white hover:text-[#FDB714] transition-colors">Trucking Accidents</Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile: SOCIAL heading */}
              <div className="lg:hidden mb-6 flex flex-col items-start ">
                <h3 className="text-[#FDB714] font-bold tracking-[0.15em] text-[11px] mb-3 uppercase text-center">SOCIAL</h3>
                <div className="flex lg:hidden justify-center">
                <div className="flex flex-col gap-2.5 mb-8">
                  <div className="flex gap-2.5">
                    <Link href="#" className="w-11 h-11 rounded-lg border-2 border-[#FDB714] bg-[#0052A3] flex items-center justify-center hover:bg-white hover:text-[#0052A3] transition-all">
                      <Linkedin className="w-[18px] h-[18px]" strokeWidth={0} fill="#FDB714" />
                    </Link>
                    <Link href="#" className="w-11 h-11 rounded-lg border-2 border-[#FDB714] bg-[#0052A3] flex items-center justify-center hover:bg-white hover:text-[#0052A3] transition-all">
                      <TikTokIcon color="#FDB714" />
                    </Link>
                    <Link href="#" className="w-11 h-11 rounded-lg border-2 border-[#FDB714] bg-[#0052A3] flex items-center justify-center hover:bg-white hover:text-[#0052A3] transition-all">
                      <Youtube className="w-[18px] h-[18px]" strokeWidth={0} fill="#FDB714" />
                    </Link>
                    <Link href="#" className="w-11 h-11 rounded-lg border-2 border-[#FDB714] bg-[#FDB714] flex items-center justify-center hover:bg-[#e5a612] transition-all">
                      <ButterflyIcon color="#0052A3" />
                    </Link>
                  </div>
                  <div className="flex gap-2.5">
                    <Link href="#" className="w-11 h-11 rounded-lg border-2 border-[#FDB714] bg-[#0052A3] flex items-center justify-center hover:bg-white hover:text-[#0052A3] transition-all">
                      <XIcon color="#FDB714" />
                    </Link>
                    <Link href="#" className="w-11 h-11 rounded-lg border-2 border-[#FDB714] bg-[#0052A3] flex items-center justify-center hover:bg-white hover:text-[#0052A3] transition-all">
                      <Facebook className="w-[18px] h-[18px]" strokeWidth={0} fill="#FDB714" />
                    </Link>
                    <Link href="#" className="w-11 h-11 rounded-lg border-2 border-[#FDB714] bg-[#0052A3] flex items-center justify-center hover:bg-white hover:text-[#0052A3] transition-all">
                      <Instagram className="w-[18px] h-[18px]" strokeWidth={0} fill="#FDB714" />
                    </Link>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
               <div className="border-t border-white/20 pt-4 sm:pt-5 lg:pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left"/>
          {/* Bottom Copyright Section */}
            <div className="flex  gap-6 sm:gap-8 lg:gap-12">
              <Link href="#" className="text-[11px] sm:text-[12px] lg:text-[13px] hover:text-[#FDB714] transition-colors">Privacy Policy</Link>
              <Link href="#" className="text-[11px] sm:text-[12px] lg:text-[13px] hover:text-[#FDB714] transition-colors">Disclaimer</Link>
              <Link href="#" className="text-[11px] sm:text-[12px] lg:text-[13px] hover:text-[#FDB714] transition-colors">Sitemap</Link>
            </div>
          <div className="border-t border-white/20 pt-4 sm:pt-5 lg:pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
            <p className="text-[11px] sm:text-[12px] lg:text-[13px]">
              <span className="text-white">© 2025 Connect2Attorney.</span>
              <span className="text-white/60 ml-1">All Rights Reserved</span>
            </p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

const TikTokIcon = ({ color = "currentColor" }) => (
  <svg className="w-[18px] h-[18px] lg:w-5 lg:h-5" viewBox="0 0 24 24" fill={color}>
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
  </svg>
)

const XIcon = ({ color = "currentColor" }) => (
  <svg className="w-[18px] h-[18px] lg:w-5 lg:h-5" viewBox="0 0 24 24" fill={color}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const ButterflyIcon = ({ color = "currentColor" }) => (
  <svg className="w-[18px] h-[18px] lg:w-5 lg:h-5" viewBox="0 0 24 24" fill={color}>
    <path d="M12 2C8.5 2 5 5.5 5 9c0 2.5 1.5 4.5 3 6-1.5 1.5-3 3.5-3 6 0 .5.5 1 1 1s1-.5 1-1c0-2 1.5-4 3-5v4c0 .5.5 1 1 1s1-.5 1-1v-4c1.5 1 3 3 3 5 0 .5.5 1 1 1s1-.5 1-1c0-2.5-1.5-4.5-3-6 1.5-1.5 3-3.5 3-6 0-3.5-3.5-7-7-7zm-4 7c0-2.5 2-5 4-5s4 2.5 4 5c0 1.5-1 3-2 4h-4c-1-1-2-2.5-2-4z" />
  </svg>
)

export default Footer