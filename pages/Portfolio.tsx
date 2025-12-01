import React from 'react';
import { PORTFOLIO_ITEMS, WHATSAPP_LINK } from '../constants';
import { ExternalLink, Tag } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Our Work</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See how we've helped other businesses transform their online presence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PORTFOLIO_ITEMS.map((item) => (
            <div key={item.id} className="group bg-slate-50 rounded-2xl overflow-hidden border border-slate-200 hover:shadow-xl transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={item.imageUrl} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-indigo-700 uppercase tracking-wide">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="bg-indigo-50 p-3 rounded-lg mb-4">
                  <p className="text-xs font-bold text-indigo-800 uppercase mb-1">Impact</p>
                  <p className="text-sm text-indigo-700 font-medium">{item.whyItHelps}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {item.features.map((feature, idx) => (
                    <span key={idx} className="flex items-center text-xs text-slate-500 bg-white border border-slate-200 px-2 py-1 rounded">
                      <Tag className="w-3 h-3 mr-1" /> {feature}
                    </span>
                  ))}
                </div>

                <a 
                  href={WHATSAPP_LINK} 
                  target="_blank"
                  className="w-full flex items-center justify-center gap-2 bg-white text-slate-800 border border-slate-300 hover:border-indigo-600 hover:text-indigo-600 font-bold py-3 rounded-lg transition-colors"
                >
                  I want something like this
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Ready to start your project?</h2>
          <a 
            href={WHATSAPP_LINK}
            className="inline-block bg-primary hover:bg-indigo-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-transform hover:-translate-y-1"
          >
            Get a Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;