'use client';

import { EnvelopeIcon, MapPinIcon, UsersIcon } from '@heroicons/react/24/outline';
import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Here you would typically send the data to your API
      console.log('Form submitted:', formData);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center mb-16">
          <div className="inline-flex items-center bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </div>
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Contact Information</h2>
          <p className="text-xl text-slate-600">We&apos;re here to help with any questions</p>
        </header>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl border border-slate-200">
            <h3 className="text-2xl font-semibold text-slate-800 mb-8 flex items-center">
              <span className="w-2 h-8 bg-blue-600 rounded-full mr-3" aria-hidden="true"></span>
              Get in Touch
            </h3>
            <div className="space-y-6">
              {[
                { icon: EnvelopeIcon, title: 'Email', content: 'contact@iciai2026.org', href: 'mailto:contact@iciai2026.org' },
                { icon: MapPinIcon, title: 'Venue', content: 'PES University\nBengaluru, India', href: 'https://maps.google.com/?q=PES+University+Bengaluru' },
                { icon: UsersIcon, title: 'Sponsored by', content: 'IEEE Bangalore Section\nIEEE Head Office (tentative)', href: 'https://ieee.org' }
              ].map((item, index) => (
                <div key={index} className="flex items-start group">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h4 className="font-medium text-slate-800 mb-1">{item.title}</h4>
                    {item.href ? (
                      <a 
                        href={item.href}
                        className="text-slate-600 whitespace-pre-line hover:text-blue-600 transition-colors duration-300"
                        target={item.href.startsWith('http') ? '_blank' : undefined}
                        rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-slate-600 whitespace-pre-line">{item.content}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-slate-800 mb-8">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 bg-slate-50 focus:bg-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">Your Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 bg-slate-50 focus:bg-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none transition-all duration-300 bg-slate-50 focus:bg-white"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 rounded-xl font-medium group focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-slate-400 cursor-not-allowed' 
                    : submitStatus === 'success'
                    ? 'bg-green-600 hover:bg-green-700'
                    : submitStatus === 'error'
                    ? 'bg-red-600 hover:bg-red-700'
                    : 'bg-gradient-to-r from-blue-600 to-blue-700 hover:shadow-lg hover:shadow-blue-500/25'
                } text-white`}
              >
                <span className="group-hover:scale-105 inline-block transition-transform duration-300">
                  {isSubmitting 
                    ? 'Sending...' 
                    : submitStatus === 'success' 
                    ? 'Message Sent!' 
                    : submitStatus === 'error'
                    ? 'Error - Try Again'
                    : 'Send Message'
                  }
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}