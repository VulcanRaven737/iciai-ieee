'use client';

export default function Timeline() {
  return (
    <section id="timeline" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-sm">
            Schedule
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Important Dates</h2>
          <p className="text-xl text-slate-600">Mark your calendar for these key milestones</p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600"></div>
          
          <div className="space-y-8">
            {[
              { date: 'January 1, 2026', title: 'Submission Opens', description: 'Paper submission portal goes live', icon: '🚀', status: 'upcoming' },
              { date: 'April 30, 2026', title: 'Submission Deadline', description: 'Final date for paper submissions', icon: '⏰', status: 'upcoming' },
              { date: 'May 31, 2026', title: 'Acceptance Notification', description: 'Authors will be notified of acceptance', icon: '📧', status: 'upcoming' },
              { date: 'June 20, 2026', title: 'Final Paper Submission', description: 'Camera-ready papers due', icon: '📄', status: 'upcoming' },
              { date: 'July 1, 2026', title: 'Early Registration Deadline', description: 'Last date for early bird registration', icon: '🎫', status: 'upcoming' },
              { date: 'July 30-31, 2026', title: 'Conference Days', description: 'Two days of presentations, workshops, and networking', icon: '🎉', status: 'highlight' }
            ].map((item, index) => (
              <div key={index} className="relative flex items-center">
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-white ${
                  item.status === 'highlight' ? 'bg-blue-600' : 'bg-blue-400'
                } shadow-lg`}></div>
                
                <div className="ml-16 flex-1">
                  <div className={`bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-white/50 hover:shadow-lg transition-all duration-300 ${
                    item.status === 'highlight' ? 'ring-2 ring-blue-400 ring-opacity-50' : ''
                  }`}>
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <span className="text-2xl mr-3">{item.icon}</span>
                          <h4 className="font-semibold text-slate-800 text-lg">{item.title}</h4>
                        </div>
                        <p className="text-slate-600 ml-11">{item.description}</p>
                      </div>
                      <div className="mt-3 md:mt-0 md:ml-4">
                        <span className={`inline-block px-4 py-2 text-sm font-medium rounded-xl ${
                          item.status === 'highlight' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-blue-100 text-blue-800'
                        }`}>
                          {item.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}