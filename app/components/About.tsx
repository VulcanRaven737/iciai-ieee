'use client';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            About the Conference
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Advancing AI Across Disciplines</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Bringing together the brightest minds to explore the transformative potential of AI technologies
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="prose prose-slate max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed">
                The International Conference on Interdisciplinary AI (ICIAI-2026) is a premier platform designed to showcase, 
                discuss, and promote interdisciplinary applications of AI and ML across all fields of engineering, with a special 
                emphasis on emerging trends and innovations.
              </p>
              <p className="text-slate-700">
                This inaugural conference brings together researchers, academicians, industry professionals, and students from 
                diverse engineering backgrounds to explore the transformative potential of AI technologies.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-800 mb-6 flex items-center">
              <span className="w-2 h-8 bg-blue-600 rounded-full mr-3"></span>
              Conference Highlights
            </h3>
            <ul className="space-y-4 text-slate-700">
              {[
                'Inaugural edition of ICIAI',
                'IEEE Xplore Digital Library publication',
                'Double-blind peer review process',
                '~30% acceptance rate target',
                '2-day comprehensive program'
              ].map((item, index) => (
                <li key={index} className="flex items-start group">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium mr-3 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    {index + 1}
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { number: '30%', label: 'Target Acceptance Rate', icon: '📊' },
            { number: '2', label: 'Conference Days', icon: '📅' },
            { number: '2026', label: 'Inaugural Edition', icon: '🚀' }
          ].map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border border-blue-200 text-center group hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-3">{stat.icon}</div>
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
              <div className="text-slate-700 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}