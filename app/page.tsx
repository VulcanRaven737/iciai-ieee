'use client';

import { useState } from 'react';
import Image from 'next/image';
import pesu_logo from '../public/pes-logo-hor.webp';
import ieee_blr from '../public/ieee-logo-hor.webp';
import ieee_pesu from '../public/ieeelogo.png'
import ieee_cs_blr from '../public/ieee-cs-blr.png';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-metrophobic">
      
      {/* Navigation */}
      <nav className="font-metrophobic font-semibold fixed top-0 w-full bg-white/90 backdrop-blur-lg border-b border-gray-200 z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Left side - PESU Logo (desktop only) */}
            <div className="hidden md:block">
              <Image
                src={pesu_logo}
                alt="PESU Logo"
                height={1000}
                className='h-15 w-auto'
              />
            </div>
            
            {/* Center - Desktop Menu */}
            <div className="hidden md:flex space-x-9 items-center">
              <a href="#home" className="hover:scale-105 transition-transform" style={{ color: '#00377b' }}>Home</a>
              <a href="#" className="hover:scale-105 transition-transform" style={{ color: '#00377b' }}>About PES</a>
              <a href="#" className="hover:scale-105 transition-transform" style={{ color: '#00377b' }}>Committee</a>
              <a href="#" className="hover:scale-105 transition-transform" style={{ color: '#00377b' }}>Call for Papers</a>
              <a href="#" className="hover:scale-105 transition-transform" style={{ color: '#00377b' }}>Submission</a>
              <a href="#" className="hover:scale-105 transition-transform" style={{ color: '#00377b' }}>Key Speakers</a>
              <a href="#" className="hover:scale-105 transition-transform" style={{ color: '#00377b' }}>Schedule</a>
              <a href="#" className="hover:scale-105 transition-transform" style={{ color: '#00377b' }}>Contact Us</a>
              <button className="px-6 py-2 rounded-lg text-white font-medium hover:opacity-90 transition-opacity" style={{ backgroundColor: '#ff6c00' }}>
                Registration
              </button>
            </div>

            {/* Right side - empty div for spacing on desktop */}
            <div className="hidden md:block w-32"></div>

            {/* Mobile hamburger menu and PESU logo */}
            <div className="flex items-center justify-between w-full md:hidden">
              <Image
                src={pesu_logo}
                alt="PESU Logo"
                height={1000}
                className='h-15 w-auto'
              />
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-3 rounded-xl bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 shadow-md"
                style={{ color: '#ff6c00' }}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="mx-2 mt-2 mb-3 rounded-2xl bg-white/95 backdrop-blur-lg border border-gray-200 shadow-lg overflow-hidden">
                <div className="px-4 py-3 space-y-1">
                  <a href="#home" className="block px-4 py-3 text-base font-medium hover:bg-gray-50 rounded-xl transition-colors" style={{ color: '#00377b' }} onClick={() => setIsMenuOpen(false)}>Home</a>
                  <a href="#" className="block px-4 py-3 text-base font-medium hover:bg-gray-50 rounded-xl transition-colors" style={{ color: '#00377b' }} onClick={() => setIsMenuOpen(false)}>About PES</a>
                  <a href="#" className="block px-4 py-3 text-base font-medium hover:bg-gray-50 rounded-xl transition-colors" style={{ color: '#00377b' }} onClick={() => setIsMenuOpen(false)}>Committee</a>
                  <a href="#" className="block px-4 py-3 text-base font-medium hover:bg-gray-50 rounded-xl transition-colors" style={{ color: '#00377b' }} onClick={() => setIsMenuOpen(false)}>Call for Papers</a>
                  <a href="#" className="block px-4 py-3 text-base font-medium hover:bg-gray-50 rounded-xl transition-colors" style={{ color: '#00377b' }} onClick={() => setIsMenuOpen(false)}>Submission</a>
                  <a href="#" className="block px-4 py-3 text-base font-medium hover:bg-gray-50 rounded-xl transition-colors" style={{ color: '#00377b' }} onClick={() => setIsMenuOpen(false)}>Key Speakers</a>
                  <a href="#" className="block px-4 py-3 text-base font-medium hover:bg-gray-50 rounded-xl transition-colors" style={{ color: '#00377b' }} onClick={() => setIsMenuOpen(false)}>Schedule</a>
                  <a href="#" className="block px-4 py-3 text-base font-medium hover:bg-gray-50 rounded-xl transition-colors" style={{ color: '#00377b' }} onClick={() => setIsMenuOpen(false)}>Contact Us</a>
                  <button className="w-full text-left px-4 py-3 mt-3 rounded-xl text-white font-medium hover:opacity-90 transition-opacity" style={{ backgroundColor: '#ff6c00' }}>
                    Registration
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id='home' className="font-metrophobic pt-40 pb-12 px-2 sm:px-4 lg:px-8 relative overflow-hidden min-h-screen">
        {/* Background Video */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
          src="/videos/bg3.mp4"
        />
        
        {/* Light overlay for better text readability with blur */}
        <div className="absolute inset-0" style={{ zIndex: 1 }} />

        {/* Increase max width here */}
        <div className="max-w-screen-2xl mx-auto relative" style={{ zIndex: 2 }}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center min-h-[60vh]">
            
            {/* Left Side - Hero Content */}
            <div className="lg:col-span-8 text-left p-4 sm:p-8 mt-2 sm:mt-4">
              {/* Rounded effect for Welcome text */}
              <div className="rounded-2xl bg-white backdrop-blur-sm p-4 sm:p-8 mb-6 sm:mb-8">
                <h1 className="font-metrophobic text-5xl sm:text-6xl lg:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-2xl" style={{ color: '#00377b' }}>
                  WELCOME TO ICIAI-2026
                </h1>
                <h2 className="font-metrophobic font-semibold text-lg sm:text-xl lg:text-3xl font-medium mb-0 drop-shadow-xl" style={{ color: '#ff6c00' }}>
                  International Conference on Interdisciplinary AI
                </h2>
              </div>

              {/* Rounded effect for Organized by and Conference Dates */}
              <div className="rounded-2xl bg-white backdrop-blur-sm p-4 sm:p-8 mb-6 sm:mb-8 max-w-full sm:max-w-3xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 text-left">
                  <div>
                    <h3 className="font-semibold mb-2 sm:mb-3 text-base sm:text-lg" style={{ color: '#00377b' }}>Organized by</h3>
                    <p className="font-semibold text-gray-700 text-base sm:text-lg" style={{ color: '#ff6c00' }}>PES University RR Campus, Bengaluru</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 sm:mb-3 text-base sm:text-lg" style={{ color: '#00377b' }}>Conference Dates</h3>
                    <p className="font-semibold text-gray-700 text-base sm:text-lg" style={{ color: '#ff6c00' }}>July 30 & 31, 2026</p>
                  </div>
                </div>
              </div>

              {/* In Collaboration With Section */}
              <div className="rounded-2xl bg-white backdrop-blur-sm p-6 sm:p-8 mb-8 shadow-xl border border-gray-100 max-w-2xl">
                <h3 className="font-semibold text-lg sm:text-xl text-left mb-6" style={{ color: '#00377b' }}>
                  In Collaboration With
                </h3>
                <div className="flex flex-wrap justify-left items-center gap-6 sm:gap-8">
                  <div className="flex flex-col items-center">
                    <Image
                      src={ieee_blr}
                      alt="IEEE Bangalore Section"
                      width={120}
                      height={120}
                      className="rounded-lg bg-white p-3 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                    />
                    <span className="text-xs sm:text-sm text-gray-600 mt-2 text-center font-medium">IEEE Bangalore Section</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
                      src={ieee_pesu}
                      alt="IEEE PESU Student Branch"
                      width={110}
                      height={110}
                      className="rounded-lg bg-white p-3 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                    />
                    <span className="text-xs sm:text-sm text-gray-600 mt-2 text-center font-medium">IEEE CS PESU Student Branch</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <Image
                      src={ieee_cs_blr}
                      alt="IEEE Computer Society Bangalore"
                      width={95}
                      height={95}
                      className="rounded-lg bg-white p-3 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                    />
                    <span className="text-xs sm:text-sm text-gray-600 mt-2 text-center font-medium">IEEE CS Bangalore</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Important Dates */}
            <div className="lg:col-span-4 w-full">
              <div className="bg-gray-50/95 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-2xl max-w-2xl">
                <div className="space-y-5">
                  {[
                    { event: 'Commencement of Paper Submissions', date: 'January 1, 2026' },
                    { event: 'Deadline for Paper Submissions', date: 'April 30, 2026' },
                    { event: 'Notification of Acceptance', date: 'May 31, 2026' },
                    { event: 'Camera-Ready Submission', date: 'June 20, 2026' },
                  ].map((item, index) => (
                    <div key={index} className="font-metrophobic bg-white/90 p-3 sm:p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow backdrop-blur-sm">
                      <div className="text-center">
                        <span className="block font-semibold text-md sm:text-md mb-1" style={{ color: '#00377b' }}>{item.event}</span>
                        <span className="font-semibold text-md sm:text-md" style={{ color: '#ff6c00' }}>{item.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 px-2 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-metrophobic text-4xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12" style={{ color: '#00377b' }}>
            About the Conference
          </h2>
          <div className="font-metrophobic text-base sm:text-xl lg:text-2xl text-gray-700 leading-relaxed space-y-4 sm:space-y-6 text-justify">
            <p>
              <span className="font-bold">ICIAI-2026</span> is a premier international conference that brings together a diverse community of researchers, practitioners, academicians, and industry experts to delve into the transformative potential of interdisciplinary artificial intelligence.
            </p>
            <p>
              The event provides a vibrant forum for presenting cutting-edge research, exchanging novel ideas, and exploring innovative AI applications that bridge multiple engineering domains such as computer science, electronics, mechanical systems, civil infrastructure, biomedical engineering, and more.
            </p>
            <p>
              With a strong focus on real-world impact, ICIAI-2026 encourages cross-disciplinary collaboration and showcases how AI can solve complex engineering problems, optimize systems, and drive intelligent automation.
            </p>
            <p>
              From theoretical frameworks to practical implementations, the conference aims to advance the frontiers of AI by fostering dialogue between academia and industry, ultimately shaping the future of intelligent technologies in an interconnected world.
            </p>
          </div>
        </div>
      </section>

      {/* Scope Section */}
      <section id="scope" className="py-12 sm:py-20 px-2 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-metrophobic text-4xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12" style={{ color: '#00377b' }}>
            Scope
          </h2>
          <div className="font-metrophobic text-base sm:text-xl lg:text-2xl text-gray-700 leading-relaxed space-y-4 sm:space-y-6 text-justify">
            <p>
              The primary objective of ICIAI-2026 is to highlight pioneering research and innovative developments in the interdisciplinary field of artificial intelligence. The conference serves as a platform for the presentation of peer-reviewed original technical papers from academia, research organizations, and industry, fostering collaboration and knowledge exchange across diverse domains.
            </p>
            <p>
              ICIAI-2026 welcomes contributions that bridge AI with various engineering, scientific, and societal applications, including but not limited to computer science, electronics, mechanical systems, civil infrastructure, biomedical engineering, and more. The conference encourages submissions that demonstrate the integration of AI methodologies with real-world challenges, promote cross-disciplinary research, and advance the state-of-the-art in intelligent systems and automation.
            </p>
          </div>
        </div>
      </section>

      {/* Topics Section */}
      <section id="topics" className="py-12 sm:py-20 px-2 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-metrophobic text-4xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-16" style={{ color: '#00377b' }}>
            Conference Topics
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              'AI for Sustainable and Green Engineering',
              'Healthcare, Energy, and Transportation Applications',
              'Interdisciplinary Application and Large Language Model',
              'Social Computing',
              'Machine Learning with Text, Image, Graph, Audio and Multimodal Data',
              'Robotics & Computer Vision',
              'Ethical and Explainable AI'
            ].map((topic, index) => (
              <div 
                key={index} 
                className="topic-card bg-white p-4 sm:p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <h3 className="font-semibold text-base sm:text-lg font-metrophobic" style={{ color: '#00377b' }}>
                  {topic}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-2 sm:px-6 lg:px-8 text-white font-metrophobic" style={{ backgroundColor: '#00377b' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">ICIAI-2026</h3>
              <p className="text-blue-200 text-base sm:text-lg">
                International Conference on Interdisciplinary AI
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2 sm:mb-4 text-base sm:text-lg">Quick Links</h4>
              <div className="space-y-1 sm:space-y-2">
                <a href="#" className="block text-blue-200 hover:opacity-80 transition-opacity text-base sm:text-lg">About</a>
                <a href="#" className="block text-blue-200 hover:opacity-80 transition-opacity text-base sm:text-lg">Topics</a>
                <a href="#" className="block text-blue-200 hover:opacity-80 transition-opacity text-base sm:text-lg">Important Dates</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-2 sm:mb-4 text-base sm:text-lg">Organized by</h4>
              <p className="text-blue-200 text-base sm:text-lg">PES University</p>
              <p className="text-blue-200 text-base sm:text-lg">Bengaluru, India</p>
              {/* Footer Images */}
              <div className="flex justify-center md:justify-start items-center gap-2 sm:gap-4 mt-4 sm:mt-6">
                <Image
                  src={pesu_logo}
                  alt="Footer Image 1"
                  width={60}
                  height={60}
                  className="rounded-lg bg-white p-1"
                />
                <Image
                  src={ieee_blr}
                  alt="Footer Image 2"
                  width={80}
                  height={80}
                  className="rounded-lg bg-white p-1"
                />
                <Image
                  src={ieee_cs_blr}
                  alt="Footer Image 2"
                  width={60}
                  height={60}
                  className="rounded-lg bg-white p-1"
                />
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-6 sm:pt-8 text-center text-blue-200 text-sm sm:text-base">
            <p>&copy; 2026 ICIAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}