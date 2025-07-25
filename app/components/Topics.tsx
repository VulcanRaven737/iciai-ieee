'use client';

export default function Topics() {
  return (
    <section id="topics" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Research Areas
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Topics of Interest</h2>
          <p className="text-xl text-slate-600">Explore cutting-edge research across multiple domains</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'AI/ML in Engineering',
              topics: ['Electrical & Electronics Engineering', 'Electronics & Communication', 'Computer Science & Engineering', 'CSE (AI & ML) Engineering'],
              icon: '⚡',
              gradient: 'from-blue-50 to-blue-100'
            },
            {
              title: 'Sustainable AI',
              topics: ['AI for Green Engineering', 'Healthcare Applications', 'Energy Systems', 'Transportation'],
              icon: '🌱',
              gradient: 'from-green-50 to-blue-50'
            },
            {
              title: 'Advanced AI',
              topics: ['Large Language Models', 'Social Computing', 'Multimodal Data ML', 'Robotics & Computer Vision'],
              icon: '🤖',
              gradient: 'from-purple-50 to-blue-50'
            },
            {
              title: 'Ethical AI',
              topics: ['Explainable AI', 'AI Ethics', 'Responsible AI', 'Bias Mitigation'],
              icon: '⚖️',
              gradient: 'from-orange-50 to-blue-50'
            }
          ].map((category, index) => (
            <div key={index} className={`bg-gradient-to-br ${category.gradient} border border-slate-200 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group`}>
              <div className="text-center mb-6">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{category.icon}</div>
                <h3 className="font-semibold text-slate-800 text-lg">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {category.topics.map((topic, topicIndex) => (
                  <li key={topicIndex} className="text-slate-700 text-sm flex items-start group-hover:text-slate-800 transition-colors duration-300">
                    <span className="flex-shrink-0 w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></span>
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}