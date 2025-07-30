'use client';

import Image from 'next/image';
import pesu_logo from '../public/pes-logo-hor.webp';
import ieee_blr from '../public/ieee-logo-hor.webp';
import ieee_pesu from '../public/ieeelogo.png'

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-metrophobic">
      
      {/* Navigation */}
      <nav className="font-metrophobic font-semibold fixed top-0 w-full bg-white/90 backdrop-blur-lg border-b border-gray-200 z-50">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Image
              src={ieee_blr}
              alt="IEEE PESU Logo"
              height={1000}
              className='h-15 w-auto'
            />
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
            <Image
              src={pesu_logo}
              alt="PESU Logo"
              height={1000}
              className='h-15 w-auto'
            />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id='home' className="font-metrophobic pt-48 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen">
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
          <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[60vh]">
            
            {/* Left Side - Hero Content */}
            <div className="lg:col-span-8 text-left p-8 mt-4">
              {/* Rounded effect for Welcome text */}
              <div className="rounded-2xl bg-gray-50/95 backdrop-blur-sm p-8 mb-8">
                <h1 className="font-metrophobic text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-2xl" style={{ color: '#00377b' }}>
                  WELCOME TO ICIAI-2026
                </h1>
                <h2 className="font-metrophobic font-semibold text-xl sm:text-2xl lg:text-3xl font-medium mb-0 drop-shadow-xl" style={{ color: '#ff6c00' }}>
                  International Conference on Interdisciplinary AI
                </h2>
              </div>

              {/* Rounded effect for Organized by and Conference Dates */}
              <div className="rounded-2xl bg-gray-50/95 backdrop-blur-sm p-8 mb-12 max-w-3xl">
                <div className="grid md:grid-cols-2 gap-10 text-left">
                  <div>
                    <h3 className="font-semibold mb-3 text-lg" style={{ color: '#00377b' }}>Organized by</h3>
                    <p className="font-semibold text-gray-700 text-lg" style={{ color: '#ff6c00' }}>PES University RR Campus, Bengaluru</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-lg" style={{ color: '#00377b' }}>Conference Dates</h3>
                    <p className="font-semibold text-gray-700 text-lg" style={{ color: '#ff6c00' }}>July 30 & 31, 2026</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Important Dates */}
            <div className="lg:col-span-4">
              <div className="bg-gray-50/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                <div className="space-y-2">
                  {[
                    { event: 'Paper Submission Deadline', date: 'January 15, 2026' },
                    { event: 'Notification of Acceptance', date: 'February 10, 2026' },
                    { event: 'Camera-Ready Submission', date: 'February 25, 2026' },
                    { event: 'Conference Dates', date: 'July 30 & 31, 2026' },
                  ].map((item, index) => (
                    <div key={index} className="font-metrophobic bg-white/90 p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow backdrop-blur-sm">
                      <div className="text-center">
                        <span className="block font-semibold text-sm mb-1" style={{ color: '#00377b' }}>{item.event}</span>
                        <span className="font-semibold text-sm" style={{ color: '#ff6c00' }}>{item.date}</span>
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
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-metrophobic text-4xl lg:text-5xl font-bold mb-12" style={{ color: '#00377b' }}>
            About the Conference
          </h2>
          <div className="font-metrophobic text-xl lg:text-2xl text-gray-700 leading-relaxed space-y-6 text-justify">
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
      <section id="scope" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-metrophobic text-4xl lg:text-5xl font-bold mb-12" style={{ color: '#00377b' }}>
            Scope
          </h2>
          <div className="font-metrophobic text-xl lg:text-2xl text-gray-700 leading-relaxed space-y-6 text-justify">
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
      <section id="topics" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-metrophobic text-4xl lg:text-5xl font-bold text-center mb-16" style={{ color: '#00377b' }}>
            Conference Topics
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="topic-card bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <h3 className="font-semibold text-lg font-metrophobic" style={{ color: '#00377b' }}>
                  {topic}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 text-white font-metrophobic" style={{ backgroundColor: '#00377b' }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">ICIAI-2026</h3>
              <p className="text-blue-200">
                International Conference on Interdisciplinary AI
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
              <div className="space-y-2">
                <a href="#" className="block text-blue-200 hover:opacity-80 transition-opacity">About</a>
                <a href="#" className="block text-blue-200 hover:opacity-80 transition-opacity">Topics</a>
                <a href="#" className="block text-blue-200 hover:opacity-80 transition-opacity">Important Dates</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-lg">Organized by</h4>
              <p className="text-blue-200">PES University</p>
              <p className="text-blue-200">Bengaluru, India</p>
              {/* Footer Images */}
              <div className="flex items-center gap-4 mt-6">
                <Image
                  src={pesu_logo}
                  alt="Footer Image 1"
                  width={130}
                  height={130}
                  className="rounded-lg bg-white p-1"
                />
                <Image
                  src={ieee_blr}
                  alt="Footer Image 2"
                  width={160}
                  height={200}
                  className="rounded-lg bg-white p-1"
                />
              </div>
            </div>
          </div>
          <div className="border-t border-blue-800 pt-8 text-center text-blue-200">
            <p>&copy; 2026 ICIAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}