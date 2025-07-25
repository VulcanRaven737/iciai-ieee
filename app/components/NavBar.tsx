'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function NavBar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-xl border-b border-slate-200' 
        : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
              {/* You can replace this with an actual image */}
              {/* <Image 
                src="/logo.png" 
                alt="ICIAI 2026 Logo" 
                width={48} 
                height={48} 
                className="rounded-xl"
              /> */}
              <span className="text-white font-bold text-lg">AI</span>
            </div>
            <div className="hidden sm:block">
              <h1 className={`text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-slate-800' : 'text-slate-800'
              }`}>
                ICIAI-2026
              </h1>
              <p className={`text-sm transition-colors duration-300 ${
                isScrolled ? 'text-slate-600' : 'text-slate-600'
              }`}>
                International Conference on Interdisciplinary AI
              </p>
            </div>
          </Link>

          {/* Centered Navigation Items */}
          <div className={`hidden lg:flex items-center justify-center flex-1 mx-8`}>
            <div className={`flex items-center space-x-1 px-6 py-2 rounded-2xl transition-all duration-300 ${
              isScrolled 
                ? 'bg-slate-100/80 backdrop-blur-sm border border-slate-200/50' 
                : 'bg-slate-600/90 backdrop-blur-sm border border-slate-500/50'
            }`}>
              {['Home', 'About', 'Committee', 'Topics', 'Timeline', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative group ${
                    isScrolled 
                      ? 'text-slate-700 hover:text-blue-600 hover:bg-white/80' 
                      : 'text-white hover:text-blue-300 hover:bg-white/10'
                  }`}
                >
                  {item}
                  <span className={`absolute inset-x-1 bottom-1 h-0.5 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                    isScrolled ? 'bg-blue-600' : 'bg-blue-400'
                  }`}></span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <button className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'text-blue-600 hover:bg-blue-50 border border-blue-200' 
                : 'text-slate-700 hover:bg-white/20 border border-white/30'
            }`}>
              Submit Paper
            </button>
            <button className={`px-4 py-2 text-sm font-medium rounded-xl transition-all duration-300 ${
              isScrolled 
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/25' 
                : 'bg-white/90 text-slate-800 hover:bg-white shadow-lg'
            }`}>
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 rounded-xl transition-colors duration-300 hover:bg-slate-100">
            <svg className={`w-6 h-6 transition-colors duration-300 ${
              isScrolled ? 'text-slate-700' : 'text-slate-700'
            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden mt-4 pb-4 border-t border-slate-200/50">
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {['Home', 'About', 'Committee', 'Topics', 'Timeline', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isScrolled 
                    ? 'text-slate-700 hover:text-blue-600 hover:bg-blue-50' 
                    : 'text-slate-700 hover:text-blue-600 hover:bg-white/20'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex justify-center space-x-3 mt-4">
            <button className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'text-blue-600 hover:bg-blue-50 border border-blue-200' 
                : 'text-slate-700 hover:bg-white/20 border border-white/30'
            }`}>
              Submit Paper
            </button>
            <button className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'bg-blue-600 text-white hover:bg-blue-700' 
                : 'bg-white/90 text-slate-800 hover:bg-white'
            }`}>
              Register
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}