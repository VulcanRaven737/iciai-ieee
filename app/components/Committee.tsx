'use client';

import { useState } from 'react';

export default function Committee() {
  const [activeTab, setActiveTab] = useState('chairs');

  return (
    <section id="committee" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-4 shadow-sm">
            Our Team
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Organizing Committee</h2>
          <p className="text-xl text-slate-600">Distinguished experts leading the way</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { id: 'chairs', label: 'General Chairs', icon: '👥' },
            { id: 'technical', label: 'Technical Program', icon: '⚙️' },
            { id: 'organizing', label: 'Organizing Committee', icon: '📋' },
            { id: 'other', label: 'Other Chairs', icon: '🎯' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-medium rounded-xl transition-all duration-300 flex items-center space-x-2 ${
                activeTab === tab.id
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-800 shadow-sm'
              }`}
            >
              <span>{tab.icon}</span>
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-8">
          {activeTab === 'chairs' && (
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: 'Dr. Manikandan', role: 'Dean Research, PES University' },
                { name: 'Dr. Sudarshan', role: 'Professor, CSE Dept. PES University' },
                { name: 'Dr. Jayashree', role: 'Chairperson, Dept. of CSE (AI & ML) PES University' },
                { name: 'Dr. Rex Joseph', role: 'Chairperson, EEE Dept. PES University' }
              ].map((person, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border-l-4 border-blue-600 hover:shadow-md transition-all duration-300 group">
                  <h4 className="font-semibold text-slate-800 text-lg group-hover:text-blue-700 transition-colors duration-300">{person.name}</h4>
                  <p className="text-slate-600 text-sm mt-1">{person.role}</p>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'technical' && (
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: 'Dilip Kumar Dalie', role: 'IEEE CS Bangalore Secretary, TPC Co-Chair' },
                { name: 'Dr. MJ Venkatarangan', role: 'PES University' },
                { name: 'Dr. Bhaskar Jyoti Das', role: 'PES University' },
                { name: 'Prof. Agha Alfi Mirza', role: 'PES University' },
                { name: 'Dr. Ravi Gorripatty', role: 'PES University' }
              ].map((person, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border-l-4 border-blue-600 hover:shadow-md transition-all duration-300 group">
                  <h4 className="font-semibold text-slate-800 text-lg group-hover:text-blue-700 transition-colors duration-300">{person.name}</h4>
                  <p className="text-slate-600 text-sm mt-1">{person.role}</p>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'organizing' && (
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: 'Dr. Venugopal N', role: 'Organizing Chair, Professor, EEE Dept. PES University' },
                { name: 'Prof. Susmita Deb', role: 'Organizing Secretary, PES University' },
                { name: 'Prof. Indu Radha Krishnan', role: 'Organizing Secretary, PES University' }
              ].map((person, index) => (
                <div key={index} className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl border-l-4 border-blue-600 hover:shadow-md transition-all duration-300 group">
                  <h4 className="font-semibold text-slate-800 text-lg group-hover:text-blue-700 transition-colors duration-300">{person.name}</h4>
                  <p className="text-slate-600 text-sm mt-1">{person.role}</p>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'other' && (
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Finance Chairs', members: ['Dr. Chetana Srinivas', 'Dr. B. Gayathri Devi'], icon: '💰' },
                { title: 'Publication Chairs', members: ['Dr. Sandeep Kumar (IEEE CS Bangalore Joint-Secretary)', 'Dr. Vaishnavi Gujjula', 'Dr. C Prasanna Kumar', 'Dr. Preethi S J'], icon: '📚' },
                { title: 'Publicity Chairs', members: ['Dr. Suresh Babu', 'Prof. K.R. Pushpa', 'Prof. Shwetha'], icon: '📢' },
                { title: 'Web and Registration Chairs', members: ['Dr. Manjula', 'Prof. Sangeeta Modhi', 'Prof. Mamatha'], icon: '💻' }
              ].map((section, index) => (
                <div key={index} className="bg-slate-50 p-6 rounded-xl">
                  <h5 className="font-semibold text-slate-800 mb-4 flex items-center text-lg">
                    <span className="mr-2">{section.icon}</span>
                    {section.title}
                  </h5>
                  <div className="space-y-2">
                    {section.members.map((member, memberIndex) => (
                      <div key={memberIndex} className="text-slate-700 text-sm py-1 px-2 bg-white rounded">
                        {member}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}