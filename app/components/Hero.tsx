'use client';

import { CalendarIcon, MapPinIcon, ClockIcon, DocumentTextIcon, BellIcon, UsersIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const router = useRouter();

  const handleSubmitPaper = () => {
    console.log('Navigate to submit paper page');
  };

  const handleRegister = () => {
    console.log('Navigate to registration page');
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 pt-20 pb-20 relative overflow-hidden flex items-center">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-slate-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100/20 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-sm">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse" aria-hidden="true"></span>
            Inaugural Conference 2026
          </div>
          
          {/* Main Content */}
          <article className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/60 p-8 md:p-12 mx-auto max-w-6xl">
            <header className="mb-12">
              <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 leading-tight">
                International Conference on <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
                  Interdisciplinary AI
                </span>
              </h1>
              <p className="text-3xl text-slate-600 mb-4 font-medium">ICIAI-2026</p>
              <p className="text-lg text-slate-500 max-w-3xl mx-auto">
                Bringing together researchers, academicians, and industry professionals to explore the transformative potential of AI across all engineering disciplines
              </p>
            </header>
            
            {/* Basic Info Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {[
                { icon: CalendarIcon, title: 'Conference Dates', subtitle: 'July 30-31, 2026', color: 'blue' },
                { icon: MapPinIcon, title: 'Venue', subtitle: 'PES University, Bengaluru', color: 'blue' }
              ].map((item, index) => (
                <div key={index} className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                  <item.icon className="w-10 h-10 mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                  <h3 className="font-semibold text-slate-800 mb-2 text-lg">{item.title}</h3>
                  <p className="text-slate-600">{item.subtitle}</p>
                </div>
              ))}
            </div>

            {/* Important Dates Section */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-slate-800 mb-6 flex items-center justify-center">
                <ClockIcon className="w-6 h-6 mr-2 text-blue-600" />
                Important Dates
              </h3>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { icon: DocumentTextIcon, title: 'Submission Opens', date: 'January 1, 2026', status: 'upcoming' },
                  { icon: DocumentTextIcon, title: 'Submission Deadline', date: 'April 30, 2026', status: 'deadline' },
                  { icon: BellIcon, title: 'Acceptance Notification', date: 'May 31, 2026', status: 'notification' },
                  { icon: DocumentTextIcon, title: 'Final Paper Due', date: 'June 20, 2026', status: 'final' }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className={`bg-gradient-to-br p-4 rounded-xl border hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group text-center ${
                      item.status === 'deadline' 
                        ? 'from-red-50 to-red-100 border-red-200' 
                        : item.status === 'notification'
                        ? 'from-green-50 to-green-100 border-green-200'
                        : item.status === 'registration'
                        ? 'from-purple-50 to-purple-100 border-purple-200'
                        : 'from-blue-50 to-blue-100 border-blue-200'
                    }`}
                  >
                    <item.icon className={`w-6 h-6 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300 ${
                      item.status === 'deadline' 
                        ? 'text-red-600' 
                        : item.status === 'notification'
                        ? 'text-green-600'
                        : item.status === 'registration'
                        ? 'text-purple-600'
                        : 'text-blue-600'
                    }`} aria-hidden="true" />
                    <h4 className="font-semibold text-slate-800 text-sm mb-1">{item.title}</h4>
                    <p className={`text-xs font-medium ${
                      item.status === 'deadline' 
                        ? 'text-red-700' 
                        : item.status === 'notification'
                        ? 'text-green-700'
                        : item.status === 'registration'
                        ? 'text-purple-700'
                        : 'text-blue-700'
                    }`}>
                      {item.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}