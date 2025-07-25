'use client';

import Link from 'next/link';

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-900/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-slate-700/30 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 relative">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-white font-bold">AI</span>
              </div>
              <div>
                <h4 className="text-xl font-semibold group-hover:text-blue-300 transition-colors duration-300">ICIAI-2026</h4>
              </div>
            </Link>
            <p className="text-slate-300 mb-2">International Conference on Interdisciplinary AI</p>
            <address className="text-slate-400 text-sm not-italic">PES University, Bengaluru</address>
          </div>
          <nav>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-2 h-6 bg-blue-500 rounded-full mr-3" aria-hidden="true"></span>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Committee', 'Topics'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => scrollToSection(link.toLowerCase())}
                    className="block text-slate-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform focus:outline-none focus:text-white"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
          <nav>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              <span className="w-2 h-6 bg-blue-500 rounded-full mr-3" aria-hidden="true"></span>
              Important
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/submit-paper" className="block text-slate-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform">
                  Submit Paper
                </Link>
              </li>
              <li>
                <Link href="/register" className="block text-slate-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform">
                  Register
                </Link>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('timeline')}
                  className="block text-slate-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform focus:outline-none focus:text-white"
                >
                  Timeline
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block text-slate-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform focus:outline-none focus:text-white"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400">
            &copy; {currentYear} ICIAI-2026. All rights reserved. | Powered by PES University
          </p>
        </div>
      </div>
    </footer>
  );
}